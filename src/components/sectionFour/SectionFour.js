import React from "react";
import "./SectionFour.css";
import { CiCircleCheck } from "react-icons/ci";
import {Link} from 'react-router-dom'
import { Link as LinkRoll } from 'react-scroll'

const SectionFour = () => {
  return (
    <>
      <div className="sectionFour">
        <div className="sectionFourContent">
          <div className='sectionFourCaption'>
              <h1>Staffing Services We Provide Include:</h1>
              <p><span><CiCircleCheck /></span> Contract </p>
              <p><span><CiCircleCheck /></span> Contract-to-Hire </p>
              <p><span><CiCircleCheck /></span> Permanent Placement </p>
              <p><span><CiCircleCheck /></span> Payrolling </p>

              <div className='sectionThreeImageCaptionBtn'>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                  <Link to='/about-us'><button>Learn More</button></Link>
                </LinkRoll>
              </div>
            </div>
            



        </div>
      </div>
    </>
  );
};

export default SectionFour;
