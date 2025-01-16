import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Fade, Zoom} from "react-awesome-reveal";
import { CodeBlock, a11yLight as theme} from "react-code-blocks";
import { useLocation } from 'react-router-dom';
import { getChapterPresident, getChapterVicePresident, getChapterVoluntaries } from '../querys/GetVoluntarios';


function Computer() {
    const { pathname } = useLocation();
    const [presidente, setPresidente] = useState("")
    const [vicepresidente, setVicepresidente] = useState("")
    const [voluntaries, setVoluntaries] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0);
        const getPresidente = async () => {
            const response = await getChapterPresident("Computer Society")
            setPresidente(response[0])
        }
        const getVicepresidente = async () => {
            const response = await getChapterVicePresident("Computer Society")
            setVicepresidente(response[0])
        }
        const getVoluntaries = async () => {
            const response = await getChapterVoluntaries("Computer Society")
            setVoluntaries(response)
        }
        getPresidente()
        getVicepresidente()
        getVoluntaries()
    }, [pathname]);

  const Life = ()=>{
    const modoComputer = true;
    var happiness
    var miedoAlExito
    var seVienenCositas
    while(modoComputer)
    {
        console.log("Lets go")
        happiness = happiness + 1
    }
  }

  return (
    <Container>
        <Section>
            <Center>
                <Fade bottom>
                    <Logo><CSLogo src="images/LogoCS.png"/></Logo>
                    <Arrow>▼</Arrow>
                </Fade>
            </Center>
            <BallCS1 src='images/hellol.png'/>
            <BallCS2 src='images/hellor.png'/>
            <BallCS3 src='images/hellocu2.png'/>
            <BallCS4 src='images/hellocd2.png'/>
            <span/>

        </Section>
        <Section2>
            <Part1>
                <Fade bottom>
                Somos un capítulo de la Rama estudiantil IEEE dedicado a profundizar en diferentes aplicaciones de la programación. <br/>
                En computer society queremos darte un espacio lleno de experiencias que impulsan tu crecimiento a nivel personal y profesional, en donde el límite lo pones tu.
                </Fade>
            </Part1>
        </Section2>
        <Section2>
            <SubTittle><Fade bottom>{"Public ArrayList<Personas> getComputerTeam()"}</Fade></SubTittle>
                <Personas>
                    {presidente &&
                    <Fade bottom>
                        <Card>
                            <BorderTop/>
                            <Fotoc><img src={presidente.Foto}/></Fotoc>
                            <span>{presidente.Nombre}</span>
                            <Job>{presidente.Cargo}</Job>
                        </Card>
                    </Fade>
                    }
                    {vicepresidente &&
                    <Fade bottom>
                        <Card>
                            <BorderTop/>
                            <Fotoc><img src={vicepresidente.Foto}/></Fotoc>
                            <span>{vicepresidente.Nombre}</span>
                            <Job>{vicepresidente.Cargo}</Job>
                        </Card>
                    </Fade>
                    }
                </Personas>
                <Personas>
                    {voluntaries.map((voluntary) => (
                        <Fade bottom>
                            <Card>
                                <BorderTop/>
                                <Fotoc><img src={voluntary.Foto}/></Fotoc>
                                <span>{voluntary.Nombre}</span>
                                <Job>{voluntary.Cargo}</Job>
                            </Card>
                        </Fade>
                    ))}
                </Personas>
        </Section2>
        <Section2>
            <SubTittle><Fade bottom>{"const getSemilleros = () =>"}</Fade></SubTittle>
            <Semillero>
                <STittle><Fade bottom>Programación Competitiva</Fade></STittle>
                <Fade><span/></Fade>
                <Fade bottom>
                    <SContent>
                        <SImage1 src='images/compe.jpeg'/>
                        <SText>El Semillero de Programación Competitiva es un espacio donde pones a prueba tus habilidades para crear algoritmos y resolver problemas de programación, con el fin de desarrollar tus habilidades de programación, y de participar en competencias para medir tu habilidades frente al mundo.</SText>
                    </SContent>
                </Fade>
            </Semillero>
            <Semillero>
                <STittle><Fade botton>Desarrollo de Videojuegos</Fade></STittle>
                <Fade><span/></Fade>
                <Fade bottom>
                    <SContent>
                    <SText>En nuestro semillero de videojuegos, cultivamos un ambiente de creatividad y colaboración, donde se promueve la exploración y la experimentación en la creación de videojuegos. Nos enfocamos en desarrollar experiencias únicas y desafiantes que trasciendan los límites de lo convencional y que inspiren a nuestros integrantes a alcanzar su máximo potencial en el mundo de los videojuegos.</SText>
                        <SImage4 src='images/videj.jpeg'/>
                    </SContent>
                </Fade>       
            </Semillero>
            <Span/>
        </Section2>
        <Section2>
            <Join>
                <Fade bottom>
                    <CodeBlockC>
                        <Code
                            text={`const Life = () => {
    const modoComputer = true;
    var happiness
    var miedoALExito
    var seVienenCositas
    while(modoComputer)
    {
        console.log("Lets go")
        happiness = happiness + 1
        miedoAlExito = miedoAlExito - 1
        seVienenCositas = seVienenCositas + 1
    }
}`}
                            language={"js"}
                            theme={theme}
                            codeBlock
                            wrapLines={true}
                            showLineNumbers={false}
                        />
                    </CodeBlockC>
                </Fade> 
                <Join1>
                    <a href='https://forms.office.com/r/MnAxiWTd3s' target="_blank"><Besp>Unete <br/> {"computerTeam.add(you)"}<span/></Besp></a>
                </Join1>
            </Join>
        </Section2>
    
    </Container>
  )
}

export default Computer
const Container = styled.div`
    display: flex;
    height: max-content;
    flex-direction: column;
    align-items: center;
    position: relative;
    font-family: 'Roboto', sans-serif;
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
    span {
        margin: 1em;
        height: 4px;
        width: 80%;
        background: black;
        margin-bottom: 4px;
        border-radius: 5px;
    }
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
const CSLogo = styled.img`

    width:40% ;
    @media (max-width: 740px) {
        width: 70%;
    }
`
const BallCS1 = styled.img`
    position: absolute;
    z-index: -1;
    width: 38vw;
    top: 0;
    left: 0;
    @media (max-width: 740px) {
        width: 60vw;
        display: none;
    }
`
const BallCS2 = styled.img`
    position: absolute;
    z-index: -1;
    width: 48vw;
    top: 0;
    right: 0;
    @media (max-width: 740px) {
        width: 60vw;
        display: none;
    }
`
const BallCS3 = styled.img`
    position: absolute;
    z-index: -1;
    width: 90vw;
    top: 10vh;
    display: none;
    @media (max-width: 740px){
        display: flex;
    }
`
const BallCS4 = styled.img`
    position: absolute;
    z-index: -1;
    width: 90vw;
    top: 58vh;
    display: none;
    @media (max-width: 740px){
        display: flex;
    }
`
const Section2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 3em;
    justify-content: center;
    align-content: center;

`
const Span = styled.span`
    margin: 1em;
    height: 4px;
    width: 80%;
    background: black;
    margin-bottom: 4px;
    border-radius: 5px;
`
const Part =  styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media (max-width: 740px) {
        flex-direction: column;
    }
`
const Part1 = styled.div`
    font-size: 2em;
    align-items: center;
    width: 80%;
    padding: 1em;

`
const While = styled.img`
    width: 40%;
    @media (max-width: 740px) {
        width: 100%;
    }
`
const SubTittle = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1em;
    background-color: #FAA41A;
    border-radius: 1em;
    align-items: center;
    justify-content: center;
    font-size: 2.5em;
    color: white;
    font-weight: bold;
    width: 90%;
    @media (max-width: 740px) {
        width: 80%;
        font-size: 2em;
    }
`
const Personas = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5em;
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
  text-align: left;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: white;
  background-color: #FAA41A;
  padding: 1em;
  margin: 0.5em;
  border-radius: 1.5em;
  align-items: center;
  span {
    margin: 0.2em;
    height: 4px;
    width: 100%;
    background: white;
  }
`
const CName = styled.div`
    text-align: left;
    width: 100%;
`
const Semillero = styled.div`
    margin-top: 5em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 3em;

    span {
    height: 4px;
    width: 30%;
    background: black;
    border-radius: 5px;
    margin-bottom: 3em;
  }
`
const STittle = styled.div`
    font-size: 2em;
    font-weight: bold;
    width: 80%;
    margin: 1em;
    @media (max-width: 740px) {
        width: 50%;
    }
`
const SContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 1em;
    @media (max-width: 740px) {
        flex-direction: column;
        gap: 4em;
    }
`
const SImage1 = styled.img`
    width: 35%;
    border-radius: 2em;
    @media (max-width: 740px) {
        width: 50%;
    }
`
const SImage2 = styled.img`
    width: 40%;
    @media (max-width: 740px) {
        margin-top: 4em;
        width: 90%;
    }
`
const SImage3 = styled.img`
    width: 40%;
    @media (max-width: 740px) {
        width: 90%;
    }
`
const SImage4 = styled.img`
    width: 35%;
    border-radius: 2em;
    @media (max-width: 740px) {
        width: 50%;
    }
`
const Join  = styled.div`
    margin-top: 2em;
    margin-bottom: 5em;
    display: flex;
    gap: 6em;
    @media (max-width: 740px) {
        flex-direction: column;
  
    }
`
const Join1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Button = styled.div`
    background-color: #FAA41A;
    border-radius: 1.2em;
    color: white;
    font-size: 2em;
    font-weight: bold;
    padding: 0.5em;
    margin-top: 1em;
    &:hover{
        background-color: black;
        color: white;
        transform: scale(1.1);
        transition: 0.5s;
    }
    @media (max-width: 740px) {
        
        font-size: 1.5em;
    }
`
const WhileF = styled.img`

    width:100%;
    
`

const SText = styled.div`
    display: flex;
    padding: 0 3em 0 3em;
    font-size: 2em;
    align-items: center;

    @media (max-width: 1000px) {
        
        padding: 1em;
        font-size: 1.8em;
    }
    
`
const Besp  = styled.button`

    --color: #FAA41A;
    font-family: inherit;
    display: inline-block;
    width: 13em;
    height: 5em;
    line-height: 2em;
    position: relative;
    overflow: hidden;
    border: 4px solid var(--color);
    transition: color .5s;
    z-index: 1;
    background-color: transparent;
    font-size: 1.8em;
    border-radius: 1em;
    font-weight: bold;
    color: var(--color);

    &:before{
        content: "";
        position: absolute;
        z-index: -1;
        background: var(--color);
        height: 15em;
        width:  20em;
        border-radius: 25%;
        top: 100%;
        left: 100%;
        transition: all .9s;
    }

    &:hover{
        color: #fff;
        &:before{
            top: -30px;
            left: -30px;
        }
    }

    &:active{
        &:before{
            background: #FAA41AAB;
            transition: background 0s;
        }
    }


    
`
const Card = styled.div`
    width: 14em;
    height: 20em;
    background: #EB9A18;
    border-radius: 15px;
    box-shadow: 1px 5px 60px 0px #100a886b;
    margin-top: 2em;
    span {
        font-weight: 600;
        color: white;
        text-align: center;
        display: block;
        padding-top: 10px;
        font-size: 1.5em;
    }
    button {
    padding: 8px 25px;
    display: block;
    margin: auto;
    border-radius: 8px;
    border: none;
    margin-top: 30px;
    background: #FAA41A;
    color: white;
    font-weight: 600;
    }
    &:hover{
        transform: scale(1.04);
        transition: 1s;
    }
`
const BorderTop = styled.div`
    width: 60%;
    height: 3%;
    background: #FFB70C;
    margin: auto;
    border-radius: 0px 0px 15px 15px; 
`
const Job = styled.div`
    font-weight: 400;
    color: white;
    display: block;
    text-align: center;
    padding-top: 3px;
    font-size: 1.2em;
`

const Fotoc = styled.div`
    width: 10em;
    height: 10em;
    background: #FAA41A;
    border-radius: 15px;
    border: 4px solid #FFB70C;
    margin: auto;
    margin-top: 25px;
    overflow: hidden;
    img{
    width: auto;
    height: 100%; 
  }
`
const CodeBlockC = styled.div`
    justify-content: flex-start;
    text-align: start;
    padding: 1em;
`
const Code = styled(CodeBlock)`

`