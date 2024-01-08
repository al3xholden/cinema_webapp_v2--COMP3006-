import React from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary/';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import BookNow from './pages/BookNow';
import MovieProvider from './providers/MovieProvider.js';

function App() {
  return (
    /* Error Handling */
    <ErrorBoundary>
      {/* React-Router setup | Home, Bookings, NotFoundPage */}

      <MovieProvider>
      <Router>
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/booknow" element={<BookNow />} />
          <Route path="/NotFound" element={<NotFound />} />
        
        </Routes>
      </Router>
      </MovieProvider>



    {/* End of Error Handling */}
    </ErrorBoundary>
  );
}

export default App;
