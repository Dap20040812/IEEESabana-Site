import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Fade, Zoom} from "react-awesome-reveal";
import Slider from './Slider'
import { useLocation } from 'react-router-dom';
import SliderWie from './SliderWie';
import { getChapterPresident, getChapterVicePresident, getChapterVoluntaries } from '../querys/GetVoluntarios';

function Wie() {
    const { pathname } = useLocation();
    const [presidente, setPresidente] = useState()
    const [vicepresidente, setVicepresidente] = useState()
    const [voluntaries, setVoluntaries] = useState()


    useEffect(() => {
        window.scrollTo(0, 0);

        const getVoluntaries = async () => {
            const response = await getChapterVoluntaries("WIE")
            setVoluntaries(response)
        }
        const getPresident = async () => {
            const response = await getChapterPresident("WIE")
            setPresidente(response[0])
            console.log(response[0])
        }
        const getVicePresident = async () => {
            const response = await getChapterVicePresident("WIE")
            setVicepresidente(response[0])
        }
        getPresident()
        getVicePresident()
        getVoluntaries()
    }, [pathname]);
  return (
    <Container>
        <Section>
            <Center>
                <Fade bottom>
                    <Logo>
                        <WLogo1 src='images/wie2.png'/>
                        <Desc>Grupo de Afinidad IEEE Universidad de la Sabana</Desc>    
                    </Logo>
                </Fade>
                <Fade bottom>
                    <Arrow>▼</Arrow>
                </Fade>
            </Center>
            <BallW1 src='images/wl2.png'/>
            <BallW2 src='images/wl2.png'/>
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
                {presidente && 
                <Fade bottom>
                    <Card>
                        <CardImg id="img"/>
                        <FotoContainer>
                            <Foto id="foto">
                                <img src={presidente.Foto}></img>
                            </Foto>
                            <Info2 id='info2'>
                                <CardTittle2>{presidente.Nombre}</CardTittle2>
                                <CardSubT2>{presidente.Cargo}</CardSubT2>
                            </Info2> 
                        </FotoContainer>
                        <SocialMedia id="social">
                            <li onClick={() => {window.location.href = "https://wa.me/+57" + presidente.Celular}}><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
                            </svg></li>
                            <li onClick={() => window.location.href = "mailto:" + presidente.Correo}><svg width="80" height="80" viewBox="0 0 24 24" fill="#343C54" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22 6.25649V17.25C22 18.4926 20.9926 19.5 19.75 19.5H4.25C3.00736 19.5 2 18.4926 2 17.25V6.23398C2 6.22372 2.00021 6.2135 2.00061 6.20334C2.01781 5.25972 2.78812 4.5 3.73592 4.5H20.2644C21.2229 4.5 22 5.27697 22.0001 6.23549C22.0001 6.24249 22.0001 6.24949 22 6.25649ZM3.5 8.187V17.25C3.5 17.6642 3.83579 18 4.25 18H19.75C20.1642 18 20.5 17.6642 20.5 17.25V8.18747L13.2873 13.2171C12.5141 13.7563 11.4866 13.7563 10.7134 13.2171L3.5 8.187ZM20.5 6.2286L20.5 6.23398V6.24336C20.4976 6.31753 20.4604 6.38643 20.3992 6.42905L12.4293 11.9867C12.1716 12.1664 11.8291 12.1664 11.5713 11.9867L3.60116 6.42885C3.538 6.38481 3.50035 6.31268 3.50032 6.23568C3.50028 6.10553 3.60577 6 3.73592 6H20.2644C20.3922 6 20.4963 6.10171 20.5 6.2286Z"/>
                            </svg></li>
                        </SocialMedia>
                        <Info id='info'>
                            <CardTittle>{presidente.Nombre}</CardTittle>
                            <CardSubT>{presidente.Cargo}</CardSubT>
                        </Info> 
                    </Card>
                </Fade>
                }
                {vicepresidente && 
                <Fade bottom>
                    <Card>
                        <CardImg id="img"/>
                        <FotoContainer>
                            <Foto id="foto">
                                <img src={vicepresidente.Foto}></img>
                            </Foto>
                            <Info2 id='info2'>
                                <CardTittle2>{vicepresidente.Nombre}</CardTittle2>
                                <CardSubT2>{vicepresidente.Cargo}</CardSubT2>
                            </Info2> 
                        </FotoContainer>
                        <SocialMedia id="social">
                            <li onClick={() => {window.location.href = "https://wa.me/+57" + vicepresidente.Celular}}><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
                            </svg></li>
                            <li onClick={() => window.location.href = "mailto:" + vicepresidente.Correo}><svg width="80" height="80" viewBox="0 0 24 24" fill="#343C54" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22 6.25649V17.25C22 18.4926 20.9926 19.5 19.75 19.5H4.25C3.00736 19.5 2 18.4926 2 17.25V6.23398C2 6.22372 2.00021 6.2135 2.00061 6.20334C2.01781 5.25972 2.78812 4.5 3.73592 4.5H20.2644C21.2229 4.5 22 5.27697 22.0001 6.23549C22.0001 6.24249 22.0001 6.24949 22 6.25649ZM3.5 8.187V17.25C3.5 17.6642 3.83579 18 4.25 18H19.75C20.1642 18 20.5 17.6642 20.5 17.25V8.18747L13.2873 13.2171C12.5141 13.7563 11.4866 13.7563 10.7134 13.2171L3.5 8.187ZM20.5 6.2286L20.5 6.23398V6.24336C20.4976 6.31753 20.4604 6.38643 20.3992 6.42905L12.4293 11.9867C12.1716 12.1664 11.8291 12.1664 11.5713 11.9867L3.60116 6.42885C3.538 6.38481 3.50035 6.31268 3.50032 6.23568C3.50028 6.10553 3.60577 6 3.73592 6H20.2644C20.3922 6 20.4963 6.10171 20.5 6.2286Z"/>
                            </svg></li>
                        </SocialMedia>
                        <Info id='info'>
                            <CardTittle>{vicepresidente.Nombre}</CardTittle>
                            <CardSubT>{vicepresidente.Cargo}</CardSubT>
                        </Info> 
                    </Card>
                </Fade>
                }
            </Personas>
            <Personas>
                {voluntaries && voluntaries.map((voluntary) => (

                    <Fade bottom>
                        <Card>
                            <CardImg id="img"/>
                            <FotoContainer>                              
                                <Foto id="foto">
                                    <img src={voluntary.Foto}></img>
                                </Foto>
                                <Info2 id='info2'>
                                    <CardTittle2>{voluntary.Nombre}</CardTittle2>
                                    <CardSubT2>{voluntary.Cargo}</CardSubT2>
                                </Info2>
                            </FotoContainer>
                            <SocialMedia id="social">
                            <li onClick={() => {window.location.href = "https://wa.me/+57" + voluntary.Celular}}><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
                            </svg></li>
                            <li onClick={() => window.location.href = "mailto:" + voluntary.Correo}><svg width="80" height="80" viewBox="0 0 24 24" fill="#343C54" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22 6.25649V17.25C22 18.4926 20.9926 19.5 19.75 19.5H4.25C3.00736 19.5 2 18.4926 2 17.25V6.23398C2 6.22372 2.00021 6.2135 2.00061 6.20334C2.01781 5.25972 2.78812 4.5 3.73592 4.5H20.2644C21.2229 4.5 22 5.27697 22.0001 6.23549C22.0001 6.24249 22.0001 6.24949 22 6.25649ZM3.5 8.187V17.25C3.5 17.6642 3.83579 18 4.25 18H19.75C20.1642 18 20.5 17.6642 20.5 17.25V8.18747L13.2873 13.2171C12.5141 13.7563 11.4866 13.7563 10.7134 13.2171L3.5 8.187ZM20.5 6.2286L20.5 6.23398V6.24336C20.4976 6.31753 20.4604 6.38643 20.3992 6.42905L12.4293 11.9867C12.1716 12.1664 11.8291 12.1664 11.5713 11.9867L3.60116 6.42885C3.538 6.38481 3.50035 6.31268 3.50032 6.23568C3.50028 6.10553 3.60577 6 3.73592 6H20.2644C20.3922 6 20.4963 6.10171 20.5 6.2286Z"/>
                            </svg></li>
                        </SocialMedia>
                            <Info id='info'>
                                <CardTittle>{voluntary.Nombre}</CardTittle>
                                <CardSubT>{voluntary.Cargo}</CardSubT>
                            </Info>
                        </Card>
                    </Fade>
                ))}
            </Personas>
        </Section2>
        <Section2>
            <SubTittle1>
                <Text1><Fade bottom>Actividades</Fade></Text1>
                <Act src='images/wac.png'/>
            </SubTittle1>
        </Section2>
        <Section2>
            <SliderWie/>
        </Section2>
        <Section2>
            <Part>
                <Fade bottom>
                    <WLogo src='images/wie2.png'/>
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
    font-family: 'Roboto', sans-serif;
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
  gap: 5em;
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
  border: 4px solid #752F8B;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 2px 2px 10px rgb(0, 0, 0),
                   -2px -2px 10px rgb(120, 120, 120);
  width: 8em;
  align-content: center;
  height: 8em;
  margin-top: 1em;
  img{
    width: auto;
    height: 100%; 
  }
  z-index: 3;
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

    width: 70%;
    @media (max-width: 1200px) {
        width: 90%;
    }
`
const WLogo1 = styled.img`

    width:25%;
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
const Card = styled.div`
  width: 190px;
  height: 254px;
  position: relative;
  background: #f5f5f5;
  color: #252525;
  border-radius: 4px;
  overflow: hidden;
  line-height: 150%;
  box-shadow: 0px 10px 20px rgba(80, 80, 80, 0.2);
  transition: box-shadow .3s ease-in-out;
  &:hover {
    box-shadow: 0px 15px 30px rgba(80, 80, 80, 0.3);
    #img{
        transform: translateY(-5em);
    }
    #info2{
        display: none;
    }
    #social{
        li {
            transform: translateY(-5%);
            opacity: 1;
        }
        li:nth-child(1) {
        transition-delay: 0s;
        }
        li:nth-child(2) {
        transition-delay: .1s;
        }
        li:nth-child(3) {
        transition-delay: .2s;
        }
    }
    #foto{
        margin-top: 0;
        overflow: hidden;
        width: 100%;
        border-radius: 0;
        border: none;
        align-content: center;
        box-shadow: none;
        height: auto;
        img{
            width: 100%;
            height: auto; 
        }

        transition: 0.5s;
    }
  }

`

const FotoContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    position: relative;
    z-index: 3;
    justify-content: center;
    flex-direction: column;
    gap: 1em;

`

const Info = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 0.5em;
  height: auto;
`
const CardImg = styled.div`
  background: #00ff88;
  background-image: radial-gradient(circle at 12.5% 12.5%, #d49ad5 0, #c48ccc 25%, #b27cc2 50%, #9f6db8 75%, #8d60b0 100%);  height: 100%;
  width: 100%;
  position: absolute;
  justify-content: center;
  transition: transform .3s ease-in-out;
  z-index: 2;
`

const SocialMedia = styled.ul`
  position: absolute;
  bottom: 0;
  display: flex;
  gap: 1em;
  justify-content: center;
  width: 100%;
  padding: 0 0;
  transform: translateY(-4em);
  z-index: 3;
  li {
    background: #f5f5f5;
    display: inline-flex;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    transition: all .3s ease-in;

    &:hover{
        background-color: #752F8B;
        svg{
            fill: white;
        }
        transition: 0.1s;
    }
    svg {
        --size: 24px;
        width: var(--size);
        height: var(--size);
        fill: #252525;
    }
  }
`

const CardTittle = styled.div`
  font-size: 1em;
  font-weight: bold;
  color: #752F8B;
`
const CardSubT  =styled.div`
  font-size: 0.8em;
  font-weight: bold;
`

const Info2 = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  flex-direction: column;
  z-index: 3;
  border-radius: 2em;
`
const CardTittle2 = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  color: white;
`
const CardSubT2  =styled.div`
  font-size: 0.8em;
  font-weight: bold;
`


