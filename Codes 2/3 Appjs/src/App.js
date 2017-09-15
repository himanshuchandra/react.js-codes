import React from 'react';

//external css
import './index.css';

function App() {
  let name = 'Himanshu';

  ///inline css
  let myNewStyle = {
    backgroundColor: 'red',
    color: 'orange'
  };

  // return (
  //   <div>
  //     <h1 style={myNewStyle}>Hello ReactJS and {name}</h1>
  //     <h1 className="extCSS">My external styling</h1>
  //   </div>
  // );

  let jsx = <div>
    <h1 style={myNewStyle}>Hello ReactJS and {name}</h1>
    <h1 className="extCSS">My external styling</h1>
  </div>;

  return jsx;

};

export default App;