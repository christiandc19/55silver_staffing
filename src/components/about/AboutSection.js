import React from "react";
import "./AboutSection.css";
import AboutUs from "../../assets/about_us_section.webp";
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from "react-scroll";

const AboutSection = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-content container">
          <div className="about-content-left">
            <img src={AboutUs} alt="nurse" loading="lazy" />
          </div>

          <div className="about-content-right">
            <h1>Who We Are</h1> 
            <p>
              At 55 Silver Healthcare Staffing, we are dedicated to bridging the gap between exceptional healthcare professionals and the facilities that need them. Founded on the principles of integrity, excellence, and personalized service, we strive to create lasting partnerships that enhance patient care and improve operational efficiency. 
              
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to='/nathan-young'>
                  <span> Nathan Young, </span>
                </Link>
              </LinkRoll>
              
              with his rich background in healthcare, significantly contributes to our mission of excellence in healthcare staffing.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
