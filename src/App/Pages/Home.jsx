import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import home from "../../assets/web1.webp";
import service1 from "../../assets/service1.webp"
import service2 from "../../assets/service2.webp"
import service3 from "../../assets/service3.jpg"
import service4 from "../../assets/service4.webp"
import service5 from "../../assets/service5.webp"
import service6 from "../../assets/service6.webp"
import { NavLink } from "react-router-dom";
import Whychose from "../Component/Whychose";
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
    });
  }, []);


  const services = [
    {
      title: "Technology & Product Development",
      desc: "Target product definition, formulation strategy, technology evaluation, and execution with qualified development and manufacturing partners.",
      img:service1,
    },
    {
      title: "Clinical & R&D Advisory",
      desc: "Clinical strategy, evidence planning, study design, CRO identification, and alignment of data generation with commercial objectives.",
img:service2    },
    {
      title: "Consulting & Business Advisory",
      desc: "Portfolio strategy, market prioritisation, pricing considerations, partnership models, and go-to-market decision support.",
img:service3   },
    {
      title: "Network & Commercial Development",
      desc: "Identification, evaluation, and structuring of relationships with distributors, CMOs, CROs, service providers, and key commercial partners.",
      img:service4
    },
    {
      title: "Technology Scouting & Licensing",
      desc: "In-licensing, out-licensing, technology due diligence, and structured evaluation of external innovation opportunities.",
img:service5    },
    {
      title: "IP & Patent Support (via specialist partners)",
      desc: "Patent landscape reviews, freedom-to-operate assessments, and IP strategy support through trusted specialist partners.",
img:service6  },
  ];

  return (
    <div style={{ backgroundColor: "#F4FAFF", marginTop: "70px" }} >

      {/* HERO SECTION */}
      <section className="py-5 " >
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6" data-aos="fade-right">
              <h1 className="fw-bold display-6 text-primary">
                Technology & Execution Partner for Health and Nutraceutical Innovators
              </h1>

              <p className="fs-5 text-secondary mt-4">
                Zen Pharma Labs (ZPL) supports pharmaceutical, nutraceutical, health & wellness,
                and pet health organisations by combining strategic advisory with a curated network
                of experts across R&D, clinical, regulatory, and commercial functions.
              </p>

              <p className="text-secondary mt-3">
                We help organisations move from idea to impact — efficiently, transparently,
                and with execution clarity across India, Asia, and other key markets.
              </p>

              <div className="d-flex gap-3 mt-5 flex-wrap">
                <button className="btn btn-primary btn-lg px-4">
                    <NavLink to="/contact"  style={{textDecoration:"none",color:"white"}}>
                  Schedule a Conversation
                  </NavLink>
                </button>
                <button className="btn btn-outline-primary btn-lg px-4">
                    <NavLink to="/services"  style={{textDecoration:"none"}}>
                  Explore Our Services
                  </NavLink>
                </button>
              </div>
            </div>

            <div className="col-lg-6 text-center" data-aos="fade-left">
           <img
  src={home}
  alt="Zen Pharma Labs – Technology & Execution Partner"
  className="img-fluid my-3  rounded-4 "
  style={{
    maxHeight: "420px",
    objectFit: "cover",
    width: "100%",
  }}
/>
            </div>

          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 text-center" data-aos="fade-up">
              <p className="fs-4 text-secondary lead">
                ZPL operates as an extension of your team — not as a single-vendor provider.
                For each engagement, we assemble the right combination of technologists,
                formulators, clinicians, regulatory advisors, and commercial strategists
                to deliver practical, executable programmes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-5">
        <div className="container">

          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold display-6">Our Core Capabilities</h2>
            <p className="text-secondary fs-5">
              Integrated advisory and execution support across the product lifecycle
            </p>
          </div>

          <div className="row g-5">
            {services.map((item, index) => (
              <div
                key={index}
                className="col-md-6 col-lg-4"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="card h-100 border-0 shadow-sm">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="card-img-top"
                    style={{ height: "220px", objectFit: "cover" }}
                  />
                  <div className="card-body p-4">
                    <h5 className="fw-semibold">{item.title}</h5>
                    <p className="text-secondary mt-3">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHY ZPL */}
<Whychose/>

      {/* CTA */}
      <section className="py-5">
        <div className="container">
          <div
            className="text-center p-5 rounded-4 shadow-lg"
            style={{ backgroundColor: "#2F6FED", color: "#fff" }}
            data-aos="zoom-in"
          >
            <h2 className="fw-bold display-6 mb-4">
              Let’s Discuss Your Next Initiative
            </h2>
            <p className="fs-5 mb-5">
              Speak with Zen Pharma Labs to explore how our advisory and execution model
              can support your growth and innovation goals.
            </p>
            
            <button className="btn btn-light btn-lg fw-semibold px-5">
              <NavLink to="/contact"  style={{textDecoration:"none"}}>
              Schedule a Conversation
              </NavLink>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home
