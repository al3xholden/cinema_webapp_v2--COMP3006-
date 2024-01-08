import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import Sidemenu from '../../components/Preloader/Sidemenu';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import {
  PageContainer,
  PreFooter,
  MovieSelection,
  Title,
  BookNowBtnLink,
  BookNowBtn,
  SelectATime,
  SelectASeat,
  MyTicket
} from './BookNowElements';
import List from '../../components/List';
import Showings from '../../components/TimeSlots';
import SeatSelection from '../../components/SeatSelection';
import MovieContext from '../../contexts/MovieContext.js';

const MovieProvider = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <MovieContext.Provider value={{ selectedMovie, setSelectedMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

const BookNow = () => {
  const [isopen, setIsOpen] = useState(false);
  const { selectedmovie, setSelectedMovie } = useContext(MovieContext);
  const [timeSlotsStyle, setTimeSlotsStyle] = useState({ display: 'none' });
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null); // State for selected time
  const [selectedSeat, setSelectedSeat] = useState(null); // State for selected seat

  const handleSeatSelect = (seats) => {
    console.log('Got the selected seat:', seats);
    setSelectedSeats(seats);
  };

  const showingsData = {
    'Movie 1': [
      { time: '10:00 AM', title: 'MORNING' },
      { time: '1:00 PM', title: 'AFTERNOON' },
      { time: '4:00 PM', title: 'EVENING' },
      { time: '7:00 PM', title: 'LATE-NIGHT' },
    ],
    'Movie 2': [
      { time: '11:00 AM', title: 'MORNING' },
      { time: '2:00 PM', title: 'AFTERNOON' },
      { time: '5:00 PM', title: 'EVENING' },
      { time: '8:00 PM', title: 'LATE-NIGHT' },
    ],
  };

  const TimeSelector = ({ selectedmovie }) => {
    console.log('Selected Movie in TimeSelector:', selectedmovie);
    const movieShowings = showingsData[selectedmovie] || [];
    console.log('Movie Showings in TimeSelector:', movieShowings);

    return (
      <div>
        <Showings selectedMovie={selectedmovie} />
      </div>
    );
  };

  const handleButtonClick = () => {
    setTimeSlotsStyle({ display: 'inline-block' });
  };

  const toggle = () => {
    setIsOpen(!isopen);
  };

  const handleMovieSelect = (movie) => {
    console.log('Selected Movie:', movie);
    setSelectedMovie(movie);
  };

  const handleTimeSelect = (time) => {
    console.log('Selected Time:', time);
    setSelectedTime(time);
  };

  const handleSeatSelection = (seat) => {
    console.log('Selected Seat:', seat);
    setSelectedSeat(seat);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    window.scrollTo(0, 0);
    window.addEventListener('hashchange', handleRouteChange);

    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []);


  if (!selectedTime) { console.log("selectedTime not received"); }
  if (!selectedSeat) { console.log("selectedTime not received"); }
  if (!selectedmovie) { console.log("selectedTime not received"); }


  return (
    <PageContainer>
      <>
        <Navbar toggle={toggle} />
        <Sidemenu isopen={isopen} toggle={toggle} />

        <MovieProvider>
          <MovieSelection id="movieSelection">
            <Title> SELECT A MOVIE </Title>
            <div>
              <List onMovieSelect={handleMovieSelect} selectedMovie={selectedmovie} />

              {selectedmovie && <SeatSelection selectedMovie={selectedmovie} onSeatSelect={handleSeatSelection} />}

              <BookNowBtn>
                <Link to="selectatime" smooth={true} duration={600}>
                  <BookNowBtnLink onClick={handleButtonClick}>
                    BOOK NOW 
                  </BookNowBtnLink>
                </Link>
              </BookNowBtn>
            </div>
          </MovieSelection>
        </MovieProvider>

        <SelectATime id='selectatime' style={timeSlotsStyle} selectedMovie={selectedmovie}>
          <Title> SELECT A TIME SLOT </Title>
          <TimeSelector style={timeSlotsStyle} onSelect={handleTimeSelect} />
        </SelectATime>


        <SelectASeat id='selectaseat' >
          <Title> SELECT A SEAT </Title>
          <SeatSelection />
          
          <div>
            {selectedmovie && ( 
            <SeatSelection selectedMovie={selectedmovie} onSeatSelect={handleSeatSelect} />)}
          </div>
        </SelectASeat>


        <MyTicket style={{ backgroundColor: '#0A0A0A', top: '1500px', height: '500px', color: 'white'}}>
          <Title> TICKET CONFIRMATION</Title>
          <div>
            <p>Selected Movie: {selectedmovie}</p>
            <p>Selected Time: {selectedTime}</p>
            <p>Selected Seat: {selectedSeat}</p>
            </div>
        </MyTicket>


        <PreFooter style={{ height: '400px' }}></PreFooter>
        <PreFooter style={{ height: '150px' }}></PreFooter>
      </>
    </PageContainer>
  );
};

export default BookNow;