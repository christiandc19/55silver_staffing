import React from "react";
import "./AboutSection.css";
import AboutUs from "../../assets/about_us_section.webp";

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
            </p>
            <h1>Our Mission</h1> 
            <p>
            Our mission is to provide comprehensive staffing solutions that meet the evolving needs of the healthcare industry. We are committed to delivering top-tier talent and unparalleled service, ensuring that our clients can focus on what matters most: providing outstanding patient care.
            </p>
            <h1>Our Vision</h1> 
            <p>At 55 Silver Healthcare Staffing, our vision is to revolutionize the healthcare staffing industry by providing unparalleled service and support to both healthcare facilities and professionals. Together, we aim to build a future where healthcare staffing is seamless, efficient, and driven by a commitment to quality and excellence.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
