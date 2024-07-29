import React from 'react'
import './SectionThree.css'
// import { CiCircleCheck } from "react-icons/ci";

import {Link} from 'react-router-dom'
import { Link as LinkRoll } from 'react-scroll'



const sectionThree = () => {
  return (
<>
  <div className="sectionThree container">
      <div className="sectionThreeContent">

          <div className="sectionThreeCaption">
            <h1>Comprehensive Healthcare Staffing Solutions</h1>
            <p>
            55 Silver Healthcare Staffing delivers comprehensive healthcare staffing solutions, connecting medical facilities with top-tier professionals across diverse specialties. Our tailored approach ensures optimal patient care, operational efficiency, and support for all healthcare needs.</p>


            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to='/contact-us'>
                    <div className='sectionThreeBtn'>
                        <button>Request a Professional</button>
                    </div>
                </Link>
            </LinkRoll>

          </div>

          <div className="sectionThreeImage">

            </div>




          </div>


        </div>
</>
  )
}

export default sectionThree