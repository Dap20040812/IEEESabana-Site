import db from "../firebase"

export const queryVoluntario = async (id) => {
    let response = []
    
    await db.collection("Voluntarios").where('UserID','==',id).get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.data())
                response.push(doc.data())
            });
    })

    return response
}

export const getAllVoluntarios = async () => {
    let response = []
    await db.collection("Voluntarios").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.data())
            response.push(doc.data())
        });
    }
    )
    return response

}

export const getChapterPresident = async (chapter) => {
    let response = []
    await db.collection("Voluntarios").where('Capitulo','==',chapter).where('Cargo','==','Presidente').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            response.push(doc.data())
        });
    }
    )
    return response
}

export const getChapterVicePresident = async (chapter) => {
    let response = []
    await db.collection("Voluntarios").where('Capitulo','==',chapter).where('Cargo','==','Vicepresidente').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            response.push(doc.data())
        });
    }
    )
    return response
}

export const getChapterVoluntaries = async (chapter) => {
    let response = [];
    await db.collection("Voluntarios")
        .where('Capitulo', '==', chapter)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                if (data.Cargo !== 'Presidente' && data.Cargo !== 'Vicepresidente') {
                    response.push(data);
                }
            });
        });
    return response;
}

export const getChaptersPresidents = async () => {
    let response = [];
    await db.collection("Voluntarios")
        .where('Cargo', '==', 'Presidente')
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                if (data.Capitulo !== 'Mesa Directiva') {
                    response.push(data);
                }
            });
        });
    return response;
}
