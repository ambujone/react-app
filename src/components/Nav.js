import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="App-nav" role="navigation" aria-label="Main Navigation">
      <ul>
        <li><Link to="/" aria-label="Home Page">Home</Link></li>
        <li><Link to="/menu" aria-label="Menu Page">Menu</Link></li>
        <li><Link to="/booking" aria-label="Reservations Page">Reservations</Link></li>
        <li><Link to="/order" aria-label="Order Online Page">Order Online</Link></li>
        <li><Link to="/about" aria-label="About Page">About</Link></li>
        <li><Link to="/contact" aria-label="Contact Page">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
