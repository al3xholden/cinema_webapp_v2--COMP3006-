import React from 'react';

const MyTicket = ({ movieTitle }) => {
  return (
    <div>
      {movieTitle && (
        <div style={{ color: 'white' }}>
          MOVIE TITLE: {movieTitle}
        </div>
      )}
    </div>
  );
};

export default MyTicket;
