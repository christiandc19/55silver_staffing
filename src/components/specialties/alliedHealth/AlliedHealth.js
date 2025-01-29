import React from 'react'
import Zoom from 'react-reveal/Zoom';
import {Helmet} from "react-helmet";

import './AlliedHealth.css'


const AlliedHealth = () => {
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Allied Health - 55 SILVER</title>
            <link rel="canonical" href="https://55silver.biz/allied-health" />
        </Helmet>
        <div className='alliedHealth'>

                <div className="alliedHealthContent">
                    <Zoom duration={3000}>
                    <h1>Allied Health Recruitment</h1>
                    <p>Whether you need temporary staffing, permanent placements, or specialized professionals for specific projects, 55 Silver is here to support you every step of the way.</p>
                    </Zoom>
            </div>
        </div>
        </>
    )
}

export default AlliedHealth
