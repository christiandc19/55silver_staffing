import React from "react";
import './About.css'

import Zoom from 'react-reveal/Zoom';



const About = () => {

    return (
            <>
            <div className='about main-menu'>
                        <div className="about-content">
                                <Zoom duration={3000}>
                                        <h1>Learn More About Us</h1>
                                </Zoom>
                        </div>
                    </div>
            </>
    )

    }
export default About
