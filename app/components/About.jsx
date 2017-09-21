var React = require('react');

var About = React.createClass({
  render: function () {
    return (
    	<div className="text-center">
    		<h2 className="page-title">About Component</h2>
        <p> View the console, to see the state value</p>
    	</div>);
  }
});

module.exports = About;
