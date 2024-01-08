import React from 'react';

const MyTicket = ({ selectedMovie, selectedTime, selectedSeat }) => {
  return (
    <div>
      <h2>TICKET CONFIRMATION</h2>
      {selectedMovie && <p style={{color:'white'}}>Selected Movie: {selectedMovie}</p>}
      {selectedTime && <p style={{color:'white'}}>Selected Time: {selectedTime}</p>}
      {selectedSeat && <p style={{color:'white'}}>Selected Seat: {selectedSeat}</p>}
    </div>
  );
};

export default MyTicket;
