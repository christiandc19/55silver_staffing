import React from 'react';
import './AlliedHealth_II.css';  // Import the CSS file
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from "react-scroll";
import Nurse from '../../../assets/jobSearchHero.webp'

const AlliedHealth_II = () => {
    return (
        <div className="AlliedHealth2Container">
            <div className="AlliedHealth2Image">
                <img src= {Nurse} alt="Allied Health" />
            </div>
            <div className="AlliedHealth2Text">
                <h1>What is Allied Health?</h1>
                <p>
                    Allied health professionals play a crucial role in the healthcare system. 
                    They work alongside doctors, nurses, and other healthcare providers to deliver comprehensive care.
                </p>
                <p>
                    Our team of dedicated allied health professionals includes physical therapists, 
                    occupational therapists, and speech-language pathologists, among others. 
                    They are committed to improving patient outcomes and enhancing quality of life through specialized care.
                </p>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to='/job-search'>
                    <button className="learn-more-btn">Explore Allied Health Jobs</button>
                    </Link>
                </LinkRoll>
            </div>
        </div>
    );
};

export default AlliedHealth_II;
