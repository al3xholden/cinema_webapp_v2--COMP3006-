import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavContainer, NavLogo, MenuIcon, NavMenu , NavItem, NavLinks, NavBtn, NavBtnLink, section, section1} from './NavbarElements.js'

const Navbar = () => {
  return (

    <>
    <Nav>
        <NavContainer>

          {/* Navbar Logo */}
          <NavLogo to="/"> V I S I O N </NavLogo> 
          

          {/* Navbar Menu Icon */}
          <MenuIcon>
            <FaBars />
          </MenuIcon>

          {/* Book Now Button */}

          

          {/* Navbar Menu Content */}
          <NavMenu>

          <NavBtn>
            <NavBtnLink to="/booknow">BOOK NOW</NavBtnLink>
          </NavBtn>


            <NavItem>
              <NavLinks to="section1">WHATS ON</NavLinks>
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

    <section id="section1">

    </section>
    </>
  )
}

export default Navbar;
