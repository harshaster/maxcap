import Link from "next/link";

export default function BuilderDash(){
    return(
        <div className="container">
            <div className="row justify-content-center py-3">
                <div className="col-12 col-lg-6 col-xl-3">
                    <Link href="/finance" className="btn btn-sm btn-primary">Finance your Project</Link>
                </div>
            </div>
           
        </div>
    )
}