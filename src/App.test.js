import { render, screen } from '@testing-library/react';
import App from './App';

// Mock the react-router-dom module
jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <div>{children}</div>,
  Route: ({ children }) => <div>{children}</div>,
  Link: ({ children }) => <a>{children}</a>,
}));

test('renders header component', () => {
  render(<App />);
  // Test for something that should be in the header
  const headerElement = screen.getByRole('banner');
  expect(headerElement).toBeInTheDocument();
});
