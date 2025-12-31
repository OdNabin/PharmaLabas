import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"

const Navbar = () => {
  const navClass = ({ isActive }) =>
    `nav-link custom-nav-link ${isActive ? "active-link" : ""}`;

const closeOffcanvas = () => {
  const offcanvasElement = document.getElementById("offcanvasNavbar");
  if (offcanvasElement) {
    const offcanvasInstance =
      window.bootstrap.Offcanvas.getInstance(offcanvasElement);
    offcanvasInstance?.hide();
  }
};

  return (
    <nav className="navbar navbar-expand-lg fixed-top  bg-light shadow-sm">
      <div className="container">
        {/* LOGO */}
        <NavLink className="navbar-brand fw-bold text-primary" to="/">
               <img
       src={logo}
       alt="Zen Pharma Labs – Technology & Execution Partner"
       className="img-fluid   rounded-4 "
       style={{
         maxHeight: "70px",
         objectFit: "cover",
       }}
     />
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
                <NavLink to="/" className={navClass}     onClick={closeOffcanvas}>
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/about" className={navClass}     onClick={closeOffcanvas}>
                  About Us
                </NavLink>
              </li>

              <li className="nav-item" >
                <NavLink to="/services" className={navClass}     onClick={closeOffcanvas}> 
                  Services
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/industries" className={navClass}     onClick={closeOffcanvas}>
                  Industries
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/engagement-model" className={navClass}     onClick={closeOffcanvas}>
                  Engagement Model
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/insights" className={navClass}     onClick={closeOffcanvas}>
                  Insights
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/experts" className={navClass}     onClick={closeOffcanvas}>
                  Our Expert Network
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/contact" className={navClass}     onClick={closeOffcanvas}>
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
