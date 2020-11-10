import React, { Component } from 'react';

class About extends Component{
    render (): JSX.Element {
        return (
            <div className='about'>
                <div className='about__welcome'>
                    Welcome<br/>to<br/>Guids Generator
                </div>
                <div className='about__text'>
                    A Free online Guid Generator
                    <br/>
                    A GUID is an acronyom that stands for Globally Unique Identifier, they are also referred to as UUIDs or Universaly Unique Identifiers - there is no real difference between the two. Technically they are 128-bit unique reference numbers used in computing which are highly unlikely to repeat when generated despite there being no central GUID authority to ensure uniqueness.
                </div>
            </div>
        );
    }
}

export default About;