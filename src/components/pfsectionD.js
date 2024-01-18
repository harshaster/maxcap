"use client"
import { useState } from "react"
import { auth } from "../config"
import { setFinanceFormSection } from "@/apis"
import LoadingOverlay from "./overlay"
import Loader from "./loader"

export default function SectionC() {
    const [saving, setSaving] = useState(false)
    const [fetching, setFetching] = useState(true)
    return (
        <div className="container mt-3">
            <h2>Section D: Project Details</h2>
            <form className="row p-4 bg-white border rounded shadow-sm">
                <div className="col-12 py-2">
                    <h5>Client Name</h5>
                </div>
                <hr />
                <div className="col-12 mb-3 col-lg-6">
                    <label htmlFor="rera-no" className="form-label">RERA Number</label>
                    <input type="text" className="form-control" id="rera-no" />
                </div>
                <div className="col-12 mb-3 col-lg-6">
                    <label htmlFor="rera-no" className="form-label">Land Area (in sqf or sqm)</label>
                    <input type="number" className="form-control" id="rera-no" />
                </div>
                <div className="col-12 mb-3 col-lg-4">
                    <label htmlFor="proj-config" className="form-label">Project Configuration:</label>
                    <select name="proj-config" className="form-select" id="proj-config">
                        <option selected disabled>Choose...</option>
                        <option value="1BHK">1 BHK</option>
                        <option value="2BHK">2 BHK</option>
                        <option value="3BHK">3 BHK</option>
                        <option value="4BHK">4 BHK</option>
                    </select>
                </div>
                <div className="col-12 mb-3 col-lg-4">
                    <label htmlFor="units-no" className="form-label">Total number of Units</label>
                    <input type="number" className="form-control" id="units-no" />
                </div>
                <div className="col-12 mb-3 col-lg-4">
                    <label htmlFor="towers-no" className="form-label">Total number of Towers</label>
                    <input type="number" className="form-control" id="towers-no" />
                </div>
                <div className="col-12 mb-3 col-lg-4">
                    <label htmlFor="built-area" className="form-label">Total Built-Up Area</label>
                    <input type="number" className="form-control" id="built-area" />
                </div>
                <div className="col-12 mb-3 col-lg-4">
                    <label htmlFor="proj-type" className="form-label">Type of Project:</label>
                    <select name="proj-type" className="form-select" id="proj-type">
                        <option selected disabled>Choose...</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                    </select>
                </div>
                <div className="col-12 py-2">
                    <h5>Individual Unit Details</h5>
                </div>
                <hr />
                <div className="col-12 mb-3 col-lg-4">
                    <label htmlFor="flat-type" className="form-label">Type of Flat</label>
                    <input type="text" className="form-control" id="flat-type" />
                </div>
                <div className="col-12 mb-3 col-lg-4">
                    <label htmlFor="carpet-area" className="form-label">Carpet Area</label>
                    <input type="number" className="form-control" id="carpet-area" />
                </div>
                <div className="col-12 mb-3 col-lg-4">
                    <label htmlFor="built-area" className="form-label">Built-Up Area</label>
                    <input type="number" className="form-control" id="built-area" />
                </div>
                <div className="col-12 mb-3 col-lg-4">
                    <label htmlFor="agreement-value" className="form-label">Agreement Value</label>
                    <input type="number" className="form-control" id="agreement-value" />
                </div>
                <div className="col-12 mb-3 col-lg-4">
                    <label htmlFor="unit-nos" className="form-label">Number of Units</label>
                    <input type="number" className="form-control" id="unit-nos" />
                </div>
                <div className="col-12 mb-3 col-lg-4">
                    <label htmlFor="unit-location" className="form-label">Location of Units</label>
                    <input type="text" className="form-control" id="unit-location" />
                </div>
                <hr />
            </form>
        </div>
    )
}