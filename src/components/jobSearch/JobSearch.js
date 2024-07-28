import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import nurseJobs from '../../data/nurseJobs';
import './JobSearch.css';
import { Link as LinkRoll } from 'react-scroll'

const JobSearch = () => {
  const [titleSearchTerm, setTitleSearchTerm] = useState('');
  const [locationSearchTerm, setLocationSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleTitleSearch = (event) => {
    setTitleSearchTerm(event.target.value);
  };

  const handleLocationSearch = (event) => {
    setLocationSearchTerm(event.target.value);
  };

  const handleJobClick = (id) => {
    navigate(`/job/${id}`);
  };

  const filteredJobs = nurseJobs.filter(job =>
    job.title.toLowerCase().includes(titleSearchTerm.toLowerCase()) &&
    job.location.toLowerCase().includes(locationSearchTerm.toLowerCase())
  );

  return (
  
  // Search Header

    <div className="jobSearch container" name='jobsearch'>
      <div className='jobSearchHeader'>
        <h1>Search Jobs</h1>
        <h2>Nursing. Allied Health. Locum Tenens. Respiratory. Correctional Health.</h2>
      </div>
      <br />

{/* Search Bar */}

      <div className="search-container">
        <input
          type="text"
          className="input"
          placeholder="Search by job title"
          value={titleSearchTerm}
          onChange={handleTitleSearch}
        />
        <input
          type="text"
          className="input"
          placeholder="Search by location"
          value={locationSearchTerm}
          onChange={handleLocationSearch}
        />
      </div>

{/* Job Items */}

      <div className='job-list-flex'>
      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >

        <ul className="job-list">
          {filteredJobs.map(job => (
                          

            <li key={job.id} className="job-item" onClick={() => handleJobClick(job.id)}>

              <h3 className="job-title">{job.title}</h3>
              <p className="job-description"><b>Job Description:</b> <br /> {job.description}</p>
              <p className="job-location"><b>Location:</b><br /> {job.location}</p>
              <p className="job-salary"><b>Salary:</b> <br /> {job.salary}</p>
            </li>

          ))}
        </ul>
        </LinkRoll>

      </div>

    </div>
  );
};

export default JobSearch;
