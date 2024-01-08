"use client"
import { useState } from "react"
import UploadWidget from "./uploadFile"

export default function SectionB(){
    return (
        <main style={{paddingTop : '80px'}}>
            <div className="container mt-3">
                <h2>Section B: Firm Financials</h2>
                <form className="row p-4 bg-white border rounded shadow-sm">
                    <div className="col-12">
                        <label htmlFor="firm-name" className="form-label fw-bold">Upload following documents:</label>
                    </div>
                    <div className="col-12 py-2">
                        <h5>2021-22</h5>
                    </div>
                    <hr/>
                    <UploadWidget text="Acknowledgement" uniq="ack-21"/>
                    <UploadWidget text="Audit Report" uniq="audit-21"/>
                    <UploadWidget text="Balance Sheet" uniq="balance-sheet-21"/>
                    <UploadWidget text="Computation of Income" uniq="comp-income-21"/>
                    <UploadWidget text="PNL Statement" uniq="pnl-21"/>
                    <hr/>
                    
                    <div className="col-12 py-2">
                        <h5>2022-23</h5>
                    </div>
                    <hr/>
                    <UploadWidget text="Acknowledgement" uniq="ack-22"/>
                    <UploadWidget text="Audit Report" uniq="audit-22"/>
                    <UploadWidget text="Balance Sheet" uniq="balance-sheet-22"/>
                    <UploadWidget text="Computation of Income" uniq="comp-income-22"/>
                    <UploadWidget text="PNL Statement" uniq="pnl-22"/>
                    <hr/>

                    <div className="col-12 py-2">
                        <h5>2023-24</h5>
                    </div>
                    <hr/>
                    <UploadWidget text="Acknowledgement" uniq="ack-23"/>
                    <UploadWidget text="Audit Report" uniq="audit-23"/>
                    <UploadWidget text="Balance Sheet" uniq="balance-sheet-23"/>
                    <UploadWidget text="Computation of Income" uniq="comp-income-23"/>
                    <UploadWidget text="PNL Statement" uniq="pnl-23"/>
                </form>
            </div>
        </main>
    )
}