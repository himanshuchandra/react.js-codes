import React from 'react';
import ReactDOM from 'react-dom';

//external css
import './index.css';


let name = 'Himanshu';

///inline css
let myNewStyle = {
    backgroundColor: 'red',
    color: 'orange'
}


ReactDOM.render(<div>
    <h1 style={myNewStyle}>Hello ReactJS and {name}</h1>
    <h1 className="extCSS">My external styling</h1>
    </div>
    , document.getElementById('root'));


