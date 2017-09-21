var React = require('react');

var About = React.createClass({
  render: function () {
    return (
    	<div className="text-center">
    		<h2 className="page-title">About Component</h2>
        <h3> Name state is: <strong id='name'></strong></h3>
        <p> View the console, to see more info on Redux state</p>
    	</div>);
  }
});

module.exports = About;
