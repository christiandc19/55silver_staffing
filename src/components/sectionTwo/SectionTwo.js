import React from 'react'
import './SectionTwo.css'

import { FaUserNurse } from "react-icons/fa";
import { FaMicroscope } from "react-icons/fa";
import { FaLungs } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";


const SectionTwo = () => {
  return (
    <>
        <div className='sectionTwo'>
            <div className='sectionTwoContent'>
                <h1>Healthcare Expertise</h1>

                <div className='sectionTwoIcons'>

                    <div className='sectionTwoIcon'>
                        <h2><FaMicroscope /></h2>
                        <h3>Allied Health</h3>
                    </div>

                    <div className='sectionTwoIcon'>
                        <h2><FaUserNurse /></h2>
                        <h3>Nursing</h3>
                    </div>

                    <div className='sectionTwoIcon'>
                        <h2><MdPeopleAlt /></h2>
                        <h3>Locum Tenens</h3>
                    </div>

                    <div className='sectionTwoIcon'>
                        <h2><FaLungs /></h2>
                        <h3>Respiratory Therapy</h3>
                    </div>

                    <div className='sectionTwoIcon'>
                        <h2><FaHandHoldingMedical /></h2>
                        <h3>Correctional Health</h3>
                    </div>

                    <div className='sectionTwoIcon'>
                        <h2><FaBrain /></h2>
                        <h3>Behavioral Health</h3>
                    </div>

                </div>
            </div>

        </div>
    </>
  )
}

export default SectionTwo