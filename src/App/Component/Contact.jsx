import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import contact from "../../assets/contact.jpg";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate()

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-quart",
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
    // TODO: Integrate with backend/email service
    // alert("Thank you! We'll get back to you soon.");
     navigate("/thank-you");
  };

  return (
    <section className="contact-section py-5 py-lg-7 bg-light">
      <div className="container">
        <div className="row g-5 align-items-start">
          {/* LEFT CONTENT */}
          <div className="col-lg-5" data-aos="fade-up" >
            <h2 className="display-5 fw-bold text-primary mb-4">
              Contact Us
            </h2>

            <div
              className=" rounded-4 overflow-hidden mb-4"
              style={{ maxHeight: "460px" }}
            >
              <img
                src={contact}
                alt="Zen Pharma Labs – Your Trusted Technology & Execution Partner"
                className="img-fluid w-100 h-100"
                style={{ objectFit: "cover" }}
              />
            </div>

            <p className="lead text-muted mb-4">
              Tell us briefly what you’re working on and where you’re stuck.
              We’ll connect you with the right experts and propose actionable next steps.
            </p>

            <div className="bg-white p-4 rounded-3 shadow-sm border-start border-primary border-4">
              <p className="mb-2 fw-semibold text-dark">
                How initial conversations work:
              </p>
              <p className="text-muted small mb-0">
                Our discussions focus on deeply understanding your challenges,
                constraints, and goals — never a hard sell or generic package.
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="col-lg-7 py-4" data-aos="fade-up" data-aos-delay="200">
            <div
              className="contact-form-wrapper my-5 bg-white rounded-4 shadow-xl p-4 p-md-5"
              style={{
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                border: "1px solid #f0f0f0",
              }}
            >
              <h4 className="fw-semibold text-dark mb-4">
                Start the Conversation
              </h4>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  {/* Name */}
                  <div className="col-md-6">
                    <label className="form-label fw-medium">Name *</label>
                    <input
                      type="text"
                      className="form-control form-control-lg shadow-sm"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{ borderRadius: "10px" }}
                    />
                  </div>

                  {/* Email */}
                  <div className="col-md-6">
                    <label className="form-label fw-medium">Email *</label>
                    <input
                      type="email"
                      className="form-control form-control-lg shadow-sm"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{ borderRadius: "10px" }}
                    />
                  </div>

                  {/* Company */}
                  <div className="col-md-6">
                    <label className="form-label fw-medium">Company</label>
                    <input
                      type="text"
                      className="form-control form-control-lg shadow-sm"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      style={{ borderRadius: "10px" }}
                    />
                  </div>

                  {/* Role */}
                  <div className="col-md-6">
                    <label className="form-label fw-medium">Role</label>
                    <input
                      type="text"
                      className="form-control form-control-lg shadow-sm"
                      placeholder="e.g., Founder, R&D Head, CEO"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      style={{ borderRadius: "10px" }}
                    />
                  </div>

                  {/* Country */}
                  <div className="col-md-6">
                    <label className="form-label fw-medium">Country</label>
                    <input
                      type="text"
                      className="form-control form-control-lg shadow-sm"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      style={{ borderRadius: "10px" }}
                    />
                  </div>

                  {/* Category */}
                  <div className="col-md-6">
                    <label className="form-label fw-medium">Category *</label>
                    <select
                      className="form-select form-select-lg shadow-sm"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      style={{ borderRadius: "10px",fontSize:"16px" }}
                    >
                      <option value="">Select category</option>
                      <option value="pharma">Pharma</option>
                      <option value="nutra">Nutraceutical</option>
                      <option value="wellness">Health & Wellness</option>
                      <option value="pet">Pet Health</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Main Need */}
                  <div className="col-12">
                    <label className="form-label fw-medium">Main Need *</label>
                    <select
                      className="form-select form-select-lg shadow-sm"
                      name="mainNeed"
                      value={formData.mainNeed}
                      onChange={handleChange}
                      required
                      style={{ borderRadius: "10px", fontSize:"16px" }}
                    >
                      <option value="">Select main need</option>
                      <option value="rd">R&D</option>
                      <option value="scale-up">Scale-up</option>
                      <option value="clinical">Clinical Studies</option>
                      <option value="tech-scouting">Technology Scouting</option>
                      <option value="supply-chain">Supply Chain</option>
                       <option value="ipr">Ipr</option>
                        <option value="out-licensing">out-licensing</option>
                         <option value="supply-chain">Supply Chain</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="col-12">
                    <label className="form-label fw-medium">
                      Briefly describe your situation *
                    </label>
                    <textarea
                      className="form-control shadow-sm"
                      rows="5"
                      placeholder="Share context, current challenges, timeline, or key questions..."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      style={{ borderRadius: "12px", resize: "none" }}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-100 fw-semibold py-3 rounded-3 shadow"
                    style={{
                      background: "#0066cc",
                      border: "none",
                      boxShadow: "0 8px 20px rgba(0,102,204,0.3)",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.boxShadow =
                        "0 12px 30px rgba(0,102,204,0.4)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.boxShadow =
                        "0 8px 20px rgba(0,102,204,0.3)")
                    }
                  >
                    Send Message
                  </button>
                </div>

                <p className="text-center text-muted small mt-4 mb-0">
                  No need for a perfect brief — just a few clear lines are enough to get started.
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