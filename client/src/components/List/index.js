import React, { useContext } from 'react';
import dune from '../../assets/images/dune.jpg';
import avengers from '../../assets/images/avengers.png';
import oppen from '../../assets/images/oppen.jpg';
import wonka from '../../assets/images/wonkagifposter.gif';
import MovieContext from '../../contexts/MovieContext';
import './List.css';



const List = ({ onMovieSelect }) => {
  const { selectedMovie } = useContext(MovieContext);


  const movies = [
    { 
      id: 'dune', 
      name: 'DUNE: PART 1', 
      image: dune, 
      rating: 'PG-13',

      

      about : "A mythic and emotionally charged hero's journey.  Dune tells the story of Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, who must travel to the most dangerous planet in the universe to ensure the future of his family and his people."
    
    },
    
    

    { 
      id: 'avengers', 
      name: 'AVENGERS: ENDGAME', 
      image: avengers,
      rating: 'PG-13',

      

      about : "A mythic and emotionally charged hero's journey.  Dune tells the story of Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, who must travel to the most dangerous planet in the universe to ensure the future of his family and his people."
    
      
    },

    { 
      id: 'oppenheimer', 
      name: 'OPPENHEIMER', 
      image: oppen,
      rating: 'PG-13',

      

      about : "A mythic and emotionally charged hero's journey.  Dune tells the story of Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, who must travel to the most dangerous planet in the universe to ensure the future of his family and his people."
    
    },
      
    { 
      id: 'wonka', 
      name: 'WONKA', 
      image: wonka, 
      rating: 'PG-13',

      

      about : "A mythic and emotionally charged hero's journey.  Dune tells the story of Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, who must travel to the most dangerous planet in the universe to ensure the future of his family and his people."
    
    },

    { 
      id: 'dune2', 
      name: 'OPPENHEIMER', 
      image: oppen, 
      rating: 'PG-13',

      

      about : "A mythic and emotionally charged hero's journey.  Dune tells the story of Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, who must travel to the most dangerous planet in the universe to ensure the future of his family and his people."
    
    },

    { 
      id: 'wonka2', 
      name: 'WONKA', 
      image: wonka, 
      rating: 'PG-13',

      

      about : "A mythic and emotionally charged hero's journey.  Dune tells the story of Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, who must travel to the most dangerous planet in the universe to ensure the future of his family and his people."
    
    },

    { 
      id: 'avengers2', 
      name: 'AVENGERS: ENDGAME', 
      image: avengers,
      rating: 'PG-13',

      

      about : "A mythic and emotionally charged hero's journey.  Dune tells the story of Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, who must travel to the most dangerous planet in the universe to ensure the future of his family and his people."
    
      
    },

    
  ];

  const selectMovie = (movie) => {
    console.log('Selected Movie:', movie);
    onMovieSelect(movie); 
  };

 
  return (
    <div className="list-container">
      <ul className="item-list">
        {movies.map((movie, index) => (
          <li
            key={index}
            onClick={() => selectMovie(movie)}
            className={selectedMovie && selectedMovie.id === movie.id ? 'selected' : ''}
          >
            <img
              src={movie.image}
              alt={movie.name}
              draggable="false"
              style={{
                width: '130px',
                height: '170px',
                ...(selectedMovie && selectedMovie.id === movie.id
                  ? { width: '120px', height: '160px', marginTop: '-40px' }
                  : {}),
              }}
            />
            <p>{movie.name}</p>
          </li>
        ))}
      </ul>
      
      <div className="selected-item">
        {selectedMovie && (
          <>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
              <img
                src={selectedMovie.image}
                alt={selectedMovie.name}
                draggable="false"
                style={{
                  width: '110px',
                  height: '150px',
                  listStyleType: 'none',
                  marginLeft: '16.5px',
                  marginRight: '18.5px',
                }}
              />
              <div style={{ marginTop: '10px' }}>
                <p>
                  <span style={{ fontSize: '13px', letterSpacing: '1.5px', fontWeight: 'bold' }}>MOVIE TITLE: </span>
                  <span style={{ fontSize: '10px', letterSpacing: '4.9px', fontWeight: 'bold' }}>
                    {selectedMovie.name}
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: '13px', letterSpacing: '1.5px', fontWeight: 'bold' }}>RATING: </span>
                  <span style={{ fontSize: '10px', letterSpacing: '4.9px', fontWeight: 'bold' }}>{selectedMovie.rating}</span>
                </p>
                <p>
                  <span style={{ fontSize: '13px', letterSpacing: '1.5px', fontWeight: 'bold' }}>
                    <b>
                      <i>ABOUT</i>
                    </b>
                    :{' '}
                  </span>
                  <span style={{ fontSize: '11px', fontWeight: 'none' }}>{selectedMovie.about}</span>
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default List;
