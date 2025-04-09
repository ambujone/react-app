import React, { useReducer } from 'react';
import BookingForm from './BookingForm';
import { fetchAvailableTimes } from '../utils/api';

// Initialize times function - returns the initial available times for today's date
export const initializeTimes = () => {
  // Get today's date in the format YYYY-MM-DD
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const dateString = `${year}-${month}-${day}`;

  // Fetch available times for today
  try {
    return fetchAvailableTimes(dateString);
  } catch (error) {
    console.error('Error fetching initial times:', error);
    return ['17:00', '18:00', '19:00', '20:00', '21:00'];
  }
};

// Reducer function to update available times based on the selected date
export const updateTimes = (state, action) => {
  switch(action.type) {
    case 'UPDATE_TIMES':
      // Fetch available times from the API based on the selected date
      console.log('Selected date:', action.date);

      if (action.date) {
        try {
          // Use the fetchAPI function to get available times for the selected date
          return fetchAvailableTimes(action.date);
        } catch (error) {
          console.error('Error fetching available times:', error);
          return state;
        }
      }
      return state;
    default:
      return state;
  }
};

function BookingPage() {
  // Use reducer to manage available times
  const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);

  return (
    <div className="booking-page">
      <div className="booking-hero">
        <h1>Reserve a Table</h1>
        <p>We look forward to serving you at Little Lemon. Please fill out the form below to make a reservation.</p>
      </div>

      <div className="booking-container">
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />

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
