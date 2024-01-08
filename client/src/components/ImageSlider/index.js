import React from 'react';
import { SliderContainer, Slide, Image, ArrowButton, GreyFilter } from './ImageSliderElements';

const ImageSlider = ({ images }) => {
  // Unconditionally call the useState hook at the top level
  const [currentSlide, setCurrentSlide] = React.useState(0);

  // Check if images is not provided or not an array
  if (!images || !Array.isArray(images) || images.length === 0) {
    return null; // or render a default image or a message
  }

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  return (
    <SliderContainer>
      <GreyFilter>
      {images.map((image, index) => (
        <Slide key={index} isActive={index === currentSlide}>
          <Image src={image} alt={`Slide ${index}`} />
        </Slide>
      ))}
      </GreyFilter>

      {images.length > 1 && (
        <>
          <ArrowButton onClick={prevSlide} direction="left" style={{transition: '5.5s ease'}}>
            &#10094;
          </ArrowButton>
          <ArrowButton onClick={nextSlide} direction="right">
            &#10095;
          </ArrowButton>


        </>
      )}
    </SliderContainer>
  );
};

export default ImageSlider;
