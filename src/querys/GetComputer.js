import db from "../firebase"

function getPresidente(capitulo)
{
    var voluntary
    
    db.collection("Voluntarios")
        .where('Cargo', '==', "Presidente")
        .where('Capitulo', '==', capitulo)
        .get()
        .then((querySnapshot) => {
             querySnapshot.forEach((doc) => {
               voluntary = doc.data()               
          });
        })

    return voluntary
}

function getCOmputerVoluntaries(capitulo)
{
    var voluntaries
    
    db.collection("Voluntarios")
        .where('Cargo', '!=', "Presidente")
        .where('Capitulo', '==', capitulo)
        .get()
        .then((querySnapshot) => {
             querySnapshot.forEach((doc) => {
               voluntaries = doc.data()               
          });
        })

    return voluntaries
}

async function getExistingVoluntaries(){
  try {
    const voluntariosSnapshot = await db.collection("Voluntarios").where('Cargo', '==', "").get();
    const voluntarios = voluntariosSnapshot.docs.map((doc) => {
      return {id: doc.id, ...doc.data()}
    })
    return voluntarios
  } catch (error) {
    console.error('Error getting existing voluntaries:', error);
  }
}

async function addObjectToCargosF(capitulo, cargoObject) {
  try {
    const capitulosSnapshot = await db.collection("Capitulos")
      .where('Nombre', '==', capitulo)
      .get();

    if (capitulosSnapshot.empty) {
      console.log('Document does not exist');
      return;
    }

    const capituloDoc = capitulosSnapshot.docs[0];
    const currentCargosF = capituloDoc.data().CargosF || [];

    currentCargosF.push(cargoObject);

    await capituloDoc.ref.update({
      CargosF: currentCargosF
    });

    console.log('Object added to CargosF array');
  } catch (error) {
    console.error('Error adding object to CargosF:', error);
  }
}

async function addObjectToCargosO(capitulo, cargoObject) {
  try {
    const capitulosSnapshot = await db.collection("Capitulos")
      .where('Nombre', '==', capitulo)
      .get();

    if (capitulosSnapshot.empty) {
      console.log('Document does not exist');
      return;
    }

    const capituloDoc = capitulosSnapshot.docs[0];
    const currentCargosO = capituloDoc.data().CargosO || [];

    currentCargosO.push(cargoObject);

    await capituloDoc.ref.update({
      CargosO: currentCargosO
    });

    console.log('Object added to CargosO array');
  } catch (error) {
    console.error('Error adding object to CargosO:', error);
  }
}

async function addChapterVoluntary(capitulo, voluntaryID) {
  try {
    const capitulosSnapshot = await db.collection("Capitulos")
      .where('Nombre', '==', capitulo)
      .get();

    if (capitulosSnapshot.empty) {
      console.log('Document does not exist');
      return;
    }

    const capituloDoc = capitulosSnapshot.docs[0];
    const currentVoluntarios = capituloDoc.data().Voluntarios || [];

    currentVoluntarios.push(voluntaryID);

    await capituloDoc.ref.update({
      Voluntarios: currentVoluntarios
    });

    console.log('Object added to Voluntarios array');
  } catch (error) {
    console.error('Error adding object to Voluntarios:', error);
  }
}

async function deleteChapterVoluntary(capitulo, voluntaryID) {
  try {
    const capitulosSnapshot = await db.collection("Capitulos")
      .where('Nombre', '==', capitulo)
      .get();

    if (capitulosSnapshot.empty) {
      console.log('Document does not exist');
      return;
    }
    console.log("a")
    const capituloDoc = capitulosSnapshot.docs[0];
    const currentVoluntarios = capituloDoc.data().Voluntarios || [];
    const newCurrentVoluntrarios = currentVoluntarios.filter((voluntary) => voluntary !== voluntaryID);


    await capituloDoc.ref.update({
      Voluntarios: newCurrentVoluntrarios
    });

    console.log('Object deleted to Voluntarios array');
  } catch (error) {
    console.error('Error deleting object to Voluntarios:', error);
  }
}
async function deleteObjectToCargosF(capitulo, cargoObject) {
  try {
    const capitulosSnapshot = await db.collection("Capitulos")
      .where('Nombre', '==', capitulo)
      .get();

    if (capitulosSnapshot.empty) {
      console.log('Document does not exist');
      return;
    }

    const capituloDoc = capitulosSnapshot.docs[0];
    const currentCargosF = capituloDoc.data().CargosF || [];
    const newCargosF = currentCargosF.filter((cargo) => cargo !== cargoObject);

    await capituloDoc.ref.update({
      CargosF: newCargosF
    });

    console.log('Object added to CargosF array');
  } catch (error) {
    console.error('Error adding object to CargosF:', error);
  }
}

async function deleteObjectToCargosO(capitulo, cargoObject) {
  try {
    const capitulosSnapshot = await db.collection("Capitulos")
      .where('Nombre', '==', capitulo)
      .get();

    if (capitulosSnapshot.empty) {
      console.log('Document does not exist');
      return;
    }

    const capituloDoc = capitulosSnapshot.docs[0];
    const currentCargosO = capituloDoc.data().CargosO || [];
    const newCargosO = currentCargosO.filter((cargo) => cargo !== cargoObject);

    await capituloDoc.ref.update({
      CargosO: newCargosO
    });

    console.log('Object deleted of CargosO array');
  } catch (error) {
    console.error('Error adding object to CargosO:', error);
  }
}
export default getPresidente 
export {getCOmputerVoluntaries,addObjectToCargosF,deleteObjectToCargosF,addObjectToCargosO, addChapterVoluntary, deleteObjectToCargosO,deleteChapterVoluntary,getExistingVoluntaries}

