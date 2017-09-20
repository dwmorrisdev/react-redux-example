var React = require('react');
var Nav = require('Nav');


var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
            <h1>This is the main component.</h1>
            {props.children}

        </div>
      </div>

    </div>
  );
};

module.exports = Main;
