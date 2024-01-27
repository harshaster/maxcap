import Link from "next/link";

export default function CustomerDash(){
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <Link href="/homeloan" className="btn btn-sm btn-primary">Apply for Loan</Link>
                </div>
            </div>
        </div>
    )
}