import React from 'react'
import './LocumTenensSection.css'
import Man from '../../../assets/specialties_section_male_nurse.webp'

const LocumTenensSection = () => {
  return (
<>


<div className='locumTenensSection'>
      <div className="locumTenensSectionHeader container">
        <h1>Empowering Healthcare Professionals with Flexible Opportunities</h1>
        <p>At 55 Silver Healthcare Staffing, we recognize the unique needs and preferences of healthcare professionals seeking locum tenens positions. Whether you desire the flexibility to choose your assignments, the opportunity to explore different healthcare settings, or the chance to gain diverse experience, our locum tenens solutions offer the perfect balance of professional fulfillment and personal freedom.</p><br/>
      </div>

      <div className='locumTenensSectionFlex container'>
        <div className='locumTenensSectionLeft'>
            <h1>Why Choose Locum Tenens with 55 Silver Healthcare Staffing?</h1>
            <ul>
                <li>Flexible Schedules</li>
                <li>Diverse Opportunities</li>
                <li>Competitive Compensation</li>
                <li>Professional Growth</li>
                <li>Dedicated Support</li>
              </ul>

              <h1>Roles We Offer</h1>
              <p>We specialize in placing locum tenens professionals in a variety of roles, including:</p>
              <ul>
                <li>Nurse Practitioners</li>
                <li>Physician Assistants</li>
                <li>Competitive Compensation</li>
                <li>Dentists</li>
                <li>Allied Health Professionals</li>
              </ul>

              <h1>How It Works</h1>
              <ul>
                <li>Explore: Browse our available locum tenens opportunities on our job board.</li>
                <li>Apply: Submit your application for positions that match your interests and qualifications.
                </li>
                <li>Consult: Our recruitment specialists will connect with you to discuss your preferences and career goals.
                </li>
                <li>Match: We will match you with assignments that align with your skills, availability, and desired locations.
                </li>
                <li>Support: From credentialing to travel arrangements, we handle all the logistics, so you can focus on delivering exceptional care.
                </li>
              </ul>



        </div>

          <div className='locumTenensSectionRight gradient-border'>
            <img src={Man} alt='Smiling Man' loading='lazy'/>
          </div>
      </div>





      <div className="locumTenensSectionFooter container">
                      <h1>Join Our Locum Tenens Network</h1>
                      <p>Are you ready to explore new opportunities and take control of your career? Join 55 Silver Healthcare Staffing's locum tenens network and enjoy the flexibility, diversity, and support you deserve. </p>           
      </div>

</div>


    </>
  )
}

export default LocumTenensSection
