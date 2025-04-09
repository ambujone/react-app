import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

function Header() {
  return (
    <header className="App-header" role="banner">
      <div className="header-content">
        <div className="logo-container">
          <Link to="/" aria-label="Little Lemon Home">
            <img src={logo} className="App-logo" alt="Little Lemon Logo" />
          </Link>
        </div>
        <div className="header-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
        </div>
        <div className="header-actions">
          <Link to="/booking" className="header-button" aria-label="Reserve a Table">
            <span className="icon-calendar"></span>
            Reserve
          </Link>
          <Link to="/order" className="header-button" aria-label="Order Online">
            <span className="icon-bag"></span>
            Order
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
