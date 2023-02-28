import React from 'react'
import styled from 'styled-components'
import { Fade, Zoom} from 'react-reveal'
function Home() {
  return (
    <Container>
      <Title/>
      <Intro>
        <Fade bottom>
        <Slogan>Trabajando juntos romperemos las barreras de lo inimaginable y llegaremos más lejos de lo que contempla la realidad </Slogan>
        </Fade>
        <Fade bottom>
          <Parts>
            <Part>
              <img src='images/icono.png' width={"50%"}/>
              <>
                Rama Estudiantil
              </>
            </Part>
            <Part>+</Part>
            <Part>
              <img src='images/comu.png' width={"50%"}/>
              <>Comunidad</>
            </Part>
            <Part>+</Part>
            <Part>
              <img src='images/fami.png' width={"50%"}/>
              <>Familia</></Part>
          </Parts>
        </Fade>
      </Intro>
        <How>
          <Fade bottom>
          <SubTittle>¿Quiénes Somos?</SubTittle>
          </Fade>
          <Fade bottom>
          <Text>La rama estudiantil IEEE fue formada en la Universidad de La Sabana desde el año 2016, desde ese momento se ha tenido la participación en distintos eventos de la facultad de ingeniería y en el instituto a nivel nacional e internacional. Hasta el día de hoy se ha tenido la oportunidad de participar en eventos como el Open Campus para la carrera de ingenieria informática, la organización de la Sabana Hack, Hosts de zona centro IEEE, Hosts de la Game Jam, Hosts de la conferencia EDS con participación de oradores de Brasil, México y Colombia, entre otros. </Text>
          <Text>IEEE Unisabana, más que una comunidad académica es considerada una familia, ya que, dentro de esta, se encuentran tres capítulos y un grupo de afinidad, los cuales son el motor de cada día para mejorar, innovar, analizar las situaciones actuales y crear soluciones a estas.</Text>
          </Fade>
        </How>
        <Fade bottom>
          <Todos src="images/todos.jpeg"/>
        </Fade>
    </Container>
  )
}

export default Home

const Container = styled.div`
    display: flex;
    height: max-content;
    flex-direction: column;
    align-items: center;
    position: relative;

`
const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;  
  font-size: 4rem;
  font-weight: bold;
  width: 100%;
  height: 25vw;
  background-image: url("images/fondo.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover        ;
`

const SubTittle = styled.div`
  padding: 1em;
  font-size: 3em;
  font-weight: bold;

`
const Intro = styled.div`
  display: flex;
  flex-direction: column;
`
const Slogan = styled.div`
  padding: 3em;
  font-weight: bold;
  font-size: 1.7em;
`
const Parts = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 4em;
  @media (max-width: 900px){
    flex-direction: column;
  }
`
const Part = styled.div`
  font-size: 2em;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  align-items: center;
  width: 5em;
`
const How = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 80vw;
`
const Text = styled.div`
  font-size: 1.5em;
  margin: 1em;
  text-align: justify;
`

const Todos = styled.img`
  border: 2px solid black;
  margin-top: 3em;
  margin-bottom: 3em;
  width: 95%;
`

