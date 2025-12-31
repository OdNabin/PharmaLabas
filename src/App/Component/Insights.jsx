import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Insights = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="insights-section my-3">
      <div className="container">
        {/* HEADER */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold text-primary">Insights & Case Snapshots</h2>
          <p className="insights-intro mt-3">
            Short notes and case snapshots showing how multi-disciplinary teams
            solved specific problems for small and mid-sized companies.
          </p>
        </div>

        {/* SNAPSHOT TILES */}
        <div className="row g-4">
          <div className="col-md-6" data-aos="fade-up">
            <div className="insight-card">
              <span className="insight-tag">Clinical Strategy</span>
              <h5>
                Right-sizing a clinical plan for a joint-health supplement
              </h5>
              <p>
                Balancing scientific credibility, timelines and cost by
                redesigning evidence requirements without weakening claims.
              </p>
              <span className="read-more">Read snapshot →</span>
            </div>
          </div>

          <div className="col-md-6" data-aos="fade-up" data-aos-delay="150">
            <div className="insight-card">
              <span className="insight-tag">Process Scale-up</span>
              <h5>
                Scaling a pilot process to commercial volume without
                reformulating
              </h5>
              <p>
                Identifying process constraints early and aligning suppliers to
                preserve formulation integrity at scale.
              </p>
              <span className="read-more">Read snapshot →</span>
            </div>
          </div>

          <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="insight-card">
              <span className="insight-tag">Technology Evaluation</span>
              <h5>
                Vetting a licensing deal for a metabolic-health technology
              </h5>
              <p>
                Cross-checking IP strength, development readiness and regulatory
                pathways before commercial commitment.
              </p>
              <span className="read-more">Read snapshot →</span>
            </div>
          </div>

          <div className="col-md-6" data-aos="fade-up" data-aos-delay="450">
            <div className="insight-card">
              <span className="insight-tag">Supply Chain</span>
              <h5>
                Building a dual-source supply chain for a critical botanical
              </h5>
              <p>
                Reducing risk by qualifying alternate sources without impacting
                quality, compliance or customer perception.
              </p>
              <span className="read-more">Read snapshot →</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
