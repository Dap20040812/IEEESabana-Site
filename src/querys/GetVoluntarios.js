import db from "../firebase"


function queryVoluntario(id)
{
    var voluntary
    
    db.collection("Voluntarios").where('UserID','==',id).onSnapshot((snapshot)=>{
        let voluntaries = snapshot.docs.map((doc)=>{
            return {id: doc.id, ...doc.data()}
        }) 
        voluntary = voluntaries
    })

    return voluntary
}
export default queryVoluntario