// src/App.js
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Home from './routes/HomePage';
import JobSearch from './routes/JobSearchPage';
import About from './routes/AboutPage';
import JobDetail from './routes/JobDetailsPage';
import Contact from './routes/ContactPage';

// SPECIALTIES
import Nursing from './routes/NursingPage';
import BehavioralHealth from './routes/BehavioralHealthPage';
import AlliedHealth from './routes/AlliedHealthPage';
// SERVICES
import StaffingSolution from './routes/StaffingSolutionsPage';


const App = () => {
  return (
    <BrowserRouter basename={window.location.pathname || ''} >
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/job-search" element={<JobSearch />} />
        <Route exact path="/about-us" element={<About />} />
        <Route exact path="/contact-us" element={<Contact />} />
        <Route exact path="/job/:id" element={<JobDetail />} />
        
        {/* Specialties  */}
        <Route exact path="/nursing" element={<Nursing />} />
        <Route exact path="/behavioral-health" element={<BehavioralHealth />} />
        <Route exact path="/allied-health" element={<AlliedHealth />} />

        {/* Services  */}
        <Route exact path="/staffing-solutions" element={<StaffingSolution />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
