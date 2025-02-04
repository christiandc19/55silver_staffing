import React from 'react'
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';
import { Link as LinkRoll } from "react-scroll";
import {Helmet} from "react-helmet";

import './BehavioralHealth.css'


const BehavioralHealth = () => {
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Behavioral Health - 55 Silver</title>
            <link rel="canonical" href="https://55silver.biz/behavioral-health" />
        </Helmet>
        <div className='behavioralHealth'>

                <div className="behavioralHealthContent">
                    <Zoom duration={3000}>
                    <h1>Behavioral Health Recruiters</h1>
                    <p>At 55 Silver, we understand the critical role that behavioral health professionals play in providing comprehensive mental health care. </p>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to='/job-search'>
                            <div className='nursingBtn '>
                                <button>Explore Behavioral Health Jobs</button>
                            </div>
                    </Link>
                </LinkRoll>
                    </Zoom>
            </div>
        </div>
        </>
    )
}

export default BehavioralHealth
