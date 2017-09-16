import React from 'react';

class SecondComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state={};
    }
    
   makeCapital(event){
        let name = event.target.value;
        let newName = name.toUpperCase();
        this.setState({'capitalName':newName});
   }


    render() {
        return (
            <div>
                <input type="text" placeholder="Name" onChange={this.makeCapital.bind(this)}/>
                <h1>{this.state.capitalName}</h1>
            </div>
        )
    }
};

export default SecondComponent;