import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import Logo from "../../Assets/Logo.png";
import "./LandingFooter.css";

export default function App() {
  return (
    <MDBFooter
      className="text-white text-center text-lg-left"
      style={{ backgroundColor: "#6b3cc9" }}
    >
      <MDBContainer className="p-4">
        <MDBRow>
          <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
            <a href="/">
            <img className="FooterLogo" src={Logo} href="/" />
            </a>
            <p className="FooterLogoText">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective - your
              business results.
            </p>
          </MDBCol>

          <MDBCol
            lg="3"
            md="6"
            className="mb-4 mb-md-0"
            style={{ textAlign: "left" }}
          >
            <h5>Our Technologies</h5>

            <ul className="list-unstyled mb-0">
              <li className="custom-list-item">
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none", fontSize:"15px", fontWeight:"450" }}
                >
                  ReactJS
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none", fontSize:"15px", fontWeight:"450" }}
                >
                  Gatsby
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none", fontSize:"15px", fontWeight:"450" }}
                >
                  NextJS
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none", fontSize:"15px", fontWeight:"450" }}
                >
                  NodeJS
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none", fontSize:"15px", fontWeight:"450" }}
                >
                  GraphQL
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none", fontSize:"15px", fontWeight:"450" }}
                >
                  Laravel
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol
            lg="3"
            md="6"
            className="mb-4 mb-md-0"
            style={{ textAlign: "left" }}
          >
            <h5 className="mb-0" style={{marginTop:'3px'}}>Our Services</h5>

            <ul className="list-unstyled" style={{ marginTop: "7px" }}>
              <li>
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none", fontSize:"15px", fontWeight:"450" }}
                >
                  Social Media Marketing
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none", fontSize:"15px", fontWeight:"450" }}
                >
                  Web & Mobile App development
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none", fontSize:"15px", fontWeight:"450" }}
                >
                  Data & Analytics
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none", fontSize:"15px", fontWeight:"450" }}
                >
                  Google Marketing Solutions
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-white"
                  style={{ textDecoration: "none", fontSize:"15px", fontWeight:"450" }}
                >
                  Search Engine Optimization
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ borderTop: "1px solid white", margin: "0 auto", width: "40%" }}
      >
        <a className="text-white" style={{ textDecoration: "none", cursor:"pointer" }}>
          Privacy Policy | Terms & Conditions
        </a>
      </div>
    </MDBFooter>
  );
}
