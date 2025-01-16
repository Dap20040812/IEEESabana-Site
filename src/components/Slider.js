import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import React, {useState} from 'react'
import styled from 'styled-components'
import {sliderItems} from '../data'

function Slider() {

    const [slideIndex, setSlideIndex] = useState()

    const handleClick = (direction) => {
        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
        }
        else {
            setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
        }
    };

  return (
    <Container>
        <Arrow direction='left' onClick={() => handleClick("left")}>
            <FaArrowLeft/>
        </Arrow>
        <Wrap slideIndex={slideIndex} >
            {sliderItems.map(item => (
                <Slide key={item.id} >
                    <ImgContainer>
                        <Image src={item.img} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>
                            {item.title}
                        </Title>
                    </InfoContainer>
                </Slide>
            ))}
        </Wrap>
        <Arrow direction='right' onClick={() => handleClick("right")}>
            <FaArrowRight/>
        </Arrow>
    </Container>
  )
}

export default Slider

const Container = styled.div `
    margin-top: 5em;
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div `
    width: 50px;
    height: 50px;
    background-color: #BA97C5ED;
    border-radius: 50%; 
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'}; 
    margin: auto;
    cursor: pointer;
    opacity: 1;
    z-index: 2;
`
const Wrap = styled.div `
    margin-top: 5em;
    display: flex;
    transform: translateX(${props => props.slideIndex * -100}vw);
    transition: all 1.5s ease;
    color: white;

`

const Slide = styled.div `
    color: #752F8B;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw; 
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`

const ImgContainer = styled.div `
    flex: 1;
    align-items: center;
    justify-content: center;
`

const InfoContainer = styled.div `
    flex: 1;
`

const Image = styled.img `
    width: 45vw;
    height: 30vw;
    border-radius: 2em;
    @media (max-width: 1000px) {
        width: 65vw;
        height: 50vw;
    }

`

const Title = styled.h1 ` 
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 2em;
    width: 96%;
`
const Description = styled.p `
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

const Button = styled.button `
    padding: 10px;
    font-size: 20px;
    background-color: "#FFFDFDED";
    cursor: pointer;
    &:hover {
        background-color: black;
        color: white;
    }
`