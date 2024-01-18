"use client"
import SectionA from "@/components/pfsectionA"
import SectionB from "@/components/pfsectionB"
import SectionC from "@/components/pfsectionC"
import SectionD from "@/components/pfsectionD"
import SectionE from "@/components/pfsectionE"
import SectionF from "@/components/pfsectionF"

import { auth } from "@/config"
import { fetchUserFromId,getFInanceFormStage,setFinanceFormStage } from "@/apis"
import { useEffect,useState } from "react"
import { useRouter } from "next/navigation"
import Loader from "@/components/loader"

export default function ProjectFinance(){
    const [stage, setStage] = useState('A')
    const [viewing, setViewing] = useState('A')
    const [loading, setLoading] = useState(true)
    const router = useRouter()
    useEffect(()=>{
        auth.onAuthStateChanged(user => {
            if (user){
                fetchUserFromId(user.uid)
                .then(usr => {
                    if (!usr.isBuilder){
                        router.push("/dashboard")
                    }
                })
                .catch(err => {
                    console.log(err)
                })

                getFInanceFormStage(user.uid)
                .then(_stage => {
                    setStage(_stage)
                    setViewing(_stage)
                    setLoading(false)
                })
            }
            else {
                router.push("/login")
            }
        })
    },[])

    function handleSaveStage(stage){
        setLoading(true)
        setFinanceFormStage(auth.currentUser.uid, stage)
        .then(()=>{
            setStage(stage)
            setViewing(stage)
            setLoading(false)
        })
    }

    function renderStage(){
        switch(viewing){
            case 'A':
                return <SectionA doneSection={() => handleSaveStage("B")}/>
            case 'B':
                return <SectionB doneSection={() => handleSaveStage("C")}/>
            case 'C':
                return <SectionC doneSection={() => handleSaveStage("D")}/>
            case 'D':
                return <SectionD doneSection={() => handleSaveStage("E")}/>
            case 'E':
                return <SectionE doneSection={() => handleSaveStage("F")}/>
            case 'F':
                return <SectionF doneSection={() => handleSaveStage("Z")}/>
            case 'Z':
                return <h1>Thank you for submitting your project finance form. We will get back to you soon.</h1>
            default:
                return <SectionA doneSection={() => handleSaveStage("B")}/>
        }
    }
    return (
        <main style={{paddingTop: '100px'}}>
            {loading ?

            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <Loader />
                    </div>
                </div>
            </div> : 
            <div>
                <div className="container-lg">
                    <div className="row px-2">
                        {['A','B','C','D','E','F'].map((letter, index) => {
                            return (
                                <div key={index} className="col-2 mx-0 px-0"  onClick={() => {letter<=stage ? setViewing(letter) : null}} style={{cursor: letter<=stage ? 'pointer' : ''}}>
                                    <div className={`p-1 pb-2 border-bottom border-3 ${stage == letter ? 'border-dark' : letter<stage ? 'border-success' : ''} ${viewing==letter ? 'bg-secondary-subtle' : ''}` }>
                                        <div className={letter>stage ? 'text-secondary' : ''}>Section {letter} {letter<stage ? <span className='text-success fw-bold px-1'>&#10003;</span> : ''}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {renderStage()}
            </div>}
        </main>
    )
}