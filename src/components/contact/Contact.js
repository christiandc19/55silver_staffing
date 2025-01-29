import React from "react";
import {Helmet} from "react-helmet";
import './Contact.css'


const Contact = () => {

    return (
      <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Contact Us - 55 Silver</title>
            <link rel="canonical" href="https://55silver.biz/contact" />
        </Helmet>

      <div className='contact-hero'>
            <div className="contact-hero-content">
                    <h1>HAVE SOME QUESTIONS?</h1>
                  <p>Talk to a member of our healthcare recruiting experts. </p>
     
                  {/* <h2> +1  (310) 526-7505 </h2> */}

            </div>
     </div>


      </>
    )
}

export default Contact