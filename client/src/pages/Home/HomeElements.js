import styled from 'styled-components';

export const PageContainer = styled.div `
background-color: #0A0A0A;


`;

export const PreFooter = styled.div `
background-color: #0A0A0A;
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
border-width: 1px 0px 1px 0px;
border-style: solid;
border-color: #222222;
z-index: 10;
`;


export const Text = styled.div `
color: white;
background: transparent;
font-weight: bold;
font-size: 8.5px;
margin-left: 33px;
letter-spacing: 1.5px;
`;

export const Imgbox = styled.div `
display: flex;
scale: 15%;
justify-content: center;
align-items: center;
z-index: 10;
`;
export const WhatsOn = styled.div `
background-color: #0A0A0A;
width: 100%;
height: 508px;
z-index: 10;
padding: 0 88px 0 88px;
display: inline-block;




@media screen and (max-width: 640px) {
    padding: 0 0px 0 0px;
    margin-left: -90px;
}


`;

export const ComingSoon = styled.div `
background-color: #0A0A0A;
width: 100%;
height: 508px;
z-index: 10;
padding: 0 88px 0 88px;

@media screen and (max-width: 640px) {
    padding: 0 0px 0 0px;
    margin-left: -90px;
}
`;

export const Locations = styled.div `
background-color: #0A0A0A;
height: 508px;
padding: 0 88px 0 88px;
@media screen and (max-width: 640px) {
    padding: 0 0px 0 0px;
    margin-left: -90px;
}


`;

export const Title = styled.div ` 
padding: 20px 0px 0px 0px;

color: white;
justify-content: center;
font-weight: bold;
font-size: 13.5px;
margin-left: 130px;
  margin-right: 130px;
letter-spacing: 4.9px;
user-select: none;
padding: 20px;

border-width: 0px 0px 3.5px 0px;
border-style: solid;
border-image: linear-gradient(to right, #222222, #1170BE);
border-image-slice: 100;

@media screen and (max-width: 640px) {
    width: 100%;
    
}
`;

