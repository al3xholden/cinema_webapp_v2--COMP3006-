import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import { 
  Nav, 
  NavContainer, 
  NavLogo, 
  MenuIcon, 
  NavMenu , 
  NavItem, 
  NavLinks, 
  NavBtn, 
  NavBtnLink

} from './NavbarElement.js';

const Navbar = ({ toggle }) => {
  return (

    <>
    <Nav>
        <NavContainer>
          {/* Navbar Logo */}
          <NavLogo to="/"> V I S I O N  | CINEMA</NavLogo> 
          {/* Navbar Menu Icon */}
          <MenuIcon >
            <FaBars onClick={toggle}/>
          </MenuIcon>
          {/* Navbar Menu Content */}
          <NavMenu>
            {/* Navbar Menu Book Now Button */}
            <NavBtn>
              <NavBtnLink to="/booknow" >BOOK NOW</NavBtnLink>
            </NavBtn>
            {/* Navbar Menu Links */}          
            <NavLinks to="whatson" smooth={true} duration={800} offset={-72}>WHAT'S ON</NavLinks>
            <NavLinks to="comingsoon" smooth={true} duration={800} offset={-50}>COMING SOON</NavLinks>
            <NavLinks to="locations" smooth={true} duration={800} offset={-50}>LOCATIONS </NavLinks>
          </NavMenu>
        </NavContainer>
    </Nav>
    </>
  )
}

export default Navbar;
