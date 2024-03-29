import React, { useState, useEffect } from 'react';

const SeatSelection = ({ selectedmovie, onSeatSelect }) => {
  const [availableSeats, setAvailableSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Simulate fetching available seats based on the selected movie
  useEffect(() => {
    const newAvailableSeats = Array.from({ length: 20 }, (_, index) => ({
      id: index + 1,
      label: `Seat ${index + 1}`,
    }));

    setAvailableSeats(newAvailableSeats);
  }, [selectedmovie]);

  const handleSeatClick = (seatId) => {
    const isSeatSelected = selectedSeats.includes(seatId);
    let newSelectedSeats;

    if (isSeatSelected) {
      newSelectedSeats = selectedSeats.filter((selectedSeat) => selectedSeat !== seatId);
    } else {
      newSelectedSeats = [...selectedSeats, seatId];
    }

    setSelectedSeats(newSelectedSeats);
    onSeatSelect(newSelectedSeats); // Notify parent component about seat selection
  };

  const isSelected = (seatId) => selectedSeats.includes(seatId);

  return (
    <div>
      <h2>Seat Selection for {selectedmovie}</h2>
      <div className="seat-container" style={{ backgroundColor: 'red' }}>
        {availableSeats.map((seat) => (
          <div
            key={seat.id}
            className={`seat ${isSelected(seat.id) ? 'selected' : ''}`}
            onClick={() => handleSeatClick(seat.id)}
            style={{
              color: 'black',
              fontWeight: 'bold',
              backgroundColor: isSelected(seat.id) ? 'red' : 'white',
            }}
          >
            {seat.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeatSelection;
