import './page.css';
import hero from "@/img/hero.jpeg";

export default function () {
    return (
        <main>
            <div className={' d-flex align-items-center hero'} style={
                {
                    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.20) 100%), url(${hero.src})`
                }
            }>
                <div className='container d-flex justify-content-start hero_label'>
                    <div className="row">
                        <div className="col-12 col-lg-9 col-xl-7">
                            <h1 className='hero_text'>About Us</h1>
                            <p>Welcome to Maxx Capital, where financial excellence meets innovative solutions! As your dedicated finance consultancy firm, we're here to transform your projects into success stories. With a commitment to expertise and personalized solutions, Maxx Capital is your trusted partner for navigating the complexities of finance. Let's build your financial foundation together and maximize the potential of your ventures.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex align-items-center justify-content-around hero'>
                <div className='box rounded'>
                    <div className='d-flex justify-content-center align-items-center p-3'>
                        <div className='col-12 col-lg-9 col-xl-7'>
                            <h1 className='text-nowrap'>Our Vision</h1>
                            <p>At the heart of our vision is the commitment to seamlessly facilitate transactions, creating a bridge between clients and banks. We strive to nurture enduring relationships that withstand the test of time, built on trust and reliability. Our overarching goal is to provide our clients with unparalleled financial solutions, meticulously navigating the complex landscape to secure and tailor the best deals. With precision and unwavering dedication, we aim to be the catalyst for our clients' sustained success in their financial endeavors.</p>
                        </div>
                    </div>
                </div>
                <div className='box rounded'>
                    <div className='d-flex justify-content-center p-3'>
                        <div className='col-12 col-lg-9 col-xl-7'>
                            <h1 className='text-nowrap'>Our Mission</h1>
                            <p>Our mission is driven by a commitment to elevate our business into a nationwide entity, rooted in moralistic values of integrity and transparency. We aspire to enhance our services, fostering a culture of excellence and continuous improvement. Through strategic initiatives and unwavering dedication, we aim not only to expand our reach but to do so with a steadfast commitment to ethical practices. By establishing ourselves as a pivotal player in the national financial landscape, we strive to consistently deliver superior value to our clients while upholding the highest moral standards.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex align-items-center justify-content-around hero'>
                <div>
                    <div className='d-flex justify-content-center align-items-center p-3'>
                        <div className='col-12 col-lg-9 col-xl-7'>
                            <h1 className='text-nowrap'>Company History</h1>
                            <p>Established in 2020 under the visionary leadership of Mr. Shailesh Mishra, Maxx
                                Capital stands as a pioneering force in real estate project funding consultancy. With a
                                rich background spanning two decades in banking and finance, Mr. Mishra envisioned
                                a consultancy dedicated to simplifying the complex landscape of securing funds for
                                real estate ventures. Our mission is to streamline the financing process while
                                exhibiting unwavering dedication in negotiating deals that serve the best interests of
                                both financial institutions and our clients.
                                At Maxx Capital, we leverage extensive expertise to deliver customized solutions for
                                each real estate project, addressing specific client needs. Whether navigating
                                intricate banking procedures or ensuring favorable outcomes, our team takes pride in
                                tailoring financial solutions for optimal results. Partner with Maxx Capital for a
                                dedicated ally on your financial journey, committed to transforming challenges into
                                opportunities and making real estate project funding more accessible and
                                advantageous for all stakeholders.
                                Since our establishment in 2020, Maxx Capital has been a leader in providing
                                strategic financial solutions under Mr. Shailesh Mishra's visionary leadership.
                                Specializing in expert guidance and advisory services tailored to unique client needs,
                                we navigate the complexities of private investment funding in builder projects and
                                orchestrate comprehensive financial packages, including working capital loans,
                                corporate finance, and structured finance. Beyond conventional services, our
                                dedicated team excels in crafting innovative solutions for startups, handling complex
                                restructuring and refinance cases, and providing expert insights into insolvency and
                                bankruptcy services. Maxx Capital is your reliable partner for private equity debt
                                syndication, investment banking, merger and acquisition services, and a spectrum of
                                banking and NBFC finance solutions. Welcome to a consultancy where your
                                aspirations meet expert financial guidance
                                – welcome to Maxx Capital</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}