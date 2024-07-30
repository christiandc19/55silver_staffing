import React from 'react';
import './CorrectionalHealthSection.css';  // Import the CSS file
// import { Link } from 'react-router-dom';
// import { Link as LinkRoll } from "react-scroll";
import Nurse from '../../../assets/female_nurse_2.webp'

const correctionalHealthSection = () => {
    return (
        <div className="correctionalHealthSection container">
            <div className="correctionalHealthSectionImage">
                <img src= {Nurse} alt="Allied Health" />
            </div>
            <div className="correctionalHealthSectionText">
                <h1>Correctional Health Staffing</h1>
                <h2>Delivering Quality Healthcare in Correctional Facilities</h2>
                <p>
                At 55 Silver Healthcare Staffing, we understand the unique challenges and demands of providing healthcare in correctional settings. Our specialized correctional health staffing solutions ensure that correctional facilities receive the highest quality care, delivered by skilled professionals dedicated to improving the health and well-being of incarcerated individuals.
                </p>
                <h1>Roles We Staff</h1>
                <p>
                We specialize in providing a wide range of healthcare professionals for correctional facilities, including:
                </p>
                <ul>
                    <li>Physicians: General practitioners, psychiatrists, and specialists.</li>
                    <li>Nurses: Registered nurses, nurse practitioners, and licensed practical nurses.</li>
                    <li>Mental Health Professionals: Psychologists, counselors, and social workers.</li>
                    <li>Allied Health Professionals: Physical therapists, occupational therapists, radiologic technologists, and more.</li>
                    <li>Support Staff: Medical assistants, administrative staff, and other support roles.</li>
                </ul>
                {/* <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to='/job-search'>
                    <div className='correctionalHealthSectionBtn'>
                    <button className="learn-more-btn">Explore Allied Health Jobs</button>
                    </div>
                    </Link>
                </LinkRoll> */}
            </div>
        </div>
    );
};

export default correctionalHealthSection;
