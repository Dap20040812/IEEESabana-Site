import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Fade, Zoom} from 'react-reveal'
import { useLocation } from 'react-router-dom';

function Ras() {
const { pathname } = useLocation();

useEffect(() => {
    window.scrollTo(0, 0);
}, [pathname]);

  return (
    <Container>
        <Section>
        <Fade bottom>
                    <Logo>
                       <RLogo1 src='https://edu.ieee.org/pe-usil/wp-content/uploads/sites/402/2018/06/IEEE_RAS_logo_no-background-1024x377.png'/> 
                    </Logo>
                    <Arrow>▼</Arrow>
                </Fade>
                <BallW1 src='images/ras4.png'/>
                <BallW2 src='images/ras4.png'/>
        </Section>
    </Container>
  )
}

export default Ras

const Container = styled.div`
    display: flex;
    height: max-content;
    flex-direction: column;
    align-items: center;
    position: relative;
    font-family: 'Merriweather';
`
const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`
const BallW1 = styled.img`
    position: absolute;
    z-index: -1;
    width: 30vw;
    top: 0;
    left: 0;
    @media (max-width: 740px) {
        width: 45vw;

    }
`
const BallW2 = styled.img`
    position: absolute;
    z-index: -1;
    width: 30vw;
    top: 0;
    right: 0;
    transform: scaleX(-1);
    @media (max-width: 740px) {
        width: 45vw;

    }
`
const Logo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 60vh;

`

const Arrow = styled.div`
    justify-content: flex-end;
    font-size: 2em;
    width: 100%;
    animation: animateDown infinite 1.5s;
    color: #752F8B;
    
`
const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`
const RLogo1 = styled.img`

    width:50% ;
    @media (max-width: 740px) {
        width: 70%;
    }
`