import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import logo from '../../assets/nav-logo.png'
import "./FooterStyles.css";
// import JointCommission from "../../assets/joint_commission_logo.webp";

import { Link as LinkRoll } from "react-scroll";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">

          <div className="top">
            <div className="logo-footer">
              <div className="footer-logo">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to='/'>
                    <img src={logo} alt="55 Silver Logo" loading="lazy"/>
                  </Link>
              </LinkRoll>

              </div>
            </div>
            <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <BsFillArrowUpCircleFill className="icon" />
                </LinkRoll>
              </div>

            </div>

          <div className="footerFlex">


            <div className="footerFlexItem">
                <h1>COMPANY</h1>

                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/about-us">
                    <p>About Us</p>
                  </Link>
                </LinkRoll>

                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/contact-us">
                    <p>Contact Us</p>
                  </Link>
                </LinkRoll>

                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/privacy-policy">
                    <p>Privacy Policy</p>
                  </Link>
                </LinkRoll>

            </div>

            <div className="footerFlexItem">
                <h1>Specialties</h1>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/nursing">
                    <p>Nursing</p>
                  </Link>
                </LinkRoll>

                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/behavioral-health">
                    <p>Behavioral health</p>
                  </Link>
                </LinkRoll>

                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/allied-health">
                    <p>Allied Health</p>
                  </Link>
                </LinkRoll>
            </div>

            <div className="footerFlexItem">
                <h1>Services</h1>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/staffing-solutions">
                    <p>Staffing Solutions</p>
                  </Link>
                </LinkRoll>

                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/job-search">
                    <p>Search Jobs</p>
                  </Link>
                </LinkRoll>
            </div>


          </div>




          
          <p className="copyright">
            <p>
              &copy; 2025 55 Silver Healthcare Staffing LLC. All rights
              reserved
            </p>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
