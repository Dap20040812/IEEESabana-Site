import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Fade, Zoom} from 'react-reveal'
import { useLocation } from 'react-router-dom';
import SliderRas from './SliderRas';

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
        <Section1>
            <Fade bottom>
                <Description>
                    RAS es un capitulo para ir a tomar
                </Description>
            </Fade>
        </Section1>
        <Section2>
            <SubTittle1>
              <Text1><Fade bottom>Equipo</Fade></Text1>
              <Act src='images/robot1.png'/>  
            </SubTittle1>
            <Personas>
              <Fade button>
                <Card>
                      <Blob/>
                      <Img> <img src='images/Raspresi.jpeg'/></Img>
                      <Name>Willson Camargo<br/><br/><span>Simp de Ona</span></Name>
                      <ContactInfo>
                          <ContactIcon height="35" width="35" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" class="icon">
                              <path d="M962.267429 233.179429q-38.253714 56.027429-92.598857 95.451429 0.585143 7.972571 0.585143 23.990857 0 74.313143-21.723429 148.260571t-65.974857 141.970286-105.398857 120.32-147.456 83.456-184.539429 31.158857q-154.843429 0-283.428571-82.870857 19.968 2.267429 44.544 2.267429 128.585143 0 229.156571-78.848-59.977143-1.170286-107.446857-36.864t-65.170286-91.136q18.870857 2.852571 34.889143 2.852571 24.576 0 48.566857-6.290286-64-13.165714-105.984-63.707429t-41.984-117.394286l0-2.267429q38.838857 21.723429 83.456 23.405714-37.741714-25.161143-59.977143-65.682286t-22.308571-87.990857q0-50.322286 25.161143-93.110857 69.12 85.138286 168.301714 136.265143t212.260571 56.832q-4.534857-21.723429-4.534857-42.276571 0-76.580571 53.979429-130.56t130.56-53.979429q80.018286 0 134.875429 58.294857 62.317714-11.995429 117.174857-44.544-21.138286 65.682286-81.115429 101.741714 53.174857-5.705143 106.276571-28.598857z" fill="#f0f0f0"></path>
                          </ContactIcon>
                          <ContactIcon xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16"> <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" fill="#f0f0f0"/> </ContactIcon>
                          <ContactIcon height="35" width="35" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" class="icon">
                              <path d="M950.930286 512q0 143.433143-83.748571 257.974857t-216.283429 158.573714q-15.433143 2.852571-22.601143-4.022857t-7.168-17.115429l0-120.539429q0-55.442286-29.696-81.115429 32.548571-3.437714 58.587429-10.313143t53.686857-22.308571 46.299429-38.034286 30.281143-59.977143 11.702857-86.016q0-69.12-45.129143-117.686857 21.138286-52.004571-4.534857-116.589714-16.018286-5.12-46.299429 6.290286t-52.589714 25.161143l-21.723429 13.677714q-53.174857-14.848-109.714286-14.848t-109.714286 14.848q-9.142857-6.290286-24.283429-15.433143t-47.689143-22.016-49.152-7.68q-25.161143 64.585143-4.022857 116.589714-45.129143 48.566857-45.129143 117.686857 0 48.566857 11.702857 85.723429t29.988571 59.977143 46.006857 38.253714 53.686857 22.308571 58.587429 10.313143q-22.820571 20.553143-28.013714 58.88-11.995429 5.705143-25.746286 8.557714t-32.548571 2.852571-37.449143-12.288-31.744-35.693714q-10.825143-18.285714-27.721143-29.696t-28.306286-13.677714l-11.410286-1.682286q-11.995429 0-16.603429 2.56t-2.852571 6.582857 5.12 7.972571 7.460571 6.875429l4.022857 2.852571q12.580571 5.705143 24.868571 21.723429t17.993143 29.110857l5.705143 13.165714q7.460571 21.723429 25.161143 35.108571t38.253714 17.115429 39.716571 4.022857 31.744-1.974857l13.165714-2.267429q0 21.723429 0.292571 50.834286t0.292571 30.866286q0 10.313143-7.460571 17.115429t-22.820571 4.022857q-132.534857-44.032-216.283429-158.573714t-83.748571-257.974857q0-119.442286 58.88-220.306286t159.744-159.744 220.306286-58.88 220.306286 58.88 159.744 159.744 58.88 220.306286z" fill="#f0f0f0"></path>
                          </ContactIcon>
                      </ContactInfo>
                  </Card>
              </Fade>           
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
  line-height: 17px;

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
