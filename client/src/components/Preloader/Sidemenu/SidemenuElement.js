import styled, { keyframes } from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

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


export const NavLogo = styled(LinkRouter)`
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 15px;
  display: flex;
  align-items: center;
  margin-left: 33px;
  margin-top: 0;
  font-weight: bold;
  text-decoration: none;
  transition: all 4.8s ease-in-ou
  user-select: none;

`;

export const SidemenuContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #0d0d0d;
opacity: 70%;
display: grid;
align-items: center;
top: 0;
transition: 0.32s ease-in-out;

opacity: ${({ isOpen }) => (isOpen ? '86%' : '20')}; // This controls the opacity based on the isOpen prop
right: ${({ isOpen }) => (isOpen ? '0' : '-100%')}

`;

export const CloseMenuIcon = styled(FaTimes)`
color: white;

`;

export const Icon = styled.div`
position: absolute;
user-select: none;
top: 17.5px;
right: 34px;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;

animation: rotate

`;

export const SidemenuWrapper = styled.div`
color: white;

`

export const SidemenuLink = styled(LinkScroll)`
display: flex;
align-items: center;
justify-content: left;
padding-left: 40px;


font-size: 1.5rem;

text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
color: white;
font-size: 22px;
cursor: pointer;

&:hover {
    color: #1170BE;
    transitiobn: 0.2 ease-in-out;
}
`

export const SidemenuItems = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat( 6, 80px);
text-align: left;

@media screen and (max-width: 480px;) {
    grid-template-rows: repeat( 6, 60px);
}
`

