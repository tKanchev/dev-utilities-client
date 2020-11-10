import React, { Component } from 'react';

class PatreonLink extends Component {
    render (): JSX.Element {
        return (
            <a className='patreon-link' href="https://www.patreon.com/bePatron?u=45287861" target="_blank" rel="noopener noreferrer">
                Become a Patron!
            </a>
        );
    }
}

export default PatreonLink;