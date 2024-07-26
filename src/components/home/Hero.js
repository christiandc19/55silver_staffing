import React from "react";
import TextAnimation from './TypingAnimation';


// import { Link as LinkRoll } from "react-scroll";
// import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import Wave from '../../assets/waves.svg'

import "./Hero.css";

const Hero = () => {

  const words = [
    "Nursing",
    "Allied Health",
    "Behavioral Health",
    "Correctional Health"
  ];

  return (
    <>

        <Helmet>
            <meta charSet="utf-8" />
            <title>HOME - 55 SILVER</title>
            <link rel="canonical" href="https://https://55silver.biz/" />
        </Helmet>

        <div className='hero'>
  
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div> 

          <div className="hero-container">
            <div className="heroContent">
              <div className='content-caption'>
                <h1>55 SILVER HEALTHCARE STAFFING</h1>
                <h1>Where Healthcare Professionals and Opportunities Meet</h1>
                <div className="linebreak">
                  <hr />
                </div>
                <h2><TextAnimation words={words} fadeDuration={2000} displayDuration={2000} /></h2>
                <div className="heroContentBtn">
                <div className="butttonOne">
                  <button>I'm Ready for Opportunity</button>
                </div>
                <div className="buttonTwo">
                  <button>We Need Healthcare Staff</button>
                </div>
              </div>

              </div>

              {/* <div className="heroContentBtn">
                <div className="butttonOne">
                  <button>I'm Ready for Opportunity</button>
                </div>
                <div className="buttonTwo">
                  <button>We Need Healthcare Staff</button>
                </div>
              </div> */}

            </div>
          </div>
        </div>

    </>
  );
};

export default Hero;
