import React from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary/';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home'

function App() {
  return (
    /* Error Handling */
    <ErrorBoundary>
    
    {/* Call Navbar components library */}
    <Router>
      <Home />
    
    </Router>
    
  {/* End of Error Handling */}
    </ErrorBoundary>
  );
}

export default App;
