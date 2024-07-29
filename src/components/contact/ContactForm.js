import React, { useRef, useState } from "react";
import { BsFillPinMapFill } from 'react-icons/bs';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import './ContactForm.css';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const form = useRef();
    const [feedbackVisible, setFeedbackVisible] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        // Create a FormData object
        const formData = new FormData(form.current);

        // Append the file to the FormData object
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput.files.length > 0) {
            formData.append('attachment', fileInput.files[0]);
        }

        // Convert FormData to a plain object
        const formDataObj = Object.fromEntries(formData.entries());

        // Debug: Log form data
        for (let [key, value] of Object.entries(formDataObj)) {
            console.log(`${key}: ${value}`);
        }

        // Popup message after send button is clicked
        setFeedbackVisible(true);
        setTimeout(() => {
            setFeedbackVisible(false);
        }, 3000);

        // Send email using EmailJS
        emailjs.send('service_hsunksm', 'template_rxc8sbg', formDataObj, 'Rj5e7bWJla-kOEL0H')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
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
                                    <input type="text" name="name" placeholder="Your Name" required /> <br />
                                    <input type="email" name="email" placeholder="Your Email" required /> <br />
                                    <input type="tel" name="phone" placeholder="Your Phone" required /> <br />
                                    <input type="text" name="subject" placeholder="Subject" required /> <br />
                                </div>
                                <div>
                                    <textarea name="message" placeholder="How can we help?" cols="30" rows="10" required></textarea>
                                    {/* <input type="file" name="attachment" /> */}
                                    <input type="submit" value="Submit" />
                                </div>

                                {feedbackVisible && (
                                    <div className="textarea2 feedback">
                                        <textarea name="message2" cols="30" rows="3" readOnly>Message Sent to 55 Silver!</textarea>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </section>

                <div className="contact-cards-container">
                    <div className="get_form_inner2 card1">
                        <h2>CALL US</h2>
                        <p><AiOutlinePhone /><a href="tel:2135844445"> +1 (213) 584-4445</a></p>
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
