import React from 'react'
import Zoom from 'react-reveal/Zoom';
import { Link as LinkRoll } from "react-scroll";

import './BehavioralHealth.css'


const BehavioralHealth = () => {
    return (
        <div className='behavioralHealth'>

                <div className="behavioralHealthContent">
                    <Zoom duration={3000}>
                    <h1>Behavioral Health Recruiters</h1>
                    <p>At 55 Silver, we understand the critical role that behavioral health professionals play in providing comprehensive mental health care. </p>
                    <LinkRoll activeClass="active" to="jobsearch" spy={true} smooth={true} duration={500}>
                            <div className='nursingBtn '>
                                <button>Explore Behavioral Health Jobs</button>
                            </div>
                    </LinkRoll>
                    </Zoom>
            </div>
        </div>
    )
}

export default BehavioralHealth
