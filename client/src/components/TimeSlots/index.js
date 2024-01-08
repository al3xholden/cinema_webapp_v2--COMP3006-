import React from 'react';

const Showings = React.memo(({ selectedmovie, onSelect }) => {
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
    marginLeft: '5px', 
    marginRight: 'auto', 
  };

  const textStyle = {
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div>
      <h2 style={textStyle}>Showings for {selectedmovie?.name}</h2>
      {showingsData.map((showing, index) => (
        <button
          key={index}
          onClick={() => onSelect(showing.time)} // Pass the selected time to onSelect
          to="#selectaseat"
          smooth="true"
          duration={600}
          style={buttonStyle}
        >
          {showing.title}
          <br />
          {showing.time}
        </button>
      ))}
    </div>
  );
});

export default Showings;
