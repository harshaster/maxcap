import logo from '@/img/logo.png'
import Image from 'next/image'
import img1 from '@/img/img1.jpeg'

export default function Footer (){
    return (
        <footer>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12 col-lg-3 pe-2">
                        <Image src={logo} alt="logo" width='auto' height={50}></Image>
                        <p className='text-secondary' style={{fontSize : '80%'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                    <div className='col-12 col-lg-5 pe-2'>
                        <h5>Recent Properties</h5>
                        <ul style={{listStyleType : 'none', padding : 0}}>
                            {[1,2,3].map((item, index) => (
                                <li className='my-2 d-flex justify-content-start align-items-center' key={index}>
                                    <Image src={img1} alt="img1" width={50} height={50} style={{objectFit : 'cover'}}></Image>
                                    <div className='ms-2' style={{fontSize : '80%'}}>
                                        <p className='text-dark mb-1'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            <br/>
                                            <span className='text-primary'>$3000</span>
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='col-12 col-lg-4 pe-2' style={{fontSize: '80%'}}>
                        <h5>Contact Info</h5>
                        <p className='lh-3'>
                            <span>2972 Westheimer Rd. Santa Ana, Illinois 85486</span>
                        </p>
                        <ul style={{listStyle : 'none', margin : 0, padding:0}}>
                            <li className='my-2'>
                                <span className='text-secondary'>Phone : </span>
                                <span>+1 234 5678 910</span>
                            </li>
                            <li className='my-2'>
                                <span className='text-secondary'>Email : </span>
                                <span>
                                    <a href="mailto:abc@xyz.com">abc@xyz.com</a>
                                </span>
                            </li>   
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}