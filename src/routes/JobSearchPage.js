import React from 'react'
import Footer from '../components/footer/Footer'
import JobSearch from '../components/jobSearch/JobSearch'
import JobSearchHero from '../components/jobSearch/JobSearchHero'

const JobSearchPage = () => {
    return (
        <>
           <JobSearchHero />
           <JobSearch />
           <Footer />
        </>
    )
}

export default JobSearchPage