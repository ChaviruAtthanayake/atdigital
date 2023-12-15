import React from "react";
import "./Navbar.css";
import Logo from "../../Assets/Logo.png";

function Navbar() {
    return(
        <div className="Navbar-Container">
            <img className="NavbarLogo" src={Logo} />
            <div className="NavMenu">
            <ul>
              <li>Services</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Careers</li>
          </ul>
        </div>
        </div>

    );
}

export default Navbar;