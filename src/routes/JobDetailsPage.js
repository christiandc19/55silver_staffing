import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import JobDetail from '../components/jobSearch/JobDetail'
import JobDetailHero from '../components/jobSearch/JobDetailHero'
// import JobSearch from '../components/jobSearch/JobSearch'

const JobDetailsPage = () => {
    return (
        <>
            <Navbar />
            <JobDetailHero />
            <JobDetail />
            {/* <JobSearch /> */}
            <Footer />
        </>
    )
}

export default JobDetailsPage