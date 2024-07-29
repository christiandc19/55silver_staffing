import React from 'react'
import './SectionThree.css'
import pediatrician from "../../assets/pediatrician.webp";



const sectionThree = () => {
  return (
<>
  <div className="sectionThree container">
      <div className="sectionThreeContent">

          <div className="sectionThreeCaption">
            <h1>Mission</h1>
            <p>
            At 55 Silver Healthcare Staffing, our mission is to bridge the gap between healthcare facilities and top-tier professionals. We are committed to providing exceptional staffing solutions that enhance patient care and operational efficiency. By focusing on quality, integrity, and personalized service, we strive to build lasting partnerships that foster growth and success in the healthcare industry.</p><br/>

            <h1>Vission</h1>
            <p>At 55 Silver Healthcare Staffing, our vision is to revolutionize the healthcare staffing industry by providing unparalleled service and support to both healthcare facilities and professionals. Together, we aim to build a future where healthcare staffing is seamless, efficient, and driven by a commitment to quality and excellence.</p>


          </div>

          <div className="sectionThreeImage">
              <img src={pediatrician} alt='Mission Statement' loading='lazy'/>

            </div>




          </div>


        </div>
</>
  )
}

export default sectionThree