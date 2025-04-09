import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <main className="App-main">
      <section className="hero-section">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <Link to="/booking" className="reserve-button">Reserve a Table</Link>
      </section>
      
      <section className="specials-section">
        <div className="section-header">
          <h2>This week's specials!</h2>
          <button className="menu-button">Online Menu</button>
        </div>
        <div className="specials-cards">
          {/* Specials cards would go here */}
        </div>
      </section>
      
      <section className="testimonials-section">
        <h2>Testimonials</h2>
        <div className="testimonials-container">
          {/* Testimonial cards would go here */}
        </div>
      </section>
      
      <section className="about-section">
        <div className="about-content">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
        </div>
        <div className="about-images">
          {/* Restaurant images would go here */}
        </div>
      </section>
    </main>
  );
}

export default HomePage;
