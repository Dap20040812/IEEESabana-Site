import React from 'react'
import styled from 'styled-components'
function Nosotros() {
  return (
    <Container>
      <Title><div>Nuestro Equipo</div></Title>
      <Personas>
        <Persona>
          <Foto>
            <img src='images/presidenta.jpeg'/>
          </Foto>
          <Cargo>
            <>Presidenta</>
            <span/>
            <Name>Natalia Mayorga</Name>
          </Cargo>
        </Persona>
        <Persona>
          <Foto>
            <img src='images/vice.jpeg'/>
          </Foto>
          <Cargo>
            <>Vicepresidente</>
            <span/>
            <Name>Sergio Amortegui</Name>
          </Cargo>
        </Persona>
      </Personas>
      <Personas>
        <Persona>
          <Foto>
            <img src='images/Raspresi.jpeg'/>
          </Foto>
          <Cargo>
            <>Presidente RAS</>
            <span/>
            <Name>Willson Camargo</Name>
          </Cargo>
        </Persona>
        <Persona>
          <Foto>
            <img src='images/presiw.jpeg'/>
          </Foto>
          <Cargo>
            <>Presidenta WIE</>
            <span/>
            <Name>Mariana Gutierrez</Name>
          </Cargo>
        </Persona>
        <Persona>
          <Foto>
            <img src='images/foto.png'/>
          </Foto>
          <Cargo>Presidenta AESS</Cargo>
        </Persona>
        <Persona>
          <Foto>
            <img src='images/presic.jpeg'/>
          </Foto>
          <Cargo>
            <>Presidente CS</>
            <span/>
            <Name>Juan Diego García</Name>
          </Cargo>
        </Persona>
      </Personas>
      <Personas>
      <Persona>
          <Foto>
            <img src='images/vicec.jpg'/>
          </Foto>
          <Cargo>
            <>Web Master</>
            <span/>
            <Name>Diego Prado</Name>
          </Cargo>
        </Persona>
        <Persona>
          <Foto>
            <img src='images/foto.png'/>
          </Foto>
          <Cargo>Community Manager</Cargo>
        </Persona>
        <Persona>
          <Foto>
            <img src='images/foto.png'/>
          </Foto>
          <Cargo>Líder de Logística</Cargo>
        </Persona>
        <Persona>
          <Foto>
            <img src='images/teso.jpeg'/>
          </Foto>
          <Cargo>
            <>Tesorero</>
            <span/>
            <Name>Javier Garavito</Name>
          </Cargo>
        </Persona>
        <Persona>
          <Foto>
            <img src='images/secre.jpeg'/>
          </Foto>
          <Cargo>
            <>Secretario</>
            <span/>
            <Name>Samuel López</Name>
          </Cargo>
        </Persona>
      </Personas>
    </Container>
  )
}

export default Nosotros

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
  font-size: 4em;
  font-weight: bold;
  width: 100%;
  height: 35vw;
  background-image: url("images/nosotros.jpeg");
  filter: brightness(85%);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: white;
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
  height: 20em;
  &:hover{
    transform: scale(1.1);
  }
`
const Foto = styled.div`
  position: relative;
  border: 4px solid black;
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
  padding: 1em;
  margin: 0.5em;
  align-items: center;
  span {
    margin: 0.2em;
    height: 4px;
    width: 70%;
    background: black;
  }
`
const Name = styled.div`
`
const WLogo = styled.img`
    @media (max-width: 740px) {
        width: 95%;
    }
`