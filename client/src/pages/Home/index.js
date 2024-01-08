import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Sidemenu from '../../components/Sidemenu';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { PageContainer, PreFooter, Imgbox, WhatsOn, ComingSoon, Locations, Title, Text, LocationButton, MovieBox, MovieTitle } from './HomeElements';
import logo from '../../assets/images/icon.png'
import ImageSlider from '../../components/ImageSlider';
import UnderNav from '../../components/UnderNav';
import List from '../../components/List';

//image imports for slideshow
import image2 from '../../assets/images/dune1.jpg';
import image1 from '../../assets/images/marvel.jpg';
import image3 from '../../assets/images/dune1.jpg';
 
// image imports for WhatsOn / MovieBox
import movie1 from '../../assets/images/dune1.jpg';
import movie2 from '../../assets/images/cinema.jpg';
import movie3 from '../../assets/images/dune1.jpg';


const Home = () => { 
  const [isOpen, setIsOpen] = useState(false) // Declaring a state variable isOpen and a function setIsOpen to update its value

  const toggle = () => { // Declaring a function toggle
    setIsOpen(!isOpen) // Toggling the value of isOpen using setIsOpen function
  }

   // Images for slideshow
   const images = [
    image1,
    image2,
    image3,
  ];

  const movies = [
    movie1,
    movie2,
    movie3,
  ];
  

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    // Attach the event listener when the component mounts
    window.addEventListener('hashchange', handleRouteChange);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []); 


  return (

    <PageContainer>
    <>
    <Navbar toggle={toggle} /> {/* Rendering the Navbar component and passing the toggle function as a prop */}
    <Sidemenu isOpen={isOpen} toggle={toggle} /> {/* Rendering the Sidemenu component and passing isOpen and toggle as props */}
    <UnderNav />
    
  
    {/* Pass the images array to the ImageSlider component */}

    <ImageSlider images={images} />
  
    <WhatsOn id="whatson">
      <Title> // WHATS ON </Title>
      <div><List /></div>
    </WhatsOn> 



    <Locations id="locations">
      <Title> // OUR LOCATIONS </Title>
    </Locations> 

    <ComingSoon id="comingsoon">
      <Title> // COMING SOON </Title>
    </ComingSoon> 


    <PreFooter style={{height: '400px'}}>

    </PreFooter>

    <PreFooter style={{height: '150px'}}>
      <Imgbox>
      <img src={logo} alt="logo"/>
      </Imgbox>
    </PreFooter>

    <Footer />
    </>
    </PageContainer>
  );
};

export default Home;
