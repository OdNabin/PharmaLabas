import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
      title: "R&D & Process Scale-Up",
      desc: "Formulation development, lab-to-plant scale-up, manufacturing troubleshooting.",
      img: "https://static.vecteezy.com/system/resources/previews/046/469/942/large_2x/team-of-scientific-researchers-working-with-professional-modern-equipment-in-laboratory-chemists-in-pharmaceutical-lab-examining-sample-for-medical-experiment-with-technology-for-medicine-industry-photo.JPG",
    },
    {
      title: "Clinical & Evidence Support",
      desc: "Clinical strategy, CRO connections, study design and data-to-claims support.",
      img: "https://media.istockphoto.com/id/1646567235/photo/team-medical-analysts-and-doctors-consulting-with-paperwork-of-graphs-data-and-charts-in.jpg?s=612x612&w=0&k=20&c=4u-A8dryzdpNBww_BFWaAFvJk1qpvE0qpDvYc__yH6E=",
    },
    {
      title: "Supply Chain & Partner Development",
      desc: "Identification and vetting of CMOs, CROs, and strategic suppliers.",
      img: "https://medpak.com/wp-content/uploads/2024/08/Pharmaceutical-supply-chain-1.png",
    },
    {
      title: "Technology Scouting, In-/Out-Licensing & Vetting",
      desc: "Technology scouting, licensing strategy, due diligence and partner vetting.",
      img: "https://ftp-bucket-s3-upload.s3-accelerate.amazonaws.com/Technology%20Scouting%20Process.png",
    },
    {
      title: "Market Research & Landscape Analysis",
      desc: "Competitive intelligence, market sizing, trend analysis and opportunity mapping.",
      img: "https://www.slideteam.net/media/catalog/product/cache/1280x720/p/h/pharmaceutical_company_sales_analysis_on_power_bi_slide01.jpg",
    },
    {
      title: "Patent & IP Support (via specialist partners)",
      desc: "Patent landscape analysis, freedom-to-operate searches, and IP strategy support.",
      img: "https://wvutoday.wvu.edu/files/d/1c08653a-fd33-4584-aca2-86765eff7ee4/patents.png",
    },
  ];

  return (
    <div style={{ backgroundColor: "#F4FAFF", marginTop: "70px" }}>
      {/* HERO SECTION */}
      <section className="py-5">
        <div className="container ">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              {/* <h1 className="fw-bold display-4 text-dark">
                Zen Pharma Labs
              </h1> */}
              <h2 className="fw-bold display-6 text-primary mt-3">
                Your External R&amp;D and Technology Team for Health Brands
              </h2>

              <p className="fs-5 text-secondary mt-4">
                Zen Pharma Labs provides expert consulting and technical support to small and mid-sized companies in pharma, nutraceuticals, health &amp; wellness, and pet health sectors. We bridge the gap from innovative ideas to successful market launches.
              </p>

              <div className="d-flex gap-3 mt-5 flex-wrap">
                <button className="btn btn-primary btn-lg">
                  Talk to Our Team
                </button>
                <button className="btn btn-outline-primary btn-lg">
                  View Services
                </button>
              </div>
            </div>

            <div className="col-lg-6 text-center" data-aos="fade-left">
              <img
                src="https://t4.ftcdn.net/jpg/10/05/84/67/360_F_1005846720_yV2XmFNAS535InbDCaw5p6TolGSNg3rX.jpg"
                alt="Zen Pharma Labs expert consulting team"
                className="img-fluid rounded-4 "
              />
            </div>
          </div>
        </div>
      </section>



      {/* SHORT INTRO */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 text-center" data-aos="fade-up">
              <p className="fs-4 text-secondary lead">
                At <strong>Zen Pharma Labs</strong>, we design and execute tailored programmes across R&amp;D, scale-up, clinical, supply chain, technology access, and market intelligence — always assembling the right mix of experts for each client brief.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold display-6">Our Services</h2>
            <p className="text-secondary fs-5">
              Comprehensive end-to-end scientific, technical, and commercialization support
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
                <div className="card h-100 border-0 shadow-sm overflow-hidden hover-shadow transition">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="card-img-top"
                    style={{ height: "220px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column p-4">
                    <h5 className="card-title fw-semibold text-dark">{item.title}</h5>
                    <p className="card-text text-secondary mt-3 flex-grow-1">
                      {item.desc}
                    </p>
                    <a href="#" className="mt-auto text-primary fw-semibold align-self-start">
                      Learn more →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - New Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold display-6">Why Partner with Zen Pharma Labs</h2>
            <p className="text-secondary fs-5">
              We deliver flexible, high-impact expertise without the overhead of in-house teams
            </p>
          </div>

          <div className="row g-5 text-center">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="p-4">
                <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: "80px", height: "80px" }}>
                  <i className="bi bi-people text-white fs-2"></i> {/* Assume Bootstrap Icons */}
                </div>
                <h5 className="fw-semibold">Expert Network</h5>
                <p className="text-secondary">
                  Access to a curated global network of scientists, clinicians, regulatory experts, and industry veterans.
                </p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="p-4">
                <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: "80px", height: "80px" }}>
                  <i className="bi bi-graph-up-arrow text-white fs-2"></i>
                </div>
                <h5 className="fw-semibold">Proven Track Record</h5>
                <p className="text-secondary">
                  Successfully supported dozens of products from concept to commercialization across multiple therapeutic areas.
                </p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="p-4">
                <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: "80px", height: "80px" }}>
                  <i className="bi bi-shield-check text-white fs-2"></i>
                </div>
                <h5 className="fw-semibold">Cost-Effective & Agile</h5>
                <p className="text-secondary">
                  Flexible engagement models that scale with your needs, reducing time-to-market and development risks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center gy-5" data-aos="fade-up">
            <div className="col-lg-6 order-lg-2">
              <img
                src="https://media.istockphoto.com/id/1646567235/photo/team-medical-analysts-and-doctors-consulting-with-paperwork-of-graphs-data-and-charts-in.jpg?s=612x612&w=0&k=20&c=4u-A8dryzdpNBww_BFWaAFvJk1qpvE0qpDvYc__yH6E="
                alt="Zen Pharma Labs collaborative approach"
                className="img-fluid rounded-4 shadow-lg"
              />
            </div>

            <div className="col-lg-6 order-lg-1">
              <h2 className="fw-bold mb-4">How We Work</h2>
              <p className="fs-5 text-secondary">
                Zen Pharma Labs assembles cross-functional teams — including scientists, clinicians, regulatory specialists, and commercial experts — custom-tailored to your specific project requirements.
              </p>
              <p className="text-secondary mt-4">
                This agile, on-demand model provides deep domain expertise while eliminating the costs and complexities associated with maintaining large internal teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-5" style={{ backgroundColor: "#E9F3FF" }}>
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold display-6">Who We Support</h2>
            <p className="text-secondary fs-5">
              Dedicated to innovation-driven health and wellness brands worldwide
            </p>
          </div>

          <div className="row g-4 text-center">
            {[
              "Pharma & Specialty Generics",
              "Nutraceutical & Supplements",
              "Health & Wellness Brands",
              "Pet Health & Veterinary",
            ].map((item, index) => (
              <div
                key={index}
                className="col-md-6 col-lg-3"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-white p-5 rounded-4 shadow-sm fw-semibold fs-5">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5">
        <div className="container">
          <div
            className="text-center p-5 rounded-4 shadow-lg"
            style={{ backgroundColor: "#2F6FED", color: "#fff" }}
            data-aos="zoom-in"
          >
            <h2 className="fw-bold display-6 mb-4">
              Ready to Accelerate Your Innovation?
            </h2>
            <p className="fs-4 mb-5">
              Contact Zen Pharma Labs today to discuss how our experts can drive your next project forward.
            </p>
            <button className="btn btn-light btn-lg fw-semibold px-5">
              Talk to Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;