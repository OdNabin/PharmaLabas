import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const navClass = ({ isActive }) =>
    `nav-link custom-nav-link ${isActive ? "active-link" : ""}`;

  return (
    <nav className="navbar navbar-expand-lg fixed-top p-3 bg-light shadow-sm">
      <div className="container">
        {/* LOGO */}
        <NavLink className="navbar-brand fw-bold text-primary" to="/">
          Zen Pharma Labs
        </NavLink>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* OFFCANVAS */}
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title fw-bold">Pharma Menu</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
            />
          </div>

          <div className="offcanvas-body">
            {/* MENU */}
            <ul
              className="navbar-nav ms-auto gap-3"
              style={{ fontSize: "18px", fontWeight: "bold" }}
            >
              <li className="nav-item">
                <NavLink to="/" className={navClass}>
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/about" className={navClass}>
                  About Us
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/services" className={navClass}>
                  Services
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/industries" className={navClass}>
                  Industries
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/engagement-model" className={navClass}>
                  Engagement Model
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/insights" className={navClass}>
                  Insights
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/experts" className={navClass}>
                  Our Expert Network
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/contact" className={navClass}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
