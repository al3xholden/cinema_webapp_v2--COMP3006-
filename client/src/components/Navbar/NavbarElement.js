import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav `
background: #0A0A0A;
height: 68px;
display: flex;
justify-content: center;
align-items: center;
position: sticky;

top: 0;
z-index: 10;
transition: all 0.8s ease-in-out; 

@media screen and (max-width: 640px) { 
    height: 65px; 
} 


`;

export const NavContainer = styled.div`
display: flex; 
justify-content: space-between;
height: 50px;
z-index: 1;
width: 100%;
padding: 0 25px 0 0px;
max-width: 830px;
transition: all 0.8s ease-in-out; 

@media screen and (max-width: 640px) {
    height: 65px;
}

`;

export const NavLogo = styled(LinkRouter)`
color: white;
justify-self: flex-start;
cursor: pointer;
font-size: 14px;
display: flex;
align-items: center;
margin-left: 33px;
margin-top: 4.5px;
font-weight: bold;
text-decoration: none;
transition: all 0.8s ease-in-out; 


@media screen and (max-width: 640px) {
    font-size: 15px;
    margin-left: 30px;
}

&:hover {
    color: #1170BE;
}
`;


export const MenuIcon = styled.div`
  display: none;
  user-select: none;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 640px) {
    display: block;
    position: absolute;
    top: 25px;
    right: 35px;
    transform: translate(-5%, 5%); /* Fix: Add the percentage sign after -100 */
    font-size: 1.35rem;
    cursor: pointer;
    color: white;
  }

  &:hover {
    color: #1170BE;
  }
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
list-style: none
text-align: center;
margin-right: -10px;

@media screen and (max-width: 640px) {
    display: none;  
    
}
`;

export const NavItem = styled.li`
height: 73px;
background-color: transparent;



`;

export const NavLinks = styled(LinkScroll)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 0.7rem;
height: 44px;
cursor: pointer;
font-weight: bold;
font-size: 11.5px;
user-select: none;

&.active {
    border-bottom: 2px solid white;
    border-color: white;
}

&:hover {
    color: #1170BE;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
user-select: none;


@media screen and (max-width: 640px) {
    display: none;
}
`;

export const NavBtnLink = styled(LinkRouter) `
border-radius: 3px;
margin-right: 10px;
background: white;
white-space: nowrap:
height: 44pxpx;
padding: 4px 8px;
color: black;
font-size: 11.5px;
font-weight: bold;
outline: none;
border: none;
cursor: pointer;
text-decoration: none;
transition: all 0.2s ease-in-out;

&:hover {
    all 0.2s ease-in-out;
    background-color: #1170BE;
    color: white;
}
`;