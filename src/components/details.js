import Loader from "@/components/loader";
import {db, auth} from "@/config";
import { collection,doc,setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";


export default function FillDetails(props){
    const [saving, setIsSaving] = useState(false)
    
    const [user_name, setUser_name] = useState('')
    const [user_email, setUser_email] = useState('')
    const [user_isBuilder, setUser_isBuider] = useState('')

    const [error, setError] = useState(null)
    const [identity, setIdentity] = useState(null)
    const userColl = collection(db, 'users')

    useEffect(() => {
        setIdentity(auth.currentUser)
    })

    function saveProfile(){
        setIsSaving(true)
        setError(null);
        const docRef = doc(userColl, identity.uid)
        const payload = {
            name : user_name,
            email : user_email,
            isBuilder : user_isBuilder,
            phone : identity.phoneNumber
        }
        setDoc(docRef, payload).then(() => {
            props.handleProfileComplete(payload)
        }).catch((error) => {
            setError(error)
        }).finally(() => {
            setIsSaving(false)
        })
    }

    return(
        <div className="container bg-white p-4">
            <h1 className="fancy-font">Welcome!</h1>
            <h5 className="text-secondary">Help us know you better</h5>
            {error && <div className="alert alert-danger">{error.message}</div>}
            <form className="mt-5" onSubmit={(e)=>e.preventDefault()}>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="form-check mb-3 form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="builder_check" onChange={(e) => {setUser_isBuider(e.target.checked)}} defaultValue={user_isBuilder}/>
                            <label className="form-check-label" htmlFor="builder_check">Are you a builder?</label>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-start">
                    <div className="col-12 col-md-6">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input onChange={e => setUser_email(e.target.value)} type="email" className="form-control" id="email" placeholder="Enter email" defaultValue={user_email}/>
                        </div>  
                    </div>
                    <div className="col-12 col-md-6"> 
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input onChange={e => setUser_name(e.target.value)} type="text" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter name" defaultValue={user_name}/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input type="text" className="form-control" id="phone" aria-describedby="phoneHelp" placeholder="Enter phone" value={identity ? identity.phoneNumber : ''} disabled/>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-3">
                        <div className="mb-3">
                            <button className="btn btn-primary w-100" onClick={saveProfile}>
                                {saving && <Loader/>} Save
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}