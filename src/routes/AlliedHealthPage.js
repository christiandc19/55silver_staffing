import React from 'react'
import Footer from '../components/footer/Footer'
import AlliedHealth from '../components/specialties/alliedHealth/AlliedHealth'
import AlliedHealthSection from '../components/specialties/alliedHealth/AlliedHealthSection'
import SectionTwo from '../components/sectionTwo/SectionTwo'
import AlliedHealthII from '../components/specialties/alliedHealth/AlliedHealth_II'

const AlliedHealthPage = () => {
    return (
        <>
           <AlliedHealth />
           <AlliedHealthSection />
           <SectionTwo />
           <AlliedHealthII />

           <Footer />
        </>
    )
}

export default AlliedHealthPage