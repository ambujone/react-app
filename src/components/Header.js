import React from 'react';
import logo from '../logo.svg';

function Header() {
  return (
    <header className="App-header">
      <div className="header-content">
        <div className="logo-container">
          <img src={logo} className="App-logo" alt="Little Lemon Logo" />
        </div>
        <div className="header-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
        </div>
      </div>
    </header>
  );
}

export default Header;
