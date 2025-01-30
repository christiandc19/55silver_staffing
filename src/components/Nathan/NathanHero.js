import React from "react";
import './NathanHero.css'
import {Helmet} from "react-helmet";

import Zoom from 'react-reveal/Zoom';



const NathanHero = () => {

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Nathan Young - 55 Silver</title>
                <link rel="canonical" href="https://55silver.biz/nathan-young" />
            </Helmet>

            <div className='nathan-hero container'>
                        <div className="nathan-hero-content">
                                <Zoom duration={1500}>
                                        <h1>Nathan Young</h1>
                                </Zoom>
                        </div>
                    </div>
            </>
    )

    }
export default NathanHero
