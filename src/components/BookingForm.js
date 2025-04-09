import React, { useState } from 'react';
import { submitBooking } from '../utils/api';

function BookingForm({ availableTimes, dispatch }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    // Dispatch action to update available times based on selected date
    dispatch({ type: 'UPDATE_TIMES', date: newDate });
  };

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create form data object
    const formData = {
      date,
      time,
      guests,
      occasion
    };

    console.log('Form submitted:', formData);

    // Submit form data to the API
    try {
      const success = submitBooking(formData);
      if (success) {
        setFormSubmitted(true);
        // Reset form fields
        setDate('');
        setTime('');
        setGuests(1);
        setOccasion('');
      } else {
        setSubmitError('Booking submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      setSubmitError('An error occurred while submitting your booking. Please try again.');
    }
  };

  return (
    <form style={{ display: 'grid', maxWidth: '400px', gap: '20px' }} onSubmit={handleSubmit}>
      <h2>Reserve a Table</h2>

      <div className="form-group">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        >
          <option value="">Select a time</option>
          {availableTimes && availableTimes.map(timeOption => (
            <option key={timeOption}>{timeOption}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(parseInt(e.target.value))}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="">Select an occasion (optional)</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Business">Business</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {submitError && <div className="error-message">{submitError}</div>}

      {formSubmitted ? (
        <div className="success-message">
          <h3>Reservation Confirmed!</h3>
          <p>Your table has been reserved. Thank you for choosing Little Lemon!</p>
          <button
            type="button"
            className="reserve-button"
            onClick={() => setFormSubmitted(false)}
          >
            Make Another Reservation
          </button>
        </div>
      ) : (
        <button type="submit" className="reserve-button">Make Your Reservation</button>
      )}
    </form>
  );
}

export default BookingForm;
