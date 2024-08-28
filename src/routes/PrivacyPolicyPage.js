import React from 'react'

import PrivacyPolicy from '../components/privacyPolicy/PrivacyPolicy'
import PrivacyPolicySection from '../components/privacyPolicy/PrivacyPolicySection'

import Footer from '../components/footer/Footer'

const PrivacyPolicyPage = () => {
    return (
        <>
           <PrivacyPolicy />
           <PrivacyPolicySection />
           <Footer />
        </>
    )
}

export default PrivacyPolicyPage
