import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <main className="App-main" role="main">
      <section className="hero-section" aria-labelledby="hero-heading">
        <h2 id="hero-heading">Little Lemon</h2>
        <h3>Chicago</h3>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <Link to="/booking" className="reserve-button" aria-label="Reserve a Table Button">
          <span className="button-icon">📅</span>
          Reserve a Table
        </Link>
      </section>

      <section className="specials-section" aria-labelledby="specials-heading">
        <div className="section-header">
          <h2 id="specials-heading">This week's specials!</h2>
          <button className="menu-button" aria-label="View Online Menu">
            <span className="button-icon">📜</span>
            Online Menu
          </button>
        </div>
        <div className="specials-cards" role="list" aria-label="Special Menu Items">
          {/* Specials cards would go here */}
        </div>
      </section>

      <section className="testimonials-section" aria-labelledby="testimonials-heading">
        <h2 id="testimonials-heading">Testimonials</h2>
        <div className="testimonials-container" role="list" aria-label="Customer Testimonials">
          {/* Testimonial cards would go here */}
        </div>
      </section>

      <section className="about-section" aria-labelledby="about-heading">
        <div className="about-content">
          <h2 id="about-heading">Little Lemon</h2>
          <h3>Chicago</h3>
          <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
        </div>
        <div className="about-images" aria-label="Restaurant Images">
          {/* Restaurant images would go here */}
        </div>
      </section>
    </main>
  );
}

export default Main;
