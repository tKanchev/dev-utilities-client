import React, { Component } from 'react';
import {APP_CONSTANTS} from '../../config/app-constants';

class BuyMeACoffeeLink extends Component {
    

    render (): JSX.Element {
        const { buyMeACoffeeUrl } = APP_CONSTANTS;

        return (
            <a className='buy-me-a-coffee-link' href={buyMeACoffeeUrl} target="_blank" rel="noopener noreferrer">
                Buy me a coffee!
            </a>
        );
    }
}

export default BuyMeACoffeeLink;