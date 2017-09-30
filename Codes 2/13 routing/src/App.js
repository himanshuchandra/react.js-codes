import React from 'react';

import Header from './components/common/header'
import Footer from './components/common/footer'
import FirstComponent from './components/firstComponent/firstC.js';
import SecondComponent from './components/secondComponent/secondC.js'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'

import './index.css';

class Menu extends React.Component{
  render(){
    return(
      <div>
      <h1>Menu </h1>
      <Link to="/first" >Clothes</Link>&nbsp;&nbsp;
      <Link to="/second" >Shoes</Link>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>

        <p>Header starts</p>
        <Header />
        <Router>
          <div>
            {/* <Link to="/first">First_Component</Link> */}
            {/* <Link to="/second">Second_Component</Link><br/> */}
            {/* <NavLink activeclassName="red" to="/first">First_ComponentREd</NavLink>
      <NavLink activeStyle={{color:'orange'}} to="/second">Second_Component</NavLink> */}
            {/* <Route exact path="/first" component={FirstComponent}/>  */}
            {/* <Route path="/second" component={SecondComponent}/> */}

            {/* <Link to="/first">First_Component</Link>
      <Link to="/second">Second_Component</Link>
      <Route exact path="/first" component={FirstComponent}/> 
      <Route strict path="/second" component={SecondComponent}/>  */}
            {/* for exact '/' has a meaning
      for strict '/' has no meaning */}


            <Link to="/first/himanshu/chandra/developer">First_Component props.match</Link><br/>
            <Link to="/second?fname=himanshu&lname=chandra">Second_Component props.location</Link>
            <Route path="/first/:fname/:lname/:job?" component={FirstComponent} />
            <Route path="/second" component={SecondComponent} />


          </div>
        </Router>
        <Menu/>
        <p>Header ends</p>

        <Footer />
      </div>
    )
  }
};

export default App;