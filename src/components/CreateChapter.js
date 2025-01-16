import React, { useEffect, useState } from 'react'
import { use } from 'react';
import styled
 from 'styled-components'
import { getAllVoluntarios } from '../querys/GetVoluntarios';
import { auth, storage } from '../firebase';
import { createChapter } from '../querys/chapters';
function CreateChapter(props) {
    const [formData, setFormData] = useState({
        nombreCapitulo: "",
        logo: null,
        color: "#000000",
        presidente: "",
      });

    const [voluntaries, setVoluntaries] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchVoluntaries = async () => {
            const data = await getAllVoluntarios();
            const filteredData = data.filter(voluntary => voluntary.Capitulo === "");
            setVoluntaries(filteredData);
            console.log("Voluntarios:", filteredData);
        }
        fetchVoluntaries();
    }, []);

      const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
          ...formData,
          [name]: files ? files[0] : value,
        });
      };
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        await createChapter(formData);
        props.back();
      };

      const archivoMandler = async (e) => {
        setLoading(true);
        const archivo = e.target.files[0];
        const storageRef = storage.ref();
        const archivoPath = storageRef.child(archivo.name);
      
        try {
          await archivoPath.put(archivo);
          const url = await archivoPath.getDownloadURL();
          console.log("URL del logo:", url);
      
          // Actualizamos el estado de formData con la URL del logo
          setFormData((prevData) => ({
            ...prevData,
            logo: url,
          }));
        } catch (error) {
          console.error("Error al subir el archivo:", error);
        } finally {
          setLoading(false);
        }
      };
    
  return (
    <Container>
        <Title>Crear Capitulo</Title>
        <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="nombreCapitulo">Nombre del Capítulo</Label>
        <Input
          type="text"
          id="nombreCapitulo"
          name="nombreCapitulo"
          placeholder="Ingrese el nombre del capítulo"
          value={formData.nombreCapitulo}
          onChange={handleChange}
          required
        />

        <Label htmlFor="logo">Logo</Label>
        <Input
          type="file"
          id="logo"
          name="logo"
          accept="image/*"
          onChange={archivoMandler}
          required
        />
        {loading ? <>Subiendo...</> : ""}

        <Label htmlFor="color">Color</Label>
        <Input
          type="color"
          id="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
          required
        />

        <Label htmlFor="presidente">Presidente</Label>
        <Select
          id="presidente"
          name="presidente"
          value={formData.presidente}
          onChange={handleChange}
          required
        >
            <option value="">Seleccione un presidente</option>
         {voluntaries.map((voluntary) => (
            <option key={voluntary.UserID} value={voluntary.UserID}>
              {voluntary.Nombre}
            </option>
          ))}
        </Select>

        <Button type="submit">Enviar</Button>
      </Form>
    </FormContainer>
    </Container>
  )
}

export default CreateChapter

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

const FormContainer = styled.div`
  max-width: 400px;
  margin: 20px auto;
  font-family: Arial, sans-serif;
`;

const FormTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 1em;
`;

const Label = styled.label`
  font-weight: bold;
  margin: 1em;
  width: 90%;
  text-align: left;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 90%;
  margin: 0;

  &[type="color"] {
    padding: 0;
    height: 40px;
  }
`;

const Select = styled.select`
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 90%;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color:rgb(12, 12, 12);
  color: white;
  border: none;
  margin: 1em;
  width: 50%;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color:rgb(232, 197, 41);
  }
`;