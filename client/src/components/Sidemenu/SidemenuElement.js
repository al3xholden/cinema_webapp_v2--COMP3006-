import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const SidemenuContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #0d0d0d;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;

opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')}; // This controls the opacity based on the isOpen prop
top: ${({ isOpen }) => (isOpen ? '0' : '-100%')}

`;

export const CloseMenuIcon = styled(FaTimes)`
color: white
`;

export const Icon = styled.div`
position: absolute;
top: 25px;
right: 30px;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;

`;

export const SidemenuWrapper = styled.div`
color: white;
`

export const SidemenuLink = styled(LinkScroll)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
color: white;
cursor: pointer;

&:hover {
    color: #01bf71;
    transitiobn: 0.2 ease-in-out;
}
`

export const SidemenuItems = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat( 6, 80px);
text-align: cneter;

@media screen and (max-width: 480px;) {
    grid-template-rows: repeat( 6, 60px);
}
`