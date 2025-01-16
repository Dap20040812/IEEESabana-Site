import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import { btnReset, v } from "../styles/variables";
import { Link, useNavigate } from "react-router-dom";
import {selecUserUid, selecUserPhoto, selecUserName, setSignOut} from "../features/user/UserSlice"
import {useDispatch, useSelector} from "react-redux"
import {
  AiOutlineApartment,
  AiOutlineHome,
  AiOutlineLeft,
  AiOutlineSearch,
  AiOutlineSetting,
} from "react-icons/ai";
import { GrSchedules } from "react-icons/gr";
import { MdLogout, MdOutlineAnalytics } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import User from './User';
import AddEvent from './AddEvent';
import CapituloConf from './CapituloConf';
import db, { auth } from '../firebase';
import ContentManager from './ContentManager';
import RamaConf from './RamaConf';



function AdminHome() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [voluntary, setVoluntary] = useState()
  const id = useSelector(selecUserUid)
  const [capitulo, setCapitulo] = useState()
  const history = useNavigate()
  const dispatch = useDispatch()
  
  const signOut = () => {

    auth.signOut()
    .then(()=> {
        dispatch(setSignOut());
        history.push("/intro")
    })
}

  useEffect(() => {

    const GetUser = async() =>{
        await db.collection("Voluntarios")
        .where('UserID', '==', id)
        .get()
        .then((querySnapshot) => {
             querySnapshot.forEach((doc) => {
               setVoluntary(doc.data())  
                db.collection("Capitulos")
                .where('Nombre', '==', doc.data().Capitulo)
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        setCapitulo(doc.data())
                        console.log('Document data:', doc.data());
                    });
                })             
                });
        })
    }

    GetUser()


  },[]) 

  const nextPage = (number) => {
    setPage(number)
    console.log(number)
  }
  return (
    <Container>
      <SSidebar isOpen={sidebarOpen}>
            <>
                <SSidebarButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
                  <AiOutlineLeft />
                </SSidebarButton>
            </>
            <SLogo>
                <img src="images/iconot.png" alt="logo" />
            </SLogo>
            <SDivider />
            {linksArray.map(({ icon, label, notification, to }) => (
                <SLinkContainer key={label}>
                    <SLink onClick={() => nextPage(to)} style={!sidebarOpen ? { width: `fit-content` } : {}}>
                        <SLinkIcon>{icon}</SLinkIcon>
                        {sidebarOpen && (
                            <>
                                <SLinkLabel>{label}</SLinkLabel>
                                {/* if notifications are at 0 or null, do not display */}
                                {!!notification && (
                                    <SLinkNotification>{notification}</SLinkNotification>
                                )}
                            </>
                        )}
                    </SLink>
                </SLinkContainer>
            ))}
            <SDivider />
             <SLinkContainer key={"Salir"} onClick={signOut}>
                    <SLink  style={!sidebarOpen ? { width: `fit-content` } : {}}>
                        <SLinkIcon><MdLogout/></SLinkIcon>
                        {sidebarOpen && <SLinkLabel>"Salir"</SLinkLabel>}
                    </SLink>
                </SLinkContainer>
            <SDivider />
        </SSidebar>
        {page === 1 ? (
          <>
            <User/>
          </>
        ):<>
        {page === 2 ? (
          <>
            <RamaConf/>
          </>
        ) :<>{page === 3 ? (
            <>
                <AddEvent/>
            </>
        ):<>
            <ContentManager/>
        </>}
        </>}
        </>}
        
    </Container>
  )
}

export default AdminHome

const Container = styled.div`
    display: flex;
    height: max-content;
    flex-direction: column;
    position: relative;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`

const SSidebar = styled.div`
    width: ${({ isOpen }) => (!isOpen ? `auto` : v.sidebarWidth)};
    background: rgb(245,245,245);
    height: calc(screen); 
    padding: ${v.lgSpacing};
    position: relative;
`
const SSidebarButton = styled.button`
    ${btnReset};
    position: absolute;
    top: ${v.xxlSpacing};
    right: ${({ isOpen }) => (isOpen ? `-16px` : `-40px`)};
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgb(255,255,255);
    box-shadow: 0 0 4px rgb(230,230,230);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};
`

const SLogo = styled.div`
    width: 52px;
    img {
        max-width: 100%;
        height: auto;
    }
    cursor: pointer;
    margin-bottom: ${v.lgSpacing};
`

const SSearch = styled.div`
    background: rgba(250,250,250,.3);
    border: 1px solid rgb(230,230,230);
    border-radius: ${v.borderRadius};
    input {
        padding: 0 ${v.smSpacing};
        font-family: inherit;
        letter-spacing: inherit;
        font-size: 16px;
        width: 100%;
        outline: none;
        border: none;
        color: inherit;
        background: transparent;
    }
    display: flex;
`;

const SSearchIcon = styled.button`
    ${btnReset};
    padding: calc(${v.mdSpacing} - 2px) ${v.mdSpacing};
    display: flex;
    cursor: pointer;
    svg {
        font-size: 20px;
    }
`;

const SDivider = styled.div`
    height: 1px;
    width: 100%;
    background: rgb(230,230,230);
    margin: ${v.lgSpacing} 0;
`;

const SLinkContainer = styled.div`
    background: ${({ isActive }) => (!isActive ? `transparent` : 'rgb(230,230,230)')};
    border-radius: ${v.borderRadius};
    margin: 8px 0;
    :hover {
        box-shadow: inset 0 0 0 1px rgb(230,230,230);
    }
`;

const SLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    font-size: 16px;
    padding: calc(${v.smSpacing} - 2px) 0;
`;

const SLinkIcon = styled.div`
    padding: ${v.smSpacing} ${v.mdSpacing};
    display: flex;
    svg {
        font-size: 20px;
    }
`;

const SLinkLabel = styled.span`
    display: block;
    flex: 1;
    margin-left: ${v.smSpacing};
`;

const SLinkNotification = styled.div`
    font-size: 14px;
    padding: calc(${v.smSpacing} / 2) ${v.smSpacing};
    border-radius: calc(${v.borderRadius} / 2);
    background: rgb(52, 131, 235);
    color: white;
    margin-right: ${v.mdSpacing};
`;

const STheme = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
`;
const SThemeLabel = styled.span`
    display: block;
    flex: 1;
`;
const SThemeToggler = styled.button`
    ${btnReset};
    margin: 0 auto;
    cursor: pointer;
    width: 36px;
    height: 20px;
    border-radius: 10px;
    background: ${({isActive }) => (!isActive ? 'rgb(230,230,230)' : 'rgb(52, 131, 235)')};
    position: relative;
`;

const SToggleThumb = styled.div`
    height: 18px;
    width: 18px;
    position: absolute;
    top: 1px;
    bottom: 1px;
    transition: 0.2s ease right;
    right: calc(100% - 18px - 1px);
    border-radius: 50%;
    background: rgb(255,255,255);
`;

const linksArray = [
  {
      label: "Home",
      icon: <AiOutlineHome />,
      to: 1,
      notification: 0,
  },
  {
      label: "Statistics",
      icon: <BsPeople />,
      to: 2,
      notification: 3,
  },
  {
      label: "Customers",
      icon: <GrSchedules/>,
      to: 3,
      notification: 0,
  },
  {
      label: "Diagrams",
      icon: <AiOutlineApartment />,
      to: 4,
      notification: 1,
  },
];

const secondaryLinksArray = [
  {
      label: "Settings",
      icon: <AiOutlineSetting />,
  }
];