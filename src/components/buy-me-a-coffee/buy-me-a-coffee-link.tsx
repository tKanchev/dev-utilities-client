import React, { Component } from 'react';

class BuyMeACoffeeLink extends Component {
    render (): JSX.Element {
        return (
            <a className='buy-me-a-coffee-link' href="https://www.buymeacoffee.com/guidgen" target="_blank" rel="noopener noreferrer">
                Buy me a coffee!
            </a>
        );
    }
}

export default BuyMeACoffeeLink;