import React from 'react'
import Zoom from 'react-reveal/Zoom';
import { Link as LinkRoll } from "react-scroll";

import './WorkforceManagement.css'


const WorkforceManagement = () => {
    return (
        <div className='workforceManagement'>

                <div className="workforceManagementContent">
                    <Zoom duration={3000}>
                    <h1>Workforce Management Services</h1>
                    <p>Comprehensive solutions to meet your staffing needs nationwide.</p>

                    <LinkRoll activeClass="active" to="jobsearch" spy={true} smooth={true} duration={500}>
                            <div className='nursingBtn '>
                                <button>Request a Workforce Management</button>
                            </div>
                    </LinkRoll>
                    </Zoom>
            </div>
        </div>
    )
}

export default WorkforceManagement
