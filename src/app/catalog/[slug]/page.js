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
                <div className='col-12 col-lg-8'>
                    <div id="carouselExampleFade" className="carousel slide carousel-fade">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
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
                    <div className='row justify-content-evenly my-3 p-2 bg-white'>
                        <div className='col-4'>
                            <h3 className='fancy-font'>Property Type</h3>
                            <p className='text-secondary'>{data.type}</p>
                        </div>
                        <div className='col-4'>
                            <h3 className='fancy-font'>Area</h3>
                            <p className='text-secondary'>{data.areaMsqr} m<sup>2</sup></p>
                        </div>
                        <div className='col-4'>
                            <h3 className='fancy-font'>Location</h3>
                            <p className='text-secondary'>{data.location}</p>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-4 bg-white'>
                    <h3 className='fancy-font p-2 pb-0'>Ameneties</h3>
                    <hr/>
                </div>
            </div>
        </div>
    </main>
    )
}