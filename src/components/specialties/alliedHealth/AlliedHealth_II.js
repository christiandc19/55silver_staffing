import React from 'react';
import './AlliedHealth_II.css';  // Import the CSS file
// import { Link } from 'react-router-dom';
// import { Link as LinkRoll } from "react-scroll";
import Nurse from '../../../assets/male_nurse_II.webp'

const AlliedHealth_II = () => {
    return (
<>
        <div className="AlliedHealth2Container container">

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

                <h1>Roles We Staff</h1>
                <ul>
                    <li>Behavioral Health Technicians</li>
                    <li>Medication Technicians</li>
                    <li>Support Staff</li>
                    <li>Group Monitors</li>
                    <li>Group Facilitators</li>
                    <li>Drug and Alcohol Counselors</li>
                </ul>
            </div>

            <div className="AlliedHealth2Image">
                <img src= {Nurse} alt="Allied Health" />
            </div>


        </div>

<hr className='hrLine container'/>
</>

    );
};

export default AlliedHealth_II;
