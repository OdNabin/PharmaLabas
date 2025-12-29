import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import whyChooseImage from "../../assets/Orga.jpg"
const Whychose = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-quart",
      once: true,
    });
  }, []);

  const reasons = [
    {
      title: "Multi-disciplinary Project Teams",
      desc: "Each engagement is supported by a tailored mix of formulation experts, clinicians, regulatory advisors, and commercial leaders.",
    },
    {
      title: "Vendor-Neutral Advice",
      desc: "We do not own labs, plants, or CROs — ensuring recommendations are based on fit, quality, and value.",
    },
    {
      title: "Transparent Execution",
      desc: "Clear scopes, defined milestones, realistic timelines, and accountability at every stage.",
    },
    {
      title: "Built for Cross-Border Work",
      desc: "Experienced in working with international teams, geographies, time zones, and governance structures.",
    },
  ];

  return (
    <section className="py-5 py-lg-7 bg-white">
      <div className="container">
        <div className="row align-items-center g-5">
               <div className="text-center  mb-5 mb-lg-0">
              <h2 className="display-5 fw-bold text-[20px]  mb-4">
                Why Organisations Choose ZPL
              </h2>
              <p className="lead text-secondary">
                A flexible, vendor-neutral model designed for complex, cross-border execution
              </p>
            </div>
          {/* LEFT: Content */}
          <div className="col-lg-6" data-aos="fade-right">
         

            <div className="row g-4 mt-4">
              {reasons.map((item, index) => (
                <div
                  key={index}
                  className="col-12"
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                >
                  <div className="d-flex align-items-start gap-4 p-4 bg-light rounded-4 shadow-sm hover-shadow transition">
                    {/* Icon placeholder */}
                    <div className="flex-shrink-0">
                      <div
                        className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: "50px", height: "50px", fontSize: "1.4rem" }}
                      >
                        {index + 1}
                      </div>
                    </div>

                    <div>
                      <h5 className="fw-semibold mb-2">{item.title}</h5>
                      <p className="text-muted mb-0">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Image */}
       <div className="col-lg-6" data-aos="fade-left">
  <div className="rounded-4 overflow-hidden shadow-lg h-50">
    <img
      src={whyChooseImage}
      alt="Why organisations trust Zen Pharma Labs"
      className="img-fluid img w-100 h-50"
      style={{ objectFit: "cover" }}
    />
  </div>
</div>
        </div>
      </div>

      {/* Optional: Custom CSS for hover effect */}
      <style jsx>{`
        .hover-shadow {
          transition: all 0.4s ease;
        }
        .hover-shadow:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
        }
        .transition {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
      `}</style>
    </section>
  );
};

export default Whychose;