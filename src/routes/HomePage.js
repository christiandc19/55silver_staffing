import React from 'react'
import Footer from '../components/footer/Footer'
import SectionOne from '../components/sectionOne/SectionOne'
import SectionThree from '../components/sectionThree/SectionThree'
import SectionFour from '../components/sectionFour/SectionFour'
import SectionFive from '../components/sectionFive/SectionFive'
import Section3 from '../components/section3/Section3'
import Component3 from '../components/component3/Component3'


const HomePage = () => {
    return (
        <>
            <SectionOne />
            <Component3 />
            <SectionFive />
            <Section3 />
            <SectionFour />
            <SectionThree />
            <Footer />
        </>
    )
}

export default HomePage