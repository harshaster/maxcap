"use client"
import { useState } from "react"
import UploadWidget from "./uploadFile"

export default function SectionF() {
    return (
        <div className="container mt-3">
            <h2>Section F: Group History</h2>
            <form className="row p-4 bg-white border rounded shadow-sm">
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

                <UploadWidget text="Ongoing Project Details" uniq="proj-ongoing"/>
            </form>
        </div>
    )
}