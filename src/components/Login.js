import React, {useState} from 'react'
import styled from 'styled-components'
import {useDispatch} from "react-redux"
import { useNavigate} from 'react-router-dom'
import { setUserLogin} from '../features/user/UserSlice'
import {auth} from "../firebase"

function Login() {
  const [ password, setPassword] = useState('')
  const [ userName, setUserName] = useState('')
  const [ errors, setErrors ] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const findFormErrors = () => {
    const newErrors = {}
    if ( !password || password === '' ) newErrors.password = 'Ingresa una contraseña para continuar.'
    if ( !userName || userName === '' ) newErrors.userName = 'Ingresa el nombre de usuario para continuar.'

    return newErrors
}

  function submitHandler (e) {

    e.preventDefault();
    const newErrors = findFormErrors()
    if(newErrors.userName  !== "Ingresa el nombre de usuario para continuar."  && newErrors.password !== "Ingresa una contraseña para continuar."){
        auth.signInWithEmailAndPassword(userName, password)
        .then((result) => {
              let user = result.user
              dispatch(setUserLogin({
                  name: user.displayName,
                  email: user.email,
                  uid: user.uid,
                  photo: user.photoURL
              }))
              navigate("/admin")

          }).catch(ERROR_INVALID_EMAIL => {
            newErrors.userName = "Correo no válido."
            setErrors(newErrors)
            }).catch(ERROR_WRONG_PASSWORD => {
              newErrors.password = "Contraseña no válida."
              setErrors(newErrors)
            })
      }
    else{
        setErrors(newErrors)
    }
  }

  return (
    <Container>
        <Form onSubmit={submitHandler}>
            <Heading>Ingresar</Heading>
            <Field>
                <Iicon xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
                </Iicon>
                <Ifield value={userName} onChange={(e) => {setUserName(e.target.value) 
                    setErrors({})}}  autocomplete="off" placeholder="Correo" class="input-field" type="text"/>
            </Field>
            <Error>{errors.userName}</Error>
            <Field>
                <Iicon class="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                </Iicon>
                <Ifield value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" class="input-field" type="password"/>
            </Field>
            <Error>{errors.password}</Error>
            <Btn>
                <Button1 type='submit'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enviar&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button1>
            </Btn>
        </Form>
    </Container>
  )
}

export default Login

const Container = styled.div`
    display: flex;
    height: 80vh;
    flex-direction: column;
    align-items: center;
    position: relative;
    font-family: 'Roboto', sans-serif;
`
const Form = styled.form`
  display: flex;
  margin: 1em;
  margin-top: 9em;
  flex-direction: column;
  gap: 8px;
  padding-left: 4em;
  padding-right: 4em;
  padding-bottom: 2em;
  background-color: #171717;
  border-radius: 25px;
  transition: .4s ease-in-out;

  &:hover{
    transform: scale(1.05);
    border: 1px solid black;
  }
`
const Btn = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 2.5em;
`
const Heading  = styled.p`
    text-align: center;
    margin: 2em;
    color: rgb(255, 255, 255);
    font-size: 2em;
`

const Field = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  border-radius: 25px;
  padding: 1em;
  border: none;
  outline: none;
  color: white;
  background-color: #171717;
  box-shadow: inset 2px 5px 10px rgb(5, 5, 5);    
`

const Iicon = styled.svg`
  background: none;
  border: none;
  outline: none;
  width: 4em;
  color: #d3d3d3;
`
const Ifield = styled.input`
  background: none;
  border: none;
  outline: none;
  width: 100%;
  color: #d3d3d3;
`

const Button1 = styled.button`
  padding: 1em;
  padding-left: 1.5em;
  padding-right: 1.5em;
  border-radius: 5px;
  font-weight: bold;
  margin-right: 0.5em;
  border: none;
  outline: none;
  transition: .4s ease-in-out;
  background-color: #252525;
  color: white;

  &:hover {
    background-color: black;
    color: white;
  }
`
const button2 = styled.button`
    padding: 0.5em;
    padding-left: 2.3em;
    padding-right: 2.3em;
    border-radius: 5px;
    border: none;
    outline: none;
    transition: .4s ease-in-out;
    background-color: #252525;
    color: white;

    &:hover {
        background-color: black;
        color: white;
    }
`
const button3 = styled.button`
  margin-bottom: 3em;
  padding: 0.5em;
  border-radius: 5px;
  border: none;
  outline: none;
  transition: .4s ease-in-out;
  background-color: #252525;
  color: white;

  &:hover {
    background-color: red;
    color: white;
  }
`
const Error = styled.div`
    color: white;
    margin: 0.3em;
`







