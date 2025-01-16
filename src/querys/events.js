import db from "../firebase";

export const getAllEvents = async () => {
    let response = []
    await db.collection("Eventos").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.data())
            response.push(doc.data())
        });
    }
    )
    return response

}