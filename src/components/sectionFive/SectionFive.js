import React from 'react'
import './SectionFive.css'
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from "react-scroll";

// import woman_relaxing from "../../assets/group_nurses.webp";



const SectionFive = () => {
  return (
    <>
      <div className='sectionFive'>
          <div className='sectionFiveContent'>

              <div className='sectionFiveFlex'>

                <div className='sectionFiveImage'>
                  {/* <img src={woman_relaxing} alt='Medical Professionals' loading='lazy' /> */}
                </div>


                <div className='sectionFiveText'>
                  <h1>Job Positions We Hire</h1>
                  <h2>At 55 Silver, we pride ourselves on providing exceptional staffing solutions across a wide range of healthcare disciplines. Our mission is to connect talented professionals with rewarding opportunities in the healthcare industry. Explore the diverse job positions we hire for:</h2>

                  <ul>
                    <li>Nurses</li>
                    <li>Physicians</li>
                    <li>TMS Technicians</li>
                    <li>Behavioral Health Technicians</li>
                    <li>Program Directors</li>
                    <li>Counselors</li>
                    <li>Therapists</li>
                    <li>Group Facilitators</li>
                    <li>Group Monitors</li>
                    <li>Clinical Directors</li>
                  </ul>
                  <h2>We are committed to ensuring that every professional we place is well-qualified and suited to meet the specific needs of the healthcare facilities and patients they serve. Join us in making a difference in healthcare. If you are a dedicated professional looking to advance your career, 55 Silver is here to help you find the perfect fit. <br />For more information or to apply for a position, please contact us today.</h2>

                  <div className="sectionFiveBtn">
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                        <Link to='/contact-us'>
                          <div className="sectionFiveButton1">
                            <button>Contact Us</button>
                          </div>
                        </Link>
                    </LinkRoll>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </>
  )
}

export default SectionFive