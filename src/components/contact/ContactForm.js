import React, { useRef, useState } from "react";
import { BsFillPinMapFill } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import './ContactForm.css';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const form = useRef();
    const [buttonText, setButtonText] = useState("Submit");

    const sendEmail = (e) => {
        e.preventDefault();

        setButtonText("Sending...");

        // Send email using EmailJS
        emailjs.sendForm("service_bdfl0ie", "template_i8qb2st", form.current, 'CLcHWAKSemVMd1_sU')
            .then((result) => {
                console.log(result.text);
                setButtonText("Message Sent");
                setTimeout(() => setButtonText("Submit"), 3000); // Reset button after 3 seconds
            }, (error) => {
                console.log(error.text);
                setButtonText("Submit");
            });

        e.target.reset();
    };

    return (
        <>
            <div className="contactform">
                <section className="container">
                    <div className="footer_get_touch_inner">
                        <div className="get_form_inner">
                            <div className="get_form_inner_text">
                                <h3>Get In Touch</h3>
                                <p><i>We'll keep your contact information strictly confidential.</i></p><br />
                            </div>
                            <form ref={form} onSubmit={sendEmail} encType="multipart/form-data">
                                <div className="inputs">
                                    <input 
                                        type="text" 
                                        name="name" 
                                        placeholder="Your Name" 
                                        required 
                                        pattern="[A-Za-z\s]+" 
                                        title="Name should only contain letters." 
                                    /> 
                                    <br />
                                    <input 
                                        type="email" 
                                        name="email" 
                                        placeholder="Your Email" 
                                        required 
                                        title="Please enter a valid email address." 
                                    /> 
                                    <br />
                                    <input 
                                        type="tel" 
                                        name="phone" 
                                        placeholder="Your Phone" 
                                        required 
                                        pattern="\+?\d{1,4}[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}" 
                                        title="Phone number should be in valid format, e.g., +1 (123) 456-7890" 
                                    /> 
                                    <br />
                                    <input 
                                        type="text" 
                                        name="subject" 
                                        placeholder="Subject" 
                                        required 
                                    /> 
                                    <br />
                                </div>
                                <div>
                                    <textarea 
                                        name="message" 
                                        placeholder="How can we help?" 
                                        cols="30" 
                                        rows="10" 
                                        required 
                                    ></textarea>

                                    <div className="disclaimer">
                                        <p>55 Silver LLC needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, please review our  
                                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                                            <Link to="/privacy-policy"><span> Privacy Policy </span></Link>
                                        </LinkRoll></p>
                                    </div>

                                    <input 
                                        type="submit" 
                                        value={buttonText} 
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                <div className="contact-cards-container">
                    <div className="get_form_inner2 card1">
                        <h2>CALL US</h2>
                        <p><AiOutlinePhone /><a href="tel:3105267505"> +1 (310) 526-7505</a></p>
                    </div>

                    <div className="get_form_inner2 card2">
                        <h2>EMAIL</h2>
                        <p><AiOutlineMail /> info@55silver.biz</p><br />
                    </div>

                    <div className="get_form_inner2 card3">
                        <h2>LOCATION</h2>
                        <p><BsFillPinMapFill /> 1800 Vine Street, Los Angeles CA 90028</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactForm;
