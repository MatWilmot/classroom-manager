import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Nav = (props) => {
  let history = useHistory();
  useEffect(() => {
    M.AutoInit();
  }, []);

  const logout = () => {
    axios.get("/logout").then(() => {
      history.push("/");
    });
  };

  return (
    <div>
      <nav>
        <div className="nav-wrapper container">
          <Link to="/" className="brand-logo">
            Classroom Manager
          </Link>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <button className="waves-effect waves-light btn" onClick={logout}>
          Log Out
        </button>
      </ul>
    </div>
  );
};

export default Nav;
