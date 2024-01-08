import React from 'react';

import { ShowingsData } from './TimeSlotsElements.js'


const Showings = React.memo (({ selectedmovie }) => {

  if (!selectedmovie==null) {
    console.log("NULL!!!")
  }

  // Example showings data, replace this with your actual data
  const showingsData = [
    { time: '10:00 AM', title: 'MORNING' },
    { time: '1:00 PM', title: 'AFTERNOON' },
    { time: '4:00 PM', title: 'AFTERNOON' },
    { time: '7:00 PM', title: 'EVENING' },
    { time: '10:00 PM', title: 'LATE-NIGHT' },
  ];

  const buttonStyle = {
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '13px',
    padding: '13px 38px 13px 38px',
    cursor: 'pointer',
    margin: '5px',
    marginLeft: '5px', // Reset left margin
    marginRight: 'auto', // Reset right margin

  };
  

  const textStyle = {
    color: 'white',
    justifyContent: 'center', 
    alignItems: 'center', 
  };

  const TimeSelector = ({ selectedMovie, onSelect }) => {
    console.log('Selected Movie in TimeSelector:', selectedMovie);
    const movieShowings = showingsData[selectedMovie] || [];
    console.log('Movie Showings in TimeSelector:', movieShowings);
  
    return (
      <div>
        <Showings selectedMovie={selectedMovie} onSelect={onSelect} />
      </div>
    );
  };
  

  return (
    <div>
      <h2 style={textStyle}>Showings for {selectedmovie?.name}</h2>
      <div style={{ display: 'flex',}}>
        {showingsData.map((showing, index) => (
          <button key={index} to="#selectaseat" smooth={true} duration={600} style={buttonStyle} >
            {showing.title}
            <br/>
            {showing.time}
          </button>
        ))}
      </div>
    </div>
  );
});

export default Showings;
