import React from 'react'
import Footer from '../components/footer/Footer'
import Nursing from '../components/specialties/nursing/Nursing'
import NursingSection from '../components/specialties/nursing/NursingSection'
import JobSearch from '../components/jobSearch/JobSearch'
import SectionTwo from '../components/sectionTwo/SectionTwo'

const NursingPage = () => {
    return (
        <>
           <Nursing />
           <NursingSection />
           <SectionTwo />
           <JobSearch />
           <Footer />
        </>
    )
}

export default NursingPage