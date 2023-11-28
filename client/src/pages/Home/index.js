import React, {useState} from 'react';
import Sidemenu from '../../components/Sidemenu';
import Navbar from '../../components/Navbar';

const Home = () => { 
  const [isOpen, setIsOpen] = useState(false) // Declaring a state variable isOpen and a function setIsOpen to update its value

  const toggle = () => { // Declaring a function toggle
    setIsOpen(!isOpen) // Toggling the value of isOpen using setIsOpen function
  }

  return (
    <>
    <Navbar toggle={toggle} /> {/* Rendering the Navbar component and passing the toggle function as a prop */}
    <Sidemenu isOpen={isOpen} toggle={toggle} /> {/* Rendering the Sidemenu component and passing isOpen and toggle as props */}

    <section id="section1">

    </section> 

    </>
  );
};

export default Home
