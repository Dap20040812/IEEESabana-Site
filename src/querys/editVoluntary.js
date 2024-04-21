import db,{ auth } from "../firebase";
import { addObjectToCargosF, addObjectToCargosO, deleteObjectToCargosF, deleteObjectToCargosO, deleteChapterVoluntary, addChapterVoluntary } from "./GetComputer";


async function updateVoluntaryCharge(voluntary,charge){


    if(voluntary.Capitulo === "Mesa Directiva"){

        addObjectToCargosF(voluntary.Capitulo,voluntary.CargoMD)
        deleteObjectToCargosO(voluntary.Capitulo,voluntary.CargoMD)
        await db.collection("Voluntarios").doc(voluntary.id).update({
            CargoMD: charge
        })
        
    }
    else{

        addObjectToCargosF(voluntary.Capitulo,voluntary.Cargo)
        deleteObjectToCargosO(voluntary.Capitulo,voluntary.Cargo)
        await db.collection("Voluntarios").doc(voluntary.id).update({
            Cargo: charge
        })

    }

    await deleteObjectToCargosF(voluntary.Capitulo,charge)
    await addObjectToCargosO(voluntary.Capitulo,charge)


    
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

    await db.collection("Voluntarios").doc(voluntary.id).update({
        Cargo: charge,
        Capitulo: capitulo
    })

    await deleteObjectToCargosF(voluntary.Capitulo,charge)
    await addObjectToCargosO(voluntary.Capitulo,charge)
    await addChapterVoluntary(capitulo,voluntary.id)


}

export default updateVoluntaryCharge
export {deleteVoluntaryOfChapter,addExistVoluntaryToChapter}