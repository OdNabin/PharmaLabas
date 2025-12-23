
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top p-3 bg-light shadow-sm">
      <div className="container">

        {/* LEFT: Logo */}
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
            <h5 className="offcanvas-title">Pharma Menu</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>

          <div className="offcanvas-body d-flex align-items-center">

            {/* CENTER: Main Menu */}
            <ul className="navbar-nav mx-auto gap-3 " style={{fontSize:"18px",fontWeight:"bold"}}>

              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>

              {/* SERVICES DROPDOWN */}
              <li className="nav-item ">
               <NavLink className="nav-link" to="/services">
                  Services
                  </NavLink>
            
             
              </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  Industries
                </NavLink>
              </li>

                  <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  Engagement Model
                </NavLink>
              </li>

                  <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                Insights 
                </NavLink>
              </li>

                     <li className="nav-item">
                <NavLink className="nav-link" to="/about">
              Our Expert Network
                </NavLink>
              </li>
              
            </ul>

            {/* RIGHT: Contact */}
            <ul className="navbar-nav" style={{fontSize:"18px",fontWeight:"bold"}}>
              <li className="nav-item">
                <NavLink className="nav-link " to="/contact">
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
