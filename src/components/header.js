'use client'

import Image from "next/image"
import logo from "@/img/logo.png"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { auth } from "@/config"
import { useEffect, useState } from "react"
import Loader from "./loader"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Login } from "@mui/icons-material"


let mystyle = {
	flexGrow : 0
}

let links = [
	{href : '/', title: 'Home'},
	{href : '/aboutus', title: 'About Us'},
	{href : '/catalog', title: 'Property Catalog'},
	{href : '/homeloan', title: 'Home Loans'},
]

let imageStyle={
	filter: 'drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5))'
}

function Header(){
	const pathname= usePathname()
	const [user, setUser] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			setUser(user)
			setIsLoading(false)
		})
	})

	function logout(){
		setIsLoading(true)
		auth.signOut().then(() => {
			setIsLoading(false)
		}
		).catch((error) => {
			console.log(error)
			setIsLoading(false)
		})
	}
    return (

        <header>
			<nav className="navbar navbar-expand-lg fixed-top bg-white shadow-sm">
				<div className="container-lg">
					<Link className="navbar-brand" href="/">
						<Image priority src={logo} style={imageStyle} width={100} alt="maxx capital"></Image>
					</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<svg className="navbar-toggler-icon" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 16 16">
							<path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
						</svg>
					</button>
					<div className="collapse navbar-collapse" style={mystyle} id="navbarNav">
						<ul className="navbar-nav align-items-center">
							{links.map(l => { return (<li className="nav-item" key={l.href}>
								<Link className={`nav-link ${pathname == l.href ? "active" : ""}`} aria-current="page" href={l.href}>{l.title}</Link>
							</li>)})}
							{isLoading ? <li><Loader/></li> :
							(user ? 
							<li className="nav-item dropdown">
								<a className="dropdown-toggle nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><AccountCircleIcon/> </a>
								<ul className="dropdown-menu">
									<li><Link className="dropdown-item" href="/dashboard"><DashboardIcon/> Dashboard</Link></li>
									<li><hr className="dropdown-divider"/></li>
									<li><Link href="#" className="dropdown-item text-danger" onClick={logout}><LogoutIcon/> Logout</Link></li>
								</ul>
							</li> : 
							<li>
								<Link className="nav-link" href="/login"> Login<Login/>  </Link>
							</li>
							)}
						</ul>
					</div>
				</div>
			</nav>
        </header>
    )
}

export default Header