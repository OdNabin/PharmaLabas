import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    email: "",
    country: "",
    category: "",
    mainNeed: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Data:", formData);
    // 👉 API / email integration later
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
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Company */}
                <div className="mb-3">
                  <label className="form-label">Company</label>
                  <input
                    type="text"
                    className="form-control"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                {/* Role */}
                <div className="mb-3">
                  <label className="form-label">Role</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Founder / R&D Head / CEO"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Country */}
                <div className="mb-3">
                  <label className="form-label">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                  />
                </div>

                {/* Category Dropdown */}
                <div className="mb-3">
                  <label className="form-label">Category</label>
                  <select
                    className="form-select"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select category</option>
                    <option value="pharma">Pharma</option>
                    <option value="nutra">Nutraceutical</option>
                    <option value="wellness">Health & Wellness</option>
                    <option value="pet">Pet Health</option>
                       <option value="pet">Others</option>
                  </select>
                </div>

                {/* Main Need Dropdown */}
                <div className="mb-3">
                  <label className="form-label">Main Need</label>
                  <select
                    className="form-select"
                    name="mainNeed"
                    value={formData.mainNeed}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select main need</option>
                    <option value="rd">R&amp;D</option>
                    <option value="scale-up">Scale-up</option>
                    <option value="clinical">Clinical</option>
                    <option value="tech-scouting">Technology Scouting</option>
                    <option value="supply-chain">Supply Chain</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Free-text Message */}
                <div className="mb-4">
                  <label className="form-label">
                    Briefly describe your situation
                  </label>
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Context, challenge, or open questions…"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Submit */}
                <button type="submit" className="btn btn-primary w-100 py-2">
                  Start the Conversation
                </button>

                <p className="contact-note mt-3 text-center">
                  You don’t need a fully defined brief — a few clear lines are
                  enough to begin.
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
