import React from 'react'
import styled from 'styled-components'
import { useNavigate, Link } from 'react-router-dom'

function Capitulos() {
    const history = useNavigate()

  return (
    <Container>
        <Caps>
        <CapLink to={`/computer`}>
            <Card Color={"#313131"}>
                <Logo src='images/Logocsb.png'/>
                <TextBox>
                    <Text>Computer Society</Text>
                    <span>Capítulo dedicado a profundizar en diferentes aplicaciones de la programación. </span>
                    <Text>+ Info</Text>
                </TextBox>
            </Card>
        </CapLink>
        <CapLink to="/ras">
            <Card Color={"#E6E6DE"}>
                <Logo src='https://edu.ieee.org/pe-usil/wp-content/uploads/sites/402/2018/06/IEEE_RAS_logo_no-background-1024x377.png'></Logo>
                <TextBox>
                    <Text>RAS</Text>
                    <Rass>Robotic and Automation Society</Rass>
                    <Text>+ Info</Text>
                </TextBox>
            </Card>
        </CapLink>
        <CapLink to="/wiee">
            <Card Color={"#752F8B"}>
                <Logo src='images/Wieb.png'/>
                <TextBox>
                    <Text>WIE</Text>
                    <span>Grupo de Afinidad IEEE Universidad de la Sabana</span>
                    <Text>+ Info</Text>
                </TextBox>
            </Card>
        </CapLink>
        <CapLink to="/aess">
            <Card Color={"#202569"}>
                <Logo src="images/AeesL.png"/>
                <TextBox>
                    <Text>AESS</Text>
                    <span>Aerospace And Electronic System Society</span>
                    <Text>+ Info</Text>
                </TextBox>
            </Card>
        </CapLink>  
        </Caps>
    </Container>
  )
}

export default Capitulos


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
  justify-content: cen ter;
  padding: 2rem 0;  
  font-size: 4rem;
  font-weight: bold;
  width: 100%;
  height: 25vw;
  background-image: url("");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover        ;
`
const Caps = styled.div`
    margin-top: 10em;
    display: grid;
    grid-template-columns: repeat(4,1fr);    
    grid-gap: 2em;
    @media (max-width: 1300px) {
        grid-template-columns: repeat(2,1fr);  
        margin-top: 4em;  
    }
    @media (max-width: 740px) {
        grid-template-columns: repeat(1,1fr);
        margin-top: 2em;  
    }
    margin-bottom: 10em;
`
const Cap = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5em;
    border: 5px solid black;
    justify-content: center;
    align-items: center;
    background: rgb(232,232,232);
    background: linear-gradient(153deg, rgba(232,232,232,1) 0%, rgba(255,251,251,1) 100%);
    padding: 1em;
    width: 18vw;
    height: 18vw;
    cursor: pointer;
    &:hover{
        img{
            display: none;
            transition: 0.5s;
        }
        transform: scale(1.05);
        background: rgb(232,232,232);
        background: linear-gradient(153deg, rgba(232,232,232,1) 0%, rgba(142,142,142,1) 100%);
        transition: 0.5s;
        div{
            display: flex;
        }
    }
    @media (max-width: 1300px) {
        width: 20em;
        height: 20em; 
  
    }
`
const Description = styled.div`
        display: none;
`
const Logo = styled.img`
    width: 90%;
    position: relative;
`
const CapLink = styled(Link)`
    text-decoration: none;
`

const Card = styled.div`
    width: 18vw;
    height: 18vw;
    padding: 1em;
    cursor: pointer;
    background: ${({ Color }) => (Color)};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    transition: 0.2s ease-in-out;
    border-radius: 2em;


    img{
        width: 18%;
        position: absolute;
        transition: 0.2s ease-in-out;
        z-index: 1;
    }
    &:hover {
        div{
            opacity: 1;
        }
        img{
            width: 80%;
            filter: blur(7px);
            animation: anim 3s infinite;
        }
        transform: scale(1.04) rotate(-1.2deg);

    }

    @media (max-width: 1300px) {
        width: 20em;
        height: 20em; 

        img {
            width: 25%;
        }
        &:hover {
            div{
            opacity: 1;
            }
            img{
                width: 65%;
                filter: blur(7px);
                animation: anim 3s infinite;
            }
            transform: scale(1.04) rotate(-1.2deg);
        }
    }

    @media (max-width: 740px) {
        width: 20em;
        height: 20em; 

        img {
            width: 45%;
        }
        &:hover {
            div{
            opacity: 1;
            }
            img{
                width: 90%;
                filter: blur(7px);
                animation: anim 3s infinite;
            }
            transform: scale(1.04) rotate(-1.2deg);
         
    }
  
    }
`
const TextBox = styled.div`
    opacity: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    transition: 0.4s ease-in-out;
    z-index: 2;
    span {
        font-size: 1.2em;
        color: lightgrey;
    }

`
const Rass = styled.div`
    font-size: 1.2em;
    color: black;
`

const Text = styled(TextBox)`
    font-weight: bold;
    font-size: 1.5em;
`