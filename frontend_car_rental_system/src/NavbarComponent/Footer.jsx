import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg,#0f172a,#1e293b)",
        color: "#fff",
        marginTop: "70px",
      }}
    >
      <div className="container py-5">

        <div className="row gy-4">

          {/* Company */}

          <div className="col-lg-4 col-md-12">

            <h3
              style={{
                color: "#38bdf8",
                fontWeight: "700",
                marginBottom: "20px",
              }}
            >
              🚗 Car Rental System
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
                textAlign: "justify",
              }}
            >
              Our Car Rental App makes booking a vehicle simple,
              fast, and reliable. Customers can browse a wide
              range of cars—from budget hatchbacks to premium SUVs—
              with complete vehicle details, transparent pricing,
              and instant booking.
            </p>

          </div>

          {/* About */}

          <div className="col-lg-3 col-md-6">

            <h5
              style={{
                color: "#38bdf8",
                marginBottom: "20px",
              }}
            >
              About Us
            </h5>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
              }}
            >
              We are committed to providing a smooth, affordable,
              and hassle-free car rental experience with trusted
              service and a wide selection of vehicles.
            </p>

          </div>

          {/* Why Choose Us */}

          <div className="col-lg-3 col-md-6">

            <h5
              style={{
                color: "#38bdf8",
                marginBottom: "20px",
              }}
            >
              Why Choose Us
            </h5>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                color: "#cbd5e1",
                lineHeight: "2",
              }}
            >
              <li>✔ Affordable Prices</li>
              <li>✔ Premium Cars</li>
              <li>✔ Easy Booking</li>
              <li>✔ 24×7 Support</li>
            </ul>

          </div>

          {/* Contact */}

          <div className="col-lg-2 col-md-12">

            <h5
              style={{
                color: "#38bdf8",
                marginBottom: "20px",
              }}
            >
              Contact
            </h5>

            <p style={{ color: "#cbd5e1" }}>
              📧 support@carrentalsystem.com
            </p>

            <p style={{ color: "#cbd5e1" }}>
              📞 +91 1234567891
            </p>

          </div>

        </div>

        <hr
          style={{
            borderColor: "rgba(255,255,255,.15)",
            margin: "40px 0",
          }}
        />

        {/* Login Section */}

        <div className="row align-items-center">

          <div className="col-md-8">

            <h5 style={{ color: "#fff" }}>
              Already have an account?
            </h5>

            <p style={{ color: "#cbd5e1" }}>
              Login to book your favourite car quickly and
              manage your reservations.
            </p>

          </div>

          <div className="col-md-4 text-md-end">

            <Link to="/user/login">

              <button
                className="btn"
                style={{
                  background: "#38bdf8",
                  color: "#fff",
                  padding: "12px 35px",
                  borderRadius: "30px",
                  fontWeight: "600",
                  border: "none",
                  transition: ".3s",
                }}
              >
                Login
              </button>

            </Link>

          </div>

        </div>

        <hr
          style={{
            borderColor: "rgba(255,255,255,.15)",
            margin: "35px 0 20px",
          }}
        />

        {/* Copyright */}

        <div
          className="text-center"
          style={{
            color: "#94a3b8",
            fontSize: "15px",
          }}
        >
          © 2026 <span style={{ color: "#38bdf8" }}>Car Rental System</span>.
          All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
