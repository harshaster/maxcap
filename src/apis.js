import { db } from '@/config'
import { getDoc, setDoc, collection, doc } from 'firebase/firestore'

const usersDb = collection(db, "users") 
const financeFormsDb = collection(db, "financeForms")

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

async function getFInanceFormStage(usrId){
    let docRef = doc(financeFormsDb, usrId)
    let res = await getDoc(docRef)
    if (res.exists()){
        return res.data().stage
    } else {
        return null
    }

}

async function getFinanceFormSection(usrId, stage){
    let docRef = doc(financeFormsDb, usrId)
    let res = await getDoc(docRef)
    if (res.exists()){
        return res.data()[stage]
    } else {
        return null
    }

}

async function setFinanceFormSection(usrId, stage, data){
    let docRef = doc(financeFormsDb, usrId)
    // check if doc exists
    let res = await getDoc(docRef)
    if (res.exists()){
        await setDoc(docRef, { [stage]: data }, { merge: true })
    } else {
        await setDoc(docRef, { [stage]: data })
    }
}

async function setFinanceFormStage(usrId, stage){
    let docRef = doc(financeFormsDb, usrId)
    // check if doc exists
    let res = await getDoc(docRef)
    if (res.exists()){
        await setDoc(docRef, { stage: stage }, { merge: true })
    } else {
        await setDoc(docRef, { stage: stage })
    }
}

export { 
    fetchUserFromId, 
    userExists, 
    getFInanceFormStage, 
    setFinanceFormStage,
    setFinanceFormSection,
    getFinanceFormSection 
}