import React from 'react'
import Footer from '../components/footer/Footer'
import StaffingSolution from '../components/services/staffingSolutions/StaffingSolutions'
import StaffingSolutionSection from '../components/services/staffingSolutions/StaffingSolutionSection'

const StaffingSolutionsPage = () => {
    return (
        <>
           <StaffingSolution />
           <StaffingSolutionSection />
           <Footer />
        </>
    )
}

export default StaffingSolutionsPage