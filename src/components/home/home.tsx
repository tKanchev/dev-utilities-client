import React, { Component } from 'react';
import GuidContainer from '../guid-container/guid-container';

class Home extends Component {
    render (): JSX.Element {
        return (
            <div className='home'>
                <div className='welcome-message'>
                    Welcome
                    <br/>
                    to
                    <br/>
                    Guids Generator
                </div>
                <GuidContainer></GuidContainer>
            </div>
        );
    }
}

export default Home;