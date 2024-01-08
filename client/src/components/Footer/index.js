import React from 'react';
import { Footer, Text } from './FooterElements.js';

const FooterContainer = () => {
  const year = new Date().getFullYear();
  return (
    <Footer>
      <Text>COPYRIGHT © VISION CINEMA {year}</Text>
     
    </Footer>
  );
};

export default FooterContainer;
