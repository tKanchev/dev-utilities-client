import React, { Component } from 'react';
import {APP_CONSTANTS} from '../../config/app-constants';

class BuyMeACoffee extends Component {
    render (): JSX.Element {
        const { buyMeACoffeeUrl } = APP_CONSTANTS;

        return (
            <a href={buyMeACoffeeUrl} className='buy-me-a-coffee'>
                <img src="https://cdn.buymeacoffee.com/buttons/v2/default-white.png" alt="Buy Me A Coffee" className='buy-me-a-coffee__img' />
            </a>
        );
    }
}

export default BuyMeACoffee;