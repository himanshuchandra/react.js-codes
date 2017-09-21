import React from 'react';

import FirstComponent from './components/firstComponent/firstC.js';
import SecondComponent from './components/secondComponent/secondC.js'
// import $ from './jquery/dist/jquery.js'
import $ from 'jquery'
import {Button} from 'react-bootstrap'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          firstname:"Himanshu"
        }
    } 
    
    collectDataFromChild(string){
      this.setState({
        lastname:string
      });
    }
    
    render() {
        return (
          <div>
            <p>{this.state.firstname}</p>
            <p>{this.state.lastname}</p>
            <FirstComponent fn={this.collectDataFromChild.bind(this)}/>
            <Button bsStyle="success">Hello</Button>
          </div>
        );
    }
};

export default App;