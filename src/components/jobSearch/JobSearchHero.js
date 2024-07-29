import React from 'react'
import {Helmet} from "react-helmet";
import './JobSearchHero.css'
import Zoom from 'react-reveal/Zoom';



const JobSearchHero = () => {
    return (

<>
        <Helmet>
            <meta charSet="utf-8" />
            <title>ABOUT US - 55 SILVER</title>
            <link rel="canonical" href="https://https://55silver.biz/about" />
        </Helmet>

        <div className='jobSearchHero'>
                <div className="jobSearchHeroContent">
                    <Zoom duration={3000}>
                    <h1>Explore our Healthcare Jobs</h1>
                    </Zoom>
                </div>
            </div>
</>
    )
}

export default JobSearchHero
