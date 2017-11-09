import React from 'react';

const LedComponent=(props)=>{
     console.log('led.component.props:',props.cleds);
    return(
        <div>
        <h1>Led Component</h1>
        <h3>Led details are:{props.cleds.leds}</h3>
        <p>Check console</p>
        </div>
    )
};

export default LedComponent;