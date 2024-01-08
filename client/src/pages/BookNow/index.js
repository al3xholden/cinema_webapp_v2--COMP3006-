import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-scroll';
import Sidemenu from '../../components/Sidemenu';
import Navbar from '../../components/Navbar';
import {
  PageContainer,
  PreFooter,
  MovieSelection,
  Title,
  BookNowBtnLink,
  BookNowBtn,
  SelectATime,
  SelectASeat,
  MyTicket,
} from './BookNowElements';
import List from '../../components/List';
import SeatSelection from '../../components/SeatSelection';
import Showings from '../../components/TimeSlots';
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
  const { selectedMovie, setSelectedMovie } = useContext(MovieContext);
  const [timeSlotsStyle, setTimeSlotsStyle] = useState({ display: 'none' });
  const [seatSlotsStyle, setSeatSlotsStyle] = useState({ display: 'none' });
  const [myTicketSlotsStyle, setMyTicketSlotsStyle] = useState({ display: 'none' });
  const [isSeatSelectionVisible, setIsSeatSelectionVisible] = useState(false);
  const [isMyTicketVisible, setIsMyTicketVisible] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  

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

  const TimeSelector = () => {
    return (
      <div>
        <Showings selectedMovie={selectedMovie} onSelect={handleTimeSelect} />
      </div>
    );
  };

  const handleButtonClick = () => {
    setTimeSlotsStyle({ display: 'inline-block' });
    setSeatSlotsStyle({ display: 'inline-block' });
    setMyTicketSlotsStyle({ display: 'inline-block' });
  };

  const toggle = () => {
    setIsOpen(!isopen);
  };

  const handleMovieSelect = (movie) => {
    console.log('Selected Movie:', movie);
    setSelectedMovie(movie);

    // Add the logic to adjust the styles of the selected movie element
    const movieElements = document.querySelectorAll('.movie-item');
    movieElements.forEach((element) => {
      const movieId = element.getAttribute('data-movie-id');
      if (movieId === movie.id) {
        // Apply styles to the selected movie
        element.style.transform = 'translateY(-5px)'; 
        element.style.opacity = '0.8'; 
      } else {
        // Reset styles for other movies
        element.style.transform = 'translateY(0)';
        element.style.opacity = '1';
      }
    });
  };

  const handleTimeSelect = (time) => {
    console.log('Selected Time:', time);
    setSelectedTime(time);
  };

  const handleSeatSelection = (seat) => {
    console.log('Selected Seat:', seat);
    setSelectedSeat(seat);
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    // Validate the email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(inputEmail));
  };

  const handleSubmit = () => {
    // Check if the email is valid before saving to MongoDB
    if (isValidEmail) {
      // TODO: I need to Save the data to MongoDB 
      console.log('Saving to MongoDB:', {
        selectedMovie,
        selectedTime,
        selectedSeats,
        email,
      });
    } else {
      // Handle invalid email
      alert('Invalid email. Please enter a valid email address.');
    }
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

  return (
    <PageContainer>
      <>
        <Navbar toggle={toggle} />
        <Sidemenu isopen={isopen} toggle={toggle} />

        <MovieProvider>
          <MovieSelection id="movieSelection">
            <Title> SELECT A MOVIE </Title>
            <div>
              <List onMovieSelect={handleMovieSelect} />

              <BookNowBtn>
                <Link to="selectatime" smooth="true" duration="600">
                  <BookNowBtnLink onClick={handleButtonClick}>BOOK NOW</BookNowBtnLink>
                </Link>
              </BookNowBtn>
            </div>
          </MovieSelection>
        </MovieProvider>

        <SelectATime id="selectatime" style={timeSlotsStyle} selectedMovie={selectedMovie}>
          <Title> SELECT A TIME SLOT </Title>
          <TimeSelector />
        </SelectATime>

        <SelectASeat id="selectaseat" style={seatSlotsStyle}>
          <Title> SELECT A SEAT </Title>
          <SeatSelection selectedMovie={selectedMovie} onSeatSelect={handleSeatSelection} />
        </SelectASeat>

        <MyTicket style={{ ...myTicketSlotsStyle, backgroundColor: '#0A0A0A', top: '1500px', height: '500px', color: 'white' }}>
          <Title> TICKET CONFIRMATION</Title>
          <div>
            <p>Selected Movie: {selectedMovie ? selectedMovie.name : 'Not selected'}</p>
            <p>Selected Time: {selectedTime}</p>
            <p>Selected Seat Numbers: {selectedSeat ? selectedSeat.join(', ') : 'Not selected'} </p>
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              style={{
                width: '80%',
                padding: '10px',
                margin: '10px auto',
                textAlign: 'center',
                border:'10px 10px 10px 10px',
                borderBlockWidth: '5px',
                borderColor: isValidEmail ? 'green' : 'red',
                backgroundColor:'white',
                color:'black',
                fontWeight:'bold'
              }}
            />
            <button onClick={handleSubmit} style={{ padding: '10px', width: '80%', margin: '10px auto', backgroundColor:'white'}}>
              Save to MongoDB / Payment
            </button>
          </div>
        </MyTicket>

        <PreFooter style={{ height: '400px' }}></PreFooter>
        <PreFooter style={{ height: '150px' }}></PreFooter>
      </>
    </PageContainer>
  );
};

export default BookNow;
