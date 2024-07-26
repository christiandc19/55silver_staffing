import React from 'react'
import Zoom from 'react-reveal/Zoom';
import { Link as LinkRoll } from "react-scroll";

import './AlliedHealth.css'


const AlliedHealth = () => {
    return (
        <div className='alliedHealth'>

                <div className="alliedHealthContent">
                    <Zoom duration={3000}>
                    <h1>Allied Health Recruitment</h1>
                    <p>Whether you need temporary staffing, permanent placements, or specialized professionals for specific projects, 55 Silver is here to support you every step of the way.</p>

                    <LinkRoll activeClass="active" to="jobsearch" spy={true} smooth={true} duration={500}>
                            <div className='nursingBtn '>
                                <button>Allied Health Jobs</button>
                            </div>
                    </LinkRoll>
                    </Zoom>
            </div>
        </div>
    )
}

export default AlliedHealth
