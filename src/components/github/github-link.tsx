import React, { Component } from 'react';

class GitHubLink extends Component {
    render (): JSX.Element {
        return (
            <a className='github-link' href="https://github.com/tKanchev/Dev.Utilities" target="_blank" rel="noopener noreferrer">
                Source Code and API
            </a>
        );
    }
}

export default GitHubLink;