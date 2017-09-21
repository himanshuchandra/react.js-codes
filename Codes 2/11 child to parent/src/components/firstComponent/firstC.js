import React from 'react';


class FirstComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    passToParent(){
        this.props.fn("Chandra");
    }
    
    render() {
        return (
            <div>
            <button onClick={this.passToParent.bind(this)}>Print Last Name</button>
            </div>
        );
    }
};

export default FirstComponent;