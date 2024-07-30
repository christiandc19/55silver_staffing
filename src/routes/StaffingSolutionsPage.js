import React from 'react'
import Footer from '../components/footer/Footer'
import StaffingSolution from '../components/services/staffingSolutions/StaffingSolutions'
import StaffingSolutionSection from '../components/services/staffingSolutions/StaffingSolutionSection'
import SectionTwo from '../components/sectionTwo/SectionTwo'
import JobSearch from '../components/jobSearch/JobSearch'

const StaffingSolutionsPage = () => {
    return (
        <>
           <StaffingSolution />
           <StaffingSolutionSection />
           <SectionTwo />
           <JobSearch />
           <Footer />
        </>
    )
}

export default StaffingSolutionsPage