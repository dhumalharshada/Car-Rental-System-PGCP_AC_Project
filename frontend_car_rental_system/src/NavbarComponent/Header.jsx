

import { Link } from "react-router-dom";
import RoleNav from "./RoleNav";
import logo from "../images/e_logo.png";

const Header = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark sticky-top"
        style={{
          background: "rgba(15,23,42,0.95)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
          padding: "12px 0",
        }}
      >
        <div className="container">

          {/* Logo */}
          <Link
            className="navbar-brand d-flex align-items-center"
            to="/"
            style={{
              fontWeight: "700",
              fontSize: "1.4rem",
              letterSpacing: "0.5px",
            }}
          >
            <img
              src={logo}
              alt="Car Rental Logo"
              width="55"
              height="55"
              className="me-3"
              style={{
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid #38bdf8",
                boxShadow: "0 5px 15px rgba(56,189,248,.35)",
              }}
            />

            <span
              style={{
                color: "#ffffff",
              }}
            >
              Car Rental
              <span style={{ color: "#38bdf8" }}> System</span>
            </span>
          </Link>

          {/* Mobile Button */}

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation */}

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <RoleNav />
          </div>

        </div>
      </nav>
    </>
  );
};

export default Header;
