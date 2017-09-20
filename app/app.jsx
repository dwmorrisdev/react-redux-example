var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

var About = require('About');


//load foundation
$(document).foundation();

//app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main} >
    	<Route path="about" component={About} />
    	<IndexRoute component={About} />
    </Route>
  </Router>,
  document.getElementById('app')
);

require('./redux-example.jsx');
