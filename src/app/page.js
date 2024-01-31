"use client";
import { useState } from "react";
import { subscribeToNewsLetter } from "@/apis";
import swal from "sweetalert";

import style from "./page.module.css";
import "./page.module.css";
import hero from "@/img/hero.jpeg";
import img1 from "@/img/img1.jpeg";
import Image from "next/image";
import house from "@/img/house.svg";
import money from "@/img/money.svg";
import Slider from "@mui/material/Slider";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
	let [nlEmail, setNlEmail] = useState("");
	function subscribe() {
		if (nlEmail === "") {
			swal("Error", "Please enter your email", "error");
			return;
		}
		subscribeToNewsLetter(nlEmail)
			.then((res) => {
				if (!res) {
					swal("Success", "You have subscribed to our newsletter", "success");
				} else {
					swal("You have already subscribed to our newsletter");
				}
			})
	}
  let properties = [
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
  ];
  const router = useRouter();
  const [selectedPriceRange, setSelectedPriceRange] = useState([10000, 60000]);
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleSliderChange = (event, newValue) => {
    setSelectedPriceRange(newValue);
  };

  const valuetext = (value) => {
    return `${value} lacs`;
  };
  // `/catalog?location=${selectedLocation}&minPrice=${selectedPriceRange[0]}&maxPrice=${selectedPriceRange[1]}`
  const handleSubmit = () => {
    router.push(
      `/catalog?location=${selectedLocation}&minPrice=${selectedPriceRange[0]}&maxPrice=${selectedPriceRange[1]}`
    );
  };

  
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const location = urlParams.get("location");
    const minPrice = urlParams.get("minPrice");
    const maxPrice = urlParams.get("maxPrice");
    setSelectedLocation(location || null);
    setSelectedPriceRange([
      parseInt(minPrice) || 10000,
      parseInt(maxPrice) || 60000,
    ]);
  }, []);
	return (
		<main>
			<div
				className={style.hero + " d-flex align-items-center"}
				style={{
					background: `linear-gradient(180deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.20) 100%), url(${hero.src})`,
					marginTop: "-80px",
				}}
			>
				<div className={`container d-flex justify-content-start ${style.hero_label}`}>
					<div className="row">
						<div className="col-12 col-lg-9 col-xl-7">
							<span>Discover unparalleled</span>
							<h3 className={style.hero_text}>Real Estate Deals</h3>

              <p>
                {" "}
                Let MaxxCapital be your partner in navigating the intricate
                world of finance with our exclusive deals, transforming your
                projects into enduring success stories .
              </p>
              <button className="btn btn-primary rounded-3 px-3">
                More Details
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container bg-white rounded shadow"
        style={{
          marginTop: "-60px",
          position: "relative",
        }}
      >
        <div className="row">
          <div className="col-12 text-primary py-4 px-4">Find your Home</div>
          <div className="col-12 pb-4">
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
                  getAriaLabel={valuetext}
                  value={selectedPriceRange}
                  valueLabelDisplay="auto"
                  onChange={handleSliderChange}
                  step={10000}
                  marks
                  min={10000}
                  max={60000}
                />
              </div>
              {/*  submit button */}
              <div className="col-3 col-lg-2 px-2">
                <button
                  className="btn btn-primary w-100"
                  onClick={handleSubmit}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row justify-content-center align-items-center p-4">
          <div className="col-12 col-lg-7" style={{ objectFit: "contain" }}>
            <Image
              className="rounded shadow"
              src={img1}
              style={{ width: "100%", height: "auto" }}
              alt="image"
            ></Image>
          </div>
          <div className="col-12 col-lg-4">
            <h1 className="text-primary display-4 fw-bold mt-3 mt-lg-0">
              ABOUT US
            </h1>
            <h4 className="display-6">
              We're on a Mission to Change The Real Estate Industry.
            </h4>
            <p className="text-secondary my-2" style={{ fontSize: "90%" }}>
              {" "}
              Our unwavering commitment is to revolutionize real estate funding,
              making it more accessible and advantageous for all stakeholders by
              leveraging extensive expertise to tailor financial solutions and
              transform challenges into opportunities for every project we
              undertake.
            </p>
            <div className="row justify-content-between">
              <div className="col-12 col-lg-6 p-2">
                <Image className="p-2 ps-0" src={house} alt=""></Image>
                <h6 className="my-1">Modern Villa</h6>
                <p className="text-secondary" style={{ fontSize: "80%" }}>
                  When unknown printer took galley of type and scrambled.
                </p>
                <p className="text-end pe-3">
                  <a
                    style={{ fontSize: "80%" }}
                    href="#"
                    className="text-decoration-none text-primary"
                  >
                    &rarr; Read More
                  </a>
                </p>
              </div>
              <div className="col-12 col-lg-6 p-2">
                <Image className="p-2 ps-0" src={money} alt=""></Image>
                <h6 className="my-1">Secure Payment</h6>
                <p className="text-secondary" style={{ fontSize: "80%" }}>
                  When unknown printer took galley of type and scrambled.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 text-center">
            <h1 className="fancy-font text-primary my-2">
              Featured Properties
            </h1>
            <p className="text-secondary my-2" style={{ fontSize: "90%" }}>
              "Explore Excellence: Uncover Your Dream Property in Our Featured
              Collection."
            </p>
          </div>
        </div>

				<div className="text-center">
					<div className="row">
						<div className="col-3">
							<Image
								className="rounded shadow"
								src={img1}
								style={{
									objectFit: "cover",
									width: "30vw",
									height: "40vh",
								}}
								alt=""
							></Image>
						</div>
						<div className="col-8">
							<div className="d-flex justify-content-center align-items-center row row-cols-1 gap-2">
								<div className="col-5">
									<Image
										className="rounded shadow"
										src={img1}
										style={{
											objectFit: "cover",
											width: "20vw",
											height: "18vh",
										}}
										alt=""
									></Image>
								</div>
								<div className="col-5">
									<Image
										className="rounded shadow"
										src={img1}
										style={{
											objectFit: "cover",
											width: "20vw",
											height: "18vh",
										}}
										alt=""
									></Image>
								</div>
								<div className="col-4">
									<Image
										className="rounded shadow"
										src={img1}
										style={{
											objectFit: "cover",
											width: "20vw",
											height: "18vh",
										}}
										alt=""
									></Image>
								</div>
								<div className="col-4">
									<Image
										className="rounded shadow"
										src={img1}
										style={{
											objectFit: "cover",
											width: "20vw",
											height: "18vh",
										}}
										alt=""
									></Image>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-100 my-5 bg-primary" style={{ overflow: "hidden" }}>
				<div className="container">
					<div className="row justify-content-center py-3 align-items-center">
						<div
							className="d-none d-lg-block col-lg-6"
							style={{ maxHeight: "400px" }}
						>
							<div
								style={{
									width: "300px",
									height: "300px",
									dropShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
									transform: "rotate(35deg)",
								}}
								className="shadow"
							></div>
							<div
								style={{
									width: "300px",
									height: "300px",
									transform: "rotate(55deg) translate(-120px, -120px)",
								}}
								className="shadow"
							></div>
						</div>
						<div className="col-12 col-lg-6 py-4 text-white p-5">
							<h2 className="fancy-font">Don't Miss a Thing!</h2>
							<p style={{ fontSize: "70%" }}>
								Subscribe with Email and loads of interesting news will be sent
								to you on a daily basis.
							</p>
							<div className="input-group mb-3 shadow">
								<input
									type="text"
									className="form-control"
									placeholder="Your email here"
									aria-label="Recipient's username"
									aria-describedby="button-addon2"
									value={nlEmail}
									onChange={(e) => setNlEmail(e.target.value)}
								/>
								<button
									className="btn btn-outline-primary text-white"
									type="button"
									onClick={subscribe}
									id="button-addon2"
								>
									Subscribe
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
