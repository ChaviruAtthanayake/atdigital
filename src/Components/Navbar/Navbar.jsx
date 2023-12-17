import React from "react";
import "./Navbar.css";
import Logo from "../../Assets/Logo.png";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg custom-navbar">
      <a class="navbar-brand" href="/" style={{ marginLeft: "60px" }}>
        <img src={Logo} alt="Logo" class="navbar-logo"/>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav" style={{ marginRight: "65px" }}>
          <li class="nav-item active">
            <a class="nav-link" href="#">
              SERVICES{" "}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              ABOUT US
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              CONTACT US
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              CAREERS
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled " href="#">
              Disabled
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
