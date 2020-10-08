import React, { Component } from 'react';

interface INavbarProps {}
interface INavbarState {
    users: [];
    errorMessage: string;
    logged: boolean;
    redirect: boolean;
}

class Navbar extends Component<INavbarProps, INavbarState> {
    constructor(props: INavbarProps) {
        super(props);
        
        this.state = {
            users: [],
            errorMessage: '',
            logged: false,
            redirect: false
        }
    }

    render (): JSX.Element {
        return (
            <div className='navbar'>
                <div className='navbar__item'>Home</div>
                <div className='navbar__item'>About</div>
            </div>
        );
    }
}

export default Navbar;