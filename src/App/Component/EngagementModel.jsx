import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const EngagementModel = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="engagement-section">
      <div className="container">
        {/* HEADER */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold text-primary">How We Work</h2>
          <p className="engagement-intro mt-3">
            We keep things structured and lean so experts spend their time
            solving problems, not fighting process.
          </p>
        </div>

        {/* STEPS */}
        <div className="row g-4">
          <div className="col-md-6 col-lg-3" data-aos="fade-up">
            <div className="engagement-card h-100">
              <span className="step-number">01</span>
              <h5>Discover</h5>
              <p>
                A focused deep-dive with your core team and relevant experts to
                clarify objectives, constraints and success criteria.
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="engagement-card h-100">
              <span className="step-number">02</span>
              <h5>Design</h5>
              <p>
                A cross-functional plan covering R&amp;D, clinical, supply
                chain, IP, regulatory and market considerations.
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="engagement-card h-100">
              <span className="step-number">03</span>
              <h5>Deliver</h5>
              <p>
                Coordinated execution with your team and selected vendors, with
                regular expert checkpoints to stay aligned.
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            <div className="engagement-card h-100">
              <span className="step-number">04</span>
              <h5>Refine</h5>
              <p>
                Review outcomes against data, refine direction and decide what
                to scale, pause or stop.
              </p>
            </div>
          </div>
        </div>

        {/* COMMERCIAL NOTE */}
        <div
          className="commercial-note mt-5"
          data-aos="fade-up"
        >
          <p>
            <strong>Commercial model:</strong> Most clients work with us on a
            base advisory retainer plus clearly scoped projects. Specialist and
            vendor costs are transparent, itemised and kept separate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EngagementModel;
