import React from 'react';
import logo from '../logo.svg';

function Footer() {
  return (
    <footer className="App-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Little Lemon Logo" className="footer-logo-img" />
        </div>
        
        <div className="footer-nav">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h4>Contact</h4>
          <address>
            <p>123 Main Street, Chicago, IL</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@littlelemon.com</p>
          </address>
        </div>
        
        <div className="footer-social">
          <h4>Social Media</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
