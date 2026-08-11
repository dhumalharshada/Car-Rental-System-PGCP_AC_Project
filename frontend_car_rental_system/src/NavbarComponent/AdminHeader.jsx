import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminHeader = () => {
  const user = JSON.parse(sessionStorage.getItem("active-admin"));

  const adminLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-admin");
    sessionStorage.removeItem("admin-jwtToken");
    setTimeout(() => {
      window.location.href = "/home";
    }, 1000); // Redirect to Home after the toast is shown
  };
  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li class="nav-item">
        <Link
          to="/user/admin/register"
          class="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Register Admin</b>
        </Link>
      </li>
      <li class="nav-item">
        <Link
          to="/admin/company/add"
          class="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Add Company</b>
        </Link>
      </li>
      <li class="nav-item">
        <Link
          to="/admin/variant/add"
          class="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Add Variant</b>
        </Link>
      </li>
      <li class="nav-item">
        <Link
          to="/admin/variant/all"
          class="nav-link active"
          aria-current="page"
        >
          <b className="text-color"> Variants</b>
        </Link>
      </li>

      <li class="nav-item">
        <Link
          to="/admin/customer/bookings"
          class="nav-link active"
          aria-current="page"
        >
          <b className="text-color"> Bookings</b>
        </Link>
      </li>
      <li class="nav-item">
        <Link
          to="/admin/customer/all"
          class="nav-link active"
          aria-current="page"
        >
          <b className="text-color"> Customers</b>
        </Link>
      </li>
      <li class="nav-item">
        <button
          type="button"
          class="nav-link active"
          style={{ background: "none", border: "none" }}
          aria-current="page"
          onClick={adminLogout}
        >
          <b className="text-color">Logout</b>
        </button>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default AdminHeader;
