var React = require('react');
var ReactDOM = require('react-dom');

var green = '#39D1B4';
var yellow = '#FFD712';

var Toggle = React.createClass({
  getInitialState:function(){
    return {color:"red"}
  },
  changeColor:function(){
    if(this.state.color==green){
      this.setState({color:yellow});
    }
    else{
      this.setState({color:yellow});
    }
  },
  render: function () {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
        <button onClick={this.changeColor}>
  Change color
</button>
      </div>
    );
  }
});


ReactDOM.render(<Toggle />, document.getElementById('app'));