import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
