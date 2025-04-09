// Utility functions to access the API

// Function to fetch available times for a given date
export const fetchAvailableTimes = (date) => {
  // Check if the fetchAPI function is available in the window object
  if (typeof window.fetchAPI === 'function') {
    return window.fetchAPI(date);
  } else {
    // Fallback if the API is not available
    console.warn('fetchAPI function not found. Using fallback data.');
    return ['17:00', '18:00', '19:00', '20:00', '21:00'];
  }
};

// Function to submit booking form data
export const submitBooking = (formData) => {
  // Check if the submitAPI function is available in the window object
  if (typeof window.submitAPI === 'function') {
    return window.submitAPI(formData);
  } else {
    // Fallback if the API is not available
    console.warn('submitAPI function not found. Using fallback behavior.');
    console.log('Form data submitted (fallback):', formData);
    return true;
  }
};
