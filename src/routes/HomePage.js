import React from 'react'
import Footer from '../components/footer/Footer'
import SectionOne from '../components/sectionOne/SectionOne'
import SectionTwo from '../components/sectionTwo/SectionTwo'
// import SectionThree from '../components/sectionThree/SectionThree'
import SectionFour from '../components/sectionFour/SectionFour'
import SectionFive from '../components/sectionFive/SectionFive'
import Section3 from '../components/section3/Section3'
import Component3 from '../components/component3/Component3'

// import Home from '../components/home/Hero'

const HomePage = () => {
    return (
        <>
            {/* <Home /> */}
            <SectionOne />
            <SectionTwo />
            <Component3 />
            {/* <SectionThree /> */}
            <SectionFive />
            <Section3 />
            <SectionFour />
            <Footer />
        </>
    )
}

export default HomePage