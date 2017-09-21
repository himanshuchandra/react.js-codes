import React from 'react';


class SecondComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state={'myData':[
            {
                name:'himanshu',
                id:1,
            },
            {
                name:'prashant',
                id:2
            }
        ]};
    }
    
    render() {
        var dataObj = this.state.myData.map(function(data,index){
            return (<div>
                <h1>{index}</h1>
                <h1>Name:{data.name}</h1>
                <h1>id:{data.id}</h1>
                 </div>)
        });
        return (
            <div>
               {dataObj}
            </div>
        );
    }
};

export default SecondComponent;