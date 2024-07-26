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
                <img src={logo} alt="Contra Costa Rehab Logo" loading="lazy"/>
                <h2>HAVE SOME QUESTIONS?</h2>
                <p>Our Addiction and Recovery Support team is available to assist you.</p>
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
                  <Link to="/mission">
                    <p>Our Mission</p>
                  </Link>
                </LinkRoll>

                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/about-us">
                    <p>About Us</p>
                  </Link>
                </LinkRoll>

                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="contact">
                    <p>Contact Us</p>
                  </Link>
                </LinkRoll>
            </div>

            <div className="footerFlexItem">
                <h1>Navigation</h1>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/">
                    <p>Home</p>
                  </Link>
                </LinkRoll>

                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/insurance">
                    <p>Insurance</p>
                  </Link>
                </LinkRoll>

                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/jobs">
                    <p>Job Assistance</p>
                  </Link>
                </LinkRoll>
            </div>

            <div className="footerFlexItem">
                <h1>PROGRAMS</h1>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/partial-hospitalization-program">
                    <p>Partial Hospitalization Program</p>
                  </Link>
                </LinkRoll>

                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/intensive-outpatient-program">
                    <p>Intensive Outpatient Program</p>
                  </Link>
                </LinkRoll>

                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/outpatient-program">
                    <p>Outpatient Program</p>
                  </Link>
                </LinkRoll>
            </div>

            <div className="footerFlexItem">
                <h1>SERVICES</h1>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/case-management">
                    <p>Case Management</p>
                  </Link>
                </LinkRoll>
 
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/crisis-intervention">
                    <p>Crisis Intervention</p>
                  </Link>
                </LinkRoll>

                <LinkRoll activeClass="active" to="scroll" spy={true} smooth={true} duration={500}>
                  <Link to="/crisis-intervention">
                    <p>Crisis Intervention</p>
                  </Link>
                </LinkRoll>

                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/family-therapy">
                    <p>Family Therapy</p>
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
