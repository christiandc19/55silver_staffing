import React from "react";
import "./AboutSection.css";
import AboutUs from "../../assets/about-section-min.webp";

const AboutSection = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-content container">
          <div className="about-content-left">
            <img src={AboutUs} alt="nurse" loading="lazy" />
          </div>

          <div className="about-content-right">
            <h1>Welcome to 55 Silver Healthcare Staffing</h1> 
            <h2>Work in Progress...</h2>
            {/* <p>
            At 55 Silver Healthcare Staffing, we are dedicated to bridging the gap between healthcare facilities and exceptional professionals. With a commitment to excellence and a deep understanding of the healthcare industry's unique demands, we provide tailored staffing solutions that meet the diverse needs of our clients.<br/> <br/>Our team comprises experienced recruiters and industry experts who specialize in sourcing, vetting, and placing highly qualified medical and allied health professionals. We cover a wide range of specialties, including nursing, dental, optometry, mental health, telehealth, biotechnology, physical therapy, behavioral health, and correctional health.
            </p>
            <h1>Our Mission</h1> 
            <p>
            Our mission is to enhance healthcare delivery by providing staffing solutions that are efficient, responsive, and customized to the unique requirements of each client. Whether you need temporary staffing, permanent placements, or specialized professionals for specific projects, Benoux Agency Staffing is here to support you every step of the way.
            </p>
            <h1>Join Our Team! </h1> 
            <p>Join us in our commitment to improving healthcare outcomes through exceptional staffing solutions. Together, we can ensure that patients receive the best possible care and that healthcare facilities operate at their highest potential.</p>
 */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
