"use client"
import { useEffect, useState } from "react"
import UploadWidget from "./uploadFile"
import { auth } from "../config"
import LoadingOverlay from "./overlay"
import { getFinanceFormSection,setFinanceFormSection } from "@/apis"
import Loader from "./loader"

let date = new Date()
let year = date.getFullYear()
let year_labels = [`${year-3}-${year-2}`, `${year-2}-${year-1}`, `${year-1}-${year}`]

let month_labels = []
for (let i=0; i<6; i++){
    date.setMonth(date.getMonth()-1)
    let month = date.toLocaleString('default', { month: 'long' })
    let year = date.getFullYear()
    month_labels.push(`${month}-${year}`)
    
}

let docFields = [
    {name : "Acknowledgement", uniq : "ack"},
    {name : "Audit Report", uniq : "audit"},
    {name : "Balance Sheet", uniq : "balance-sheet"},
    {name : "Computation of Income", uniq : "comp-income"},
    {name : "PNL Statement", uniq : "pnl"}
]

let statementFields = [
    {name : "RERA Collection Account Statement", uniq : "rera-statement"},
    {name : "Current Account Statement", uniq : "current-statement"}
]

export default function SectionB(params){
    const [saving, setSaving] = useState(false)
    const [fetching, setFetching] = useState(true)
    const [documents, setDocuments] = useState([])
    const [monthLabels, setMonthLabels] = useState(month_labels)
    const [yearLabels, setYearLabels] = useState(year_labels)

    useEffect(()=>{
        setFetching(true)
        let usrID= null
        if (auth.currentUser){
            usrID = auth.currentUser.uid
        }
        getFinanceFormSection(usrID, "sectionB").then(data => {
            if (data){
                setMonthLabels(data.monethLabels)
                setYearLabels(data.yearLabels)
                setDocuments(data.documents)
                setFetching(false)
            }
            else{
                let out = []
                for (let year of year_labels){
                    for (let doc of docFields){
                        out.push({uniq : doc.uniq+"-"+year, period : year, name : doc.name, upload : null})
                    }
                }
                for (let month of month_labels){
                    for (let doc of statementFields){
                        out.push({uniq : doc.uniq+"-"+month, period : month, name : doc.name, upload : null})
                    }
                }
                setDocuments(out)
                setFetching(false)
            }
        })
    },[])

    function handleUpload(uniq, upload){
        let newDocs = documents
        let index = documents.findIndex(doc => doc.uniq === uniq)
        newDocs[index].upload = upload
        setDocuments(newDocs)
    }

    function findUniq(uniq){
        let doc = documents.find(doc => doc.uniq === uniq)
        return doc
    }

    function handleDelete(uniq){
        let newDocs = documents
        let index = documents.findIndex(doc => doc.uniq === uniq)
        newDocs[index].upload = null
        setDocuments(newDocs)
    }

    function handleSaveSection(e){
        e.preventDefault()
        setSaving(true)
        // for (let doc of documents){
        //     if (!doc.upload){
        //         alert(`Please upload ${doc.name} for ${doc.period}.`)
        //         setSaving(false)
        //         return
        //     }
        // }
        let usrID= null
        if (auth.currentUser){
            usrID = auth.currentUser.uid
        }
        setFinanceFormSection(usrID, "sectionB", {
            monethLabels : monthLabels,
            yearLabels : yearLabels,
            documents : documents
        
        })
        .then(()=>{
            params.doneSection()
            setSaving(false)
        })
    }

    return (
        <div className="container mt-3">
            {fetching && <LoadingOverlay/>}
            <h2 className='my-4'>Section B: Firm Financials</h2>
            <form className="row p-4 bg-white border rounded shadow-sm">
                <div className="col-12">
                    <label className="form-label fw-bold">Upload following documents:</label>
                </div>
                {yearLabels.map((year, index) => {
                    return (
                        <div className="row my-4" key={index}>
                            <div className="col-12 py-2">
                                <h5>{year}</h5>
                            </div>
                            <hr/>
                            {docFields.map((doc, index) => {
                                let uniq = doc.uniq+"-"+year
                                let found = findUniq(uniq)
                                return (
                                    <UploadWidget 
                                        text={doc.name}
                                        key={uniq} 
                                        uniq={uniq} 
                                        upload={found ? found.upload : null} 
                                        period={year} 
                                        setStorageFileURL={url=> handleUpload(uniq,url)} 
                                        removeStorageFileURL={()=>handleDelete(uniq)}
                                    />
                                )
                            })}
                        </div>
                    )
                })}
                <hr/>

                <div className="col-12 py-2">
                    <h5>Upload all the 12 statements of last 6 months:</h5>
                </div>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th></th>
                            {statementFields.map((doc, index) => {
                                return (
                                    <th key={index} scope='col'>{doc.name}</th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                    {monthLabels.map((month, index) => {
                        return (
                            <tr key={index}>
                                <th scope='row'>{month}</th>
                                {statementFields.map((doc, index) => {
                                    let uniq = doc.uniq+"-"+month
                                    let found = findUniq(uniq)
                                    return (
                                        <td key={index}>
                                            <UploadWidget 
                                                text={doc.name} 
                                                uniq={uniq} 
                                                full
                                                upload={found ? found.upload : null} 
                                                period={month} 
                                                setStorageFileURL={url=> handleUpload(uniq, url)} 
                                                removeStorageFileURL={()=>handleDelete(uniq)}
                                            />
                                        </td>
                                    )
                                })}
                            </tr>  
                        )
                        
                    })}
                    </tbody>
                </table>
                <div className="col-12 text-center mx-auto my-3">
                    <button className="btn btn-primary" onClick={handleSaveSection} disabled={saving}>{saving && <Loader/>} Save and Next &rarr;</button>
                </div>
            </form>
        </div>
    )
}