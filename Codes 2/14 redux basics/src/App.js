import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Step - 2 Create reducer
const reducer = (state = { firstNumber: 0, secondNumber: 0, result: 0 }, action) => {
  console.log("State is ", state);
  console.log("Action is ", action.payload);
  var result = 0;
  switch (action.type) {
    case "ADD":
      result = parseInt(action.payload.firstNumber) + parseInt(action.payload.secondNumber);
      state = {
        firstNumber: action.payload.firstNumber,
        secondNumber: action.payload.secondNumber,
        result: result
      };
      //state = state
      break;
    case "SUBTRACT":
      result = parseInt(action.payload.firstNumber) - parseInt(action.payload.secondNumber);
      state = {
        firstNumber: action.payload.firstNumber,
        secondNumber: action.payload.secondNumber,
        result: result
      };
      break;
    case "MULTIPLY":
      result = parseInt(action.payload.firstNumber) * parseInt(action.payload.secondNumber);
      state = {
        firstNumber: action.payload.firstNumber,
        secondNumber: action.payload.secondNumber,
        result: result
      };
      break;
    case "DIVIDE":
      result = parseInt(action.payload.firstNumber) / parseInt(action.payload.secondNumber);
      state = {
        firstNumber: action.payload.firstNumber,
        secondNumber: action.payload.secondNumber,
        result: result
      };
      break;
  }
  return state;
}

// Step -  1 Create a Store (Centeralized Object to Store State for Application)


const store = createStore(reducer);
store.subscribe(() => {
  console.log("I will call whenever the state is updated", store.getState());
})



class App extends Component {
  constructor() {
    super();
    this.state = {
      result: 0
    }
  }

  doOperation(event) {
    var actionType = event.target.value;
    console.log("Button Clicked ", actionType);
    var firstNo = this.refs.firstno.value;
    var secondNo = this.refs.secondno.value;


    store.dispatch({
      type: actionType, payload: { firstNumber: firstNo, secondNumber: secondNo }
    });
    this.setState({
      result: store.getState().result
    });

  }
  render() {
    // Step -3 Action
    // store.dispatch({
    // type:"ADD",payload:{firstNumber:1,secondNumber:2}
    // });
    // type contain action name and payload contain the value
    return (
      <Provider store={store}>
      <div>Redux Basic Demo
      <input type='text' ref='firstno' placeholder='Type First Number Here' />
        <input type='text' ref='secondno' placeholder='Type Second Number Here' />
        <button onClick={this.doOperation.bind(this)} value='ADD'>Add</button>
        <button onClick={this.doOperation.bind(this)} value='SUBTRACT'>Subtract</button>
        <h1>Result is {this.state.result}</h1>
        <hr />
        <GetResultComponent />
      </div>
      </Provider>
    )
  }
}

class GetResultComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      data: 0
    };
  }
  getData() {
    this.setState({ data: store.getState().result });
  }
  render() {
    return (
        <div>
          <button onClick={this.getData.bind(this)}>Get Result </button>
          <h2>Result is ::: {this.state.data}</h2>
        </div>
    );
  }
}

export default App;