import React from 'react'
import "./Component3.css";
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";

import woman_relaxing from "../../assets/female_nurse_2.webp";

const Component3 = () => {
  return (
    <>
      
      {/* MENTAL HEALTH SERVICES */}
      <div className="component3">


          <div className="component3-content container">

          <div className="c3-left">
          <h1>ABOUT US</h1>            
          <h2>Connecting Excellence with Compassion in Healthcare Staffing</h2>

            <p>
            At 55 Silver Healthcare Staffing, we are passionate about connecting healthcare facilities with exceptional professionals. Our mission is to enhance the quality of patient care and operational efficiency through comprehensive staffing solutions tailored to the unique needs of each client.</p>
            <p>With years of industry experience, our team of dedicated recruiters and healthcare experts specializes in sourcing, vetting, and placing highly qualified medical and allied health professionals. We cover a wide range of specialties, including nursing, dental, optometry, mental health, telehealth, biotechnology, physical therapy, behavioral health, and correctional health.</p>
            <p>Our rigorous selection process ensures that every candidate not only meets the required credentials but also embodies our core values of compassion, integrity, and dedication to excellence. By partnering with Benoux Agency Staffing, healthcare facilities gain access to a reliable and skilled workforce, enabling them to maintain high standards of care and achieve operational excellence</p> <br/>

            <div className='c3-btn'>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/about-us">
                        <button>Learn More</button>
                  </Link>
              </LinkRoll>
          </div>

          </div>


          <div className="c3-right">

            
            <div className='c3-right-img'>
              <img src={woman_relaxing} alt="woman_relaxing" loading="lazy" />
            </div>
            

          </div>
          </div>
        </div>


    </>
  )
}

export default Component3
