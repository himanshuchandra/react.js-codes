import React from 'react';

//external css
import './firstC.css';

function FirstComponent(props) {
  let name = 'Himanshu';

  ///inline css
  let myNewStyle = {
    backgroundColor: 'red',
    color: 'orange'
  };

  const initCap=()=>{
    console.log('button working');
  }

  let jsx = <div>
    <h1 style={myNewStyle}>Hello ReactJS and {props.name}</h1>
    <button onClick={initCap}>Make Capital</button>
    <h1 className="extCSS">My external styling</h1>
  </div>;

  return jsx;

};

export default FirstComponent;