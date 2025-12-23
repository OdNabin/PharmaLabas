import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Images
import img1 from "../../assets/service1.jpg";
import img2 from "../../assets/service2.jpg";
import img3 from "../../assets/service3.jpg";
import img4 from "../../assets/service4.jpg";
import img5 from "../../assets/service5.jpg";
import img6 from "../../assets/service6.jpg";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const services = [
    {
      title: "R&D & Process Scale-Up",
      intro: "We help clients turn ideas into stable, scalable products.",
      bullets: [
        "Formulation support and optimisation.",
        "Lab-to-plant scale-up, process design and troubleshooting.",
        "Working with analytical and manufacturing experts to keep timelines realistic.",
      ],
      image: img1,
    },
    {
      title: "Clinical & Evidence Support",
      intro: "We shape evidence plans that match budgets and regulatory needs.",
      bullets: [
        "Study strategy and protocol input with clinical experts.",
        "Identifying suitable CROs and sites and reviewing proposals.",
        "Helping convert results into claims, labels and sales stories.",
      ],
      image: img2,
    },
    {
      title: "Supply Chain & Partner Development",
      intro:
        "We build reliable supply chains without trial-and-error vendor selection.",
      bullets: [
        "Shortlisting and vetting CMOs, CROs, labs and ingredient suppliers.",
        "Technical and commercial due diligence.",
        "Ongoing performance and relationship monitoring.",
      ],
      image: img3,
    },
    {
      title: "Technology Scouting, In-/Out-Licensing & Vetting",
      intro:
        "We help you find the right technologies to bring in – or partners to take yours out.",
      bullets: [
        "Scouting platforms and ingredients aligned to your portfolio.",
        "Technical and commercial vetting of opportunities.",
        "Support in deal strategy and partner negotiation alongside your legal team.",
      ],
      image: img4,
    },
    {
      title: "Market Research & Landscape Analysis",
      intro:
        "We give R&D and business teams a clear view of where to play and how to win.",
      bullets: [
        "Market sizing and competitive mapping.",
        "Pipeline and product landscape analysis.",
        "Identifying white spaces and realistic positioning territories.",
      ],
      image: img5,
    },
    {
      title: "Patent & IP Support",
      intro:
        "We help you understand the IP landscape before heavy investment decisions.",
      bullets: [
        "Working with patent attorneys and IP search firms.",
        "High-level FTO and novelty checks.",
        "Input on where further innovation or differentiation is required.",
      ],
      image: img6,
    },
  ];

  return (
    <div style={{ marginTop: "70px" }}>
      {/* INTRO */}
      <section className="py-5 bg-white">
        <div className="container text-center" data-aos="fade-up">
          <h1 className="fw-bold display-6 mb-4">Our Services</h1>
          <p className="fs-5 text-secondary col-lg-9 mx-auto">
            We design and execute programmes across R&D, scale-up, clinical,
            supply chain, technology access and market intelligence – always
            using the right mix of experts for each brief.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      {services.map((service, index) => {
        const isReverse = index % 2 !== 0;
        const hasBg = index % 2 === 0; // ✅ background on 1st, 3rd, 5th…

        return (
          <section
            key={index}
            className="py-5"
            style={{
              backgroundColor: hasBg ? "#F4FAFF" : "#ffffff",
            }}
          >
            <div className="container">
              <div
                className={`row align-items-center g-5 ${
                  isReverse ? "flex-row-reverse" : ""
                }`}
              >
                {/* CONTENT */}
                <div
                  className="col-lg-6"
                  data-aos={isReverse ? "fade-left" : "fade-right"}
                >
                  <h2 className="fw-bold mb-3">{service.title}</h2>
                  <p className="text-secondary fs-5">{service.intro}</p>

                  <ul className="mt-4">
                    {service.bullets.map((item, i) => (
                      <li key={i} className="mb-2 text-secondary">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#"
                    className="text-primary fw-semibold text-decoration-none d-inline-block mt-3"
                  >
                    Learn more →
                  </a>
                </div>

                {/* IMAGE */}
                <div
                  className="col-lg-6 text-center"
                  data-aos="zoom-in"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="img-fluid rounded-4 shadow-lg"
                    style={{
                      maxHeight: "420px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Services;
