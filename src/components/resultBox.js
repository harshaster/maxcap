"use client"
import { useRouter } from 'next/navigation'
import Link from 'next/link';

export default function ResultBox(props){
    const router = useRouter();
    return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 p-2" onClick={() => router.push('/catalog/'+props.property.id)} style={{cursor : 'pointer'}}>
            <Link href={'/catalog/'+props.property.id} className="card text-decoration-none">
                <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.property.title}</h5>
                    <p className="card-text text-truncate">{props.property.description}</p>
                    <p className="card-text">{props.property.location}</p>
                    <p className="card-text">Rs. {props.property.price}</p>
                    <a href={'/catalog/'+props.property.id} className="btn btn-primary w-100">View</a>
                </div>
            </Link>
        </div>
    )
}