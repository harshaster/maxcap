"user client"
import Link from "next/link"
import Loader from "./loader"
import { useEffect, useState } from "react"
import { storage } from  "@/config"
import {ref, uploadBytes, getDownloadURL,deleteObject} from "firebase/storage"
import {auth} from "@/config"

export default function UploadWidget(params) {
    const [loading, setLoading] = useState(false);
    const [uploaded, setUploaded] = useState(false);
    const [fileURL, setFileURL] = useState(null);
    const [deleting, setDeleting] = useState(false)
    const [fileRef, setfileRef] = useState(null)

    useEffect(() => {
        if (params.upload){
            setFileURL(params.upload)
            setUploaded(true)
        }
    })

    function uploadFile(e) {
        e.preventDefault();
        setLoading(true);

        const fileInput = document.getElementById(params.uniq)
        const files = fileInput.files;

        if (!files || files.length === 0) {
            alert("No file selected");
            setLoading(false);
            return;
        }

        const file = files[0];
        const storageRef = ref(storage, `${auth.currentUser.phoneNumber}/${params.uniq}.${file.name.split('.').pop()}`);
        
        uploadBytes(storageRef, file).then(async()=>{
            const url = await getDownloadURL(storageRef);
            setFileURL(url)
            setfileRef(storageRef)
            params.setStorageFileURL(url)
        })
        .catch(e => {
            alert(e.message)
        })
        .finally(()=>{
            setLoading(false)
            setUploaded(true)
        })
        
    }

    async function deleteFile(){
        setDeleting(true)
        deleteObject(fileRef).then(()=>{
            setUploaded(false);setFileURL(null); params.setStorageFileURL(null)
        }).catch((error) => { alert(error.message)})
        .finally(()=>{setDeleting(false) })
    };
   
    return (
        <div className={`col-12 mb-3 ${!params.full ? 'col-lg-6' : ''}`}>
            {!params.full && <label htmlFor={params.uniq} className="form-label">{uploaded && <span className="text-success border rounded-circle px-1">&#10003;</span>} {params.text} </label>}
            {params.help && <div id={params.uniq + "help"} className="form-text pb-1">{params.help}</div>}
            {uploaded ? (
            <div>
                <Link className="btn btn-sm btn-outline-primary mx-4" target="blank" href={fileURL}>View File</Link>
                <button className="btn btn-sm btn-outline-danger" onClick={deleteFile} disabled={deleting}>{deleting && <Loader/> }Delete</button>
            </div>
            ) : 
            (<div className="input-group">
                <input type="file" className="form-control" id={params.uniq}  aria-describedby={params.help ? params.uniq + "help" : ""}/>
                <button className="btn btn-sm btn-primary" onClick={uploadFile} disabled={loading}>{loading && <Loader/> }Upload</button>
            </div>
            )}
        </div>
    )
}