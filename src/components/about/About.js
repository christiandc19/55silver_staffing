import React from "react";
import './About.css'
import {Helmet} from "react-helmet";

import Zoom from 'react-reveal/Zoom';



const About = () => {

    return (
        <>
                <Helmet>
                <meta charSet="utf-8" />
                <title>About Us - 55 Silver</title>
                <link rel="canonical" href="https://55silver.biz/about-us" />
                </Helmet>
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
