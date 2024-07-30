import React from 'react'
import Zoom from 'react-reveal/Zoom';
import { Link as LinkRoll } from "react-scroll";
import { Link } from 'react-router-dom';
import './StaffingSolution.css'


const StaffingSolution = () => {
    return (
        <div className='staffingSolution'>

                <div className="staffingSolutionContent">
                    <Zoom duration={3000}>
                    <h1>Staffing Solutions</h1>
                    <p>Flexible solutions to meet your changing needs.</p>
                    <LinkRoll activeClass="active" spy={true} smooth={true} duration={500}>
                    <Link to="/contact-us" >
                            <div className='nursingBtn '>
                                <button>Request Talents</button>
                            </div>
                    </Link>
                    </LinkRoll>
                    </Zoom>
            </div>
        </div>
    )
}

export default StaffingSolution
