import React from 'react';


class SecondComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <p>DA:{this.props.salobj.DA}</p>
                <p>TA:{this.props.salobj.TA}</p>
                <p>Net Salary: {this.props.salobj.netSalary}</p>
            </div>
        );
    }
};

export default SecondComponent;