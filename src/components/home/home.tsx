import React, { Component } from 'react';
import GuidContainer from '../guid-container/guid-container';
import Welcome from '../welcome/welcome';

class Home extends Component {
    componentDidMount(){
        document.title = "Free Online Guid Generator"
    }
    
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