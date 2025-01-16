import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getChapterPresident, getChaptersPresidents, getChapterVicePresident, getChapterVoluntaries } from '../querys/GetVoluntarios'

function Nosotros() {

  const [Presidente, setPresidente] = useState([])
  const [Vicepresidente, setVicepresidente] = useState([])
  const [Voluntarios, setVoluntarios] = useState([])
  const [ChapterPresidents, setChapterPresidents] = useState([])
  useEffect(() => {
    const getPresidente = async () => {
      const response = await getChapterPresident('Mesa Directiva')
      setPresidente(response[0])
    }
    const getVicepresidente = async () => {
      const response = await getChapterVicePresident('Mesa Directiva')
      setVicepresidente(response[0])
    }
    const getVoluntarios = async () => {
      const response = await getChapterVoluntaries('Mesa Directiva')
      setVoluntarios(response)
    }
    const getPresidents = async () => {
      const response = await getChaptersPresidents()
      console.log(response)
      setChapterPresidents(response)
    }

    getPresidente()
    getVicepresidente()
    getVoluntarios()
    getPresidents()
  }
  ,[])
  return (
    <Container>
      <Title><div>Nuestro Equipo</div></Title>
      <Personas>
      
        {Presidente && 
          <StyledWrapper>
            <div className="card">
              <div className="card-photo">
                <img src={Presidente.Foto} alt="profile" />
              </div>
              <div className="card-title">{Presidente.Nombre} <br />
                <span>{Presidente.Cargo}</span>
              </div>
              <div className="card-socials">
                <button className="card-socials-btn facebook" onClick={() => window.location.href = "https://wa.me/+57" + Presidente.Celular}>
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
                  </svg>
                </button>
                <button className="card-socials-btn github"   onClick={() => window.location.href = "mailto:" + Presidente.Correo}>
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="#343C54" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22 6.25649V17.25C22 18.4926 20.9926 19.5 19.75 19.5H4.25C3.00736 19.5 2 18.4926 2 17.25V6.23398C2 6.22372 2.00021 6.2135 2.00061 6.20334C2.01781 5.25972 2.78812 4.5 3.73592 4.5H20.2644C21.2229 4.5 22 5.27697 22.0001 6.23549C22.0001 6.24249 22.0001 6.24949 22 6.25649ZM3.5 8.187V17.25C3.5 17.6642 3.83579 18 4.25 18H19.75C20.1642 18 20.5 17.6642 20.5 17.25V8.18747L13.2873 13.2171C12.5141 13.7563 11.4866 13.7563 10.7134 13.2171L3.5 8.187ZM20.5 6.2286L20.5 6.23398V6.24336C20.4976 6.31753 20.4604 6.38643 20.3992 6.42905L12.4293 11.9867C12.1716 12.1664 11.8291 12.1664 11.5713 11.9867L3.60116 6.42885C3.538 6.38481 3.50035 6.31268 3.50032 6.23568C3.50028 6.10553 3.60577 6 3.73592 6H20.2644C20.3922 6 20.4963 6.10171 20.5 6.2286Z" fill="#343C54"/>
                  </svg>
                </button>
              </div>
            </div>
          </StyledWrapper>
      }
      {Vicepresidente && 
         <StyledWrapper>
         <div className="card">
           <div className="card-photo">
             <img src={Vicepresidente.Foto} alt="profile" />
           </div>
           <div className="card-title">{Vicepresidente.Nombre} <br />
             <span>{Vicepresidente.Cargo}</span>
           </div>
           <div className="card-socials">
           <button className="card-socials-btn facebook" onClick={() => window.location.href = "https://wa.me/+57" + Vicepresidente.Celular}>
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
              </svg>
            </button>
            <button className="card-socials-btn github"   onClick={() => window.location.href = "mailto:" + Vicepresidente.Correo}>
              <svg width="80" height="80" viewBox="0 0 24 24" fill="#343C54" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22 6.25649V17.25C22 18.4926 20.9926 19.5 19.75 19.5H4.25C3.00736 19.5 2 18.4926 2 17.25V6.23398C2 6.22372 2.00021 6.2135 2.00061 6.20334C2.01781 5.25972 2.78812 4.5 3.73592 4.5H20.2644C21.2229 4.5 22 5.27697 22.0001 6.23549C22.0001 6.24249 22.0001 6.24949 22 6.25649ZM3.5 8.187V17.25C3.5 17.6642 3.83579 18 4.25 18H19.75C20.1642 18 20.5 17.6642 20.5 17.25V8.18747L13.2873 13.2171C12.5141 13.7563 11.4866 13.7563 10.7134 13.2171L3.5 8.187ZM20.5 6.2286L20.5 6.23398V6.24336C20.4976 6.31753 20.4604 6.38643 20.3992 6.42905L12.4293 11.9867C12.1716 12.1664 11.8291 12.1664 11.5713 11.9867L3.60116 6.42885C3.538 6.38481 3.50035 6.31268 3.50032 6.23568C3.50028 6.10553 3.60577 6 3.73592 6H20.2644C20.3922 6 20.4963 6.10171 20.5 6.2286Z" fill="#343C54"/>
              </svg>
            </button>
           </div>
         </div>
       </StyledWrapper>
      }     
      </Personas>
      <Personas>
        {ChapterPresidents.map((presidente) => (
          <StyledWrapper>
          <div className="card">
            <div className="card-photo">
              <img src={presidente.Foto} alt="profile" />
            </div>
            <div className="card-title">{presidente.Nombre} <br />
              <span>{presidente.Cargo} {presidente.Capitulo === 'Computer Society' ? 'CS' : presidente.Capitulo}</span>            </div>
            <div className="card-socials">
              <button className="card-socials-btn facebook" onClick={() => window.location.href = "https://wa.me/+57" + presidente.Celular}>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
                </svg>
              </button>
              <button className="card-socials-btn github"   onClick={() => window.location.href = "mailto:" + presidente.Correo}>
                <svg width="80" height="80" viewBox="0 0 24 24" fill="#343C54" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M22 6.25649V17.25C22 18.4926 20.9926 19.5 19.75 19.5H4.25C3.00736 19.5 2 18.4926 2 17.25V6.23398C2 6.22372 2.00021 6.2135 2.00061 6.20334C2.01781 5.25972 2.78812 4.5 3.73592 4.5H20.2644C21.2229 4.5 22 5.27697 22.0001 6.23549C22.0001 6.24249 22.0001 6.24949 22 6.25649ZM3.5 8.187V17.25C3.5 17.6642 3.83579 18 4.25 18H19.75C20.1642 18 20.5 17.6642 20.5 17.25V8.18747L13.2873 13.2171C12.5141 13.7563 11.4866 13.7563 10.7134 13.2171L3.5 8.187ZM20.5 6.2286L20.5 6.23398V6.24336C20.4976 6.31753 20.4604 6.38643 20.3992 6.42905L12.4293 11.9867C12.1716 12.1664 11.8291 12.1664 11.5713 11.9867L3.60116 6.42885C3.538 6.38481 3.50035 6.31268 3.50032 6.23568C3.50028 6.10553 3.60577 6 3.73592 6H20.2644C20.3922 6 20.4963 6.10171 20.5 6.2286Z" fill="#343C54"/>
                </svg>
              </button>
            </div>
          </div>
        </StyledWrapper>
        ))}
      </Personas>   
      <Personas>
        {Voluntarios.map((voluntario) => (
          <StyledWrapper>
          <div className="card">
            <div className="card-photo">
              <img src={voluntario.Foto} alt="profile" />
            </div>
            <div className="card-title">{voluntario.Nombre} <br />
              <span>{voluntario.Cargo}</span>
            </div>
            <div className="card-socials">
            <button className="card-socials-btn facebook" onClick={() => window.location.href = "https://wa.me/+57" + voluntario.Celular}>
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
              </svg>
            </button>
            <button className="card-socials-btn github"   onClick={() => window.location.href = "mailto:" + voluntario.Correo}>
              <svg width="80" height="80" viewBox="0 0 24 24" fill="#343C54" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22 6.25649V17.25C22 18.4926 20.9926 19.5 19.75 19.5H4.25C3.00736 19.5 2 18.4926 2 17.25V6.23398C2 6.22372 2.00021 6.2135 2.00061 6.20334C2.01781 5.25972 2.78812 4.5 3.73592 4.5H20.2644C21.2229 4.5 22 5.27697 22.0001 6.23549C22.0001 6.24249 22.0001 6.24949 22 6.25649ZM3.5 8.187V17.25C3.5 17.6642 3.83579 18 4.25 18H19.75C20.1642 18 20.5 17.6642 20.5 17.25V8.18747L13.2873 13.2171C12.5141 13.7563 11.4866 13.7563 10.7134 13.2171L3.5 8.187ZM20.5 6.2286L20.5 6.23398V6.24336C20.4976 6.31753 20.4604 6.38643 20.3992 6.42905L12.4293 11.9867C12.1716 12.1664 11.8291 12.1664 11.5713 11.9867L3.60116 6.42885C3.538 6.38481 3.50035 6.31268 3.50032 6.23568C3.50028 6.10553 3.60577 6 3.73592 6H20.2644C20.3922 6 20.4963 6.10171 20.5 6.2286Z" fill="#343C54"/>
              </svg>
            </button>
            </div>
          </div>
        </StyledWrapper>
        ))}
      </Personas>
      <br/>
      <br/>
      <br/>
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
  gap: 5em;
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
const Card = styled.div`
  width: 230px;
  height: 280px;
  border-radius: 2em;
  padding: 10px;
  background-color: #191919;
  box-shadow: 3px 3px 25px rgb(20, 20, 20),
                   -3px -3px 30px rgb(150, 150, 150);
  a {
    transition: 0.4s;
    color: white
  }
  &:hover{
    transform: scale(1.02);
    transition: 0.2s;
  }

  #github:hover {
    color: #c9510c;
  }

  #instagram:hover {
    color: #d62976;
  }

  #facebook:hover {
    color: #3b5998;
  }

  #whatsapp:hover{
    color:#31CC24;
  }

  #twitter:hover {
    color: #00acee;
  }
`
const ProfileImage = styled.div`
  position: relative;
  border: 4px solid black;
  border-radius: 50%;
  color: white;
  box-shadow: 2px 2px 10px rgb(0, 0, 0),
                   -2px -2px 10px rgb(58, 58, 58);
  overflow: hidden;
  width: 8em;
  align-content: center;
  height: 8em;
  img{
    width: auto;
    height: 100%; 
  }
`
const NameCard = styled.div`
  color: white;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 1.1em;
`
const SocialCard = styled.div`
  background-color: #191919;
  border-radius: 3em;
  width: 90%;
  padding: 14px;
  margin-top: 15px;
  color: white;
  box-shadow: 3px 3px 15px rgb(0, 0, 0),
                   -3px -3px 15px rgb(58, 58, 58);
`
const StyledWrapper = styled.div`
  /* before adding the photo to the div with the "card-photo" class, in the css clear the styles for .card-photo and remove .card-photo::before and .card-photo::after, then set the desired styles for .card- photo. */

  .card {
    --font-color: #323232;
    --font-color-sub: #666;
    --bg-color: #fff;
    --main-color: #323232;
    width: 200px;
    height: 254px;
    background: var(--bg-color);
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }

  .card-photo {
  display: flex;
  width: 6em;
  height: 6em;
  background-color: #ccc;
  margin-bottom: 1em;
  background-repeat: no-repeat;
  border-radius: 30%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

  }
}


  .card-title {
    text-align: center;
    color: var(--font-color);
    font-size: 20px;
    font-weight: 400;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .card-title span {
    font-size: 15px;
    color: var(--font-color-sub);
  }

  .card-socials {
    display: flex;
    height: 0;
    opacity: 0;
    margin-top: 20px;
    gap: 20px;
    transition: 0.5s;
  }

  .card-socials-btn {
    width: 40px;
    height: 40px;
    border: none;
    background: transparent;
    cursor: pointer;
  }

  .card-socials-btn svg {
    width: 100%;
    height: 100%;
    fill: var(--main-color);
  }

  .card:hover > .card-socials {
    opacity: 1;
    height: 35px;
  }

  .card-socials-btn:hover {
    transform: translateY(-5px);
    transition: all 0.15s;
  }

`;
