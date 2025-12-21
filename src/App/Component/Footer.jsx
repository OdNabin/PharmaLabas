import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row gy-5">
          {/* Company Info */}
          <div className="col-lg-4 col-md-6">
            <h3 className="fw-bold mb-3 text-white">Zen Pharma Labs</h3>
            <p className="text-secondary mb-4">
              Your trusted external R&amp;D and technology partner for health innovation.
            </p>
            <p className="small text-secondary mb-0">
              © {currentYear} Zen Pharma Labs. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-semibold mb-4 text-white">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#home" className="text-secondary text-decoration-none footer-link">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#services" className="text-secondary text-decoration-none footer-link">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#how-we-work" className="text-secondary text-decoration-none footer-link">
                  How We Work
                </a>
              </li>
              <li className="mb-2">
                <a href="#who-we-serve" className="text-secondary text-decoration-none footer-link">
                  Who We Serve
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-secondary text-decoration-none footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-semibold mb-4 text-white">Our Services</h6>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none footer-link">
                  R&amp;D &amp; Process Scale-Up
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none footer-link">
                  Clinical &amp; Evidence Support
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none footer-link">
                  Supply Chain &amp; Partner Development
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none footer-link">
                  Technology Scouting &amp; Licensing
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none footer-link">
                  Market Research &amp; Analysis
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none footer-link">
                  Patent &amp; IP Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-semibold mb-4 text-white">Get in Touch</h6>
            <ul className="list-unstyled small">
              <li className="mb-3 d-flex align-items-center">
                <i className="bi bi-envelope me-3 fs-5 text-primary"></i>
                <a
                  href="mailto:info@zenpharmalabs.com"
                  className="text-secondary text-decoration-none footer-link"
                >
                  info@zenpharmalabs.com
                </a>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className="bi bi-telephone me-3 fs-5 text-primary"></i>
                <span className="text-secondary">+1 (555) 123-4567</span>
              </li>
              <li className="mb-4 d-flex align-items-start">
                <i className="bi bi-geo-alt me-3 fs-5 text-primary mt-1"></i>
                <span className="text-secondary">
                  123 Innovation Drive<br />
                  Boston, MA 02101<br />
                  United States
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="d-flex gap-3">
              <a
                href="https://www.linkedin.com/company/zenpharmalabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary footer-link"
              >
                <i className="bi bi-linkedin fs-4"></i>
              </a>
              {/* Add more social icons if needed */}
            </div>
          </div>
        </div>

        <hr className="my-5 border-secondary opacity-25" />

        <div className="text-center small text-secondary">
          <a href="#" className="text-secondary text-decoration-none footer-link me-3">
            Privacy Policy
          </a>
          <span className="mx-2">•</span>
          <a href="#" className="text-secondary text-decoration-none footer-link mx-3">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;