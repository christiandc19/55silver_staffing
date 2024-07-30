import React from 'react'
import './RespiratorySection.css'
import Nurse from '../../../assets/respiratory_section.webp'

const RespiratorySection = () => {
  return (
<>


<div className='respiratorySection'>
      <div className="respiratorySectionHeader container">
        <h1>Expert Respiratory Care for Every Need</h1>
        <p>At 55 Silver Healthcare Staffing, we understand the critical role that respiratory therapists play in diagnosing and treating patients with breathing disorders. Our dedicated team is committed to providing highly skilled and compassionate respiratory therapists who deliver exceptional care across various healthcare settings.</p><br/>
      </div>

      <div className='respiratorySectionFlex container'>
        <div className='respiratorySectionLeft'>
            <h1>Why Choose 55 Silver Healthcare Staffing for Respiratory Therapists?</h1>
              <ul>
                <li>Qualified Professionals: We recruit and place experienced respiratory therapists who are certified and highly trained in the latest respiratory care techniques.</li>
                <li>Comprehensive Screening: Our rigorous screening process ensures that each candidate meets the highest standards of competency and professionalism.</li>
                <li>Customized Solutions: We tailor our staffing solutions to meet the unique needs of your facility, whether you require short-term, long-term, or permanent placements.</li>
                <li>Responsive Service: Our team is available around the clock to address your staffing needs and provide timely solutions.</li>
                <li>Ongoing Support: We offer continuous support to both our clients and therapists, ensuring seamless integration and optimal performance.</li>
              </ul>

        </div>

        <div className='respiratorySectionRight'>
          <img src={Nurse} alt='Smiling Nurse' loading='lazy'/>
        </div>
      </div>





<div className="respiratorySectionFooter container">
                <h1>Services We Provide</h1>
                <p>Our respiratory therapist staffing services cover a wide range of healthcare settings, including:</p>

                <ul>
                  <li>EHospitals: Providing critical care support for patients in intensive care units, emergency rooms, and general wards.
                  </li>
                  <li>Clinics: Offering outpatient respiratory care, including diagnostic testing and therapeutic treatments.</li>
                  <li>Long-term Care Facilities: Assisting residents with chronic respiratory conditions and implementing care plans to enhance their quality of life.</li>
                  <li>Home Health: Delivering in-home respiratory therapy services to patients requiring ongoing care and support.</li>
                </ul>

                <br />
                <h1>Get Started with 55 Silver Healthcare Staffing</h1>
                <p>If you need skilled respiratory therapists to enhance your patient care, look no further than 55 Silver Healthcare Staffing. Our experienced team is ready to provide the respiratory care professionals you need to ensure the best outcomes for your patients. </p>
</div>

</div>


    </>
  )
}

export default RespiratorySection
