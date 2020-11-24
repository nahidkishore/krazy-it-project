import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../images/brand.png";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-dark pt-5 ">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <h1>Brand Logo</h1>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto" style={{ fontSize: " 1.42em" }}>
            <li className="nav-item active">
              <Link className="nav-link  mr-2" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  mr-2 " to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link  mr-2 " to="/service">
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mr-2" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mr-2" to="/upload">
                Upload Image
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mr-2" to="/text">
                Write Text
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
