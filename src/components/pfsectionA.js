"use client"
import { useEffect, useState } from "react"
import UploadWidget from "./uploadFile"
import Loader from "./loader"
import { getFinanceFormSection,setFinanceFormSection } from "@/apis"
import { auth } from "../config"
import LoadingOverlay from "./overlay"

let fields = {
    "Properietorship" : [
        {name : "PAN Card", uniq : "pancard", upload : null}, 
        {name : "GST Certificate", uniq : "gst-cert", upload : null}
    ],
    "Partnership" : [
        {name : "Firm PAN Card", uniq : "fpancard", upload : null},
        {name : "Partnership Deed", uniq : "ptn-deed", upload : null},
        {name : "GSTIN and Certificate", uniq : "gst-cert", upload : null},
        {name : "Registry of firm's certificate", uniq : "registry", upload : null}
    ],
    "LLP" : [
        {name : "PAN Card", uniq : "pancard", upload : null}, 
        {name : "Deed of LLP", uniq : "llp-deed", upload : null},
        {name : "GST No. and Certificate", uniq : "gst-cert", upload : null}
    ],
    "Private Limited" : [
        {name : "PAN Card", uniq : "pancard", upload : null}, 
        {name : "Company Incorporation Date and Certificate", uniq : "inc-cert", upload : null},
        {name : "GST No. and Certificate", uniq : "gst-cert", upload : null}
    
    ],
    "Limited" : [
        {name : "PAN Card", uniq : "pancard", upload : null}, 
        {name : "Company Information Certificate", uniq : "company-info", upload : null},
        {name : "GST No. and Certificate", uniq : "gst-cert", upload : null}
    
    ]
}

export default function SectionA(params){
    const [firmName, setFirmName] = useState(null)
    const [groupName, setGroupName] = useState(null)
    const [contactNo, setContactNo] = useState(null)
    const [email, setEmail] = useState(null)
    const [website, setWebsite] = useState(null)
    const [incDate, setIncDate] = useState(null)
    const [COfirm, setCOfirm] = useState('')
    const [documents, setDocuments] = useState([])
    const [saving, setSaving] = useState(false)
    const [fetching, setFetching] = useState(true)
    const [gstNo, setGstNo] = useState(null)
    const [filled, setFilled] = useState(false)

    useEffect(()=>{
        let usrID= null
        if (auth.currentUser){
            usrID = auth.currentUser.uid
        }
        getFinanceFormSection(usrID, "sectionA").then(data => {
            if (data){
                setFilled(true)
                setFirmName(data.firmName)
                setGroupName(data.groupName)
                setContactNo(data.contactNo)
                setEmail(data.email)
                setWebsite(data.website)
                setIncDate(data.incDate)
                setCOfirm(data.COfirm)
                setDocuments(data.documents)
                setGstNo(data.gstNo)
            }
            setFetching(false)
        })

    },[])

    function setUploadFile(uniq, fileURL){
        setDocuments(documents.map(doc => {
            if(doc.uniq === uniq){
                doc.upload = fileURL
            }
            return doc
        }))
    }

    function removeUploadFile(uniq){
        setDocuments(documents.map(doc => {
            if(doc.uniq === uniq){
                doc.upload = null
            }
            return doc
        }))
    }

    
    function handleSave(e){
        e.preventDefault()
        setSaving(true)
        // check if all filled
        if (!firmName || !groupName || !contactNo || !email || !website || !incDate || !COfirm){
            alert("Please fill all the fields")
            setSaving(false)
            return
        }

        // check if all documents uploaded
        let allUploaded = true
        documents.forEach(doc => {
            if (!doc.upload){
                allUploaded = false
            }
        })
        if (!allUploaded){
            alert("Please upload all the documents")
            setSaving(false)
            return
        }

        // save to db
        
        const data = {
            firmName,
            groupName,
            contactNo,
            email,
            website,
            incDate,
            COfirm,
            documents,
            gstNo
        }
        setFinanceFormSection(auth.currentUser.uid, "sectionA", data).then(() => {setSaving(false);setFilled(true);params.doneSection()})
        

    }

 

    return (
        <div className="container mt-3">
            {fetching && <LoadingOverlay/>}
            <h2>Section A</h2>
            <form className="row justify-content-start p-4 bg-white border rounded shadow-sm">
                <div className="col-12 mb-3 col-lg-6">
                    <label htmlFor="firm-name" className="form-label" >Name of firm </label>
                    <input type="text" className="form-control" id="firm-name" required onChange={e=> setFirmName(e.target.value)} defaultValue={firmName}/>
                </div>
                <div className="col-12 mb-3 col-lg-6">
                    <label htmlFor="group-name" className="form-label">Group name </label>
                    <input type="text" className="form-control" id="group-name" required onChange={e=> setGroupName(e.target.value)} defaultValue={groupName}/>
                </div>
                <div className="col-12 mb-3 col-lg-6">
                    <label htmlFor="contact-no" className="form-label">Contact No.</label>
                    <input type="tel" className="form-control" id="contact-no" required onChange={e=> setContactNo(e.target.value)} defaultValue={contactNo}/>
                </div>
                <div className="col-12 mb-3 col-lg-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" required onChange={e=> setEmail(e.target.value)} defaultValue={email}/>
                </div>
                <div className="col-12 mb-3 col-lg-6">
                    <label htmlFor="website" className="form-label">Website </label>
                    <input type="url" className="form-control" id="website" required onChange={e=> setWebsite(e.target.value)} defaultValue={website}/>
                </div>
                <div className="col-12 mb-3 col-lg-6">
                    <label htmlFor="inc-date" className="form-label">Incorporation Date </label>
                    <input type="date" className="form-control" id="inc-date" required onChange={e=> setIncDate(e.target.value)} defaultValue={incDate}/>
                </div>
                <div className="col-12 mb-3 col-lg-6">
                    <label htmlFor="cons-firm" className="form-label">Constitution of firm </label>
                    <select className="form-select" id="cons-firm" value={COfirm} onChange={e => {setCOfirm(e.target.value);setDocuments( e.target.value ? fields[e.target.value] : [])}} aria-label="Constitution of Firm">
                        <option value=''>---Select---</option>
                        <option value="Properietorship">Properietorship</option>
                        <option value="Partnership">Partnership</option>
                        <option value="LLP">LLP</option>
                        <option value="Private Limited">Private Limited</option>
                        <option value="Limited">Limited</option>
                    </select>
                </div>

                {COfirm && (
                    <div className="row justify-content-start pt-3">
                        <h5 className="py-2">Upload following documents : </h5>
                        {
                            documents.map(doc => 
                                (
                                    <UploadWidget 
                                        text={doc.name} 
                                        uniq={doc.uniq} 
                                        setStorageFileURL={url => setUploadFile(doc.uniq, url)} 
                                        key={doc.uniq}
                                        upload={doc.upload}
                                        removeStorageFileURL={()=>removeUploadFile(doc.uniq)}
                                    />
                                )
                            )
                        }
                        {COfirm === "Properietorship" &&
                        <div className="col-12 mb-3 col-lg-6">
                            <label htmlFor="gstin" className="form-label">GSTIN</label>
                            <input type="text" className="form-control" onChange={e => setGstNo(e.target.value)} defaultValue={gstNo} id="gstin" required/>
                        </div>
                        }
                    </div>
                )}

                <div className="col-12 text-center mx-auto my-3">
                    <button onClick={handleSave} className="btn btn-primary" disabled={saving}>{saving && <Loader/>} Save and Next &rarr;</button>
                </div>
            </form>
        </div>
    )
}