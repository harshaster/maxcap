"use client";
import ResultBox from "@/components/resultBox";
import { useState } from "react";
import Slider from "@mui/material/Slider";

export default function Catalog() {
  const [properties, setproperties] = useState([
    {
      title: "Property Title",
      id: "id1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero nec vehicula tincidunt, nisi eros aliquam velit, a ultrices nunc magna nec arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed sit amet diam eget lacus viverra ultrices. In hac habitasse platea dictumst. Sed vitae risus at nunc aliquet euismod. Nullam nec semper nisl.",
      price: 10000,
      location: "Location1",
    },
    {
      title: "Property Title",
      id: "id2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero nec vehicula tincidunt, nisi eros aliquam velit, a ultrices nunc magna nec arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed sit amet diam eget lacus viverra ultrices. In hac habitasse platea dictumst. Sed vitae risus at nunc aliquet euismod. Nullam nec semper nisl.",
      price: 20000,
      location: "Location2",
    },
    {
      title: "Property Title",
      id: "id3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero nec vehicula tincidunt, nisi eros aliquam velit, a ultrices nunc magna nec arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed sit amet diam eget lacus viverra ultrices. In hac habitasse platea dictumst. Sed vitae risus at nunc aliquet euismod. Nullam nec semper nisl.",
      price: 30000,
      location: "Location2",
    },
    {
      title: "Property Title",
      id: "id4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero nec vehicula tincidunt, nisi eros aliquam velit, a ultrices nunc magna nec arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed sit amet diam eget lacus viverra ultrices. In hac habitasse platea dictumst. Sed vitae risus at nunc aliquet euismod. Nullam nec semper nisl.",
      price: 40000,
      location: "Location2",
    },
    {
      title: "Property Title",
      id: "id5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero nec vehicula tincidunt, nisi eros aliquam velit, a ultrices nunc magna nec arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed sit amet diam eget lacus viverra ultrices. In hac habitasse platea dictumst. Sed vitae risus at nunc aliquet euismod. Nullam nec semper nisl.",
      price: 50000,
      location: "Location5",
    },
    {
      title: "Property Title",
      id: "id6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero nec vehicula tincidunt, nisi eros aliquam velit, a ultrices nun",
      price: 60000,
      location: "Location6",
    },
  ]);
  const [selectedValue, setSelectedValue] = useState(50000);
  const [selectedPriceRange, setSelectedPriceRange] = useState([10000, 60000]);

  const uniqueLocations = [
    ...new Set(properties.map((property) => property.location)),
  ];
  const [selectedLocation, setSelectedLocation] = useState(null);

  const filteredLocationProperties = selectedLocation
    ? properties.filter((p) => p.location === selectedLocation)
    : properties;

  const filteredSliderProperties = properties.filter((property) => {
    return (
      (selectedLocation === "All Locations" ||
        property.location === selectedLocation) &&
      property.price >= selectedPriceRange[0] &&
      property.price <= selectedPriceRange[1]
    );
  });

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleSliderChange = (event, newValue) => {
    setSelectedPriceRange(newValue);
  };

  const valuetext = (value) => {
    return `${value} lacs`;
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
              <option>All Locations</option>
              {[...new Set(properties.map((p) => p.location))].map(
                (location, index) => (
                  <option key={index} value={location}>
                    {location}
                  </option>
                )
              )}
            </select>
          </div>
          <div className="col-3 col-lg-2 px-2">
            <Slider
              aria-label="Property Price"
              value={selectedPriceRange}
              valueLabelDisplay="auto"
              onChange={handleSliderChange}
              step={10000}
              marks
              min={10000}
              max={60000}
            />
          </div>
        </div>
        <div className="row my-4">
          {selectedLocation === "All Locations"
            ? filteredSliderProperties
                .filter(
                  (result) =>
                    result.price >= selectedPriceRange[0] &&
                    result.price <= selectedPriceRange[1]
                )
                .map((p, i) => <ResultBox property={p} key={i} />)
            : filteredLocationProperties
                .filter(
                  (result) =>
                    result.price >= selectedPriceRange[0] &&
                    result.price <= selectedPriceRange[1]
                )
                .map((p, i) => <ResultBox property={p} key={i} />)}
        </div>
      </div>
    </main>
  );
}
