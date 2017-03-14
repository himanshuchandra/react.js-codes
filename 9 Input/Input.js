var React = require('react');
var ReactDOM = require('react-dom');

var Input = React.createClass({
  getInitialState:function(e){
   	return { userInput: '' };
  },
  
  handleUserInput:function(e){
    this.setState({
      userInput:e.target.value
    });
	},
  
  render: function () {
    return (
      <div>
        <input type="text" onChange={this.handleUserInput} />
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
});

ReactDOM.render(
	<Input />,
	document.getElementById('app')
);