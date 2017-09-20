var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React App</li>
            <li>
              <IndexLink to="/" activeClassName="active-link">Home</IndexLink>
            </li>
            <li>
              <Link to="#" activeClassName="active-link">Other Page</Link>
            </li>
            <li>
              <Link to="/about" activeClassName="active-link">About</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul clasName="menu">
            <li className="menu-text">Created by
              <a href="http://www.github.com/dwmorrisdev" target="_blank"> Dustin Morris</a>
            </li>
          </ul>
        </div>
      </div>
    );
};

module.exports = Nav;
