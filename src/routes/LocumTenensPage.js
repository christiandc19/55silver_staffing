import React from 'react'
import Footer from '../components/footer/Footer'
import LocumTenens from '../components/specialties/locumTenens/LocumTenens'
import LocumTenensSection from '../components/specialties/locumTenens/LocumTenensSection'
import SectionTwo from '../components/sectionTwo/SectionTwo'
import JobSearch from '../components/jobSearch/JobSearch'

const LocumTenensPage = () => {
    return (
        <>

            <LocumTenens />
            <LocumTenensSection />
            <SectionTwo />
            <JobSearch />
           <Footer />
        </>
    )
}

export default LocumTenensPage