// Simulated API functions for the Little Lemon booking system

// Function to fetch available times for a given date
function fetchAPI(date) {
  // Simulate API call with different times based on the day of the week
  const dayOfWeek = new Date(date).getDay();
  
  // Base times available every day
  const baseTimes = ['17:00', '18:00', '19:00', '20:00'];
  
  // Weekend (Friday, Saturday) has more evening slots
  if (dayOfWeek === 5 || dayOfWeek === 6) {
    return [...baseTimes, '21:00', '22:00', '23:00'];
  }
  // Monday has fewer slots (restaurant closes earlier)
  else if (dayOfWeek === 1) {
    return baseTimes;
  }
  // Other days have standard hours
  else {
    return [...baseTimes, '21:00'];
  }
}

// Function to submit booking form data
function submitAPI(formData) {
  // Simulate API call that always returns true for successful submission
  console.log('Form data submitted:', formData);
  return true;
}

// Make functions available globally
window.fetchAPI = fetchAPI;
window.submitAPI = submitAPI;
