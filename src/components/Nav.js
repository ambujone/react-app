import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle window resize to reset menu state on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="App-nav" role="navigation" aria-label="Main Navigation">
      <div className="nav-container">
        <button
          className={`mobile-menu-button ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-controls="main-menu"
        >
          <span className="menu-icon"></span>
        </button>

        <ul id="main-menu" className={isMenuOpen ? 'menu-open' : ''}>
          <li>
            <Link
              to="/"
              aria-label="Home Page"
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              aria-label="Menu Page"
              className={location.pathname === '/menu' ? 'active' : ''}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="/booking"
              aria-label="Reservations Page"
              className={location.pathname === '/booking' ? 'active' : ''}
            >
              Reservations
            </Link>
          </li>
          <li>
            <Link
              to="/order"
              aria-label="Order Online Page"
              className={location.pathname === '/order' ? 'active' : ''}
            >
              Order Online
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              aria-label="About Page"
              className={location.pathname === '/about' ? 'active' : ''}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              aria-label="Contact Page"
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
