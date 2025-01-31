import React from 'react'
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from "react-scroll";
import {Helmet} from "react-helmet";

import './Nursing.css'


const Nursing = () => {
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Nursing - 55 Silver</title>
            <link rel="canonical" href="https://55silver.biz/nursing" />
        </Helmet>
        <div className='nursing'>

                <div className="nursingContent">
                    <Zoom duration={3000}>
                    <h1>Nurse Placement Services</h1>
                    <p>Our Nurse Placement Services are designed to provide healthcare facilities with highly skilled and compassionate nursing professionals who excel in diverse medical settings.</p>

                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to='/job-search'>
                                <div className='nursingBtn '>
                                    <button>Explore Nursing Jobs</button>
                                </div>
                    </Link>
                </LinkRoll>
                    </Zoom>
            </div>
        </div>
        </>
    )
}

export default Nursing
