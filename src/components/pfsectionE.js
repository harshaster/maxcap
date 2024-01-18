"use clien"
import { useState } from "react"
import UploadWidget from "./uploadFile"

export default function SectionE() {
    return (
        <div className="container mt-3">
            <h2>Section E: Certificate Details</h2>
            <form className="row p-4 bg-white border rounded shadow-sm">
                <div className="col-12">
                    <label className="form-label fw-bold">Upload following documents:</label>
                </div>
                <UploadWidget text="Commencement Certificate" uniq="comm-cert"/>
                <UploadWidget text="Environmental Certificate" uniq="env-cert"/>
                <UploadWidget text="NA-Permissions" uniq="na-perm"/>
                <div className="col-12 mb-3 col-lg-6">
                    <label htmlFor="aai-date" className="form-label">AAI Date</label>
                    <input type="date" className="form-control" id="rera-no" />
                </div>
                <div className="col-12 mb-3 col-lg-6">
                    <label htmlFor="fine-noc" className="form-label">Fine NOC (Date)</label>
                    <input type="date" className="form-control" id="fine-noc" />
                </div>
                <hr />

                <h4>Section E1</h4>
                <div className="col-12">
                    <label className="form-label fw-bold">Upload following plans:</label>
                </div>
                <UploadWidget text="Unit Plan" uniq="unit-plan"/>
                <UploadWidget text="Layout Plan" uniq="layout-plan"/>
                <UploadWidget text="Building Plan" uniq="building-plan"/>
                <hr />

                <h4>Section E2</h4>
                <div className="col-12">
                    <label className="form-label fw-bold">Upload following legal documents:</label>
                </div>
                <UploadWidget text="Sale Deed" uniq="sale-deed"/>
                <UploadWidget text="7/12" uniq="7-12"/>
                <UploadWidget text="8-Abstract" uniq="8-abs"/>
                <UploadWidget text="6-Abstract" uniq="6-abs"/>
                <UploadWidget text="Chain Sale Deed" uniq="chain-sale-deed"/>
                <div className="col-12 mb-3 col-lg-6">
                    <label htmlFor="count" className="form-label">Count</label>
                    <input type="text" className="form-control" id="count" />
                </div>
                <div className="col-12 mb-3 col-lg-6">
                    <label htmlFor="count-order" className="form-label">Count Order Charge Copy</label>
                    <input type="text" className="form-control" id="count-order" />
                </div>
            </form>
        </div>
    )
}