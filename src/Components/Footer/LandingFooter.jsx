import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import Logo from "../../Assets/Logo.png";
import "./LandingFooter.css";

export default function App() {
  return (
    <MDBFooter className='text-white text-center text-lg-left' style={{backgroundColor:'#6b3cc9'}}>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <img className="FooterLogo" src={Logo} />

            <p className='FooterLogoText'>
            Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve 
            single objective - your business results.
            </p>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0' style={{ textAlign: 'left'}}>
            <h5>Our Technologies</h5>

            <ul className='list-unstyled mb-0'>
              <li className="custom-list-item">
                <a href='#!' className='text-white' style={{ textDecoration: 'none'}}>
                  ReactJS
                </a>
              </li>
              <li>
                <a href='#!' className='text-white' style={{ textDecoration: 'none' }}>
                  Gatsby
                </a>
              </li>
              <li>
                <a href='#!' className='text-white' style={{ textDecoration: 'none' }}>
                  NextJS
                </a>
              </li>
              <li>
                <a href='#!' className='text-white' style={{ textDecoration: 'none'}}>
                  NodeJS
                </a>
              </li>
              <li>
                <a href='#!' className='text-white' style={{ textDecoration: 'none'}}>
                  GraphQL
                </a>
              </li>
              <li>
                <a href='#!' className='text-white' style={{ textDecoration: 'none' }}>
                  Laravel
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0' style={{textAlign: 'left'}}>
            <h5 className='mb-0'>Our Services</h5>

            <ul className='list-unstyled' style={{marginTop:'7px'}}>
              <li>
                <a href='#!' className='text-white' style={{ textDecoration: 'none'}}>
                  Social Media Marketing
                </a>
              </li>
              <li>
                <a href='#!' className='text-white' style={{ textDecoration: 'none'}}>
                  Web & Mobile App development
                </a>
              </li>
              <li>
                <a href='#!' className='text-white' style={{ textDecoration: 'none'}}>
                  Data & Analytics
                </a>
              </li>
              <li>
                <a href='#!' className='text-white' style={{ textDecoration: 'none'}}>
                  Google Marketing Solutions
                </a>
              </li>
              <li>
                <a href='#!' className='text-white' style={{ textDecoration: 'none'}}>
                  Search Engine Optimization
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ borderTop: '1px solid white' , margin: '0 auto', width: '40%'}}>
        
        <a className='text-white' style={{textDecoration:'none'}}>
          Privacy Policy  |  Terms & Conditions
        </a>
      </div>
    </MDBFooter>
  );
}