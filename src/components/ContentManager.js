import React from 'react'
import styled from 'styled-components'

function ContentManager() {
  return (
    <Container>
        <Title>
            Gestión de Contenido
        </Title>
        <ButtonTopContainer>
            <AddButton></AddButton>
        </ButtonTopContainer>
    </Container>
  )
}

export default ContentManager


const Container = styled.div`
    display: flex;
    min-height: 65vh;
    height: max-content;
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
  margin: 1em;

  @media (max-width: 740px) {
    font-size: 2em;
  }
`

const ButtonTopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
`

const AddEventButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1em;
    width: 8em;
    height: 2em;
    font-size: 1.5em;
    font-weight: bold;
    border: none;
    border-radius: 1em;
    background-color: #FDC649;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
        background-color: #43FF7C;
    }
`

const Title1 = styled.div`
  font-weight: bold;
  font-size: 3em;

  @media (max-width: 740px) {
    font-size: 2em;
  }
`
const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2em;
  margin: 1em;
  @media (max-width: 740px) {
       flex-direction: column;
  }
`
const Logo = styled.div`

    width: 20em;
    @media (max-width: 740px) {
        width: 15em;

    }
    img{
       width: 100%;  
    }
`
const NVoluntaries = styled.div`
    font-weight: bold;
    font-size: 1.5em;

    @media (max-width: 740px){
        font-size: 1em;
    }
`
const Voluntaries = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5em;
    margin: 0.5em;
    padding-top: 4em;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`
const Voluntary = styled.div`
  width: 100%;
  max-width: 20em;
  height: 7em;
  background: #353535;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: left;
  backdrop-filter: blur(10px);
  transition: 0.5s ease-in-out;
  
  &:hover{
    cursor: pointer;
    transform: scale(1.05);
  }

  
  span {
    font-size: 10px;
    }

 
 p {
    font-size: 1em;
    font-weight: lighter;
    margin: 0.5em;
 }   

 @media (max-width: 740px) {
    max-width: 15em;
    p{
        font-size: 0.8em;
    }
 }

`
const Img = styled.div`

    display: flex;
    width: 3em;
    height: 2.5em;
    font-weight: bold;
    margin-left: 10px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    overflow: hidden;

    #img1{
        width: 70%;
        display: none;
    }
    #img2{
        width: 100%;
    }
    #img3{
        width: 100%;
    }

    &:hover {
    transition: 0.5s ease-in-out;
    background: linear-gradient(#FDAB49, #EDFD49);

      #img1{
        display: block;
      }
      #img2{
        display: none;
      }
    }

    @media (max-width: 740px){
        width: 4em;
        height: 4em;
        font-size: 1em;
    }

`
const CardT = styled.div`

    font-size: 1.5em;
    font-weight: bold;

    @media (max-width: 740px){
      font-size: 1.2em;
    }
` 
const TextBox = styled.div`
    width: calc(100% - 90px);
    margin: 0.5em;
    color: white;
    justify-content: center;
    align-items: center;
`
const TextContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const SubTittle = styled.div`
    display: flex;
    font-size: 3em;
    font-weight: bold;
    margin-top: 2em;
    padding-left: 2em;
    justify-content: flex-start;
    width: 100%;
    @media (max-width: 740px){
        padding-left: 0;
        justify-content: center;
        font-size: 1.5em;
    }
    align-items: center;
    gap: 0.5em;

`
const BackBtn = styled.button`
  font-size: 2em;
  width: 2em;
  height: 2em;
  margin: 1em;
  align-items: center;
  justify-content: start;
  background-color: white;
  border: none;
  text-align: center;
  border-radius: 0.3em;
  padding: 0.5em;
  :hover {
    box-shadow: inset 0 0 0 4px rgb(200,200,200);
    filter: brightness(90%);
  }
  
`
const AddBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 45px;
  height: 45px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition-duration: .3s;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
  background-color: rgb(0, 0, 0);
  &:hover {
    width: 125px;
    border-radius: 40px;
    transition-duration: .3s;

    #Sign {
        width: 30%;
        transition-duration: .3s;
        padding-left: 0.5em;
    }
    #Text {
        opacity: 1;
        width: 70%; 
        transition-duration: .3s;
        padding-right: 0.2em;
    }
  }

  &:active {
  transform: translate(2px ,2px);
}
`
const Sign = styled.div`
    width: 100%;
    transition-duration: .3s;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 17px;
        path {
            fill: white;
        }
    }
`
const Text = styled.div`
  position: absolute;
  right: 0%;
  width: 0%;
  opacity: 0;
  color: white;
  font-size: 1.2em;
  font-weight: 600;
  transition-duration: .3s;
`
const DeleteBox = styled.div`
  position: fixed;
  top: 30%;
  left: 30%;
  transform: translate(-50%, -50%);
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
  width: 35em;
  height: 16em;

  @media (max-width: 800px){
    width: 25em;
    left: 20%;
  }
  @media (max-width: 740px){
    width: 15em;
    left: 10%;
  }
  transform: ${props => props.show ===false ? 'translatey(-700%)': 'translatey(0%)'};
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

  p {
    font-size: 1.5em;
  }
`
const BoxTitle = styled.div`
  font-size: 2em;
  font-weight: bold;
`
const BoxContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  gap: 1em;
  @media (max-width: 740px) {
    flex-direction: column;
  }
`
const BoxButtonCancel = styled.button`
  background-color: #FDC649;
  height: 2em;
  width: 6em;
  font-size: 1.5em;
  border-radius: 1em;

  &:hover{
    transform: scale(1.1);
    background-color: #43FF7C;
  }
`
const BoxButtonDelete = styled.button`
  height: 2em;
  width: 6em;
  font-size: 1.5em;
  border-radius: 1em;
  &:hover{
    transform: scale(1.1);
    background-color: #F63B49;
  }
`
const Top = styled.div`
    display: flex;
    width: 100%;
    justify-content: start;
`
const StyledForm = styled.form`
  display: flex;
  justify-content: start;
  flex-direction: column;
  background-color: #f4f4f4;
  border-radius: 5px;
  margin-top: 4em;
  margin-bottom: 4em;
  padding: 1em;
  width: 20em;

  .Spinner{
        position: absolute;  
        top: 0;  
        left: 0;
        opacity: 0;
    }

  @media (max-width: 740px){
    width: 13em;
  }
`
const StyledLabel = styled.label`
  display: flex;
  margin-bottom: 0.5em;
  font-size: 1.5em;
  font-weight: bold;
  color: ${props => props.invalid ? 'red' : 'black'};
  @media (max-width: 740px){
    font-size: 1em;
  }
`
const StyledInput = styled.input`
  width: 100%;
  border: 1px solid #ccc;
  height: 2.5em;
  border-radius: 5px;
`
const StyledSelect = styled.select`
  width: 100%;
  border: 1px solid #ccc;
  height: 2.5em;
  border-radius: 5px;
`
const StyledButton = styled.button`
  background-color: rgb(56, 90, 194);
  color: white;
  padding: 10px;
  margin-top: 10px;
  border: none;
  font-size: 1.5em;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
  &:enabled {
    opacity: 1.0;
  }
  &:hover {
    background-color: #FDC649;
    transform: scale(1.05);
    transition: 0.3s;
    color: black;
  }
  opacity: ${props => !props.enabled ? 0.5 : 1};
`
const StyledAlert = styled.div`
  padding: 10px;
  background-color: #f44336;
  color: white;
  margin-top: 10px;
  border-radius: 5px;
`  
const Cargo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 12px;
    gap: 4px;
    border-radius: 1em;
    border: none;
    background: #1b1b1cd0;
    min-height: 1em;
` 
const Lable = styled.span`
  line-height: 22px;
  font-size: 1em;
  color: white;
  font-weight: bold;
  letter-spacing: 1px;
`
const Part2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4em;

  @media (max-width: 740px){
    flex-direction: column;
  }
  
`
const Cargos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 60%;
    flex-direction: row;
    gap: 0.2em;

    @media (max-width: 740px){
      width: 90%;
  }

`
const DeleteC = styled.button`
    color: #DE8A2A;
    border: none;
    background-color: transparent;
    align-items: center;    
    cursor: pointer;
    &:hover{
      transform: scale(1.3);
    }
`
const AddInput = styled.input`
    border-radius: 1em;
    border: solid 2px black;
    height: 1em;
    padding: 6px 12px;
`
const AddButton = styled.button`
    border-radius: 1em;
    border: none;

    &:hover{
      transform: scale(1.3);
    }
    background-color: transparent;
`
const Content = styled.div`
    width: 100%;
    gap: 2em;
    display: flex;
    flex-direction: row;
    margin-top: 4em;
    margin-bottom: 4em;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
`
const ButtonChangeCharge = styled.button`
  height: 2em;
  width: 10em;
  font-size: 1em;
  border-radius: 1em;
  cursor: pointer;
  &:hover{
    transform: scale(1.1);
    background-color: #FDC649;
  }
`
const ButtonDeleteVoluntary = styled.button`
  
  height: 2em;
  width: 10em;
  font-size: 1em;
  border-radius: 1em;
  background-color: #FDC649;
  cursor: pointer;

  &:hover{
    transform: scale(1.1);
    background-color: #F63B49;
  }
`
const EditBox = styled.div`
  position: fixed;
  top: 30%;
  left: 30%;
  transform: translate(-50%, -50%);
  background: white;
  border: 3px solid rgba(136, 148, 122, 0.7); 
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  max-width: 100vh;
  z-index: 16;
  list-style: none;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 35em;
  min-height: 16em;

  @media (max-width: 800px){
    width: 25em;
    left: 20%;
  }
  @media (max-width: 740px){
    width: 15em;
    left: 10%;
  }
  transform: ${props => props.show ===false ? 'translatey(-700%)': 'translatey(0%)'};
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

  p {
    font-size: 1.5em;
  }
`
const BackBoxBtn = styled.button`
  font-size: 2em;
  width: 2em;
  height: 2em;
  align-items: center;
  justify-content: start;
  background-color: white;
  border: none;
  text-align: center;
  border-radius: 0.3em;
  padding: 0.5em;
  :hover {
    box-shadow: inset 0 0 0 4px rgb(200,200,200);
    filter: brightness(90%);
  }
  
`
const Line = styled.span`
  width: 100%;
  height: 2px;
  background-color: black;
`
const Options = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-top: 2em;
`
const Option = styled.div`
  cursor: pointer;
  display: flex;
  font-weight: bold;
  font-size: 1.2em;
  padding: 0.2em;
  align-items: center;
  width: 100%;
  justify-content: center;
  opacity: ${({open}) => (open ? 1 : 0.6)};
  border: ${({open}) => (open ? '1px solid black' : 'none')};
  background-color: ${({open}) => (open ? '#EDF1CF' : '#00000')};

  &:hover{
    background-color: ${({open}) => (open ? '#EDF1CF' : '#FDC649')};
    opacity: 1;
  }
`