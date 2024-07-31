import React from 'react'
import Footer from '../components/footer/Footer'
import Nursing from '../components/specialties/nursing/Nursing'
import NursingSection from '../components/specialties/nursing/NursingSection'

const NursingPage = () => {
    return (
        <>
           <Nursing />
           <NursingSection />
           <Footer />
        </>
    )
}

export default NursingPage