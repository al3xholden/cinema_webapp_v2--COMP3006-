import React from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary/';
import Navbar from './components/Navbar/';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    /* Error Handling */
    <ErrorBoundary>
    
    {/* Call Navbar components library */}
    <Router>
      <Navbar />
    </Router>
    
  {/* End of Error Handling */}
    </ErrorBoundary>
  );
}

export default App;
