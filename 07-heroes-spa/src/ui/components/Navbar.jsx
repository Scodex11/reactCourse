import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";

export const Navbar = () => {
  const navigate = useNavigate();


  const {user} = useContext(AuthContext);


  const handleLogout = () => {
    navigate("/login", { replace: true });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 rounded">
      <Link className="navbar-brand" to="/">
        <b>| Hero SPA |</b>
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""} `
            }
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""} `
            }
            to="/dc"
          >
            DC
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          {/* <NavLinkclassName={({ isActive }) => `nav-link ${isActive ? "active" : ""} `}to="/login"> Logout </NavLink> */}
          <NavLink
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""} `
            }
            to="/search"
          >
            Search
          </NavLink>
          <span className="nav-item nav-link text-primary">{user?.name}</span>

          <button className="nav-item nav-link btn" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
