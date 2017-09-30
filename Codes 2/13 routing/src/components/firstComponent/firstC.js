import React from 'react';

class FirstComponent extends React.Component {
    constructor(props){
        super(props);
        
    }


    render() {
        return (
            <div>
                <h1>First Component</h1>
                <h1>This is first component description</h1>
                <p>This is my first parameter {this.props.match.params.fname}</p>
                <p>This is my second parameter {this.props.match.params.lname}</p>
                <p>This is my third parameter {this.props.match.params.job}</p>
            </div>
        )
    }
};
export default FirstComponent;