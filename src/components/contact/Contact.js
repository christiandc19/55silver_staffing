import React from "react";
import {Helmet} from "react-helmet";
import './Contact.css'


const Contact = () => {

    return (
      <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>CONTACT US - 55 SILVER</title>
            <link rel="canonical" href="https://https://55silver.biz/contact" />
        </Helmet>

      <div className='contact-hero'>
            <div className="contact-hero-content">
                    <h1>HAVE SOME QUESTIONS?</h1>
                  <p>Talk to a member of our Addiction and Recovery Support team. </p>
     
                  <h2> +1 (213) 584-4445 </h2>

            </div>
     </div>


      </>
    )
}

export default Contact