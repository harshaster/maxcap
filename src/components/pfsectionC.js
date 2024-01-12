"use client"
import { useState } from "react"
import UploadWidget from "./uploadFile"

export default function SectionC() {
    return (
        <main style={{ paddingTop: '80px' }}>
            <div className="container mt-3">
                <h2>Section C: Individual & Financial Statement</h2>
                <form className="row p-4 bg-white border rounded shadow-sm">
                    <div className="col-12 py-2">
                        <h5>Client Name</h5>
                    </div>
                    <hr />
                    <UploadWidget text="Aadhar Number" uniq="aadhar-client" />
                    <UploadWidget text="PAN Number" uniq="pan-client" />
                    <hr />
                </form>
            </div>
        </main>
    )
}