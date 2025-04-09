import React from 'react';
import logo from '../logo.svg';

function Footer() {
  return (
    <footer className="App-footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-logo">
          <a href="/" aria-label="Little Lemon Home">
            <img src={logo} alt="Little Lemon Logo" className="footer-logo-img" />
          </a>
        </div>

        <nav className="footer-nav" aria-label="Footer Navigation">
          <h4 id="footer-nav-heading">Navigation</h4>
          <ul aria-labelledby="footer-nav-heading">
            <li><a href="/" aria-label="Home Page">Home</a></li>
            <li><a href="/menu" aria-label="Menu Page">Menu</a></li>
            <li><a href="/booking" aria-label="Reservations Page">Reservations</a></li>
            <li><a href="/order" aria-label="Order Online Page">Order Online</a></li>
            <li><a href="/about" aria-label="About Page">About</a></li>
            <li><a href="/contact" aria-label="Contact Page">Contact</a></li>
          </ul>
        </nav>

        <div className="footer-contact">
          <h4 id="contact-heading">Contact</h4>
          <address aria-labelledby="contact-heading">
            <p>123 Main Street, Chicago, IL</p>
            <p>Phone: <a href="tel:+11234567890" aria-label="Call our restaurant">(123) 456-7890</a></p>
            <p>Email: <a href="mailto:info@littlelemon.com" aria-label="Email our restaurant">info@littlelemon.com</a></p>
          </address>
        </div>

        <div className="footer-social">
          <h4 id="social-heading">Social Media</h4>
          <ul aria-labelledby="social-heading">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page">Twitter</a></li>
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
