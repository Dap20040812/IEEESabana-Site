import React, { useEffect, useState } from 'react'
import { Spinner } from 'reactstrap'
import styled from 'styled-components'
import { updateVoluntaryFoto } from '../querys/editVoluntary';
import { use } from 'react';
import { storage } from '../firebase';
import { queryVoluntario } from '../querys/GetVoluntarios';
function VoluntaryInfo(props) {

    const [voluntary, setVoluntary] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      const getVoluntary = async () => {
          const response = await queryVoluntario(props.voluntary.UserID)
          console.log(response[0])
          setVoluntary(response[0])
      }
      getVoluntary();
    }, [loading])

    const archivoMandler = async (e) => {
      setLoading(true);
      const archivo = e.target.files[0];
      const storageRef = storage.ref();
      const archivoPath = storageRef.child(archivo.name);
    
      try {
        await archivoPath.put(archivo);
        const url = await archivoPath.getDownloadURL();
        await updateVoluntaryFoto(voluntary, url);
      } catch (error) {
        console.error("Error al subir el archivo:", error);
      } finally {
        setLoading(false);
      }
    };

  return (
    <Container>
      {voluntary && (
        <>
      <Title>Información de Usuario</Title>
      <Content>
        <Foto>
          <ImageTitle>
              <label for="file-input">
              <img className='img1' src={voluntary.Foto}/>
              <img className='img2' src='images/ci.jpg'/>
            </label>
            <input id="file-input" type="File" accept="image/png, image/jpeg, image/jpg"  onChange={archivoMandler}/>
                      {loading ? <Spinner/> : ""}

          </ImageTitle>
          <Name>
            <h2>{voluntary.Nombre}</h2>
          </Name>
        </Foto>
        <Info>
          <Camp>
            <CampTittle>Correo: </CampTittle>
            <CampText>{voluntary.Correo}</CampText>
          </Camp>
          <Camp>
            <CampTittle>Capítulo: </CampTittle>
            <CampText>{voluntary.Capitulo}</CampText>
          </Camp>
          <Camp>
            <CampTittle>Cargo: </CampTittle>
            <CampText>
              {voluntary.Cargo}
            </CampText>
          </Camp>
        </Info>
      </Content>
      </>)
      }
    </Container>
  )
}

export default VoluntaryInfo


const Container = styled.div`
    display: flex;
    max-height: 150vh;
    width: 100%;
    flex-direction: column;
    align-items: center;
    position: relative;
    font-family: 'Roboto', sans-serif;
    background-color: white;
`

const Title = styled.div`
  font-weight: bold;
  font-size: 3em;
  margin-bottom: 1em;

  @media (max-width: 740px) {
    font-size: 2em;
  }
`
const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  height: 100%;
  width: 100%;
  gap: 2em;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const Marco = styled.div`
  display: flex;
  height: 4em;
  width: 4em;
  border: 4px solid black;
`
const Foto = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
const ImageTitle = styled.div`
    max-height: 35vh;
    max-width: 35vh;
    position: relative;
    >input{
        display: none;
    }   
    .img1{ 
        width: 30vh;
        height: 30vh;
        border-radius: 50%;
    }
    .img2 {
        position: absolute;  
        top: 0;  
        left: 0;
        opacity: 0;
        transition: .5s;
        width: 30vh;
        height: 30vh;
        border-radius: 50%;
    }
    .Spinner{
        position: absolute;  
        top: 0;  
        left: 0;
        opacity: 0;
    }

    &:hover .img2{
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        border-color: rgba(249, 249, 249 , 0.8);
        color: white;
        opacity: 0.9;
    }
`
const Name = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-weight: bold;
  font-size: 1.5em;  
  margin: 1em;
  align-items: center;
  text-align: center;

  @media (max-width: 740px) {
        font-size: 1em;

  }
`
const Edit = styled.button`
  font-size: 1em;
  width: 2em;
  height: 2em;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: none;
  text-align: center;
  border-radius: 0.1em;
  padding: 0.5em;
  :hover {
    box-shadow: inset 0 0 0 2px rgb(200,200,200);
  }
  
`
const EditBox = styled.div`
  position: fixed;
  top: 0;
  right: 30vw;
  background: white;
  border: 3px solid rgba(136, 148, 122, 0.7); 
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  max-width: 100vh;
  z-index: 16;
  list-style: none;
  padding: 2vw 2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transform: ${props => props.show ===false ? 'translatey(-200%)': 'translatey(0%)'};
  transition: transform 0.2s;
  li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,.2);

    a{
      font-weight: 600; 
    }
    &:hover {
        border-radius: 0.6vh;
        border-color: rgba(249, 249, 249 , 0.8);
        color: white;
        background-color: #0000003D;
        opacity: 0.9;
    }
  }
`
const Info = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 3em;
`

const Camp = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  font-size: 1.2em;
  gap: 1em;
  @media (max-width: 800px) {
    flex-direction: column;
  }
  @media (max-width: 740px) {
    font-size: 1em;
  }
`
const CampTittle = styled.div`
 font-weight: bold;
`
const CampText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: start;
  gap: 1em;
`

