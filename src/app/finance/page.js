"use client"
import { useState } from "react"

export default function ProjectFinance(){
    const [COfirm, setCOfirm] = useState(null)
    return (
        <main style={{paddingTop : '80px'}}>
            <div className="container mt-3">
                <h2>Section A</h2>
                <form className="row justify-content-center p-4 bg-white border rounded shadow-sm">
                    <div className="col-12 mb-3 col-lg-6">
                        <label for="firm-name" class="form-label">Name of firm </label>
                        <input type="text" class="form-control" id="firm-name"/>
                    </div>
                    <div className="col-12 mb-3 col-lg-6">
                        <label for="group-name" class="form-label">Group name </label>
                        <input type="text" class="form-control" id="group-name"/>
                    </div>
                    <div className="col-12 mb-3 col-lg-6">
                        <label for="contact-no" class="form-label">Contact No.</label>
                        <input type="tel" class="form-control" id="contact-no"/>
                    </div>
                    <div className="col-12 mb-3 col-lg-6">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email"/>
                    </div>
                    <div className="col-12 mb-3 col-lg-6">
                        <label for="website" class="form-label">Website </label>
                        <input type="url" class="form-control" id="website"/>
                    </div>
                    <div className="col-12 mb-3 col-lg-6">
                        <label for="inc-date" class="form-label">Incorporation Date </label>
                        <input type="date" class="form-control" id="inc-date"/>
                    </div>
                    <div className="col-12 mb-3 col-lg-6">
                        <label for="cons-firm" class="form-label">Constitution of firm </label>
                        <select class="form-select" id="cons-firm" defaultValue={COfirm} onChange={e => setCOfirm(e.target.value)} aria-label="Constitution of Firm">
                            <option>---Select---</option>
                            <option value="Properietorship">Properietorship</option>
                            <option value="Partnership">Partnership</option>
                            <option value="LLP">LLP</option>
                            <option value="Private Limited">Private Limited</option>
                            <option value="Limited">Limited</option>
                        </select>
                    </div>
                    
                </form>
            </div>
        </main>
    )
}