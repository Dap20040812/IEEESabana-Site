import db, { auth } from "../firebase";
import { v4 as uuidv4 } from 'uuid';
import { addChapterVoluntary, addObjectToCargosO, deleteObjectToCargosF } from "./GetComputer";

async function createVoluntary(capitulo, cargo, correo, foto, nombre, celular) {
  console.log(capitulo, cargo, correo, foto, nombre, celular);
    let error = "";
    let md = false;
    let cCargo = "";
    let MDCargo = "";
    let password = "12345678";
    var currentUser = auth.currentUser;

    if (capitulo === "Mesa Directiva") {
        md = true;
        MDCargo = cargo;
    } else {
        cCargo = cargo;
    }
    console.log(cCargo, MDCargo);

    const infoUsuario = await auth.createUserWithEmailAndPassword(
        correo,
        password
    ).catch(FirebaseAuthUserCollisionException => {
        error = "Email ya existente";
    }).catch(FirebaseAuthWeakPasswordException => {
        error = "La contraseña debe contener más de 6 caracteres";
    });

    if (infoUsuario) {
        addObjectToCargosO(capitulo, cargo);
        deleteObjectToCargosF(capitulo, cargo);
        error = "Usuario creado con éxito";

        await db.collection("Voluntarios").doc(infoUsuario.user.uid).set({
            Capitulo: capitulo,
            Cargo: cargo,
            CargoMD: "",
            Correo: correo,
            Foto: foto,
            Nombre: nombre,
            Celular: celular,
            UserID: infoUsuario.user.uid,
            MD: md
        });

        await addChapterVoluntary(capitulo, infoUsuario.user.uid);
        await auth.updateCurrentUser(currentUser);
    }

    return { error, password };
}

export default createVoluntary;