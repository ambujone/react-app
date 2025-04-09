import React, { useState } from 'react';

function BookingForm() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  
  // For now, we'll use a static array of available times
  const [availableTimes, setAvailableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { date, time, guests, occasion });
    // Here you would typically send the data to an API
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
          onChange={(e) => setDate(e.target.value)}
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
          {availableTimes.map(timeOption => (
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
      
      <button type="submit" className="reserve-button">Make Your Reservation</button>
    </form>
  );
}

export default BookingForm;
