"use client"
import { useEffect, useState } from "react"
import { auth } from "../config"
import { setFinanceFormSection,getFinanceFormSection } from "@/apis"
import LoadingOverlay from "./overlay"
import Loader from "./loader"
import UploadWidget from "./uploadFile"

export default function SectionD(params) {
    const [saving, setSaving] = useState(false)
    const [fetching, setFetching] = useState(true)
    const [reraNo, setReraNo] = useState('')
    const [reraUpload, setReraUpload] = useState(null)
    const [landArea, setLandArea] = useState({value : '', metric : 'sqF'})
    const [projConfig, setProjConfig] = useState('')
    const [numUnits, setNumUnits] = useState(0)
    const [numTowers, setNumTowers] = useState(0)
    const [builtArea, setBuiltArea] = useState({value : '', metric : 'sqF'})
    const [projType, setProjType] = useState('')
    const [amenities, setAmenities] = useState([])
    const [newamenity, setNewAmenity] = useState('')
    const [unitDetails, setUnitDetails] = useState([])

    const [newUFlatType, setNewUFlatType] = useState('')
    const [newUCarpetArea, setNewUCarpetArea] = useState('')
    const [newUBuiltArea, setNewUBuiltArea] = useState('')
    const [newUAgreementValue, setNewUAgreementValue] = useState('')
    const [newUNumUnits, setNewUNumUnits] = useState('')
    const [newULocation, setNewULocation] = useState('')

    useEffect(()=>{
        setFetching(true)
        let usrID= null
        if (auth.currentUser){
            usrID = auth.currentUser.uid
        }
        getFinanceFormSection(usrID, "sectionD").then(data => {
            if (data){
                setReraNo(data.reraNo)
                setReraUpload(data.reraUpload)
                setLandArea(data.landArea)
                setProjConfig(data.projConfig)
                setNumUnits(data.numUnits)
                setNumTowers(data.numTowers)
                setBuiltArea(data.builtArea)
                setProjType(data.projType)
                setAmenities(data.amenities)
                setUnitDetails(data.unitDetails)
                setFetching(false)
            }
            else{
                setFetching(false)
            }
        })
    },[])

    function addAmenity(){
        if (!newamenity){
            alert("Please enter an amenity")
            return
        }
        setAmenities([...amenities, newamenity])
        setNewAmenity('')
    }
    function deleteAmenity(index){
        setAmenities(amenities.filter((amenity, i) => i!==index))
    }

    function handleSaveSection(e){
        e.preventDefault()
        setSaving(true)
        if (!reraNo || !landArea.value || !projConfig || !numUnits || !numTowers || !builtArea.value || !projType || !amenities){
            alert("Please fill all the fields")
            setSaving(false)
            return
        }
        if (unitDetails.length < numUnits){
            alert("Please fill all the unit details")
            setSaving(false)
            return
        }
        if (unitDetails.length===0){
            alert("There must be atleast one unit!")
            setSaving(false)
            return
        }
        let usrID= null

        if (auth.currentUser){
            usrID = auth.currentUser.uid
        }
        setFinanceFormSection(usrID, "sectionD", {
            reraNo,
            reraUpload,
            landArea,
            projConfig,
            numUnits,
            numTowers,
            builtArea,
            projType,
            amenities,
            unitDetails
        }).then(()=>{
            setSaving(false)
            params.doneSection()
        })
    }

    function addUnitDetails(){
        if (!newUFlatType || !newUCarpetArea || !newUBuiltArea || !newUAgreementValue || !newUNumUnits || !newULocation){
            alert("Please fill all the fields")
            return
        }
        let newUnitDetails = unitDetails
        newUnitDetails.push({
            type : newUFlatType,
            carpetArea : newUCarpetArea,
            builtArea : newUBuiltArea,
            agreementValue : newUAgreementValue,
            numUnits : newUNumUnits,
            location : newULocation
        })
        setUnitDetails(newUnitDetails)
        setNewUFlatType('')
        setNewUCarpetArea('')
        setNewUBuiltArea('')
        setNewUAgreementValue('')
        setNewUNumUnits('')
        setNewULocation('')

    }

    function deleteUnitDetails(index){
        setUnitDetails(unitDetails.filter((unit, i) => i!==index))
    }
    return (
        <div className="container mt-3">
            {fetching && <LoadingOverlay/>}
            <h2>Section D: Project Details</h2>
            <div className="row p-4 bg-white border rounded shadow-sm">
                <div className="col-12 mb-3 col-lg-6">
                    <label htmlFor="rera-no" className="form-label">RERA Number</label>
                    <input type="text" className="form-control" value={reraNo} onChange={e => setReraNo(e.target.value)} id="rera-no" />
                </div>

                <UploadWidget uniq="rera-upload" text="Upload RERA Certificate" upload={reraUpload} setStorageFileURL={url=>setReraUpload(url)}/>

                <div className="col-12 mb-3 col-lg-6">
                    <label htmlFor="land-area" className="form-label">Land Area (in sqf or sqm)</label>
                    <div className="input-group mb-3">
                        <input type="number" id="land-area" className="form-control" value={landArea.value} onChange={e => setLandArea({value : e.target.value, metric : landArea.metric})}/>
                        <select className="form-select" value={landArea.metric} onChange={e => setLandArea({value : landArea.value, metric : e.target.value || null})} id="area-metric">
                            <option value="sqF">sq F</option>
                            <option value="sqM">sq M</option>
                        </select>
                    </div>
                </div>


                <div className="col-12 mb-3 col-lg-4">
                    <label htmlFor="proj-config" className="form-label">Project Configuration:</label>
                    <select name="proj-config" className="form-select" value={projConfig} onChange={e=>setProjConfig(e.target.value || null)} id="proj-config">
                        <option value='' disabled>Choose...</option>
                        <option value="1BHK">1 BHK</option>
                        <option value="2BHK">2 BHK</option>
                        <option value="3BHK">3 BHK</option>
                        <option value="4BHK">4 BHK</option>
                    </select>
                </div>
                
                <div className="col-12 mb-3 col-lg-4">
                    <label htmlFor="units-no" className="form-label">Total number of Units</label>
                    <input type="number" value={numUnits} onChange={e => setNumUnits(e.target.value)} className="form-control" id="units-no" />
                </div>

                <div className="col-12 mb-3 col-lg-4">
                    <label htmlFor="towers-no" className="form-label">Total number of Towers</label>
                    <input type="number" value={numTowers} onChange={e => setNumTowers(e.target.value)} className="form-control" id="towers-no" />
                </div>

                <div className="col-12 mb-3 col-lg-4">
                    <label htmlFor="built-area" className="form-label">Total Built-Up Area</label>
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" value={builtArea.value} onChange={e => setBuiltArea({value : e.target.value, metric : builtArea.metric})} id="built-area" />
                        <select className="form-select" value={builtArea.metric} onChange={e => setBuiltArea({value : builtArea.value, metric : e.target.value || null})} id="built-area-metric">
                            <option value="sqF">sq F</option>
                            <option value="sqM">sq M</option>
                        </select>
                    </div>
                </div>

                <div className="col-12 mb-3 col-lg-4">
                    <label htmlFor="proj-type" className="form-label">Type of Project:</label>
                    <select name="proj-type" value={projType} onChange={e=>{setProjType(e.target.value || null)}} className="form-select" id="proj-type">
                        <option value=''>Choose...</option>
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                    </select>
                </div>

                <div className="col-12 col-lg-6 py-2">
                    <h5>Ameneties</h5>
                    <ul className="list-group my-2">
                    {amenities.map((amenity, index) => {
                        return (
                            <li key={index} className="list-group-item">
                                {amenity}
                                <button className="btn btn-sm btn-danger float-end" onClick={() => deleteAmenity(index)}>Delete</button>
                            </li>
                        )
                    })}
                    </ul>
                    <div className="row align-items-center">
                        <div className="col-8">
                            <input type="text" className="form-control" value={newamenity} onChange={e => setNewAmenity(e.target.value)} />
                        </div>
                        <div className="col-4">
                            <button className="btn btn-sm btn-primary" onClick={addAmenity}>Add</button>
                        </div>
                    </div>
                </div>

                <div className="col-12 py-2">
                    <h5>Individual Unit Details</h5>
                </div>
                <hr />
                {unitDetails.map((unit, index) => {
                    return (
                        <div key={index} className="row">
                            <h6>Unit {index+1}</h6>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Unit Type</th>
                                        <th scope="col">Carpet Area</th>
                                        <th scope="col">Built-Up Area</th>
                                        <th scope="col">Agreement Value</th>
                                        <th scope="col">Number of Units</th>
                                        <th scope="col">Location of Units</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{unit.type}</td>
                                        <td>{unit.carpetArea}</td>
                                        <td>{unit.builtArea}</td>
                                        <td>{unit.agreementValue}</td>
                                        <td>{unit.numUnits}</td>
                                        <td>{unit.location}</td>
                                        <td><button className="btn btn-sm btn-danger" onClick={()=>deleteUnitDetails(index)}>Delete</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                })}

                {unitDetails.length < numUnits && 
                <div className="row">
                    <div className="col-12 mb-3 col-lg-4">
                        <label htmlFor="flat-type" className="form-label">Type of Flat</label>
                        <input value={newUFlatType} onChange={e=>setNewUFlatType(e.target.value)} type="text" className="form-control" id="flat-type" />
                    </div>
                    <div className="col-12 mb-3 col-lg-4">
                        <label htmlFor="carpet-area" className="form-label">Carpet Area</label>
                        <input value={newUCarpetArea} onChange={e=>setNewUCarpetArea(e.target.value)} type="number" className="form-control" id="carpet-area" />
                    </div>
                    <div className="col-12 mb-3 col-lg-4">
                        <label htmlFor="built-area" className="form-label">Built-Up Area</label>
                        <input value={newUBuiltArea} onChange={e=>setNewUBuiltArea(e.target.value)} type="number" className="form-control" id="built-area" />
                    </div>
                    <div className="col-12 mb-3 col-lg-4">
                        <label htmlFor="agreement-value" className="form-label">Agreement Value</label>
                        <input value={newUAgreementValue} onChange={e=>setNewUAgreementValue(e.target.value)} type="number" className="form-control" id="agreement-value" />
                    </div>
                    <div className="col-12 mb-3 col-lg-4">
                        <label htmlFor="unit-nos" className="form-label">Number of Units</label>
                        <input value={newUNumUnits} onChange={e=>setNewUNumUnits(e.target.value)} type="number" className="form-control" id="unit-nos" />
                    </div>
                    <div className="col-12 mb-3 col-lg-4">
                        <label htmlFor="unit-location" className="form-label">Location of Units</label>
                        <input value={newULocation} onChange={e=>setNewULocation(e.target.value)} type="text" className="form-control" id="unit-location" />
                    </div>
                    <div className="col-12">
                        <button className="btn btn-sm btn-primary" onClick={addUnitDetails}>Add Unit Details</button>
                    </div>
                </div>
                }
                <div className="row justify-content-center">
                    <div className="col-12 text-center mx-auto my-3">
                        <button className="btn btn-primary" onClick={handleSaveSection} disabled={saving}>{saving && <Loader/>} Save and Next &rarr;</button>
                    </div>
                </div>
            </div>
        </div>
    )
}