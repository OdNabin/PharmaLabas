import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Images (replace with real ones later)
import about1 from "../../assets/about.webp";
import about2 from "../../assets/service1.jpg";
import about3 from "../../assets/about3.webp";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div style={{ marginTop: "70px",overflowX:"hidden" }}>
      {/* INTRO */}
      <section className="py-5 bg-white">
        <div className="container text-center" data-aos="fade-up">
          <h1 className="fw-bold display-6 mb-4">About Zen Pharma Labs</h1>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-5" style={{ backgroundColor: "#F4FAFF" }}>
        <div className="container">
          <div className="row align-items-center g-5">
            {/* CONTENT */}
            <div className="col-lg-6" data-aos="fade-right">
              <h2 className="fw-bold mb-4">Who We Are</h2>
              <p className="fs-5 text-secondary">
                Zen Pharma Labs is a specialist consulting platform built around
                a network of experienced experts rather than a single in-house
                team.
              </p>
            </div>

            {/* IMAGE */}
            <div className="col-lg-6 text-center" data-aos="zoom-in">
              <img
                src={about1}
                alt="Who we are"
                className="img-fluid rounded-4 shadow-lg"
                style={{ maxHeight: "360px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center g-5 flex-row-reverse">
            {/* CONTENT */}
            <div className="col-lg-6" data-aos="fade-left">
              <h2 className="fw-bold mb-4">What We Believe</h2>

              <div className="p-4 mb-3 bg-light rounded-4">
                <p className="fs-5 text-secondary mb-0">
                  Multi-disciplinary decisions beat siloed decisions.
                </p>
              </div>

              <div className="p-4 bg-light rounded-4">
                <p className="fs-5 text-secondary mb-0">
                  Small and mid-sized companies should access the same quality
                  of expertise as big players.
                </p>
              </div>
            </div>

            {/* IMAGE */}
            <div className="col-lg-6 text-center" data-aos="zoom-in">
              <img
                src={about2}
                alt="What we believe"
                className="img-fluid rounded-4 shadow-lg"
                style={{ maxHeight: "360px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE'RE STRUCTURED */}
      <section className="py-5" style={{ backgroundColor: "#F4FAFF" }}>
        <div className="container">
          <div className="row align-items-center g-5">
            {/* CONTENT */}
            <div className="col-lg-6" data-aos="fade-right">
              <h2 className="fw-bold mb-4">How We’re Structured</h2>
              <p className="fs-5 text-secondary">
                Core coordination team supported by a network of formulation
                scientists, process engineers, clinicians, statisticians,
                regulatory and IP specialists, supply-chain and market experts.
              </p>
            </div>

            {/* IMAGE */}
            <div className="col-lg-6 text-center" data-aos="zoom-in">
              <img
                src={about3}
                alt="How we are structured"
                className="img-fluid rounded-4 shadow-lg"
                style={{ maxHeight: "360px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
