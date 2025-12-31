// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="text-center px-4">
        {/* 404 */}
        <h1 className="display-1 fw-bold text-primary">404</h1>

        {/* Message */}
        <h2 className="fw-semibold mb-3">Page Not Found</h2>
        <p className="text-muted mb-4">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        {/* Button */}
        <Link to="/" className="btn btn-primary px-4 py-2">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
