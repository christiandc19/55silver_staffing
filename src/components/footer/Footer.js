import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import logo from '../../assets/nav-logo.png'
import "./FooterStyles.css";
import JointCommission from "../../assets/joint_commission_logo.webp";

import { Link as LinkRoll } from "react-scroll";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">

          <div className="top">
            <div className="logo-footer">
              <div className="footer-logo">
                <img src={logo} alt="55 Silver Logo" loading="lazy"/>
              </div>
                
                <h2>HAVE SOME QUESTIONS?</h2>
                <p>At 55 Silver, we are here to assist you with all your healthcare staffing needs. Whether you require temporary, permanent, or specialized staffing solutions, our dedicated team is ready to provide the best professionals for your facility.</p>
                <p>(323-) 792-0502</p>
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
                  <Link to="/">
                    <p>Home</p>
                  </Link>
                </LinkRoll>

                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/about-us">
                    <p>About Us</p>
                  </Link>
                </LinkRoll>

                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="contact-us">
                    <p>Contact Us</p>
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
                  <Link to="/workforce-management">
                    <p>Workforce Management</p>
                  </Link>
                </LinkRoll>

                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/job-search">
                    <p>Job Search</p>
                  </Link>
                </LinkRoll>
            </div>


          </div>



          <div className="certification">

            <div className="certificationLogo">
                <h3>55 Silver Healthcare Staffing is accredited by The Joint Commission and have been awarded its Gold Seal of Approval™</h3>
                
                    <div className='certificationLogoImage'>
                        <img
                        src={JointCommission}
                        alt="Joint Commission Logo"
                        loading="lazy"
                        />
                    </div>
              </div>
        </div>



          <hr />
          
          <p className="copyright">
            <p>
              &copy; 2022 55 Silver Healthcare Staffing LLC. All rights
              reserved
            </p>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
