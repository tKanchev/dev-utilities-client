import React, { Component } from 'react';
import { Link } from "react-router-dom";
import BuyMeACoffeeLink from '../buy-me-a-coffee/buy-me-a-coffee-link';
import PatreonLink from '../patreon/patreon-link';

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
                <Link className='navbar__item' to="/">Home</Link>
                <Link className='navbar__item' to="/about">About</Link>
                <PatreonLink />
                <BuyMeACoffeeLink />
            </div>
        );
    }
}

export default Navbar;