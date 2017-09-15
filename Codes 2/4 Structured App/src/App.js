import React from 'react';

import Header from './components/common/header'
import Footer from './components/common/footer'
import FirstComponent from './components/firstComponent/firstC.js';

import './index.css';

function App() {

  var jsx = <div><Header/><FirstComponent/><Footer/></div>
  return jsx;
};

export default App;