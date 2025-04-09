import React from 'react';
import BookingForm from './BookingForm';

function BookingPage() {
  return (
    <div className="booking-page">
      <div className="booking-hero">
        <h1>Reserve a Table</h1>
        <p>We look forward to serving you at Little Lemon. Please fill out the form below to make a reservation.</p>
      </div>
      
      <div className="booking-container">
        <BookingForm />
        
        <div className="booking-info">
          <h3>Reservation Information</h3>
          <p>Reservations are available up to 30 days in advance.</p>
          <p>For parties larger than 10, please call us directly at (123) 456-7890.</p>
          <p>A credit card is not required to hold your reservation.</p>
          <p>If you need to cancel or modify your reservation, please do so at least 24 hours in advance.</p>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;
