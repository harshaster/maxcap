"use client"

import './page.css';
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import {auth} from "@/config"
import { fetchUserFromId } from "@/apis";
import FillDetails from "@/components/details";
import Loader from '@/components/loader';
import BuilderDash from '@/components/builder';
import CustomerDash from '@/components/customer';

export default function Dashboard(){
    const router = useRouter()
    const [isProfileComplete, setIPC] = useState(null)
    const [fullPageLoading, setFPLoading]=useState(true)
    const [isBuilder, setIsBuilder] = useState(null)
    

    useEffect(() =>{
        auth.onAuthStateChanged(async (user) => {
            if(user){
                let profile = await fetchUserFromId(user.uid)
                if(profile){
                    setIPC(true)
                    setIsBuilder(profile.isBuilder) 
                }
                else{
                    setIPC(false)
                }
                setFPLoading(false)
            }else{
                router.push('/login')
            }
        })
    })

    function handleProfileComplete(payload){
        setFPLoading(true)
        setIPC(true)
        setIsBuilder(payload.isBuilder)
        setFPLoading(false)
    }
    
    return (
        <main>
            {fullPageLoading ? (
                <div className='container-lg d-flex h-100 justify-content-center align-items-center'>
                    <Loader/> <h1 className='px-3'>Loading</h1>
                </div>
            ) : (
                !isProfileComplete ? <FillDetails handleProfileComplete={handleProfileComplete}/> : (
                    isBuilder ? <BuilderDash/> : <CustomerDash/> 
                )
            )}
            
        </main>
    )
}