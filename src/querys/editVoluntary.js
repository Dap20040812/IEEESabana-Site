import db,{ auth } from "../firebase";
import { addObjectToCargosF, addObjectToCargosO, deleteObjectToCargosF, deleteObjectToCargosO, deleteChapterVoluntary, addChapterVoluntary } from "./GetComputer";


async function updateVoluntaryCharge(voluntary,charge){


    if(voluntary.Capitulo === "Mesa Directiva"){

        await addObjectToCargosF(voluntary.Capitulo,voluntary.CargoMD)
        await deleteObjectToCargosO(voluntary.Capitulo,voluntary.CargoMD)
        await db.collection("Voluntarios").doc(voluntary.id).update({
            CargoMD: charge
        })
        
    }
    else{

        await addObjectToCargosF(voluntary.Capitulo,voluntary.Cargo)
        await deleteObjectToCargosO(voluntary.Capitulo,voluntary.Cargo)
        await db.collection("Voluntarios").doc(voluntary.id).update({
            Cargo: charge
        })

    }

    await deleteObjectToCargosF(voluntary.Capitulo,charge)
    await addObjectToCargosO(voluntary.Capitulo,charge)


    
}

export async function setPresidente(chapter,charge, uid){


    if(chapter === "Mesa Directiva"){

        await db.collection("Voluntarios").doc(uid).update({
            CargoMD: charge,
            Capitulo: chapter
        })
        
    }
    else{
        await db.collection("Voluntarios").doc(uid).update({
            Cargo: charge,
            Capitulo: chapter
        })

    }
    
}

export async function changePresidente(chapter,charge,uid, newUid){

    console.log(chapter,charge,uid,newUid)
    
    await db.collection("Voluntarios").doc(newUid).update({
        Cargo: charge,
        Capitulo: chapter
    })

    await db.collection("Voluntarios").doc(uid).update({
        Cargo: "",
        Capitulo: ""
    })

}


async function deleteVoluntaryOfChapter(voluntary){

    console.log(voluntary)

    if(voluntary.Capitulo === "Mesa Directiva"){

        addObjectToCargosF(voluntary.Capitulo,voluntary.CargoMD)
        deleteObjectToCargosO(voluntary.Capitulo,voluntary.CargoMD)
        await db.collection("Voluntarios").doc(voluntary.id).update({
            CargoMD: "",
            Capitulo: ""
        })
        
    }
    else{ 

        addObjectToCargosF(voluntary.Capitulo,voluntary.Cargo)
        deleteObjectToCargosO(voluntary.Capitulo,voluntary.Cargo)
        await db.collection("Voluntarios").doc(voluntary.id).update({
            Cargo: "",
            Capitulo: ""
        })
    }

    await deleteChapterVoluntary(voluntary.Capitulo,voluntary.id)
}

async function addExistVoluntaryToChapter(voluntary,charge,capitulo){
    console.log(voluntary,charge,capitulo)

    await db.collection("Voluntarios").doc(voluntary.UserID).update({
        Cargo: charge,
        Capitulo: capitulo
    })

    await deleteObjectToCargosF(voluntary.Capitulo,charge)
    await addObjectToCargosO(voluntary.Capitulo,charge)
    await addChapterVoluntary(capitulo,voluntary.id)


}

export async function updateVoluntaryFoto(voluntary,foto){
    await db.collection("Voluntarios").doc(voluntary.UserID).update({
        Foto: foto
    })
}


export default updateVoluntaryCharge
export {deleteVoluntaryOfChapter,addExistVoluntaryToChapter}