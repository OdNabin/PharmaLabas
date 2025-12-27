import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Data:", formData);
    // 👉 later: API integration
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="row g-5 align-items-start">
          {/* LEFT CONTENT */}
          <div className="col-lg-5" data-aos="fade-up">
            <h2 className="fw-bold text-primary mb-3">Contact Us</h2>

            <p className="contact-intro">
              Tell us briefly what you’re working on and where you’re stuck.
              We’ll pull in the right experts and suggest practical next steps.
            </p>

            <div className="contact-sidebar mt-4">
              <p>
                <strong>How initial conversations work:</strong>
              </p>
              <p>
                Initial discussions are focused on understanding your situation,
                constraints and objectives — not pitching a pre-set package.
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="col-lg-7" data-aos="fade-up" data-aos-delay="150">
            <div className="contact-form-wrapper">
              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="mb-4">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="you@company.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Description */}
                <div className="mb-4">
                  <label className="form-label">
                    Briefly describe what you’re working on
                  </label>
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Project context, challenge, or question..."
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn btn-primary px-4 py-2"
                >
                  Start the Conversation
                </button>

                {/* Helper note */}
                <p className="contact-note mt-3">
                  You don’t need a fully defined brief — a few lines are enough
                  to get started.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
