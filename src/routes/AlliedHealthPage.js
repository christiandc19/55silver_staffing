import React from 'react'
import Footer from '../components/footer/Footer'
import AlliedHealth from '../components/specialties/alliedHealth/AlliedHealth'
import AlliedHealthSection from '../components/specialties/alliedHealth/AlliedHealthSection'
import AlliedHealthII from '../components/specialties/alliedHealth/AlliedHealth_II'
const AlliedHealthPage = () => {
    return (
        <>
           <AlliedHealth />
           <AlliedHealthSection />
           <AlliedHealthII />
           <Footer />
        </>
    )
}

export default AlliedHealthPage