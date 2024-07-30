import React from 'react'
import './BehavioralHealthSection.css'
import Man from '../../../assets/specialties_section_behavioral_health.webp'

const BehavioralHealthSection = () => {
  return (
<>


<div className='behavioralHealthSection'>
      <div className="behavioralHealthSectionHeader container">
        <h1>Behavioral Health</h1>
        <p>At 55 Silver, we understand the critical role that behavioral health professionals play in providing comprehensive mental health care. Our Behavioral Health Placement Services are designed to connect healthcare facilities with highly skilled and compassionate professionals dedicated to improving the mental well-being of patients.</p><br/>
      </div>

      <div className='behavioralHealthSectionFlex container'>
        <div className='behavioralHealthSectionLeft'>

            <h1>Wide Range of Specialties:</h1>
            <p>We offer a wide range of placement services for various behavioral health roles, including:</p> <br />
            <p>
              <ul>
                <li>Psychiatrists</li>
                <li>Psychologists</li>
                <li>Licensed Clinical Social Workers (LCSWs)</li>
                <li>Licensed Professional Counselors (LPCs)</li>
                <li>Marriage and Family Therapists (MFTs)</li>
                <li>Behavioral Health Technicians</li>
                <li>Pediatric Nurses</li>
                <li>Substance Abuse Counselors</li>
              </ul>
            </p>
            <br />
            <p>Our rigorous selection process ensures that every candidate meets the highest standards of professional qualifications, experience, and dedication to patient care. We thoroughly vet each professional to ensure they have the expertise and empathy necessary to support patients through their mental health journeys.</p>

        </div>

        <div className='behavioralHealthSectionRight gradient-border'>
          <img src={Man} alt='Smiling Man' loading='lazy'/>
        </div>
      </div>





<div className="behavioralHealthSectionFooter container">
                <p>By partnering with 55 Silver Healthcare Staffing for your behavioral health placement needs, you benefit from:</p><br />

                <ul>
                <li>Customized Staffing Solutions: We tailor our services to meet the specific needs of your facility, whether you require temporary coverage, permanent placements, or specialized professionals for unique programs.</li>
                <li>Quick and Efficient Placements: Our extensive network and efficient processes allow us to quickly connect you with qualified professionals, minimizing downtime and ensuring continuity of care.</li>
                <li>Ongoing Support and Engagement: We maintain regular communication with both clients and candidates to ensure successful placements and address any concerns promptly.</li>
              </ul>

                <br />
                <p>Our mission is to enhance the quality of behavioral health services by providing healthcare facilities with the best professionals in the field. Trust 55 Silver Healthcare Staffing to help you deliver exceptional mental health care and improve patient outcomes.</p>
</div>

</div>


    </>
  )
}

export default BehavioralHealthSection
