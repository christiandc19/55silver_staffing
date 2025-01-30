import React, { useState, useEffect } from 'react';
import './SectionOne.css';
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from "react-scroll";
// import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import {Helmet} from "react-helmet";

const HeroPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    require('../../assets/whatwedo1.webp'),
    require('../../assets/male_nurse.webp'),
    require('../../assets/woman_nurse.webp'),
    require('../../assets/female_nurse.webp')
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>

        <Helmet>
            <meta charSet="utf-8" />
            <title>Home - 55 Silver</title>
            <link rel="canonical" href="https://55silver.biz/" />
        </Helmet>
        
    <div className='section-bg'>
    <div className="hero-container container">

      <div className="image-slider">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={index === currentImageIndex ? 'active' : 'inactive'}
          />
        ))}
      </div>

      <div className="hero-text">
      <h1>55 SILVER</h1>
      <h2>Healthcare Staffing</h2>
      <h3>Where Healthcare Professionals and Opportunities Meet</h3>
      <hr/>
      <p>At 55 Silver Healthcare Staffing, our mission is to bridge the gap between healthcare facilities and top-tier professionals. We are committed to providing exceptional staffing solutions that enhance patient care and operational efficiency. By focusing on quality, integrity, and personalized service, we strive to build lasting partnerships that foster growth and success in the healthcare industry.  
        
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to='/nathan-young'>
                  <span> Nathan Young, </span>
                </Link>
              </LinkRoll>

      
      
      with his rich background in healthcare, significantly contributes to our mission of excellence in healthcare staffing.</p>
      <div className='heroIcons'>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to='/job-search'>
                <div className='heroBtn '>
                    <button>Search Jobs</button>
                </div>
                    </Link>
                </LinkRoll>

                {/* <a href="tel:3237920502">       
                <div className='heroIcon heroIconPhone moving-icon'>
                    <FiPhone />
                </div></a> */}
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to='/contact-us'>
                <div className='heroIcon heroIconPhone icon-container'>
                    <TfiEmail />
                </div>
                    </Link>
                </LinkRoll>




      </div>
    </div>

  </div>
  </div>
  </>
  );
}

export default HeroPage;
