import React, { useState } from 'react';
import MovieContext from '../contexts/MovieContext.js';

const MovieProvider = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <MovieContext.Provider value={{ selectedMovie, setSelectedMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;