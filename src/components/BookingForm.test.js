import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    // Mock the props that BookingForm expects
    const availableTimes = ['17:00', '18:00'];
    const dispatch = jest.fn();
    
    render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
    
    // Check for the heading "Reserve a Table"
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
});

test('Renders the labels for the form fields', () => {
    // Mock the props that BookingForm expects
    const availableTimes = ['17:00', '18:00'];
    const dispatch = jest.fn();
    
    render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
    
    // Check for the field labels
    const dateLabel = screen.getByText("Choose date");
    const timeLabel = screen.getByText("Choose time");
    const guestsLabel = screen.getByText("Number of guests");
    const occasionLabel = screen.getByText("Occasion");
    
    expect(dateLabel).toBeInTheDocument();
    expect(timeLabel).toBeInTheDocument();
    expect(guestsLabel).toBeInTheDocument();
    expect(occasionLabel).toBeInTheDocument();
});

test('Renders the submit button with correct text', () => {
    // Mock the props that BookingForm expects
    const availableTimes = ['17:00', '18:00'];
    const dispatch = jest.fn();
    
    render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
    
    // Check for the submit button
    const submitButton = screen.getByText("Make Your Reservation");
    expect(submitButton).toBeInTheDocument();
});
