import React, { Component } from 'react';

class BuyMeACoffee extends Component {
    render (): JSX.Element {
        return (
            <a href="https://www.buymeacoffee.com/guidgen" className='buy-me-a-coffee'>
                <img src="https://cdn.buymeacoffee.com/buttons/v2/default-white.png" alt="Buy Me A Coffee" className='buy-me-a-coffee__img' />
            </a>
        );
    }
}

export default BuyMeACoffee;