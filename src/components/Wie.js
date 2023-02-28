import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Fade, Zoom} from 'react-reveal'
import Slider from './Slider'
import { useLocation } from 'react-router-dom';

function Wie() {
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
                        <WLogo1 src='images/wie.png'/>
                        <Desc>Grupo de Afinidad IEEE Universidad de la Sabana</Desc>    
                    </Logo>
                </Fade>
                <Fade bottom>
                    <Arrow>▼</Arrow>
                </Fade>
            </Center>
            <BallW1 src='images/wl.png'/>
            <BallW2 src='images/wl.png'/>
        </Section>
        <Section1>
            <Description>
                <Fade bottom>
                    Somos un grupo de afinidad de la rama IEEE Unisabana enfocado en crear espacios para concientizar y promover la participación de mujeres en la ingeniería.
                </Fade>
            </Description>
        </Section1>
        <Section2>
            <SubTittle>
                    <Team src='images/wteam.png'/>
                <Text>
                    <Fade bottom>Nuestro Equipo</Fade>
                </Text>
            </SubTittle>
            <Personas>
                <Fade bottom>
                    <Persona>
                        <Foto>
                            <img src='images/presiw.jpeg'></img>
                        </Foto>
                        <Cargo>
                            <>Presidenta</>
                            <span/>
                            <Name>
                                Mariana Gutierrez
                            </Name>
                        </Cargo>
                    </Persona>
                </Fade>
                <Fade bottom>
                    <Persona>
                        <Foto>
                            <img src="images/wvice.jpg"/>
                        </Foto>
                        <Cargo>
                            <>Vicepresidente</>
                            <span/>
                            <Name>
                                David Corzo
                            </Name>
                        </Cargo>
                    </Persona>
                </Fade>   
            </Personas>
            <Personas>
                <Fade bottom>
                    <Persona>
                        <Foto>
                            <img src="images/wgest.jpg"/>
                        </Foto>
                        <Cargo>
                            <>Líder comité de gestión de proyetos</>
                            <span/>
                            <Name>
                                María Jose Casanova
                            </Name>
                        </Cargo>
                    </Persona>
                </Fade>
                <Fade bottom>
                   <Persona>
                        <Foto>
                            <img src="images/wcomu.jpg"/>
                        </Foto>
                        <Cargo>
                            <>Líder comité de comunicación</>
                            <span/>
                            <Name>
                                Sara Pineda
                            </Name>
                        </Cargo>
                    </Persona>
                </Fade>
                <Fade bottom>
                    <Persona>
                        <Foto>
                            <img src="images/wcomi.jpg"/>
                        </Foto>
                        <Cargo>
                            <>Líder comité de comunicación interna</>
                            <span/>
                            <Name>
                                María Alejandra Morales
                            </Name>
                        </Cargo>
                    </Persona>
                </Fade>
                <Fade bottom>
                    <Persona>
                        <Foto>
                            <img src="images/mia.jpg"/>
                        </Foto>
                        <Cargo>
                            <>Líder comité de innovación</>
                            <span/>
                            <Name>
                                María Lucía Lacouture
                            </Name>
                        </Cargo>
                    </Persona>
                </Fade>
            </Personas>
        </Section2>
        <Section2>
            <SubTittle1>
                <Text1><Fade bottom>Actividades</Fade></Text1>
                <Act src='images/wac.png'/>
            </SubTittle1>
        </Section2>
            <Slider/>
        <Section2>
            <Part>
                <Fade bottom>
                    <WLogo src='images/wie.png'/>
                </Fade>
                    <Part1>
                        <Fade bottom><a href='https://forms.office.com/r/PZyih9Dh54' target="_blank"><Besp><span>Unete</span></Besp></a></Fade>
                    </Part1>
            </Part>
        </Section2>
    </Container>
  )
}

export default Wie

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
const Desc = styled.div`
   font-weight : bold;
   font-size: 1.5em;
   color: #752F8B;
   width: 70%;

`
const Logo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 60vh;

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
const Description = styled.div`
   font-weight : bold;
   color: white;
   font-size: 2em;
   padding: 2em;
   width: 70%;
`
const Section1 = styled.div`
    display: flex;
    justify-content: center;
    background-color: #752F8B;
    width: 100%;

`
const Section2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 3em;
    justify-content: center;
`
const SubTittle = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1em;
    border: 4px solid #752F8B;
    align-items: center;
    justify-content: center;
    width: 90%;
    @media (max-width: 740px) {
        width: 80%;
    }
`
const SubTittle1 = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1em;
    background-color: #BA97C5;
    align-items: center;
    justify-content: center;
    width: 90%;
    @media (max-width: 740px) {
        width: 80%;
    }
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
const Team = styled.img`
    width: 40%;
`
const Act = styled.img`
    width: 20%;
    margin-left: 2em;
`
const Text = styled.div`
    color: #752F8B;
    font-size: 4em;
    font-weight: bold;
    @media (max-width: 740px) {
        font-size: 2em;

    }

`
const Text1 = styled.div`
    color: #752F8B;
    font-size: 4em;
    font-weight: bold;
    @media (max-width: 740px) {
        font-size: 2em;

    }

`
const Personas = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 4em;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
const Persona = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 20em;
  margin: 0.5em;
  &:hover{
    transform: scale(1.1);
  }
`
const Foto = styled.div`
  position: relative;
  border: 4px solid gray;
  border-radius: 50%;
  overflow: hidden;
  width: 10em;
  align-content: center;
  height: 10em;
  img{
    width: auto;
    height: 100%; 
  }



`
const Cargo = styled.div`
  font-size: 1.5em;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: white;
  background-color: #B27DC2ED;
  padding: 1em;
  margin: 0.5em;
  border-radius: 2em;
  align-items: center;
  span {
    margin: 0.2em;
    height: 4px;
    width: 70%;
    background: white;
  }
`
const Name = styled.div`
`
const WLogo = styled.img`
    @media (max-width: 740px) {
        width: 95%;
    }
`
const WLogo1 = styled.img`

    width:60% ;
    @media (max-width: 740px) {
        width: 40%;
    }
`
const Part  = styled.div`
    margin-top: 2em;
    margin-bottom: 5em;
    display: grid;
    grid-template-columns: repeat(2,1fr);    
    grid-gap: 10em;
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
const Button = styled.div`
    background-color: #752F8B;
    border-radius: 2em;
    color: white;
    font-size: 3em;
    font-weight: bold;
    padding: 0.2em;
    width: 5em;
    margin-top: 1em;
    &:hover{
        background-color: black;
        color: #752F8B;
        transform: scale(1.1);
        transition: 0.5s;
    }
`
const Besp = styled.button`

    position: relative;
    margin: 0;
    padding: 17px 35px;
    outline: none;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    text-transform: uppercase;
    background-color: #fff;
    border: 4px solid #752F8B;
    border-radius: 10px;
    color: #752F8B;
    z-index: 0;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
    span {
        color: #752F8B;
        font-size: 2em;
        font-weight: bold;
        letter-spacing: 0.7px;
        z-index: 20;
    }
    &:hover {
        animation: rotate624 0.7s ease-in-out both;
        span {
            animation: storm1261 0.7s ease-in-out both;
            animation-delay: 0.06s;
        }
        &:after {
            left: 120%;
            transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
        }
    }
    &:after {
        background: #752F8BAB;
        content: "";
        height: 155px;
        left: -75px;
        opacity: 0.4;
        position: absolute;
        top: -50px;
        transform: rotate(35deg);
        transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
        width: 50px;
        z-index: -10;
    }
     
`