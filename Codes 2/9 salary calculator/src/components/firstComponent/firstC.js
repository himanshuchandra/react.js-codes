import React from 'react';


class FirstComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
              <input type="text" placeholder="Enter salary" onChange={this.props.printf}/>
              <p>Salary: {this.props.baseSal}</p>
              <button onClick={this.props.calsal}>Calculate Net Salary</button>
            </div>
        );
    }
};

export default FirstComponent;