import React, { Component } from 'react';

interface IAppButtonProps {
    onClickFunc: Function;
    text: string;
}
interface IAppButtonState {}

class AppButton extends Component<IAppButtonProps, IAppButtonState> {
    render (): JSX.Element {
        return (
            <button onClick={() => this.props.onClickFunc()} className='button'>{this.props.text}</button>
        );
    }
}

export default AppButton;