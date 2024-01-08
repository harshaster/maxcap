import { db } from '@/config'
import { getDoc, setDoc, collection, doc } from 'firebase/firestore'

const usersDb = collection(db, "users") 

async function fetchUserFromId(usrId){
    let docRef = doc(usersDb, usrId)
    let user = null
    let res = await getDoc(docRef)
    if (res.exists()){
        user = res.data()
    }
    return user
}

function userExists(usrId){
    let docRef = doc(usersDb, usrId)
    let exists = false
    getDoc(docRef).then(snap => {
        exists = snap.exists() 
    })
    return exists
}



export { fetchUserFromId, userExists }