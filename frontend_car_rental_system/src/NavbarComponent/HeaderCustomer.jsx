import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HeaderCustomer = () => {
  let navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("active-customer"));

  const userLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-customer");
    sessionStorage.removeItem("customer-jwtToken");
    setTimeout(() => {
      window.location.href = "/home";
    }, 1000); // Redirect to Home after the toast is shown
  };

  const viewProfile = () => {
    navigate("/user/profile/detail", { state: user });
  };

  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li class="nav-item">
        <Link
          to="/customer/bookings"
          class="nav-link active"
          aria-current="page"
        >
          <b className="text-color">My Bookings</b>
        </Link>
      </li>

      <li class="nav-item">
        <div class="nav-link active" aria-current="page">
          <b className="text-color" onClick={viewProfile}>
            My Profile
          </b>
          <ToastContainer />
        </div>
      </li>

      <li class="nav-item">
        <button
          type="button"
          class="nav-link active"
          style={{ background: "none", border: "none" }}
          aria-current="page"
          onClick={userLogout}
        >
          <b className="text-color">Logout</b>
        </button>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default HeaderCustomer;
