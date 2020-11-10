import React, { Component } from 'react';
import GuidContainer from '../guid-container/guid-container';
import Welcome from '../welcome/welcome';

class Home extends Component {
    render (): JSX.Element {
        return (
            <div className='home'>
                <Welcome/>
                <GuidContainer/>
            </div>
        );
    }
}

export default Home;