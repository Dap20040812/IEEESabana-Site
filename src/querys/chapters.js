import db from "../firebase"
import { setPresidente } from "./editVoluntary";
import { useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';

export const getChapters = async () => {
    let response = []
    await db.collection("Capitulos").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.data())
            response.push(doc.data())
        });
    }
    )
    return response

}

export const createChapter = async (chapter) => {
    let uid = uuidv4()
    const chapterForm = {
        Nombre: chapter.nombreCapitulo,
        Logo: chapter.logo,
        Color: chapter.color,
        CargosO: ["Presidente"],
        CargosF: [],
        Voluntarios: [chapter.presidente],
        Id: uid
    }
    await db.collection("Capitulos").doc(uid).set(chapterForm).then((docRef) => {
        setPresidente(chapter.nombreCapitulo, "Presidente", chapter.presidente)
        console.log("Document written with ID: ", docRef.id);
    }
    ).catch((error) => {
        console.error("Error adding document: ", error);
    });
}

export const editChapterInfo = async (chapter) => {
    
    var chapterForm

    if(chapter.logo === "" || chapter.logo === undefined || chapter.logo === null){
        chapterForm = {
            Nombre: chapter.nombreCapitulo,
            Color: chapter.color,
    }
    }else{
        chapterForm = {
            Nombre: chapter.nombreCapitulo,
            Logo: chapter.logo,
            Color: chapter.color,    
        }
    }

    await db.collection("Capitulos").doc(chapter.id).update(chapterForm).then(() => {
        console.log("Document successfully updated!");
    }
    ).catch((error) => {
        console.error("Error updating document: ", error);
    });
}



