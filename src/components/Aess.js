import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Fade, Zoom} from 'react-reveal'
import { useLocation } from 'react-router-dom';

function Aess() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

  return (
    <Container>
        <Section>
            <Center>
                <Fade bottom>
                    <Logo>
                        <Name>AESS</Name>
                        <Description>Aerospace And Electronic System Society</Description>
                    </Logo>
                    <Arrow>▼</Arrow>
                </Fade>
            </Center>
                <Astro src='images/astro.png'/>
                <Ball1 src='images/rf2.png'/>
                <Cohete src='images/cohete.png'/>
                <Ball2 src='images/l1.png'/>
                <Planet src='images/planet.png'/>
                <Ball3 src='images/r3.png'/>
                <Satelite src='images/satelite.png'/>
                <Ball4 src='images/l2.png'/>
                <Ball41 src='images/l3.png'/>
        </Section>
        <Section1>
            <Fade bottom repeat>
                <SubTittle>
                    <>¿QUÉ ES AESS UNISABANA?</>
                    <span/>
                </SubTittle>
                <Blocks>
                    <Block>
                        <img src='images/P1.png' width={"50%"}/>
                        <Info>Es un capítulo de la rama de IEEE enfocado en el desarrollo del área aeroespacial y en el aprendizaje de todo lo relacionado con este tema</Info>
                    </Block>
                    <Block>
                        <img src='images/P2.png' width={"50%"}/>
                        <Info>Es un espacio colaborativo que busca fomentar el conocimiento científico por medio de proyectos en materia de las ciencias espaciales</Info>
                    </Block>
                    <Block>
                        <img src='images/P3.png' width={"50%"}/>
                        <Info>Es un grupo enfocado en el aprendizaje y apoyo continuo por medio de la practica. la interacción con sistemas y la enseñanza de expertos en los temas aeroespaciales </Info>
                    </Block>
                </Blocks>
            </Fade>
                <BallM1 src='images/m1.png'/>
                <BallM2 src='images/m2.png'/>
        </Section1>
        <Section1>
            <Fade bottom>
                <Part>
                    <ALogo src='images/aess.png'/>
                    <Part1>
                        <Text>¿Quieres ser parte de AESS?</Text>
                        <a href='https://forms.office.com/r/Yhwag0Xivc' target="_blank"><Button >¡UNETE!</Button></a>
                    </Part1>
                </Part>
            </Fade>
            <BallA1 src='images/a1.png'/>
            <BallA2 src='images/a2.png'/>
        </Section1>
    </Container>
  )
}

export default Aess
const Container = styled.div`
    display: flex;
    height: max-content;
    flex-direction: column;
    align-items: center;
    position: relative;
    font-family: Arial, Helvetica, sans-serif;

`
const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`
const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`
const Section1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Name = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 8em;
    color: #E8E0EB;
    text-shadow: -10px 8px 0px black;
`
const Arrow = styled.div`
    justify-content: flex-end;
    font-size: 2em;
    width: 100%;
    text-shadow: -2px 2px 0px #E8E0EB;
    animation: animateDown infinite 1.5s;
    
`
const Logo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 60vh;

`
const Description = styled.div`
   font-weight : bold;
`
const Planet = styled.img`
    position: absolute;
    z-index: -1;
    right: 3vh;
    top: -5vw;
    width: 20vw;
    @media (max-width: 800px) {
        width: 40vw;

    }
`
const Ball1 = styled.img`
    position: absolute;
    z-index: -2;
    width: 30vw;
    right: 0;
    top: 40vh;
    @media (max-width: 740px) {
        width: 35vw;
        top: 70vh;

    }
`
const Ball11 = styled.img`
    position: absolute;
    z-index: -2;
    width: 10vw;
    right: 20vw;
    bottom: 150vh;
    @media (max-width: 740px) {
        width: 15vw;
        right: 22vw;

    }
`
const Ball3 = styled.img`
    position: absolute;
    z-index: -2;
    width: 12vw;
    right: 0;
    top: 0;
    @media (max-width: 740px) {
        width: 20vw;

    }
`
const Ball2 = styled.img`
    position: absolute;
    z-index: -2;
    width: 20vw;
    left: 0;
    top: 50vh;
    @media (max-width: 740px) {
        width: 30vw;
        top: 70vh;
    }
`
const Ball4 = styled.img`
    position: absolute;
    z-index: -2;
    width: 2vw;
    left: 0;
    @media (max-width: 740px) {
        width: 4vw;

    }
    top: 10vw;
`
const Ball41 = styled.img`
    position: absolute;
    z-index: -2;
    width: 13vw;
    left: 8vw;
    top: 1vw;
    @media (max-width: 740px) {
        width: 18vw;

    }
`
const Cohete = styled.img`
    position: absolute;
    z-index: -1;
    width: 25vw;
    left: 0;
    top: 35vh;
    @media (max-width: 740px) {
        width: 40vw;
        top: 60vh;
    }
`

const Astro = styled.img`
    position: absolute;
    z-index: -1;
    width: 35vw;
    right: 0;
    top: 30vh;
    @media (max-width: 740px) {
        width: 40vw;
        top: 65vh;
    }
`
const Satelite = styled.img`
    position: absolute;
    z-index: -1;
    width: 25vw;
    left: 0;
    top: -8vw;
    @media (max-width: 740px) {
        width: 30vw;

    }
`
const SubTittle = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 2em;
    font-weight: bold ;
    align-items: center;
    padding: 2em;
    span {
    margin: 1em;
    height: 4px;
    width: 5em;
    background: black;
    margin-bottom: 4px;
    border-radius: 5px;
  }
`
const Blocks = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);    
    grid-gap: 10em;
    padding: 2em;
    @media (max-width: 1300px) {
        grid-template-columns: repeat(2,1fr);  
    }
    @media (max-width: 740px) {
        grid-template-columns: repeat(1,1fr);  
  
    }
`
const Block = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Info = styled.div`
    margin: 1em;
    display: flex;
    background-color: #E8E0EB;
    box-shadow: -5px 5px 0px black;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    padding: 0.5em;
    width: 11em;
    height: 11em;
`
const BallM1 = styled.img`
    position: absolute;
    z-index: -1;
    width: 60vw;
    left: 0;
    top: 135vh;
    @media (max-width: 740px) {
        width: 30vw;

    }
`
const BallM2 = styled.img`
    position: absolute;
    z-index: -1;
    width: 38vw;
    right: 0;
    top: 155vh;
    @media (max-width: 740px) {  
        width: 30vw;

    }
`

const Part  = styled.div`
    margin-top: 5em;
    margin-bottom: 2em;
    display: grid;
    grid-template-columns: repeat(2,1fr);    
    grid-gap: 5em;
    @media (max-width: 740px) {
        grid-template-columns: repeat(1,1fr);  
  
    }
`
const Part1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a {
        text-decoration: none;
    }
`
const Text  =styled.div`
    font-weight: bold;
    text-align: center;
    font-size: 1.2em;
`
    const Button = styled.div`
        background-color: black;
        border-radius: 2em;
        color: white;
        font-weight: bold;
        padding: 1em;
        width: 10em;
        margin-top: 1em;
        &:hover{
            background-color: #9C969E;
            color: black;
            transform: scale(1.1);
            transition: 0.5s;
        }
    `
const BallA1 = styled.img`
    position: absolute;
    z-index: -1;
    width: 6vw;
    left: 0;
    bottom: 50vh;
    @media (max-width: 740px) {
        width: 0vw;

    }
`
const BallA2 = styled.img`
    position: absolute;
    z-index: -1;
    width: 60vw;
    right: 0;
    bottom: 0;
    @media (max-width: 740px) {
        width: 0vw;

    }
`
const ALogo = styled.img`
    @media (max-width: 740px) {
        width: 95%;
    }
`
