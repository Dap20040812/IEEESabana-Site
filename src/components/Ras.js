import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Fade, Zoom} from "react-awesome-reveal";
import { useLocation } from 'react-router-dom';
import SliderRas from './SliderRas';
import { getChapterPresident, getChapterVicePresident, getChapterVoluntaries } from '../querys/GetVoluntarios';

function Ras() {
const { pathname } = useLocation();
const [presidente, setPresidente] = useState()
const [vicepresidente, setVicepresidente] = useState()
const [voluntarios, setVoluntarios] = useState()

useEffect(() => {
    window.scrollTo(0, 0);
    const getPresidente = async () => {
        const response = await getChapterPresident("RAS")
        setPresidente(response[0])
    }
    const getVicepresidente = async () => {
        const response = await getChapterVicePresident("RAS")
        setVicepresidente(response[0])
    }
    const getVoluntarios = async () => {
        const response = await getChapterVoluntaries("RAS")
        setVoluntarios(response)
    }
    getVoluntarios()
    getVicepresidente()
    getPresidente()
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
        <Section1>
            <Fade bottom>
                <Description>
                    RAS es un capitulo ...
                </Description>
            </Fade>
        </Section1>
        <Section2>
            <SubTittle1>
              <Text1><Fade bottom>Equipo</Fade></Text1>
              <Act src='images/robot1.png'/>  
            </SubTittle1>
            <Personas>
              {presidente &&
              <Fade button>
                <Card>
                      <Blob/>
                      <Img> <img src={presidente.Foto}/></Img>
                      <Name>{presidente.Nombre}<br/><span>{presidente.Cargo}</span></Name>
                      <ContactInfo>
                          <ContactIcon aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#FFF" viewBox="0 0 24 24">
                            <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
                          </ContactIcon>
                          <ContactIcon width="40" height="40" viewBox="0 0 24 24" fill="#343C54" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22 6.25649V17.25C22 18.4926 20.9926 19.5 19.75 19.5H4.25C3.00736 19.5 2 18.4926 2 17.25V6.23398C2 6.22372 2.00021 6.2135 2.00061 6.20334C2.01781 5.25972 2.78812 4.5 3.73592 4.5H20.2644C21.2229 4.5 22 5.27697 22.0001 6.23549C22.0001 6.24249 22.0001 6.24949 22 6.25649ZM3.5 8.187V17.25C3.5 17.6642 3.83579 18 4.25 18H19.75C20.1642 18 20.5 17.6642 20.5 17.25V8.18747L13.2873 13.2171C12.5141 13.7563 11.4866 13.7563 10.7134 13.2171L3.5 8.187ZM20.5 6.2286L20.5 6.23398V6.24336C20.4976 6.31753 20.4604 6.38643 20.3992 6.42905L12.4293 11.9867C12.1716 12.1664 11.8291 12.1664 11.5713 11.9867L3.60116 6.42885C3.538 6.38481 3.50035 6.31268 3.50032 6.23568C3.50028 6.10553 3.60577 6 3.73592 6H20.2644C20.3922 6 20.4963 6.10171 20.5 6.2286Z" fill="#FFF"/>
                          </ContactIcon>
                      </ContactInfo>
                  </Card>
              </Fade>
              }
              {vicepresidente &&
              <Fade button>
              <Card>
                    <Blob/>
                    <Img> <img src={vicepresidente.Foto}/></Img>
                    <Name>{vicepresidente.Nombre}<br/><span>{vicepresidente.Cargo}</span></Name>
                    <ContactInfo>
                        <ContactIcon aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#FFF" viewBox="0 0 24 24">
                          <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
                        </ContactIcon>
                        <ContactIcon width="40" height="40" viewBox="0 0 24 24" fill="#343C54" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M22 6.25649V17.25C22 18.4926 20.9926 19.5 19.75 19.5H4.25C3.00736 19.5 2 18.4926 2 17.25V6.23398C2 6.22372 2.00021 6.2135 2.00061 6.20334C2.01781 5.25972 2.78812 4.5 3.73592 4.5H20.2644C21.2229 4.5 22 5.27697 22.0001 6.23549C22.0001 6.24249 22.0001 6.24949 22 6.25649ZM3.5 8.187V17.25C3.5 17.6642 3.83579 18 4.25 18H19.75C20.1642 18 20.5 17.6642 20.5 17.25V8.18747L13.2873 13.2171C12.5141 13.7563 11.4866 13.7563 10.7134 13.2171L3.5 8.187ZM20.5 6.2286L20.5 6.23398V6.24336C20.4976 6.31753 20.4604 6.38643 20.3992 6.42905L12.4293 11.9867C12.1716 12.1664 11.8291 12.1664 11.5713 11.9867L3.60116 6.42885C3.538 6.38481 3.50035 6.31268 3.50032 6.23568C3.50028 6.10553 3.60577 6 3.73592 6H20.2644C20.3922 6 20.4963 6.10171 20.5 6.2286Z" fill="#FFF"/>
                        </ContactIcon>
                    </ContactInfo>
                </Card>
            </Fade>
            }
            </Personas>
            <Personas>
              {voluntarios && voluntarios.map((voluntario) => (
                <Fade button>
                  <Card>
                      <Blob/>
                      <Img> <img src={voluntario.Foto}/></Img>
                      <Name>{voluntario.Nombre}<br/><span>{voluntario.Cargo}</span></Name>
                      <ContactInfo>
                          <ContactIcon aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#FFF" viewBox="0 0 24 24">
                            <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
                          </ContactIcon>
                          <ContactIcon width="40" height="40" viewBox="0 0 24 24" fill="#343C54" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22 6.25649V17.25C22 18.4926 20.9926 19.5 19.75 19.5H4.25C3.00736 19.5 2 18.4926
                            2 17.25V6.23398C2 6.22372 2.00021 6.2135 2.00061 6.20334C2.01781 5.25972 2.78812 4.5 3.73592 4.5H20.2644C21.2229 4.5 22 5.27697 22.0001 6.23549C22.0001 6.24249 22.0001 6.24949 22 6.25649ZM3.5 8.187V17.25C3.5 17.6642 3.83579 18 4.25 18H19.75C20.1642 18 20.5 17.6642 20.5 17.25V8.18747L13.2873 13.2171C12.5141 13.7563 11.4866 13.7563 10.7134 13.2171L3.5 8.187ZM20.5 6.2286L20.5 6.23398V6.24336C20.4976 6.31753 20.4604 6.38643 20.3992 6.42905L12.4293 11.9867C12.1716 12.1664 11.8291 12.1664 11.5713 11.9867L3.60116 6.42885C3.538 6.38481 3.50035 6.31268 3.50032 6.23568C3.50028 6.10553 3.60577 6 3.73592 6H20.2644C20.3922 6 20.4963 6.10171 20.5 6.2286Z" fill="#FFF"/>
                          </ContactIcon>
                      </ContactInfo>
                  </Card>
                </Fade>
              ))}
            </Personas>
        </Section2>
        <Section3>
          <SubTittle1>
            <Text1><Fade bottom>Actividades</Fade></Text1>
            <Act src='images/ract.png'/>
          </SubTittle1>
          <STittle><Fade bottom>Proyecto de Impacto a Comunidades Vulnerables</Fade></STittle>
          <Fade bottom><span/></Fade>
          <Fade bottom>
            <Activity>
              <AInfo>No solamente adquirimos conocimiento, también lo divulgamos. Uno de los proyectos estratégicos del capítulo IEEE RAS es contribuir a la divulgación de la robótica, y este objetivo se ha estado cumpliendo a través de estas actividades de divulgación a comunidades vulnerables en los municipios de La Calera, Cajicá, Sopó, Chía junto con colegios de población vulnerable en la ciudad de Bogotá, en dónde hemos incentivado el amor por áreas STEM en niños desde los 7 años de edad hasta adultos de 63 años de edad. Instruyéndolos en áreas de robótica, programación, pensamiento racional, empoderamiento y emprendimiento.</AInfo>
              <SliderRas/>
            </Activity>
          </Fade>
          <STittle><Fade bottom>Semilleros de Robótica e Innovación</Fade></STittle>
          <Fade bottom><span/></Fade>
          <Fade bottom>
            <Activity>
              <AInfo>De 0 a 100. Instruimos personas interesadas en el aprendizaje de la robótica así no tengan conocimiento alguno de la robótica o la programación. Gracias a este conocimiento, se fomenta la competición en diferentes competencias a nivel nacional e internacional con prototipos fabricados completamente por los estudiantes, quienes mediante tecnologías de impresión 3D, análisis de estructuras, trabajo en equipo, innovación y pensamiento crítico, han logrado quedar campeones en casi todas las modalidades de robótica competitiva en Colombia, aplicando el conocimiento impartido en los diferentes niveles del semillero de robótica.</AInfo>
              <SliderRas/>
            </Activity>
          </Fade>
          <STittle><Fade bottom>Divulgación de la ciencia</Fade></STittle>
          <Fade bottom><span/></Fade>
          <Fade bottom>
            <Activity>
              <AInfo>Divulgamos la ciencia de la mejor manera posible. Incentivando a través de herramientas innovadores a las ingenieras e ingenieros del futuro. Brindándoles herramientas para estimular su creatividad y poder llevar a cabo las grandiosas ideas que pasan por la mente de los mejores. </AInfo>
              <SliderRas/>
            </Activity>
          </Fade>
        </Section3>
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
const Description = styled.div`
   font-weight : bold;
   color: white;
   font-size: 2em;
   padding: 2em;
   width: 70%;
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
const Section1 = styled.div`
    display: flex;
    justify-content: center;
    background-color:#97012D;
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
const Section3 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 3em;
    justify-content: center;

    span {
    height: 4px;
    width: 30%;
    background:  #97012D;
    border-radius: 5px;
    margin-bottom: 3em;
  }
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
    background-color: #97012D;
    align-items: center;
    justify-content: center;
    width: 90%;
    @media (max-width: 740px) {
        width: 80%;
    }
`
const Card = styled.div`
  width: 190px;
  height: 280px;
  background: #D4D4D4;
  border-radius: 10px;
  text-align: center;
  transition: all 0.5s;

  &:hover {
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.623);
    background-color: #97012D;
  }
`
const Blob = styled.div`
  height: 10px;
  width: 75%;
  border-radius: 0 0 30px 30px;
  margin: 0 auto;
  background-color: #97012D;
  visibility: visible;
  transition: all 0.3s;
  
  ${Card}:hover & {
    height: 0;
  }
`
const Img = styled.span`
  display: flex;
  margin: 30px auto 10px auto;
  width: 10em;
  height: 10em;
  background-color: #97012D;
  border-radius: 50%;  
  font-size: 11px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: all 0.5s;
  img{
    width: auto;
    height: 100%; 
  }

  ${Card}:hover & {
    width: 100%;
    height: 70%;
    border-radius: 10px 0 0;
    margin: 0 auto;
    background-color: #97012D;
    z-index: 99999;
  }
`
const Name = styled.h2`
  padding: 15px 10px;
  font-size: 25px;
  transition: all 0.1s;
  z-index: -99;
  line-height: 26=5px;

  ${Card}:hover & {
    opacity: 0;
    display: none;
  }

  & > span {
    font-size: 18px;
  }
`
const ContactIcon = styled.svg`
  padding: 5px;
`
const ContactInfo = styled.p`
  opacity: 0;
  transition: all 0.75s;
  display: none;
  
  ${Card}:hover & {
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    transition: all 0.1s;
  }
`
const Act = styled.img`
    width: 10%;
    margin-left: 2em;
`
const Text1 = styled.div`
    color: white;
    font-size: 4em;
    font-weight: bold;
    @media (max-width: 740px) {
        font-size: 2em;

    }

`
const Activity = styled.div`

  display: flex;
  flex-direction: row;
  gap: 2em;
  margin: 2em;
  @media (max-width: 740px) {
      flex-direction: column;
  
  }
`
const AInfo = styled.div`
  display: flex;
  font-size: 1.5em;
  width: 50%;
  align-items: center;
  text-align: justify;
  justify-content: center;
  @media (max-width: 740px) {
      width: 100%;
  
  }
`
const STittle = styled.div`
    font-size: 2em;
    font-weight: bold;
    width: 80%;
    margin: 1em;
    margin-top: 3em;
    @media (max-width: 740px) {
        width: 50%;
    }
`
