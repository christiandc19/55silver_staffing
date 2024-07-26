import React from 'react'
import './SectionFive.css'
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from "react-scroll";




const SectionFive = () => {
  return (
    <>
        <div className='sectionFive'>
            <div className='sectionFiveContent'>
                <h1>Get Started With 55 Silver</h1>
                <h2>Our mission is to be an employer of choice for nursing and allied health professionals, serving healthcare facilities with best practice supplemental staffing solutions.</h2>

                <div className="sectionFiveBtn">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to='/staffing-solutions'>
                      <div className="sectionFiveButton1">
                        <button>Staffing Solutions</button>
                      </div>
                    </Link>
                </LinkRoll>


                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to='/workforce-management'>
                      <div className="sectionFiveButton2">
                        <button>Workforce Management</button>
                      </div>
                    </Link>
                </LinkRoll>

              </div>
                </div>
            </div>

    </>
  )
}

export default SectionFive