import React from 'react';
import './WorkforceManagementSection.css'; // Import the CSS file

const WorkforceManagementSection = () => {
    return (
        <section className="workforce-management-section">

            <div className="content-container container">

                <div className="image-container">
                    <img src="https://via.placeholder.com/600x400" alt="Workforce Management" />
                </div>

                <div className="text-container">
                    <h1>Efficient Workforce Management</h1>
                    <p>
                        Our workforce management solutions are designed to streamline operations,
                        enhance productivity, and ensure optimal staffing levels. We provide tools
                        and strategies to manage your team effectively and efficiently.
                    </p>
                    <p>
                        From advanced scheduling software to real-time analytics, our solutions
                        help you stay ahead of the curve and adapt to changing demands. Discover
                        how our expertise can transform your workforce management and drive success.
                    </p>
                    <button className="learn-more-btn">Learn More</button>
                </div>

            </div>

        </section>
    );
};

export default WorkforceManagementSection;
