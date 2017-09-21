import React from 'react';

import FirstComponent from './components/firstComponent/firstC.js';
import SecondComponent from './components/secondComponent/secondC.js'
import Salary from './components/logic'


class App extends React.Component {
    constructor(props) {
        super(props);
        var salaryObject = new Salary(0);
        this.state={
          salobj: salaryObject
        };
    }

    printSalary(event){
        this.setState({
          baseSalary:event.target.value,
        });
    }

    calsal(){
        this.setState({
          salobj: new Salary(this.state.baseSalary)
        })
    }
    
    render() {
        return (
          <div>
            <FirstComponent printf={this.printSalary.bind(this)} baseSal={this.state.baseSalary} calsal={this.calsal.bind(this)}/>
            <SecondComponent salobj={this.state.salobj}/>
          </div>
        );
    }
};

export default App;