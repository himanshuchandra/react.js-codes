import React from 'react';

class SecondComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state={};
    }
    
   makeCapital(){
        let name = this.refs.myName.value;
        let newName = name.toUpperCase();
        this.setState({'capitalName':newName});
   }


    render() {
        return (
            <div>
                <input type="text" placeholder="Name" ref="myName"/>
                <button onClick={this.makeCapital.bind(this)}>Make Capital</button>
                <h1>{this.state.capitalName}</h1>
            </div>
        )
    }
};

export default SecondComponent;