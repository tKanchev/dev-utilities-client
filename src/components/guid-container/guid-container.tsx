import React, { Component } from 'react';
import GuidService from '../../services/guid.service';

interface IGuidContainerProps {}
interface IGuidContainerState {
    guid: any;
    errorMessage: string;
}

class GuidContainer extends Component<IGuidContainerProps, IGuidContainerState> {
    constructor(props: IGuidContainerProps) {
        super(props);
        
        this.state = {
            guid: '',
            errorMessage: ''
        }
    }

    componentDidMount() {
        this.generateGuid();
    }

    generateGuid = () => {
        this.setState({errorMessage: ''}, async () => {
            try {
                const guid = await GuidService.getSingle();
                this.setState({guid: guid});
            } catch (error) {
                console.error(error);
            }
        })
    }

    copyToClipboard = () => {
        var textField = document.createElement('textarea')
        textField.innerText = this.state.guid;
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }

    render (): JSX.Element {
        return (
            <div onClick={this.copyToClipboard} className='guid-container'>
                <span>Grab your Guid</span>
                <textarea className='guid-container__textarea' value={this.state.guid} readOnly></textarea>
                <button onClick={this.generateGuid} className='guid-container__button'>Generate new</button>
            </div>
        );
    }
}

export default GuidContainer;