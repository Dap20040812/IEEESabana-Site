import React, { useState } from 'react';
import styled from 'styled-components';
import { images } from '../dataRas';

const SliderWrapper = styled.div`
  width: 50%;
  height: 400px;
  overflow: hidden;
  position: relative;
  @media (max-width: 740px) {
      width: 100%;
  
  }
`;

const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  transition: transform 0.3s ease-in-out;
  left: ${({ index }) => index * 100}%;
`;

const SlideImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 4em;
`;

const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  border-radius: 50%;
  font-size: 2em;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  &:hover{
    background-color: black;
    color: #fff;
  }
  transform: translateY(-50%);
  ${({ direction }) => (direction === "right" ? "right: 0" : "left: 0")};
`;

function SliderRas() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
      setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    };
  
    const prevSlide = () => {
      setCurrentSlide(currentSlide === images.length - 1 ? 1 : currentSlide - 1);
    };
  
    return (
      <SliderWrapper>
        {images.map((image, index) => (
          <SlideWrapper key={index} index={index} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            <SlideImage src={image.src} alt={image.alt} />
          </SlideWrapper>
        ))}
        <SliderButton direction="right" onClick={nextSlide}>
        ➞
        </SliderButton>
      </SliderWrapper>
    );
};

export default SliderRas;