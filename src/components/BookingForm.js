import React, { useState } from 'react';
import { submitBooking } from '../utils/api';

function BookingForm({ availableTimes, dispatch }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  // Form validation states
  const [dateError, setDateError] = useState('');
  const [timeError, setTimeError] = useState('');
  const [guestsError, setGuestsError] = useState('');
  const [formValid, setFormValid] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Validate the form whenever inputs change
  React.useEffect(() => {
    validateForm();
  }, [date, time, guests]);

  // Validate the entire form
  const validateForm = () => {
    let isValid = true;

    // Date validation
    if (!date) {
      setDateError('Please select a date');
      isValid = false;
    } else {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        setDateError('Please select a future date');
        isValid = false;
      } else {
        setDateError('');
      }
    }

    // Time validation
    if (!time) {
      setTimeError('Please select a time');
      isValid = false;
    } else {
      setTimeError('');
    }

    // Guests validation
    if (guests < 1) {
      setGuestsError('Number of guests must be at least 1');
      isValid = false;
    } else if (guests > 10) {
      setGuestsError('Number of guests cannot exceed 10');
      isValid = false;
    } else {
      setGuestsError('');
    }

    setFormValid(isValid);
    return isValid;
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    // Dispatch action to update available times based on selected date
    dispatch({ type: 'UPDATE_TIMES', date: newDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form before submission
    const isValid = validateForm();
    if (!isValid) {
      return; // Don't proceed if form is invalid
    }

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
        // Reset validation states
        setDateError('');
        setTimeError('');
        setGuestsError('');
        setSubmitError(null);
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
          min={new Date().toISOString().split('T')[0]} // Prevent past dates
          aria-label="Reservation date"
          className={dateError ? 'input-error' : ''}
        />
        {dateError && <div className="error-text">{dateError}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          aria-label="Reservation time"
          className={timeError ? 'input-error' : ''}
        >
          <option value="">Select a time</option>
          {availableTimes && availableTimes.map(timeOption => (
            <option key={timeOption}>{timeOption}</option>
          ))}
        </select>
        {timeError && <div className="error-text">{timeError}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
          required
          aria-label="Number of guests"
          step="1"
          title="Please enter a number between 1 and 10"
          className={guestsError ? 'input-error' : ''}
        />
        {guestsError && <div className="error-text">{guestsError}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          aria-label="Occasion"
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
        <button
          type="submit"
          className="reserve-button"
          disabled={!formValid}
          aria-label="Submit reservation"
        >
          Make Your Reservation
        </button>
      )}
    </form>
  );
}

export default BookingForm;
