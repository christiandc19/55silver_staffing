import React from 'react'
import Zoom from 'react-reveal/Zoom';
import { Link as LinkRoll } from "react-scroll";

import './Nursing.css'


const Nursing = () => {
    return (
        <div className='nursing'>

                <div className="nursingContent">
                    <Zoom duration={3000}>
                    <h1>Nurse Placement Services</h1>
                    <p>Our Nurse Placement Services are designed to provide healthcare facilities with highly skilled and compassionate nursing professionals who excel in diverse medical settings.</p>

                    <LinkRoll activeClass="active" to="jobsearch" spy={true} smooth={true} duration={500}>
                            <div className='nursingBtn '>
                                <button>Explore Nursing Jobs</button>
                            </div>
                    </LinkRoll>
                    </Zoom>
            </div>
        </div>
    )
}

export default Nursing
