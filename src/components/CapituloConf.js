import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {selecUserUid, selecUserPhoto, selecUserName} from "../features/user/UserSlice"
import db from '../firebase'
import {useSelector} from "react-redux"
import getPresidente, { addObjectToCargosF, getCOmputerVoluntaries, deleteObjectToCargosF, getExistingVoluntaries} from '../querys/GetComputer'
import {AiOutlineSetting, AiOutlineUserAdd, AiOutlineArrowLeft,AiOutlineClose} from "react-icons/ai";
import { IoMdCreate } from "react-icons/io";
import { StyleRounded } from '@material-ui/icons'
import {storage} from '../firebase'
import {Spinner} from "reactstrap"
import createVoluntary from '../querys/createVoluntary'
import { BsBox } from 'react-icons/bs'
import { getValue } from '@testing-library/user-event/dist/utils'
import updateVoluntaryCharge, { addExistVoluntaryToChapter, deleteVoluntaryOfChapter } from '../querys/editVoluntary'


function CapituloConf(props) {

  const id = useSelector(selecUserUid)
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [edit, setEdit] = useState(false);
  const [voluntaries, setVoluntaries] = useState()
  const [logo, setLogo] = useState("")
  const [numVoluntaries, setNumVoluntaries] = useState(0)
  const [presidente, setPresidente] = useState()
  const [add, setAdd] = useState(false)
  const [addCargo, setAddCargo] = useState(false)
  const [deleteCargos, setDeleteCargos] = useState(false)
  const [cargo, setCargo] = useState()
  const [selectCargo, setSelectCargo] = useState()
  const [dCargo, setDCargo] = useState()
  const [capitulo, setCapitulo] = useState()
  const [loading, setLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState("")
  const [tel,setTel] = useState("")
  const [vcreated, setVcreated] = useState(false)
  const [error, setError] = useState("")
  const [password, setPassword] = useState("")
  const [editVoluntary, setEditVoluntary] = useState(false)
  const [voluntaryToEdit, setVoluntaryToEdit] = useState()
  const [changeCharge, setChangeCharge] = useState(false)
  const [deleteVoluntary, setDeleteVoluntary] = useState(false)
  const [editBox, setEditBox] = useState(false)
  const [newV, setNewV] = useState(true)
  const [exist, setExist] = useState(false)
  const [extisVoluntaries, setExistVoluntaries] = useState(false)
  const [addExistVoluntary, setAddExistVoluntary] = useState(false)

  useEffect(() => {

    const GetPresi = async() =>{
        db.collection("Voluntarios")
        .where('Cargo', '==', "Presidente")
        .where('Capitulo', '==', "Computer Society")
        .get()
        .then((querySnapshot) => {
             querySnapshot.forEach((doc) => {
               setPresidente(doc.data())               
          });
        })
    }

    const GetVolunatries = async () => {
        const voluntariesArray = []; 
        db.collection("Voluntarios")
            .where('Capitulo', '==', props.capitulo.Nombre)
            .where('Cargo', '!=', "Presidente")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    voluntariesArray.push({ id: doc.id, ...doc.data() });
                });
                setVoluntaries(voluntariesArray);
                console.log(voluntariesArray); 
            })
            .catch((error) => {
                console.error("Error getting voluntaries: ", error);
            });
    };

    const GetCapitulo = async () => {
      await db.collection("Capitulos")
                .where('Nombre', '==', props.capitulo.Nombre)
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        setCapitulo(doc.data())
                        console.log('Document data:', doc.data());
                    });
                })    
    }

    setNumVoluntaries(props.capitulo.Voluntarios.length);
    GetCapitulo()  
    GetPresi()
    GetVolunatries()
    setEditBox(false)

  },[]) 



const handleSubmit = async(e) => {
  e.preventDefault();
  let error, password = await createVoluntary(capitulo.Nombre,selectCargo, email, imgUrl, username, tel)
  setPassword(password)
  setError(error)
  setAdd(false)
  setVcreated(true)
}
const handleEdit = async(e) => {
  e.preventDefault();
  await updateVoluntaryCharge(voluntaryToEdit, selectCargo)
  setEditVoluntary(false)
  setChangeCharge(false)
  setEditBox(false)
}
const handleAddExistVoluntary = async(e) => {
  e.preventDefault();
  await addExistVoluntaryToChapter(voluntaryToEdit, selectCargo, capitulo.Nombre)

}
const usernameEntered = (e) => {
    setUsername(e.target.value);
} 
const emailEntered = (e) => {
  setEmail(e.target.value);
} 
const cargoEntered = (e) => {
  var selectElement = document.getElementById("mySelect");
  var selectedOption = selectElement.options[selectElement.selectedIndex];
  var value = selectedOption.value;
  setSelectCargo(value);
  console.log(value)
} 
const telEntered = (e) => {
  setTel(e.target.value);
} 
const AddCargo = async(e) =>{
  e.preventDefault();
  addObjectToCargosF(capitulo.Nombre, cargo)
  console.log("v")
  setCargo("") 
  setAddCargo(false)
            
}
const deleteCargo = () => {
  const newChapter = capitulo.CargosF.filter(cargo => cargo !== dCargo);
  deleteObjectToCargosF(capitulo.Nombre, newChapter)
  setDeleteCargos(false)
  console.log(newChapter,id)
}
const setCargosToDelete = (cargos) => {
  setDeleteCargos(true)
  setDCargo(cargos)
}
const archivoMandler = async (e)=>{
  setLoading(true)
  const archivo = e.target.files[0];
  const storageRef = storage.ref();
  const archivoPath = storageRef.child(archivo.name);
  await archivoPath.put(archivo);
  console.log(archivo.name);
  const url =  await archivoPath.getDownloadURL();
  setImgUrl(url)
  setLoading(false)
}
const configVoluntary = (voluntary) => {
  setVoluntaryToEdit(voluntary)
  setEditVoluntary(true)
}
const changeChargeBox = () => {
  setChangeCharge(true)
  setEditBox(true)
}
const deleteVoluntaryBox = () => {
  setDeleteVoluntary(true)
  setEditBox(true)
}
const back = () => {
  setEditVoluntary(false)
  setEditBox(false)
  setChangeCharge(false)
  setDeleteVoluntary(false)
}
const closeBox = () => {
  setEditBox(false)
  setChangeCharge(false)
}
const deleteVoluntaryChapter = async(voluntary) => {

  await deleteVoluntaryOfChapter(voluntary)
  setEditBox(false)
  setEditVoluntary(false)
  setDeleteVoluntary(false)
}
const changeOption1 = () => {
  setExist(false)
  setNewV(true)
}
const changeOption2 = () => {
  setExist(true)
  setNewV(false)
}
useEffect(() => {
  const GetVolunatries = async () => {
    const voluntariesArray = []; 
    db.collection("Voluntarios")
        .where('Capitulo', '==', props.capitulo.Nombre)
        .where('Cargo', '!=', "Presidente")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                voluntariesArray.push({ id: doc.id, ...doc.data() });
            });
            setVoluntaries(voluntariesArray);
            console.log(voluntariesArray); 
        })
        .catch((error) => {
            console.error("Error getting voluntaries: ", error);
        });
  };

  const GetCapitulo = async () => {

    
    await db.collection("Capitulos")
              .where('Nombre', '==', props.capitulo.Nombre)
              .get()
              .then((querySnapshot) => {
                  querySnapshot.forEach((doc) => {
                      setCapitulo(doc.data())
                      console.log('Document data:', doc.data());
                  });
              })    
  }

  setTimeout(() => {
    GetVolunatries() 
    GetCapitulo()
  }, 1000);

},[editVoluntary, vcreated])

useEffect(() => {
  const GetVoluntary = async() => {
    setExistVoluntaries(await getExistingVoluntaries())
  }
  console.log(getExistingVoluntaries())

 GetVoluntary()
},[exist])

    return (
    <Container>
        {add === false & editVoluntary === false ? (
          <>
            <Title>Gestión de Capítulo</Title>
                {capitulo && (
                    <Info>
                    <Logo>
                        <img src={capitulo.Logo}/>
                    </Logo>
                    <NVoluntaries>Número de Voluntarios : {numVoluntaries}</NVoluntaries>
                    </Info>
                )}
                <Part2>
                    <DeleteBox show={vcreated}>
                      <BoxTitle>Información</BoxTitle>
                      <p>{error}</p>
                      <BoxContent>
                        <BoxButtonCancel onClick={() => setVcreated(false)}>Aceptar</BoxButtonCancel>
                      </BoxContent>
                    </DeleteBox>
                    <Voluntaries>
                        {presidente && (
                            <Voluntary>
                                <Img>
                                  <img id="img3" src={presidente.Foto}/>
                                </Img>
                                <TextBox>
                                    <TextContent>
                                        <CardT>Presidente</CardT>
                                    </TextContent>  
                                    <p>{presidente.Nombre}</p>
                                </TextBox>
                            </Voluntary>        
                        )} 
                    </Voluntaries>
                    {capitulo && (
                        <Cargos>
                            {capitulo.CargosF.map((cargo) => (
                              <>
                                <Cargo>
                                  <Lable>{cargo}</Lable>
                                  <DeleteC onClick={() => setCargosToDelete(cargo)}><svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 22 22" height="20" fill="none" class="svg-icon"><path d="M10 11V17" stroke="#DE8A2A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M14 11V17" stroke="#DE8A2A"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M4 7H20" stroke="#DE8A2A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#DE8A2A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#DE8A2A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg></DeleteC >
                                </Cargo>
                                <DeleteBox show={deleteCargos}>
                                  <BoxTitle>ADVERTENCIA</BoxTitle>
                                  {dCargo && (<p>El cargo {dCargo} será eliminado</p>)}
                                  <BoxContent>
                                    <BoxButtonCancel onClick={() => setDeleteCargos(false)}>Cancelar</BoxButtonCancel>
                                    <BoxButtonDelete onClick={() => deleteCargo()}>Eliminar</BoxButtonDelete>
                                  </BoxContent>
                                </DeleteBox>
                              </>
                                
                            ))}
                            {
                              addCargo === true ? (<>
                                <AddInput value={cargo} onChange={e => setCargo(e.target.value)}/>
                                <AddButton onClick={AddCargo}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                                <path d="M 24.085938 33.445313 L 14.417969 24.429688 L 15.78125 22.96875 L 23.914063 30.550781 L 44.296875 6.433594 C 43.011719 4.945313 41.117188 4 39 4 L 11 4 C 7.132813 4 4 7.132813 4 11 L 4 39 C 4 42.867188 7.132813 46 11 46 L 39 46 C 42.867188 46 46 42.867188 46 39 L 46 11 C 46 10.007813 45.789063 9.0625 45.414063 8.203125 Z"></path>
                                </svg></AddButton>
                              </>) : 
                              <Cargo onClick={()=>setAddCargo(true)}k>
                                <Lable>Agregar</Lable>
                                <DeleteC>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 18 18" height="20" fill="none" class="svg-icon"><g stroke-width="1.5" stroke-linecap="round" stroke="#de8a2a"><circle r="7.5" cy="10" cx="10"></circle><path d="m9.99998 7.5v5"></path><path d="m7.5 9.99998h5"></path></g></svg>
                                </DeleteC>
                              </Cargo>
                            }
                            
                        </Cargos>
                    )}
                </Part2>
                <SubTittle>
                    <>Voluntarios</> 
                    <AddBtn onClick={() => setAdd(true)}>
                        <Sign id='Sign'>
                        <svg fill="#000000"  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2,21h8a1,1,0,0,0,0-2H3.071A7.011,7.011,0,0,1,10,13a5.044,5.044,0,1,0-3.377-1.337A9.01,9.01,0,0,0,1,20,1,1,0,0,0,2,21ZM10,5A3,3,0,1,1,7,8,3,3,0,0,1,10,5ZM23,16a1,1,0,0,1-1,1H19v3a1,1,0,0,1-2,0V17H14a1,1,0,0,1,0-2h3V12a1,1,0,0,1,2,0v3h3A1,1,0,0,1,23,16Z"/></svg>               
                        </Sign>
                        <Text id='Text'>Añadir</Text>
                    </AddBtn>

                </SubTittle>
                <Voluntaries>
                    {voluntaries && voluntaries.map((voluntary) => (
                    <Voluntary>
                    <Img onClick={() => configVoluntary(voluntary)}>
                      <img id="img1" src='images/config.png'/>
                      <img id="img2" src={voluntary.Foto}/>
                    </Img>
                    <TextBox>
                        <TextContent>
                            <CardT>{voluntary.Cargo}</CardT>
                        </TextContent>  
                        <p>{voluntary.Nombre}</p>
                    </TextBox>
                </Voluntary>
                    ))}
            </Voluntaries> 
          </>
        ):
        <>
        {add === true ? (
        <>
          <Top>
              <BackBtn onClick={() => setAdd(false)}><AiOutlineArrowLeft/></BackBtn>
          </Top>
          <Title1>Agregar Voluntario</Title1>
          <Options>
            <Option open={newV} onClick={() => changeOption1()}>Nuevo</Option>
            <Option open={exist} onClick={() => changeOption2()}>Existente</Option>
          </Options>
          <Line/>
          {newV === true ? (
          <>
            <StyledForm onSubmit={handleSubmit}>
              <StyledLabel>Nombre Completo:</StyledLabel>
              <StyledInput type="text" value={username} onChange={e => usernameEntered(e)} required/>
              <br/>
              <StyledLabel>Correo Institucional:</StyledLabel>
              <StyledInput type="email" value={email} onChange={e => emailEntered(e)} required/>
              <br/>
              <StyledLabel>Celular:</StyledLabel>
              <StyledInput type="tel" value={tel} onChange={e => telEntered(e)} required/>
              <br/>
              <StyledLabel>Cargo:</StyledLabel>
              <StyledSelect id="mySelect" onChange={e => cargoEntered(e)} required>
                {capitulo && (
                  capitulo.CargosF.map((cargo) => (
                    <option value={cargo}>{cargo}</option>
                  ))
                )}
              </StyledSelect>
              <br/>
              <StyledLabel>Foto:</StyledLabel>
              <StyledInput type="file" accept="image/png, image/jpeg, image/jpg" onChange={archivoMandler} required/>
              {loading ? <Spinner/> : ""}
              <br/>
              <StyledButton type="submit" disabled={!username & !email & !selectCargo & !imgUrl}>Registrar</StyledButton>
            </StyledForm>
          </>):
          <>
            <Voluntaries>
                    {extisVoluntaries && extisVoluntaries.map((voluntary) => (
                    <Voluntary>
                    <Img onClick={() => setAddExistVoluntary(true)}>
                      <img id="img1" src='images/add.svg'/>
                      <img id="img2" src={voluntary.Foto}/>
                    </Img>
                    <TextBox> 
                        <p>{voluntary.Nombre}</p>
                    </TextBox>
                    </Voluntary>
                    )
                    )}
            </Voluntaries>
              <EditBox show={addExistVoluntary}>
                <Top>
                  <BackBtn onClick={() => setAddExistVoluntary(false)}><AiOutlineArrowLeft/></BackBtn>
                </Top>
                <BoxTitle>Cambiar Cargo</BoxTitle> 
                <StyledForm onSubmit={handleAddExistVoluntary}>
                  <StyledLabel>Cargo:</StyledLabel>
                  <StyledSelect id="mySelect" onChange={e => cargoEntered(e)} required>
                    {capitulo && (
                      capitulo.CargosF.map((cargo) => (
                        <option value={cargo}>{cargo}</option>
                      ))
                    )}
                  </StyledSelect>
                  <StyledButton type="submit" disabled={!selectCargo}>Actualizar</StyledButton>
                </StyledForm>
              </EditBox>
          </>
          }
        </>
        ):
        <>
          {voluntaryToEdit && (
          <>
          <Top>
            <BackBtn onClick={() => back()}><AiOutlineArrowLeft/></BackBtn>
          </Top>
          <Title1>Editar Voluntario</Title1>
          <Content>  
            <Voluntary>
              <Img>
                <img id="img3" src={voluntaryToEdit.Foto}/>
              </Img>
              <TextBox>
                  <TextContent>
                      <CardT>{voluntaryToEdit.Cargo}</CardT>
                  </TextContent>  
                  <p>{voluntaryToEdit.Nombre}</p>
              </TextBox>
            </Voluntary>
            <ButtonContainer>
              <ButtonChangeCharge onClick={() => changeChargeBox()}>Cambiar Cargo</ButtonChangeCharge>
              <ButtonDeleteVoluntary onClick={() => deleteVoluntaryBox()}>Eliminar Voluntario</ButtonDeleteVoluntary>
            </ButtonContainer>
            <EditBox show={editBox}>
              {changeCharge === true ? (
                <>
                  <Top>
                    <BackBoxBtn onClick={() => closeBox()}><AiOutlineClose/></BackBoxBtn>
                  </Top>
                  <BoxTitle>Cambiar Cargo</BoxTitle> 
                  <StyledForm onSubmit={handleEdit}>
                    <StyledLabel>Cargo:</StyledLabel>
                    <StyledSelect id="mySelect" onChange={e => cargoEntered(e)} required>
                      {capitulo && (
                        capitulo.CargosF.map((cargo) => (
                          <option value={cargo}>{cargo}</option>
                        ))
                      )}
                    </StyledSelect>
                    <StyledButton type="submit" disabled={!selectCargo}>Actualizar</StyledButton>
                  </StyledForm>
                </>
                ):
                <>
                  <BoxTitle>ADVERTENCIA</BoxTitle>
                  <p>El voluntario será eliminado del capítulo</p>
                  <BoxContent>
                    <BoxButtonCancel onClick={() => setEditBox(false)}>Cancelar</BoxButtonCancel>
                    <BoxButtonDelete onClick={() => deleteVoluntaryChapter(voluntaryToEdit)}>Eliminar</BoxButtonDelete>
                  </BoxContent>
                </> 
              }
              
            </EditBox>
          </Content>
          </>
          )}

        </> 
        }
        </>
        }
    </Container>
  )
} 

export default CapituloConf

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