import React from 'react'
import Footer from '../components/footer/Footer'
import CorrectionalHealthSection from '../components/specialties/correctionalHealth/CorrectionalHealthSection'
import CorrectionalHealth from '../components/specialties/correctionalHealth/CorrectionalHealth'
import SectionTwo from '../components/sectionTwo/SectionTwo'
import JobSearch from '../components/jobSearch/JobSearch'


const CorrectionalHealthPage = () => {

    return (
        <>
            <CorrectionalHealth />
           <CorrectionalHealthSection />
           <SectionTwo />
            <JobSearch />
           <Footer />
        </>
    )
}

export default CorrectionalHealthPage