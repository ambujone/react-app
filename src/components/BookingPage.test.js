import { render, screen } from "@testing-library/react";
import BookingPage from './BookingPage';
import { initializeTimes, updateTimes } from './BookingPage'; // Import the functions

// Test for the BookingPage component rendering
test('Renders the BookingPage heading', () => {
    render(<BookingPage />);
    const headingElement = screen.getByRole('heading', { name: "Reserve a Table", level: 1 });
    expect(headingElement).toBeInTheDocument();
});

// Test for the initializeTimes function
test('initializeTimes returns the expected initial times', () => {
    // Get the result of the initializeTimes function
    const initialTimes = initializeTimes();

    // Check if it returns an array
    expect(Array.isArray(initialTimes)).toBe(true);

    // Check if it contains the expected times
    expect(initialTimes).toEqual([
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
    ]);
});

// Test for the updateTimes function
test('updateTimes returns the same state when no date is provided', () => {
    // Create a sample state
    const state = ['17:00', '18:00', '19:00'];

    // Call updateTimes with an action that has no date
    const newState = updateTimes(state, { type: 'UPDATE_TIMES' });

    // Check if it returns the same state
    expect(newState).toEqual(state);
});

// Test for the updateTimes function with a specific date (Friday)
test('updateTimes returns weekend times for Friday', () => {
    // Create a sample state
    const state = ['17:00', '18:00', '19:00'];

    // Create a Friday date (day 5)
    const fridayDate = '2023-06-02'; // This is a Friday

    // Call updateTimes with an action that has a Friday date
    const newState = updateTimes(state, { type: 'UPDATE_TIMES', date: fridayDate });

    // Check if it returns the weekend times
    expect(newState).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']);
});

// Test for the updateTimes function with a specific date (Monday)
test('updateTimes returns Monday times for Monday', () => {
    // Create a sample state
    const state = ['17:00', '18:00', '19:00'];

    // Create a Monday date (day 1)
    const mondayDate = '2023-06-05'; // This is a Monday

    // Call updateTimes with an action that has a Monday date
    const newState = updateTimes(state, { type: 'UPDATE_TIMES', date: mondayDate });

    // Check if it returns the Monday times
    expect(newState).toEqual(['17:00', '18:00', '19:00', '20:00']);
});
