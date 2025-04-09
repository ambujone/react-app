import React, { useReducer } from 'react';
import BookingForm from './BookingForm';

// Initialize times function - returns the initial available times
const initializeTimes = () => {
  return [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];
};

// Reducer function to update available times based on the selected date
const updateTimes = (state, action) => {
  switch(action.type) {
    case 'UPDATE_TIMES':
      // In a real application, this would fetch available times from an API based on the date
      console.log('Selected date:', action.date);

      // Simulate different available times based on the day of the week
      if (action.date) {
        const date = new Date(action.date);
        const dayOfWeek = date.getDay();

        // Weekend (Friday, Saturday) has more evening slots
        if (dayOfWeek === 5 || dayOfWeek === 6) {
          return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
        }
        // Monday has fewer slots (restaurant closes earlier)
        else if (dayOfWeek === 1) {
          return ['17:00', '18:00', '19:00', '20:00'];
        }
        // Other days have standard hours
        else {
          return ['17:00', '18:00', '19:00', '20:00', '21:00'];
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
