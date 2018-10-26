import React from 'react';

const MobileComponent=(props)=>{
    console.log('mobile.component.props:',props.cmobiles);
    return(
        <div>
        <h1>Mobile Component</h1>
        <h3>Mobile details are:{props.cmobiles.mobiles}</h3>
        <p>Check console</p>
        </div>
    )
};

export default MobileComponent;