import React, { useState, useEffect} from 'react'
import { auth} from "../../firebase"
import { useLocation, useNavigate } from 'react-router-dom'
import { selecUserName,
  selecUserPhoto,
  selecUserUid,
  setUserLogin,
  setSignOut, 
  selecUserEmail} from '../../features/user/UserSlice'
import {useDispatch, useSelector} from "react-redux"
import { Hamburger, Left, Logo, MenuLink, NavMenu, Nav } from './HeaderStyle'

function Header() {

    const [isOpen, setIsOpen] = useState(false)
    const [headerColor, setHeaderColor] = useState('')
    const history = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()


    const main= () => {
      history('/')
    }

    useEffect(() => {
      if(location.pathname === "/computer"){
          setHeaderColor('linear-gradient(90deg, rgba(255,157,0,1) 0%, rgba(255,185,72,1) 100%);')
      }
      else if(location.pathname === "/ras"){
          setHeaderColor('linear-gradient(90deg, rgba(151,1,45,1) 0%, rgba(223,1,66,1) 100%);')
      }
      else if(location.pathname === "/wiee"){
          setHeaderColor('linear-gradient(90deg, rgba(117,47,139,1) 0%, rgba(186,151,197,1) 100%);')
      }
      else if(location.pathname === "/aess"){
          setHeaderColor('linear-gradient(90deg, rgba(17,2,31,1) 0%, rgba(66,28,102,1) 100%);')
      }
      else{
          setHeaderColor('linear-gradient(153deg, rgba(0,0,0,1) 0%, rgba(57,52,52,1) 100%, rgba(251,251,251,1) 100%);')
      }
    }
    ,[location])

    useEffect(() => {
      auth.onAuthStateChanged(async (user) =>{
          if(user){
              dispatch(setUserLogin({
                  name: user.displayName,
                  email: user.email,
                  uid: user.uid,
                  photo: user.photoURL
                  
              }))
              history("/admin")
          }else{
            history("/")  
          }
      })
    },[])     
    
    const userEmail = useSelector(selecUserEmail);

    const signOut = () => {
      auth.signOut()
      .then(()=> {
          dispatch(setSignOut());
          history.push("/intro")
      })
  }
  return (
    <Nav headerColor={headerColor}>
        <Left>
        <Logo onClick={main} src='images/logob.png'/>
        </Left>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
            <span />
            <span />
            <span />
        </Hamburger>
        <NavMenu isOpen={isOpen} onClick={() => setIsOpen(false)}>
            <MenuLink to={`/`}> <span>Inicio</span> </MenuLink>
            <MenuLink to={`/nosotros`}> <span>Nosotros</span> </MenuLink>
            <MenuLink to={`/capitulos`}> <span>Capítulos</span> </MenuLink>
            <MenuLink to={`/event`}> <span>Eventos</span> </MenuLink>
            {!userEmail ? (
              <MenuLink to={`/login`}> <span>Login</span> </MenuLink>
            ):
            <>
              <MenuLink to={`/admin`}> <span>Admin</span> </MenuLink>
              <MenuLink><span onClick={signOut}>Sign Out</span></MenuLink>
            </>}
        </NavMenu>
    </Nav>
  )
}

export default Header

