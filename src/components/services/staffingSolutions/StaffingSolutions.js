import React from 'react'
import Zoom from 'react-reveal/Zoom';
import './StaffingSolution.css'
import {Helmet} from "react-helmet";


const StaffingSolution = () => {
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Staffing Solutions - 55 Silver</title>
            <link rel="canonical" href="https://55silver.biz/staffing-solutions" />
        </Helmet>
        <div className='staffingSolution'>

                <div className="staffingSolutionContent">
                    <Zoom duration={3000}>
                    <h1>Staffing Solutions</h1>
                    <p>Flexible solutions to meet your changing needs.</p>
                    </Zoom>
            </div>
        </div>
        </>
    )
}

export default StaffingSolution
