import style from "./page.module.css";
import "./page.module.css";
import hero from "@/img/hero.jpeg";
import img1 from "@/img/img1.jpeg";
import Image from "next/image";
import house from "@/img/house.svg";
import money from "@/img/money.svg";

export default function Home() {
  return (
    <main>
      <div
        className={style.hero + " d-flex align-items-center"}
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.20) 100%), url(${hero.src})`,
          marginTop: "-80px",
        }}
      >
        <div
          className={`container d-flex justify-content-start ${style.hero_label}`}
        >
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
            <div className="row justify-content-between">
              <div className="col-12 col-lg-3">
                <select
                  className="form-select"
                  defaultValue={null}
                  aria-label="Select Property Location"
                >
                  <option>Location</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-12 col-lg-3">
                <select
                  className="form-select"
                  defaultValue={null}
                  aria-label="Select Property Category"
                >
                  <option>Category</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-12 col-lg-3">
                <select
                  className="form-select"
                  defaultValue={null}
                  aria-label="Select Property Type"
                >
                  <option>Property Type</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-12 col-lg-3">
                <button className="btn btn-primary rounded-3 w-100">
                  Submit
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
                />
                <button
                  className="btn btn-outline-primary text-white"
                  type="button"
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
