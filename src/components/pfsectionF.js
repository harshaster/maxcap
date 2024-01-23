"use client"
import { useState } from "react"
import UploadWidget from "./uploadFile"

export default function SectionF(params) {


    let [OngoingProject, setOngoingProject] = useState([])
    
    let [newOGprojName, setnewOGprojName] = useState("")
    let [newOGpartner, setnewOGpartner] = useState("")
    let [newOGunits, setnewOGunits] = useState("")
    let [newOGsold, setnewOGsold] = useState("")
    let [newOGunsold, setnewOGunsold] = useState("")
    let [newOGstartDate, setnewOGstartDate] = useState("")
    let [newOGendDate, setnewOGendDate] = useState("")


    return (
        <div className="container mt-3">
            <h2>Section F: Group History</h2>
            <div className="row p-4 bg-white border rounded shadow-sm">
                <div className="col-12 mb-3 col-lg-6">
                    <label htmlFor="proj-name" className="form-label">Project Name</label>
                    <input type="text" className="form-control" id="proj-name" />
                </div>
                <div className="col-12 mb-3 col-lg-6">
                    <label htmlFor="firm-name" className="form-label">Firm Name</label>
                    <input type="text" className="form-control" id="firm-name" />
                </div>
                <div className="col-12 mb-3 col-lg-6">
                    <label htmlFor="partner-nos" className="form-label">Number of Partners</label>
                    <input type="number" className="form-control" id="partner-nos" />
                </div>
                <div className="col-12 mb-3 col-lg-6">
                    <label htmlFor="units-nos" className="form-label">Number of Units</label>
                    <input type="number" className="form-control" id="units-nos" />
                </div>
                <div className="col-12 mb-3 col-lg-6">
                    <label htmlFor="sold-units" className="form-label">Sold Units</label>
                    <input type="number" className="form-control" id="sold-units" />
                </div>
                <div className="col-12 mb-3 col-lg-6">
                    <label htmlFor="unsold-units" className="form-label">Unsold Units</label>
                    <input type="number" className="form-control" id="unsold-units" />
                </div>
                <div className="col-12 mb-3 col-lg-6">
                    <label htmlFor="proj-cost" className="form-label">Project Cost</label>
                    <input type="number" className="form-control" id="proj-cost" />
                </div>
                <div className="col-12 mb-3 col-lg-6">
                    <label htmlFor="tot-rcvbl-proj" className="form-label">Total Recieveable Project</label>
                    <input type="number" className="form-control" id="tot-rcvbl-proj" />
                </div>
                <div className="col-12 mb-3 col-lg-6">
                    <label htmlFor="start-date" className="form-label">Start Date</label>
                    <input type="date" className="form-control" id="start-date" />
                </div>
                <div className="col-12 mb-3 col-lg-6">
                    <label htmlFor="end-date" className="form-label">End Date</label>
                    <input type="date" className="form-control" id="end-date" />
                </div>
                <hr />

                <div className="row mt-3">
                    <table className="table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <th colSpan={9} className="text-center">Ongoing Project Details</th>
                            </tr>
                            <tr>
                                <th>S. No.</th>
                                <th>Project Name</th>
                                <th>Partner </th>
                                <th>Number of Units</th>
                                <th>Sold</th>
                                <th>Unsold</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {OngoingProject.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.projName}</td>
                                        <td>{item.partner}</td>
                                        <td>{item.units}</td>
                                        <td>{item.sold}</td>
                                        <td>{item.unsold}</td>
                                        <td>{item.startDate}</td>
                                        <td>{item.endDate}</td>
                                        <td>
                                            <button className="btn btn-sm" title="Remove this project" onClick={()=>{
                                                let temp = [...OngoingProject]
                                                temp.splice(index, 1)
                                                setOngoingProject(temp)
                                            }}>&#10060;</button>
                                        </td>
                                    </tr>
                                )
                            })}
                            <tr>
                                <td>{OngoingProject.length+1}</td>
                                <td><input className="form-control" type="text" value={newOGprojName} onChange={e=>setnewOGprojName(e.target.value)}/></td>
                                <td><input className="form-control" type="text" value={newOGpartner} onChange={e=>setnewOGpartner(e.target.value)}/></td>
                                <td><input className="form-control" type="number" value={newOGunits} onChange={e=>setnewOGunits(e.target.value)}/></td>
                                <td><input className="form-control" type="number" value={newOGsold} onChange={e=>setnewOGsold(e.target.value)}/></td>
                                <td><input className="form-control" type="number" value={newOGunsold} onChange={e=>setnewOGunsold(e.target.value)}/></td>
                                <td><input className="form-control" type="date" value={newOGstartDate} onChange={e=>setnewOGstartDate(e.target.value)}/></td>
                                <td><input className="form-control" type="date" value={newOGendDate} onChange={e=>setnewOGendDate(e.target.value)}/></td>
                                <td>
                                    <button className="btn btn-sm btn-primary" title="Add Project" onClick={()=>{
                                            if(newOGprojName==="" || newOGpartner==="" || newOGunits==="" || newOGsold==="" || newOGunsold==="" || newOGstartDate==="" || newOGendDate===""){
                                                alert("Please fill all the fields")
                                                return
                                            }
                                            setOngoingProject([...OngoingProject, {
                                                projName: newOGprojName,
                                                partner: newOGpartner,
                                                units: newOGunits,
                                                sold: newOGsold,
                                                unsold: newOGunsold,
                                                startDate: newOGstartDate,
                                                endDate: newOGendDate
                                            }])
                                            setnewOGprojName("")
                                            setnewOGpartner("")
                                            setnewOGunits("")
                                            setnewOGsold("")
                                            setnewOGunsold("")
                                            setnewOGstartDate("")
                                            setnewOGendDate("")
                                        
                                        }}>Add</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row mt-3">
                    <div className="col-12 text-center">
                        <button className="btn btn-primary">Save and Finish</button>  
                    </div>
                </div>
            </div>
        </div>
    )
}