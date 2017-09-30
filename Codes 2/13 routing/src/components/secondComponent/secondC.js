import React from 'react';

class SecondComponent extends React.Component {

    render() {
        return (
            <div>
                <h1>Second Compnent</h1>
                <p>This is my first parameter {new URLSearchParams(this.props.location.search).get('fname')}</p>
                <p>This is my second parameter {new URLSearchParams(this.props.location.search).get('lname')}</p>
            </div>
        )
    }
};

export default SecondComponent;