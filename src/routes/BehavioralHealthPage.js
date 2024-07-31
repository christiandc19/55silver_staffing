import React from 'react'
import Footer from '../components/footer/Footer'
import BehavioralHealth from '../components/specialties/behavioralHealth/BehavioralHealth'
import BehavioralHealthSection from '../components/specialties/behavioralHealth/BehavioralHealthSection'

const BehavioralHealthPage = () => {
    return (
        <>
           <BehavioralHealth />
           <BehavioralHealthSection />
           <Footer />
        </>
    )
}

export default BehavioralHealthPage