'use client'
import './style.css'
import Image from 'next/image'
import img2 from '@/img/hero.jpeg'

export default function Property({params}) {
    
    let data = {
        title : 'Premium penthouse in central Barcelona with panoramic views',
        images : ['@/img/img1.jpeg', '@/img/img1.jpeg', '@/img/img1.jpeg', '@/img/img1.jpeg'],
        type: 'A flat',
        areaMsqr : '224',
        location : 'Barecelona I.'
    }    
    return (
    <main>
        <div className="container">
            <h1 className='py-4 fancy-font'>{data.title}</h1>
            <div className='row justify-content-between g-4'>
                <div className='col-12 col-lg-8 px-3'>
                    <div id="carouselExampleFade" className="carousel slide carousel-fade">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner rounded">
                            {data.images.map((img, index) => (
                                <div className={`carousel-item ${index == 0 ? 'active' : ''}`} key={index}>
                                    <img src={img2.src} alt={data.title} className='img-fluid'/>
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className='d-flex justify-content-evenly my-3 p-2 bg-white rounded'>
                        <div className='col-3'>
                            <h3 className='fancy-font'>Property Type</h3>
                            <p>{data.type}</p>
                        </div>
                        <div className='col-3'>
                            <h3 className='fancy-font'>Area</h3>
                            <p>{data.areaMsqr} m<sup>2</sup></p>
                        </div>
                        <div className='col-3'>
                            <h3 className='fancy-font'>Location</h3>
                            <p>{data.location}</p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center my-3 px-5 py-3 bg-white rounded'>
                        <div className='col-12 col-lg-4 col-xl-3'>
                            <span style={{fontSize : '90%'}}>Mortgage since</span>
                            <h5 className='fancy-font fw-bold'>356$/month</h5>
                        </div>
                        <div className='col-12 col-lg-4 col-xl-3'>
                            <button className='btn btn-primary rounded-1 w-100'>Get a mortgage</button>
                        </div>
                    </div>
                    <p className='mt-3 lh-lg p-4 bg-white rounded'>
                        FEDORS GROUP offers an exclusive FOR SALE elegant large 5-room apartment on Vincent Hložník Street in the Condominium Renaissance residential complex.
                        Thanks to its unique location, the property has access to a large Japanese garden with an area of 35 m2, which can be accessed directly from the bedroom. The front of the apartment is at the height of the third floor, so the terrace is located just above the treetops, which gives the apartment a unique atmosphere. Overall, the apartment has a direct view of the Danube River and the surrounding forests.
                        The apartment offers extraordinary comfort, has a first-class interior from the leading architectural office Cakov Makara and equipment from renowned world furniture manufacturers. The overall atmosphere of the apartment is completed
                    </p>
                </div>
                <div className='col-12 col-lg-4'>
                    <div className='mb-2 px-2 bg-white'>
                        <h3 className='fancy-font p-2'>Ameneties</h3>
                        <hr/>
                        <p className='text-center'>
                            <span className='text-secondary'>No details available</span>
                        </p>
                    </div>
                    <div className='mb-2 px-2 bg-white'>
                        <h3 className='fancy-font p-2'>Contact Us</h3>
                        <hr/>
                        <div className="p-3 bg-light">
                            <div className='mb-3'>
                                <label for="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className='mb-3 '>
                                <label for="full-name" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="full-name"/>
                            </div>
                            <div className='mb-3 '>
                                <label for="phone" className="form-label">Email address</label>
                                <input type="tel" className="form-control" id="phone"/>
                            </div>
                            <div className='mb-3 '>
                                <label for="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" rows="5"></textarea>
                            </div>
                            <div className='mb-3 '>
                                <button className='btn btn-primary rounded-1 w-100'>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    )
}