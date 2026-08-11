// import { Link } from "react-router-dom";
// import RoleNav from "./RoleNav";
// import logo from "../images/e_logo.png";

// const Header = () => {
//   return (
//     <div>
//       <nav class="navbar  navbar-expand-lg custom-bg text-color">
//         <div class="container-fluid text-color">
//           <img
//             src={logo}
//             height="50"
//             width="auto"
//             class="d-inline-block align-top"
//             alt=""
//           />
//           <Link to="/" class="navbar-brand">
//             <i>
//               <b className="header-logo-color ms-2">Car Rental System</b>
//             </i>
//           </Link>

//           <button
//             class="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarSupportedContent">
//             <RoleNav />
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Header;

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