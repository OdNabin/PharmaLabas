import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Industries = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true, // animation happens only once
      offset: 100,
    });
  }, []);

  return (
    <section className="industries-section">
      <div className="container">
        {/* HEADER */}
        <div
          className="text-center mb-5"
          data-aos="fade-up"
        >
          <h2 className="fw-bold text-primary">Industries We Serve</h2>
          <p className="industries-intro mt-3">
            We specialise in regulated and quasi-regulated health categories
            where evidence, quality and long-term trust matter.
          </p>
        </div>

        {/* INDUSTRY BLOCKS */}
        <div className="row g-4">
          {/* Pharma */}
          <div
            className="col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <div className="industry-card h-100">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
                alt="Pharma and prescription nutrition"
                className="industry-image"
              />
              <h5>Pharma & Prescription Nutrition</h5>
              <p>
                Adjunct therapies, prescription nutrition and hospital-focused
                products, with close collaboration with clinicians and
                regulatory experts.
              </p>
            </div>
          </div>

          {/* Nutraceutical */}
          <div
            className="col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="industry-card h-100">
              <img
                src="https://images.unsplash.com/photo-1611078489935-0cb964de46d6"
                alt="Nutraceutical and dietary supplements"
                className="industry-image"
              />
              <h5>Nutraceutical & Dietary Supplements</h5>
              <p>
                Condition-specific products sold via retail, e-commerce or HCPs,
                balancing claims, compliance, differentiation and cost.
              </p>
            </div>
          </div>

          {/* Health & Wellness */}
          <div
            className="col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="industry-card h-100">
              <img
                src="https://images.unsplash.com/photo-1505577058444-a3dab90d4253"
                alt="Health and wellness functional foods"
                className="industry-image"
              />
              <h5>Health & Wellness / Functional Foods</h5>
              <p>
                Everyday wellness, functional beverages and fortified foods —
                combining sensory experience, science and brand thinking.
              </p>
            </div>
          </div>

          {/* Pet Health */}
          <div
            className="col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            <div className="industry-card h-100">
              <img
                src="https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8"
                alt="Pet health and pet food"
                className="industry-image"
              />
              <h5>Pet Health & Pet Food</h5>
              <p>
                Supplements, functional treats and diets, guided by veterinary
                input, safety standards and owner perception.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
