import React from 'react'
import Footer from '../components/footer/Footer'
import WorkforceManagementSection from '../components/services/workforceManagement/WorkforceManagementSection'
import WorkforceManagement from '../components/services/workforceManagement/WorkforceManagement'

const WorkforceManagementPage = () => {
    return (
        <>
           <WorkforceManagement />
           <WorkforceManagementSection />
           <Footer />
        </>
    )
}

export default WorkforceManagementPage