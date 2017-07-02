import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const close = require('../../../node_modules/uswds/dist/img/close.png');

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
  }

  render() {
    const currentUrl = this.props.props.location.pathname; // eslint-disable-line
    const isActive = (u) => { //eslint-disable-line
      const url = u === currentUrl ? 'active-url' : '';
      return url;
    };
    console.log(currentUrl);
    return (
      <div className="header site-header">
        <header className="usa-header usa-header-basic" role="banner">
          <div className="usa-nav-container">
            <div className="usa-navbar" style={{ position: 'left' }}>
              <button className="usa-menu-btn">Menu</button>
              <div className="usa-logo" id="logo">
                <em className="usa-logo-text">
                  <a href="/#/" title="Home" aria-label="Home">mikejoycedev.com</a>
                </em>
              </div>
            </div>
            <nav className="usa-nav condensed-nav">
              <button className="usa-nav-close">
                <img src={close} alt="close" />
              </button>
              <ul className="usa-nav-primary usa-accordion">
                <li>
                  <Link className="usa-nav-link" to="/">
                    <span className={isActive('/')}>Home</span>
                  </Link>
                </li>
              </ul>
              <ul className="usa-nav-primary usa-accordion">
                <li>
                  <Link className="usa-nav-link" to="about">
                    <span className={isActive('/about')}>About</span>
                  </Link>
                </li>
              </ul>
              <ul className="usa-nav-primary usa-accordion">
                <li>
                  <Link className="usa-nav-link" to="meta">
                    <span className={isActive('/meta')}>Meta</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="usa-overlay" />
      </div>
    );
  }
}

export default Header;
