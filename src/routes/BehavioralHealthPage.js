import React from 'react'
import Footer from '../components/footer/Footer'
import BehavioralHealth from '../components/specialties/behavioralHealth/BehavioralHealth'
import BehavioralHealthSection from '../components/specialties/behavioralHealth/BehavioralHealthSection'
import JobSearch from '../components/jobSearch/JobSearch'
import SectionTwo from '../components/sectionTwo/SectionTwo'

const BehavioralHealthPage = () => {
    return (
        <>
           <BehavioralHealth />
           <BehavioralHealthSection />
           <SectionTwo />
           <JobSearch />
           <Footer />
        </>
    )
}

export default BehavioralHealthPage