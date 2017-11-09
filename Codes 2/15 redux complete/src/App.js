import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MobileComponent from './components/mobile.component';
import LedComponent from './components/led.component';

import {connect} from 'react-redux';

class App extends Component{


  render(){
    return(
      <div>
        <h1>Complete redux app</h1>
        <button onClick={()=>{this.props.callMobile()}}>pass mobiles</button>
        <button onClick={()=>{this.props.callLed()}}>pass leds</button>
        <MobileComponent cmobiles={this.props.pmobiles}></MobileComponent>
        <LedComponent cleds={this.props.pleds}></LedComponent>
      </div>
    )
  }
}

// Mapping redux states with props and pass these props to the child component
const mapStateToProps = (reduxStates)=>{
  console.log('redux states:',reduxStates);
  return {
    "pmobiles":reduxStates.mobilesKey,
    "pleds":reduxStates.ledsKey
  }

};

const mapDispatchToProps=(dispatch)=>{
  
  return{
    callMobile:()=>{
      dispatch({
        type:'SHOW',
        payload:{"mobileValue":"000"}
      })
    },
    callLed:()=>{
      dispatch({
        type:"DISPLAY",
        payload:{"ledValue":"111"}
      })
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);