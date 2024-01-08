import styled from 'styled-components';

export const GreyFilter = styled.div`
  position: relative;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.5) 80%);
    mix-blend-mode: multiply; 
  }
`;


export const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 630px;
  max-width: ;
  margin: auto;
  filter: grayscale(30%);

  border-width: 6px 0px 6px 0px;
border-style: solid;
border-color: #222222;
  

`;

export const Slide = styled.div`
  display: ${(props) => (props.isActive ? 'block' : 'none')};
  
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  position: relative;
  align-items: center;
  
  
  

  @media only screen and (max-width: 600px) {
    width: 100%; /* Adjust the width as needed for smaller screens */
    overflow: hidden; /* Crop the sides by hiding overflowing content */


`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 15%;
  transform: translateY(-50%);
  font-size: 1.6rem;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  ${(props) => (props.direction === 'left' ? 'left: 60px;' : 'right: 60px;')} 
`;