import React from 'react';

class SecondComponent extends React.Component {
    constructor(props) {
        super(props);
        if (true) {
            this.state = {
                friend: this.props.name + '& Prashant'
            }
        }
    }
    render() {
        return (
            <div>
                <h1>Hello Himanshu and {this.props.name}</h1>
                <h1>Hello {this.state.friend}</h1>
            </div>
        )
    }
};

export default SecondComponent;