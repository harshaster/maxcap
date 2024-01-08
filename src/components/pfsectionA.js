"use client"
import { useState } from "react"
import UploadWidget from "./uploadFile"

export default function SectionA(){
    const [COfirm, setCOfirm] = useState(null)
    function renderCOfirm(cofirm){
        switch(cofirm){
            case "Properietorship" :
                return (
                    <div className="row justify-content-start pt-3">
                        <h5 className="py-2">Upload following documents : </h5>
                        <UploadWidget text="PAN Card" uniq="pancard"/>
                        <UploadWidget text="GST Certificate" uniq="gst-cert"/>
                        <div className="col-12 mb-3 col-lg-6">
                            <label htmlFor="gstin" className="form-label">GSTIN</label>
                            <input type="text" className="form-control" id="gstin"/>
                        </div>
                    </div>
                )
            case "Partnership":
                return (
                    <div className="row justify-content-start pt-3">
                        <h5 className="py-2">Upload following documents : </h5>
                        <UploadWidget text="Firm PAN Card" uniq="fpancard"/>
                        <UploadWidget text="Partnership Deed" uniq="ptn-deed"/>
                        <UploadWidget text="GSTIN and Certificate" uniq="gst-cert"/>
                        <UploadWidget text="Registry of firm's certificate" uniq="registry"/>
                    </div>
                )
            case "LLP":
                return (
                    <div className="row justify-content-start pt-3">
                        <h5 className="py-2">Upload following documents : </h5>
                        <UploadWidget text="PAN Card" uniq="pancard"/>
                        <UploadWidget text="Deed of LLP" uniq="llp-deed"/>
                        <UploadWidget text="GST No. and Certificate" uniq="gst-cert"/>
                    </div>
                )
            case "Private Limited":
                return (
                    <div className="row justify-content-start pt-3">
                        <h5 className="py-2">Upload following documents : </h5>
                        <UploadWidget text="PAN Card" uniq="pancard"/>
                        <UploadWidget text="Company Incorporation Date and Certificate" uniq="inc-cert"/>
                        <UploadWidget text="GST No. and Certificate" uniq="gst-cert"/>
                    </div>
                )
            case "Limited":
                return (
                    <div className="row justify-content-start pt-3">
                        <h5 className="py-2">Upload following documents : </h5>
                        <UploadWidget text="Company Information Certificate" uniq="company-info"/>
                        <UploadWidget text="GST No. and Certificate" uniq="gst-cert"/>
                    </div>
                )
        }
    }
    return (
        <main style={{paddingTop : '80px'}}>
            <div className="container mt-3">
                <h2>Section A</h2>
                <form className="row justify-content-start p-4 bg-white border rounded shadow-sm">
                    <div className="col-12 mb-3 col-lg-6">
                        <label htmlFor="firm-name" className="form-label">Name of firm </label>
                        <input type="text" className="form-control" id="firm-name"/>
                    </div>
                    <div className="col-12 mb-3 col-lg-6">
                        <label htmlFor="group-name" className="form-label">Group name </label>
                        <input type="text" className="form-control" id="group-name"/>
                    </div>
                    <div className="col-12 mb-3 col-lg-6">
                        <label htmlFor="contact-no" className="form-label">Contact No.</label>
                        <input type="tel" className="form-control" id="contact-no"/>
                    </div>
                    <div className="col-12 mb-3 col-lg-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email"/>
                    </div>
                    <div className="col-12 mb-3 col-lg-6">
                        <label htmlFor="website" className="form-label">Website </label>
                        <input type="url" className="form-control" id="website"/>
                    </div>
                    <div className="col-12 mb-3 col-lg-6">
                        <label htmlFor="inc-date" className="form-label">Incorporation Date </label>
                        <input type="date" className="form-control" id="inc-date"/>
                    </div>
                    <div className="col-12 mb-3 col-lg-6">
                        <label htmlFor="cons-firm" className="form-label">Constitution of firm </label>
                        <select className="form-select" id="cons-firm" defaultValue={COfirm} onChange={e => setCOfirm(e.target.value)} aria-label="Constitution of Firm">
                            <option>---Select---</option>
                            <option value="Properietorship">Properietorship</option>
                            <option value="Partnership">Partnership</option>
                            <option value="LLP">LLP</option>
                            <option value="Private Limited">Private Limited</option>
                            <option value="Limited">Limited</option>
                        </select>
                    </div>
                    {COfirm && renderCOfirm(COfirm)}
                    
                </form>
            </div>
        </main>
    )
}