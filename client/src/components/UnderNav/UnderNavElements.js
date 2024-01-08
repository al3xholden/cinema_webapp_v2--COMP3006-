import styled, { keyframes } from 'styled-components';

export const StyledUnderNav = styled.div`
  background-color: #0a0a0a;
  height: 62px;
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  border-width: 1.8px 0px 0px 0px;
  border-style: solid;
  border-image: linear-gradient(to right, #222222, #1170BE);
  border-image-slice: 1;

  @media screen and (max-width: 780px) {
    display: none;
}
`;

export const Text = styled.div`
font-weight: bold;
font-size: 11px;
color: white;
letter-spacing: 1.8px;
user-select: none;


/* Additional styles for text color variations */
span.red { color: red; }
span.blue { color: #1170BE; }
span.yellow { color: yellow; }
`;