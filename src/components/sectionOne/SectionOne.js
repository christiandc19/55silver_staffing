import React, { useState, useEffect } from 'react';
import './SectionOne.css';
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from "react-scroll";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";

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
    <div className='section-bg'>
    <div className="hero-container">

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
      <h1>55 SILVER <br/>Healthcare Staffing</h1>
      <h2>Where Healthcare Professionals and Opportunities Meet</h2>
      <hr/>
      <p>At 55 Silver Healthcare Staffing, we specialize in connecting healthcare facilities with highly qualified professionals, ensuring optimal patient care and operational efficiency. Our comprehensive staffing solutions cover a wide range of medical and allied health disciplines, tailored to meet the unique needs of each client.</p>
      <div className='heroIcons'>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to='/job-search'>
                <div className='heroBtn '>
                    <button>Search Jobs</button>
                </div>
                    </Link>
                </LinkRoll>

                <a href="tel:3237920502">       
                <div className='heroIcon heroIconPhone moving-icon'>
                    <FiPhone />
                </div></a>
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
