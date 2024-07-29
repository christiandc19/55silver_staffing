import React from 'react';
import './AlliedHealthSection.css';  // Import the CSS file

const AlliedHealth = () => {
    return (
        <div className="allied-health-container">
            <div className="image-container">
                <img src="https://via.placeholder.com/600x400" alt="Allied Health" />
            </div>
            <div className="text-container">
                <h1>Allied Health Professionals</h1>
                <p>
                    Allied health professionals play a crucial role in the healthcare system. 
                    They work alongside doctors, nurses, and other healthcare providers to deliver comprehensive care.
                </p>
                <p>
                    Our team of dedicated allied health professionals includes physical therapists, 
                    occupational therapists, and speech-language pathologists, among others. 
                    They are committed to improving patient outcomes and enhancing quality of life through specialized care.
                </p>
                <button className="learn-more-btn">Learn More</button>
            </div>
        </div>
    );
};

export default AlliedHealth;
