import React from 'react';
import './StaffingSolutionSection.css';  // Import the CSS file

const StaffingSolutionsSection = () => {
    return (
        <div className="staffing-solutions-container">
            <div className="staffing-solutions-content">
                <div className="text-container">
                    <h1>Staffing Solutions</h1>
                    <p>
                        Our staffing solutions are designed to connect you with the best talent in the industry. 
                        Whether you need temporary, permanent, or contract staffing, we have the expertise to meet your needs.
                    </p>
                    <p>
                        We specialize in a variety of sectors including healthcare, technology, and finance. 
                        Our team of recruitment experts will work closely with you to understand your requirements and 
                        provide tailored staffing solutions that fit your organizational needs.
                    </p>
                    <button className="learn-more-btn">Learn More</button>
                </div>
                <div className="image-container">
                    <img src="https://via.placeholder.com/600x400" alt="Staffing Solutions" />
                </div>
            </div>
        </div>
    );
};

export default StaffingSolutionsSection;
