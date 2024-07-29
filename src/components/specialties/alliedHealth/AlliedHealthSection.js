import React from 'react';
import './AlliedHealthSection.css';  // Import the CSS file
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from "react-scroll";
import Nurse from '../../../assets/jobSearchHero.webp'

const AlliedHealth = () => {
    return (
        <div className="allied-health-container container">
            <div className="AlliedHealthImage">
                <img src= {Nurse} alt="Allied Health" />
            </div>
            <div className="AlliedHealthText">
                <h1>Allied Health Professionals</h1>
                <h2>Discover Your Next Career Opportunity</h2>
                <p>
                At 55 Silver Healthcare Staffing, we understand the critical role that allied health professionals play in delivering comprehensive healthcare. From diagnostic services to therapeutic care, your expertise is vital to patient outcomes and the overall healthcare experience. We are committed to connecting you with rewarding opportunities that match your skills and career goals.
                </p>
                <p>
                    Our team of dedicated allied health professionals includes physical therapists, 
                    occupational therapists, and speech-language pathologists, among others. 
                    They are committed to improving patient outcomes and enhancing quality of life through specialized care.
                </p>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to='/job-search'>
                    <div className='alliedHealthSectionBtn'>
                    <button className="learn-more-btn">Explore Allied Health Jobs</button>
                    </div>
                    </Link>
                </LinkRoll>
            </div>
        </div>
    );
};

export default AlliedHealth;
