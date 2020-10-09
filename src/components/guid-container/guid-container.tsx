import React, { Component } from 'react';
import GuidService from '../../services/guid.service';
import AppButton from '../app-button/app-button';

interface IGuidContainerProps {}
interface IGuidContainerState {
    guid: any;
    errorMessage: string;
    showCopied: boolean;
}

class GuidContainer extends Component<IGuidContainerProps, IGuidContainerState> {
    constructor(props: IGuidContainerProps) {
        super(props);
        
        this.state = {
            guid: '',
            errorMessage: '',
            showCopied: false
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
        this.setState({showCopied: true}, () => {
            var textField = document.createElement('textarea')
            textField.innerText = this.state.guid;
            document.body.appendChild(textField)
            textField.select()
            document.execCommand('copy')
            textField.remove()
        })
        
        setTimeout(() => {
            this.setState({showCopied: false});
        }, 2000);
        
    }

    render (): JSX.Element {
        return (
            <div className='guid-container'>
                <span>Grab your Guid</span>
                <div onClick={this.copyToClipboard} className='guid-container__guid'>{this.state.guid}</div>
                <div className='guid-container__button-container'>
                    <AppButton onClickFunc={this.generateGuid} text='Generate new'/>
                    { this.state.showCopied 
                        ? <span className='message message--copied'>copied</span>
                        : <span onClick={this.copyToClipboard} className='message message--copy'>copy to clipboard</span>
                    }
                </div>
            </div>
        );
    }
}

export default GuidContainer;