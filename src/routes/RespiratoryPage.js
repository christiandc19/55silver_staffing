import React from 'react'
import Footer from '../components/footer/Footer'
import Respiratory from '../components/specialties/respiratory/Respiratory'
import RespiratorySection from '../components/specialties/respiratory/RespiratorySection'
import SectionTwo from '../components/sectionTwo/SectionTwo'
import JobSearch from '../components/jobSearch/JobSearch'

const RespiratoryPage = () => {
    return (
        <>

        <Respiratory />
        <RespiratorySection />
        <SectionTwo />
        <JobSearch />
           <Footer />
        </>
    )
}

export default RespiratoryPage