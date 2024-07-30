import React from 'react'
import Zoom from 'react-reveal/Zoom';
import { Link as LinkRoll } from "react-scroll";

import './LocumTenens.css'


const LocumTenens = () => {
    return (
        <div className='locumTenens'>

                <div className="locumTenensContent">
                    <Zoom duration={3000}>
                    <h1>Locum Tenens Placement Services</h1>
                    <p>Our Nurse Placement Services are designed to provide healthcare facilities with highly skilled and compassionate nursing professionals who excel in diverse medical settings.</p>

                    <LinkRoll activeClass="active" to="jobsearch" spy={true} smooth={true} duration={500}>
                            <div className='locumTenensBtn '>
                                <button>Explore Nursing Jobs</button>
                            </div>
                    </LinkRoll>
                    </Zoom>
            </div>
        </div>
    )
}

export default LocumTenens
