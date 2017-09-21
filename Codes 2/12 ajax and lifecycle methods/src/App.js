import React from 'react';

import FirstComponent from './components/firstComponent/firstC.js';
import SecondComponent from './components/secondComponent/secondC.js'
import Axios from 'axios';
import Request from 'superagent';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          myData:[]
        }
    } 
    
    url="http://www.perspectico.com/commonroutes/loadPods";
    obj={
      type:'top',
      count:0
    }

    //////Using superagent
    componentWillMount(){
      Request.post(this.url,this.obj).then(response=>{
        console.log(response.body);
      })
    }

    //////Using Axios
    componentDidMount(){
      Axios.post(this.url,this.obj)
      .then(response=>{
        console.log(response.data);
        this.setState({
          myData:response.data
        })
      })
      .catch(error=>{
        console.log(error);
      })
    }
    
    
    render() {
      var obj=this.state.myData.map(function(data,index){
        data.coverUrl='http://www.perspectico.com/Covers/'+data.coverUrl;
          return (
            <div key={index}>
              <p>{index}</p>
              <img src={data.coverUrl}/>
              <p>{data.likes}</p>
              <p>{data.title}</p>
              <p>{data.description}</p>
            </div>
          );
      });
        return (
          <div>
            AJAX CALLS
            {obj}
          </div>
        );
    }
};

export default App;