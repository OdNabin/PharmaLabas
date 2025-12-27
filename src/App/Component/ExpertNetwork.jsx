import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ExpertNetwork = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="expert-network-section">
      <div className="container">
        {/* HEADER */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold text-primary">Our Expert Network</h2>
          <p className="expert-network-intro mt-3">
            We don’t claim to do everything ourselves. We orchestrate the right
            experts.
          </p>
        </div>

        {/* EXPERT CATEGORIES */}
        <div className="row g-4">
          <div className="col-md-6 col-lg-4" data-aos="fade-up">
            <div className="expert-card">
              <h5>Formulation &amp; Process Development</h5>
              <p>
                Experts who shape formulations, optimise processes and resolve
                scale-up challenges from pilot to commercial production.
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="expert-card">
              <h5>Analytical &amp; Quality</h5>
              <p>
                Specialists ensuring methods, specifications and quality
                systems are robust, compliant and audit-ready.
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="expert-card">
              <h5>Clinical &amp; Biostatistics</h5>
              <p>
                Clinicians and statisticians who design pragmatic evidence
                plans, analyse outcomes and support credible claims.
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="expert-card">
              <h5>Regulatory &amp; Safety</h5>
              <p>
                Regulatory professionals who navigate submissions, claims,
                safety assessments and evolving market requirements.
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="expert-card">
              <h5>IP / Patent Partners</h5>
              <p>
                IP specialists who assess freedom to operate, strengthen
                protection strategies and support licensing discussions.
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-4"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="expert-card">
              <h5>Market Research &amp; Commercial Strategy</h5>
              <p>
                Advisors who translate technical potential into market
                positioning, pricing logic and go-to-market decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertNetwork;
