"use client"
import { useEffect, useState } from "react"
import UploadWidget from "./uploadFile"
import Loader from "./loader"
import LoadingOverlay from "./overlay"
import { auth } from "../config"
import { getFinanceFormSection,setFinanceFormSection } from "@/apis"


export default function SectionE(params) {
    let [commenceCert, setCommCert] = useState(null)
    let [envCert, setEnvCert] = useState(null)
    let [naPerm, setNaPerm] = useState(null)
    let [aaiDate, setAaiDate] = useState('')
    let [fineNoc, setFineNoc] = useState('')

    let [unitPlan, setUnitPlan] = useState(null)
    let [layoutPlan, setLayoutPlan] = useState(null)
    let [buildingPlan, setBuildingPlan] = useState(null)

    let [saleDeed, setSaleDeed] = useState(null)
    let [sevenTwelve, setSevenTwelve] = useState(null)
    let [eightAbstract, setEightAbstract] = useState(null)
    let [sixAbstract, setSixAbstract] = useState(null)
    
    let [chainSaleDeeds, setChainSaleDeeds] = useState([])
    let [saileDeedCount, setSaleDeedCount] = useState(0)
    let [newSDDate, setNewSDDate] = useState('')
    let [newSDSeller, setNewSDSeller] = useState('')
    let [newSDBuyer, setNewSDBuyer] = useState('')

    let [corurtCases, setCourtCases] = useState('')
    let [courtOrderChargeCopy, setCourtOrderChargeCopy] = useState(null)

    let [saving, setSaving] = useState(false)
    let [fetching, setFetching] = useState(true)

    function  addSaleDeed(){
        if (!newSDDate || !newSDSeller || !newSDBuyer) {
            alert("Please fill all the fields")
            return
        }
        setSaleDeedCount(saileDeedCount+1)
        setChainSaleDeeds([...chainSaleDeeds, {
            id : saileDeedCount+1,
            date : newSDDate,
            seller : newSDSeller,
            buyer : newSDBuyer
        }])
        setNewSDDate('')
        setNewSDSeller(newSDBuyer)
        setNewSDBuyer('')
    }
    
    useEffect(()=>{
        let usrID= null
        if (auth.currentUser){
            usrID = auth.currentUser.uid
        }
        getFinanceFormSection(usrID, "sectionE").then(data => {
            if (data){
                setCommCert(data.commenceCert)
                setEnvCert(data.envCert)
                setNaPerm(data.naPerm)
                setAaiDate(data.aaiDate)
                setFineNoc(data.fineNoc)

                setUnitPlan(data.unitPlan)
                setLayoutPlan(data.layoutPlan)
                setBuildingPlan(data.buildingPlan)

                setSaleDeed(data.saleDeed)
                setSevenTwelve(data.sevenTwelve)
                setEightAbstract(data.eightAbstract)
                setSixAbstract(data.sixAbstract)

                setChainSaleDeeds(data.chainSaleDeeds)
                setSaleDeedCount(data.chainSaleDeeds.length)

                setCourtCases(data.corurtCases)
                setCourtOrderChargeCopy(data.courtOrderChargeCopy)
            }
        }).catch(e => {
            alert("Something went wrong!")
            console.log(e.message)
        }).finally(()=>{
            setFetching(false)
        })
    },[])

    function handleSave(e){
        setSaving(true)
        if (!commenceCert || !envCert || !naPerm || !aaiDate || !fineNoc || !unitPlan || !layoutPlan || !buildingPlan || !saleDeed || !sevenTwelve || !eightAbstract || !sixAbstract || !courtOrderChargeCopy){
            alert("Please fill all the fields")
            setSaving(false)
            return
        }
        
        if (chainSaleDeeds.length === 0){
            alert("Please add atleast one sale deed")
            setSaving(false)
            return
        }

        setFinanceFormSection(auth.currentUser.uid, "sectionE", {
            commenceCert, envCert, naPerm, aaiDate, fineNoc, unitPlan, layoutPlan, buildingPlan, saleDeed, sevenTwelve, eightAbstract, sixAbstract, chainSaleDeeds, corurtCases, courtOrderChargeCopy
        }).then(()=>{
            params.doneSection()
        }).catch(e => {
            alert("Something went wrong!")
            console.log(e.message)
        }).finally(()=>{
            setSaving(false)
        })
        
    }


    return (
        <div className="container mt-3">
            {fetching && <LoadingOverlay/>}
            
            <h2>Section E: Certificate Details</h2>
            <div className="row p-4 bg-white border rounded shadow-sm">
                {saving}
                <div className="col-12">
                    <label className="form-label fw-bold">Upload following documents:</label>
                </div>
                <UploadWidget 
                    text="Commencement Certificate" 
                    upload={commenceCert} 
                    setStorageFileURL={url => setCommCert(url)} 
                    uniq="comm-cert"
                />
                <UploadWidget 
                    text="Environmental Certificate" 
                    upload={envCert}
                    setStorageFileURL={url => setEnvCert(url)}  
                    uniq="env-cert"
                />
                <UploadWidget 
                    text="NA-Permissions" 
                    uniq="na-perm"
                    upload={naPerm}
                    setStorageFileURL={url => setNaPerm(url)}
                />
                <div className="col-12 mb-3 col-lg-6">
                    <label htmlFor="aai-date" className="form-label">AAI Date</label>
                    <input type="date" value={aaiDate} onChange={e => setAaiDate(e.target.value)} className="form-control" id="aai-date" />
                </div>
                <div className="col-12 mb-3 col-lg-6">
                    <label htmlFor="fine-noc" className="form-label">Fine NOC (Date)</label>
                    <input type="date" value={fineNoc} onChange={e => setFineNoc(e.target.value)} className="form-control" id="fine-noc" />
                </div>
                <hr />

                <h4>Section E1</h4>
                <div className="col-12">
                    <label className="form-label fw-bold">Upload following plans:</label>
                </div>
                <UploadWidget 
                    text="Unit Plan" 
                    uniq="unit-plan"
                    upload={unitPlan}
                    setStorageFileURL={url => setUnitPlan(url)}
                />
                <UploadWidget 
                    text="Layout Plan" 
                    uniq="layout-plan"
                    upload={layoutPlan}
                    setStorageFileURL={url => setLayoutPlan(url)}
                />
                <UploadWidget 
                    text="Building Plan" 
                    uniq="building-plan"
                    upload={buildingPlan}
                    setStorageFileURL={url => setBuildingPlan(url)}
                />
                <hr />

                <h4>Section E2</h4>
                <div className="col-12">
                    <label className="form-label fw-bold">Upload following legal documents:</label>
                </div>
                <UploadWidget 
                    text="Sale Deed" 
                    uniq="sale-deed"
                    upload={saleDeed}
                    setStorageFileURL={url => setSaleDeed(url)}
                />
                <UploadWidget 
                    text="7/12"
                    uniq="7-12"
                    upload={sevenTwelve}
                    setStorageFileURL={url => setSevenTwelve(url)}
                />
                <UploadWidget 
                    text="8-Abstract" 
                    uniq="8-abs"
                    upload={eightAbstract}
                    setStorageFileURL={url => setEightAbstract(url)}
                />
                <UploadWidget 
                    text="6-Abstract" 
                    uniq="6-abs"
                    upload={sixAbstract}
                    setStorageFileURL={url => setSixAbstract(url)}
                />
                
                <table className="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th className="text-center" colSpan={5} scope="col">Chain Sale Deed</th>
                        </tr>
                        <tr>
                            <th scope="col" style={{width : '15%'}} value={saileDeedCount+1}>Sale Deed No.</th>
                            <th scope="col">Agreement Date</th>
                            <th scope="col">Seller</th>
                            <th scope="col">Buyer</th>
                            <th scope="col" style={{width : '10%'}}>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {chainSaleDeeds.map((sd, index) => {
                            return (
                                <tr key={index}>
                                    <td className="text-center">{sd.id}</td>
                                    <td>{sd.date}</td>
                                    <td>{sd.seller}</td>
                                    <td>{sd.buyer}</td>
                                    <td>
                                        <button className="btn btn-sm mx-2" onClick={() => {
                                            let newChain = chainSaleDeeds.filter(s => s.id !== sd.id)
                                            setChainSaleDeeds(newChain)
                                            setSaleDeedCount(saileDeedCount-1)
                                        }
                                        }>&#10060;</button>
                                    </td>
                                </tr>
                            )
                        })}
                        <tr>
                            <td className="text-center">{saileDeedCount+1}</td>
                            <td><input type="date" value={newSDDate} onChange={(e) => setNewSDDate(e.target.value)} className="form-control" /></td>
                            <td><input type="text" value={newSDSeller} onChange={e => setNewSDSeller(e.target.value)} className="form-control" disabled={chainSaleDeeds.length>0}/></td>
                            <td><input type="text" value={newSDBuyer} onChange={e => setNewSDBuyer(e.target.value)} className="form-control" /></td>
                            <td></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={5} className="text-center">
                                <button className="btn btn-primary" onClick={addSaleDeed}>Add Sale Deed</button>
                            </td>
                        </tr>
                    </tfoot>
                </table>

                <div className="col-12 mb-3">
                    <label htmlFor="count" className="form-label">Court Cases (Describe if any)</label>
                    <textarea className="form-control" value={corurtCases} onChange={e => setCourtCases(e.target.value)} id="count" rows={5}/>
                </div>
                <UploadWidget 
                    text="Court Order Charge Copy" 
                    uniq="court-order-charge-copy"
                    upload={courtOrderChargeCopy}
                    setStorageFileURL={url => setCourtOrderChargeCopy(url)}
                />
            </div>
            <div className="col-12 text-center mx-auto my-3">
                <button onClick={()=>handleSave()} className="btn btn-primary" disabled={saving}>{saving && <Loader/>} Save and Next &rarr;</button>
            </div>
        </div>
    )
}