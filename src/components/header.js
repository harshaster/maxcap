'use client'

import Image from "next/image"
import logo from "@/img/logo.png"
import Link from "next/link"
import { usePathname } from 'next/navigation'



let mystyle = {
	flexGrow : 0
}

let links = [
	{href : '/', title: 'Home'},
	{href : '/catalog', title: 'Property Catalog'},
	{href : '/marketing', title: 'Project Marketing'},
]

let imageStyle={
	filter: 'drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5))'
}

function Header(){
	const pathname= usePathname()
    return (

        <header>
			<nav className="navbar navbar-expand-lg fixed-top bg-dark bg-opacity-25">
				<div className="container">
					<a className="navbar-brand" href="#">
						<Image src={logo} style={imageStyle} width={100} alt="maxx capital"></Image>
					</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<svg className="navbar-toggler-icon" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor"  viewBox="0 0 16 16">
							<path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
						</svg>
					</button>
					<div className="collapse navbar-collapse" style={mystyle} id="navbarNav">
						<ul className="navbar-nav">
							{links.map(l => { return (<li className="nav-item" key={l.href}>
								<Link className={`nav-link ${pathname == l.href ? "active" : ""}`} aria-current="page" href={l.href}>{l.title}</Link>
							</li>)})}
														{/* add a login button */}
								
							
						</ul>
					</div>
				</div>
			</nav>
        </header>
    )
}

export default Header