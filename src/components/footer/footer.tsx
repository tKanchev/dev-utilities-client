import React, { Component } from 'react';
import BuyMeACoffee from '../buy-me-a-coffee/buy-me-a-coffee';
import Patreon from '../patreon/patreon';

class Footer extends Component {
    render (): JSX.Element {
        return (
            <div className='footer'>
                <div className='footer__support-message'>If you find this tool useful, please support me!</div>
                <div className='footer__support-buttons'>
                    <Patreon/>
                    <BuyMeACoffee/>
                </div>
                
            </div>
        );
    }
}

export default Footer;