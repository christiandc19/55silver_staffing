// src/pages/JobDetail.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import nurseJobs from '../../data/nurseJobs';
import { IoIosSearch } from "react-icons/io";
import {Link} from 'react-router-dom'
import { Link as LinkRoll } from 'react-scroll'
import emailjs from 'emailjs-com';
import {Helmet} from "react-helmet";

import Nurse from '../../assets/male_nurse.webp'

import './JobDetail.css'

const JobDetail = () => {
  // Contact Form

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: '',
    file: null
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
};

const handleSubmit = (e) => {
    e.preventDefault();

    const formDataWithAttachment = new FormData();
    formDataWithAttachment.append('name', formData.name);
    formDataWithAttachment.append('phone', formData.phone);
    formDataWithAttachment.append('subject', formData.subject);
    formDataWithAttachment.append('message', formData.message);
    formDataWithAttachment.append('file', formData.file);

    // emailjs.sendForm('service_hsunksm', 'template_rxc8sbg', formDataWithAttachment, 'Rj5e7bWJla-kOEL0H')
        emailjs.sendForm('service_hsunksm', 'template_rxc8sbg', e.target, 'Rj5e7bWJla-kOEL0H')
        .then((result) => {
            console.log('Email successfully sent!', result.text);
        }, (error) => {
            console.log('Failed to send email.', error.text);
        });

    // Reset form
    setFormData({
        name: '',
        phone: '',
        subject: '',
        message: '',
        file: null
    });
};


  // End of Contact Form





  const [isVisible, setIsVisible] = useState(false);

  const showElement = () => {
    setIsVisible(true);
  };


  const getCurrentDate = () => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString(undefined, options);
  };

  const { id } = useParams();
  const job = nurseJobs.find(job => job.id === parseInt(id));

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
        <title>Search Jobs - 55 Silver</title>
        <link rel="canonical" href="https://55silver.biz/job-search" />
      </Helmet>

    <div className='jobDetail'>

    <div className='jobDetailFlex'>
      <div className='jobDetailLeft'>

        <div className='jobDetailHeader'>
          <div className='jobTitle'>
            <h1>{job.title}</h1>
            <p>Job Reference: {job.reference}</p>
          </div>

          <div className='searchIcon'>
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
              <Link to='/job-search'><p><span><IoIosSearch /></span>New Search</p></Link>
            </LinkRoll>
          </div>
        </div>

      <hr />

        <p>{job.description}</p>
        <p>Location: {job.location}</p>
        <p>Rate / Salary: {job.salary}</p>
        <h3>Responsibilities:</h3>
              <ul>
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}<br /></li>
                ))}
              </ul>   
              <br/>   

        <h3>Requirements:</h3>
              <ul>
                {job.requirements.map((requirements, index) => (
                  <li key={index}>{requirements}<br /></li>
                ))}
              </ul>   
              <br/> 
        <p><em>Updated: {getCurrentDate()}</em></p>



        <div className='JobDetailBtn'>

        <div>
      {!isVisible && (
        <button onClick={showElement}>
          Apply Now!
        </button>
      )}
      {isVisible && (
        <div className="toggle-element">
          {/* Application Form */}
          <form className="contact-form" onSubmit={handleSubmit}>

            <div className='applicationFormHeader'>
              <h1>55 Silver Healthcare Staffing</h1>
              <p>Apply for Job: {job.reference} {job.title}</p>
            </div>

            <div className="form-group">
                <label>First Name: </label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="form-group">
                <label>Last Name: </label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="form-group">
                <label>Email: </label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="form-group">
                <label>Phone Number: </label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>


            <div>
              <p>Upload a Resume</p>
                <label>Attach a File</label>
                <input type="file" name="file" onChange={handleFileChange} />
            </div>
            <p>Please submit your resume in either Microsoft Word or PDF format. (1MB max)</p>
            <button type="submit">Submit this information</button>
        </form>

          {/* End of Application Form  */}





        </div>
      )}
    </div>

        </div>

      </div>


        <div className='jobDetailRight'>
            <img src={Nurse} alt='Medical Professional' loading='lazy'/>
        </div>

      </div>
    </div>


    </>
  );
};

export default JobDetail;












