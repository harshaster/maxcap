import ResultBox from "@/components/resultBox"

export default function Catalog(){
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className='py-4 fancy-font'>Catalog</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 col-lg-2 px-2">
                        <select className="rounded-5 border shadow form-select" aria-label="Sort By" defaultValue={null}>
                            <option>Sort by</option>
                            <option value="1">Price</option>
                            <option value="2">Name</option>
                            <option value="3">Date</option>
                        </select>
                    </div>
                    <div className="col-3 col-lg-2 px-2">
                        <select className="rounded-5 border shadow form-select" aria-label="Location" defaultValue={null}>
                            <option>Location</option>
                            <option value="1">Price</option>
                            <option value="2">Name</option>
                            <option value="3">Date</option>
                        </select>
                    </div>
                    <div className="col-3 col-lg-2 px-2">
                        <select className="rounded-5 border shadow form-select" aria-label="Price Range" defaultValue={null}>
                            <option>Price Range</option>
                            <option value="1">Price</option>
                            <option value="2">Name</option>
                            <option value="3">Date</option>
                        </select>
                    </div>
                </div>
                <div className="row my-4">
                    {Array(12).fill().map((_, i) => <ResultBox property={{
                        title: "Property Title",
                        id : 'abracadabra',
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero nec vehicula tincidunt, nisi eros aliquam velit, a ultrices nunc magna nec arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed sit amet diam eget lacus viverra ultrices. In hac habitasse platea dictumst. Sed vitae risus at nunc aliquet euismod. Nullam nec semper nisl.",
                    }} key={i} />)}
                </div>
            </div>
        </main>
    )
}

