"use client"
import { useEffect, useState } from "react"
import { auth } from "@/config"
import { setFinanceFormSection, getFinanceFormSection } from "@/apis"
import Loader from "./loader"
import LoadingOverlay from "./overlay"

export default function SectionC(params) {
    const [saving, setSaving] = useState(false)
    const [fetching, setFetching] = useState(true)
    const [clients, setClients] = useState([])
    const [clientNum, setClientNum] = useState(0)
    const [clientName, setClientName] = useState('')
    const [clientAadhar, setClientAadhar] = useState('')
    const [clientPan, setClientPan] = useState('')



    function addClient(e){
        e.preventDefault()
        setClientNum(clientNum+1)
        setClients([...clients, {name : clientName, aadhar : clientAadhar, pan : clientPan}])
        setClientAadhar('')
        setClientName('')
        setClientPan('')
    }
    function deleteClient(index){
        let newClients = clients
        newClients.splice(index, 1)
        setClientNum(clientNum-1)
        setClients(newClients)
    }

    function handleSaveSection(){
        setSaving(true)
        if (clientNum===0){
            alert("Please add atleast one client")
            setSaving(false)
            return
        }
        let usrID= null
        if (auth.currentUser){
            usrID = auth.currentUser.uid
        }
        setFinanceFormSection(usrID, "sectionC", {clients , clientNum})
        .then(()=>{ 
            setSaving(false)
            params.doneSection()
        })
    }


    useEffect(()=>{
        setFetching(true)
        let usrID= null
        if (auth.currentUser){
            usrID = auth.currentUser.uid
        }
        getFinanceFormSection(usrID, "sectionC").then(data => {
            if (data){
                setClients(data.clients)
                setClientNum(data.clientNum)
                setFetching(false)
            }
            else{
                setFetching(false)
            }
            setFetching(false)
        })
    },[])
    return (
        <div className="container mt-3">
            {fetching && <LoadingOverlay/>}
            <h2>Section C: Individual KYC & Financial Statement</h2>
            <div className="row p-4 bg-white border rounded shadow-sm">
                <table className="table table-striped" hidden={clientNum===0}>
                    <thead>
                        <tr>
                            <th scope="col">S. No.</th>
                            <th scope="col">Client Name</th>
                            <th scope="col">Aadhar Number</th>
                            <th scope="col">PAN Number</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {clients.map((client, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{client.name}</td>
                                <td>{client.aadhar}</td>
                                <td>{client.pan}</td>
                                <td><button className="btn btn-danger btn-sm" onClick={()=>deleteClient(index)}>Delete</button></td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                <div className="row">
                    <h5>Enter Details for Client {clientNum+1}</h5>
                    <hr />
                    <div className="col-12 mb-3 col-lg-6">
                        <label htmlFor="client-name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="client-name" value={clientName} onChange={(e) => setClientName(e.target.value)}/>
                    </div>
                    <div className="col-12 mb-3 col-lg-6">
                        <label htmlFor="aadhar-no" className="form-label">Aadhar Number</label>
                        <input type="text" className="form-control" id="aadhar-no" value={clientAadhar} onChange={(e) => setClientAadhar(e.target.value)}/>
                    </div>
                    <div className="col-12 mb-3 col-lg-6">
                        <label htmlFor="pan-no" className="form-label">PAN Number</label>
                        <input type="text" className="form-control" id="pan-no" value={clientPan} onChange={(e) => setClientPan(e.target.value)}/>
                    </div>
                    <div className="col-12 py-2">
                        <button className="btn btn-sm btn-outline-primary" onClick={addClient}> Add Client</button>
                    </div>
                </div>

                <div className="col-12 col-lg-6 py-2">
                    <button className="btn btn-primary" onClick={handleSaveSection} disabled={saving}>{saving && <Loader/>}Save and Next &rarr;</button>
                </div>
            </div>
        </div>
    )
}