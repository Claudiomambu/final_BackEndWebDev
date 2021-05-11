import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark warna">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          MoTeL.com
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">
              Input Data
            </Link>
            <Link className="nav-link" to="/about">
              Data Costumer
            </Link>
            <Link className="nav-link" to="/AddUser">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
