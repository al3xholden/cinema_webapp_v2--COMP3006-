import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const PageContainer = styled.div `
background-color: #0A0A0A;


`;

export const PreFooter = styled.div `
background-color: #0A0A0A;
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
z-index: 10;
`;


export const Text = styled.div `
color: white;
font-weight: bold;
font-size: 8.5px;
margin-left: 33px;
letter-spacing: 1.5px;
`;


export const MovieSelection = styled.div `
background-color: #0A0A0A;
width: 100%;
z-index: 10;
padding: 0 88px 0 88px;
position: absolute;
display: inline-block;

border-width: 6px 0px 0px 0px;
border-style: solid;
border-color: #222222;

@media screen and (max-width: 640px) {
    padding: 0 0px 0 0px;
}


`;

export const SelectASeat = styled.div `
background-color: #0A0A0A;
width: 100%;
z-index: 10;
padding: 0 88px 0 88px;
position: absolute;
display: inline-block;

border-width: 6px 0px 0px 0px;
top: 1000px;
border-style: solid;
border-color: #222222;

@media screen and (max-width: 640px) {
    padding: 0 0px 0 0px;
}


`;

export const Title = styled.div ` 
padding: 20px 0px 0px 0px;
color: yellow ;

justify-content: center;
font-weight: bold;
font-size: 13.5px;
margin-left: 130px;
margin-right: 130px;
letter-spacing: 4.85px;
user-select: none;
padding: 20px;

border-width: 0px 0px 3.5px 0px;
border-style: solid;
border-image: linear-gradient(to right, #222222, #1170BE);
border-image-slice: 100;
  

`;

export const PickAMovie = styled.div `
background-color: #0A0A0A;
width: 100%;
height: 508px;
z-index: 10;
padding: 0 88px 0 88px;

border-width: 6px 0px 0px 0px;
border-style: solid;
border-color: #222222;

@media screen and (max-width: 640px) {
    padding: 0 0px 0 0px;
    margin-left: -90px;
}
`;

export const BookNowBtn = styled.nav`
  position: fixed;
  bottom: -500px;
  right: 250px;
  position: absolute;
  display: flex;
  align-items: center;
  user-select: none;
  justify-content: center;
  margin-bottom: 100px;
  opacity: 70%;

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

export const BookNowBtnLink = styled(LinkRouter)`
  border-radius: 3px;
  background: yellow;
  white-space: nowrap;
  height: 30px;
  padding: 10px 20px;
  color: black;
  font-size: 11.5px;
  font-weight: bold;
  letter-spacing: 4.85px;
  user-select: none;
  user-drag: none;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #1170BE;
    color: white;
  }
`;
export const SelectATime = styled.div `
background-color: #0A0A0A;
width: 100%;
top: 800px;
height: 800px;
z-index: 10;
padding: 0 88px 0 88px;
position: absolute;

border-width: 6px 0px 0px 0px;
border-style: solid;
border-color: #222222;
display: none;

@media screen and (max-width: 640px) {
    padding: 0 0px 0 0px;
}


`;

export const MyTicket = styled.div `
background-color: #0A0A0A;
width: 100%;
z-index: 10;
padding: 0 88px 0 88px;
position: absolute;
display: inline-block;

border-width: 6px 0px 0px 0px;
top: 1000px;
border-style: solid;
border-color: #222222;

@media screen and (max-width: 640px) {
    padding: 0 0px 0 0px;
}


`;