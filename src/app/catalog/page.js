"use client";
import ResultBox from "@/components/resultBox";
import { useState } from "react";
export default function Catalog() {
  const [properties, setproperties] = useState([
    {
      title: "Property Title",
      id: "id1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero nec vehicula tincidunt, nisi eros aliquam velit, a ultrices nunc magna nec arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed sit amet diam eget lacus viverra ultrices. In hac habitasse platea dictumst. Sed vitae risus at nunc aliquet euismod. Nullam nec semper nisl.",
      price: 100000,
      location: "Location1",
    },
    {
      title: "Property Title",
      id: "id2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero nec vehicula tincidunt, nisi eros aliquam velit, a ultrices nunc magna nec arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed sit amet diam eget lacus viverra ultrices. In hac habitasse platea dictumst. Sed vitae risus at nunc aliquet euismod. Nullam nec semper nisl.",
      price: 500000,
      location: "Location2",
    },
    {
      title: "Property Title",
      id: "id3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero nec vehicula tincidunt, nisi eros aliquam velit, a ultrices nunc magna nec arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed sit amet diam eget lacus viverra ultrices. In hac habitasse platea dictumst. Sed vitae risus at nunc aliquet euismod. Nullam nec semper nisl.",
      price: 100000,
      location: "Location3",
    },
    {
      title: "Property Title",
      id: "id4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero nec vehicula tincidunt, nisi eros aliquam velit, a ultrices nunc magna nec arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed sit amet diam eget lacus viverra ultrices. In hac habitasse platea dictumst. Sed vitae risus at nunc aliquet euismod. Nullam nec semper nisl.",
      price: 500000,
      location: "Location4",
    },
    {
      title: "Property Title",
      id: "id5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero nec vehicula tincidunt, nisi eros aliquam velit, a ultrices nunc magna nec arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed sit amet diam eget lacus viverra ultrices. In hac habitasse platea dictumst. Sed vitae risus at nunc aliquet euismod. Nullam nec semper nisl.",
      price: 100000,
      location: "Location5",
    },
    {
      title: "Property Title",
      id: "id6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero nec vehicula tincidunt, nisi eros aliquam velit, a ultrices nun",
      price: 500000,
      location: "Location6",
    },
  ]);
  const uniqueLocations = [
    ...new Set(properties.map((property) => property.location)),
  ];
  const [selectedLocation, setSelectedLocation] = useState(null);
  const filteredProperties = selectedLocation
    ? properties.filter((p) => p.location === selectedLocation)
    : properties;
    const handleLocationChange = (event) => {
        
        setSelectedLocation(event.target.value);
      };

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="py-4 fancy-font">Catalog</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-3 col-lg-2 px-2">
            <select
              className="rounded-5 border shadow form-select"
              aria-label="Sort By"
              defaultValue={null}
            >
              <option>Sort by</option>
              <option value="1">Price</option>
              <option value="2">Name</option>
              <option value="3">Date</option>
            </select>
          </div>
          <div className="col-3 col-lg-2 px-2">
            <select
              className="rounded-5 border shadow form-select"
              aria-label="Location"
              defaultValue={null}
              onChange={handleLocationChange}
            >
              <option>Location</option>
              {properties.map((p) => (
                <option key={p.id} value={p.location}>
                  {p.location}
                </option>
              ))}
            </select>
          </div>
          <div className="col-3 col-lg-2 px-2">
            <select
              className="rounded-5 border shadow form-select"
              aria-label="Price Range"
              defaultValue={null}
            >
              <option>Price Range</option>
              <option value="1">Price</option>
              <option value="2">Name</option>
              <option value="3">Date</option>
            </select>
          </div>
        </div>
        <div className="row my-4">
          {filteredProperties.map((p, i) => (
            <ResultBox
              property={{
                title: p.title,
                id: p.id,
                description: p.description,
                price: p.price,
                location: p.location,
              }}
              key={i}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
