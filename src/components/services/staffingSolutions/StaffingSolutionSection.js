import React from 'react';
import './StaffingSolutionSection.css';  // Import the CSS file
import { Link as LinkRoll } from "react-scroll";
import { Link } from 'react-router-dom';


import MedicalStaff from '../../../assets/medical_staff.webp'
const StaffingSolutionsSection = () => {
    return (
        <div className="staffing-solutions-container container">
            <div className="staffing-solutions-content">
                <div className="text-container">
                    <h1>55 Silver Healthcare Staffing Solutions</h1>
                    <h2>Comprehensive Staffing Services Tailored to Your Needs</h2>
                    <p>
                        Our staffing solutions are designed to connect you with the best talent in the industry. 
                        Whether you need temporary, permanent, or contract staffing, we have the expertise to meet your needs. <br/>

                        We specialize in a variety of sectors including healthcare, technology, and finance. 
                        Our team of recruitment experts will work closely with you to understand your requirements and 
                        provide tailored staffing solutions that fit your organizational needs.
                    </p>
                    <LinkRoll activeClass="active" to='top' spy={true} smooth={true} duration={500}>
                    <Link to="/contact-us" >
                            <div className='StaffingSolutionBtn '>
                                <button>Request Talents</button>
                            </div>
                    </Link>
                    </LinkRoll>

                </div>
                <div className="image-container">
                    <img src={MedicalStaff} alt="Staffing Solutions" loading='lazy'/>
                </div>
            </div>
        </div>
    );
};

export default StaffingSolutionsSection;
