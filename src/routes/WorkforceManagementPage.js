import React from 'react'
import Footer from '../components/footer/Footer'
import WorkforceManagementSection from '../components/services/workforceManagement/WorkforceManagementSection'
import WorkforceManagement from '../components/services/workforceManagement/WorkforceManagement'
import SectionTwo from '../components/sectionTwo/SectionTwo'
import JobSearch from '../components/jobSearch/JobSearch'

const WorkforceManagementPage = () => {
    return (
        <>
           <WorkforceManagement />
           <WorkforceManagementSection />
           <SectionTwo />
           <JobSearch />
           <Footer />
        </>
    )
}

export default WorkforceManagementPage