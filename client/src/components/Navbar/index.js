import React from 'react';
import { FaBars } from 'react-icons/fa';
import { 
  Nav, 
  NavContainer, 
  NavLogo, 
  MenuIcon, 
  NavMenu , 
  NavItem, 
  NavLinks, 
  NavBtn, 
  NavBtnLink, 
  section, 
  section1

} from './NavbarElement.js';

const Navbar = ({ toggle }) => {
  return (

    <>
    <Nav>
        <NavContainer>

          {/* Navbar Logo */}
          <NavLogo to="/"> V I S I O N </NavLogo> 
          

          {/* Navbar Menu Icon */}
          <MenuIcon onClick={toggle}>
            <FaBars />
          </MenuIcon>

          {/* Navbar Menu Content */}
          <NavMenu>

            {/* Navbar Menu Book Now Button */}
            <NavBtn>
              <NavBtnLink to="/booknow">BOOK NOW</NavBtnLink>
            </NavBtn>

            {/* Navbar Menu Links */}
            <NavItem>
              <NavLinks to="section1">WHAT'S ON</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="section2">COMING SOON</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="section3">LOCATIONS </NavLinks>
            </NavItem>
          </NavMenu>

        </NavContainer>
    </Nav>
    </>
  )
}

export default Navbar;
