import React from "react";
import "./Section3.css";

import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";

import Card1 from "../../assets/nursing.webp";
import Card2 from "../../assets/behavioral_health.webp";
import Card3 from "../../assets/program_op.webp";
import Card4 from "../../assets/program_case_management.webp";
import Card5 from "../../assets/program_crisis_intervention.webp";
import Card6 from "../../assets/program_family_therapy.webp";



const Section3 = () => {
  return (
    <>
      <div className="section3">
        <div className="section3-content container">

          <div className="section3Header container">
            <h1>HEALTHCARE EXPERTISE</h1>
            <h2>Our strength is connecting talented healthcare professionals with employers nationwide.</h2>
          </div>


          <div className="section3-flex">
{/* NUrsing */}
              <div class="section3-flexItem">
                  <img src={Card1} alt="Mental Health" loading="lazy" />
                <div>
                  <h1>NURSING</h1>
                  <p>We provide top-tier nursing professionals to healthcare facilities, ensuring compassionate and skilled care for patients. Our dedicated nurses are meticulously screened and matched to meet the specific needs and standards of each healthcare environment.</p>

                  <div>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/nursing">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>
                </div>
              </div>

{/* Behavioral Health */}

              <div class="section3-flexItem">
                  <img src={Card2} alt="Mental Health" loading="lazy" />
                <div>
                  <h1>BEHAVIORAL HEALTH</h1>
                  <p>55 Silver Healthcare Staffing excels in behavioral health, providing dedicated professionals to support mental wellness and therapeutic care, ensuring comprehensive, patient-centered solutions for diverse clinical and community settings.</p>
                  <div>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/behavioral-health">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>
                </div>
              </div>


{/* OP */}

<div class="section3-flexItem">
                  <img src={Card3} alt="Mental Health" loading="lazy" />
                <div>
                  <h1>ALLIED HEALTH</h1>
                  <p>55 Silver Healthcare Staffing offers tailored solutions for Allied Health staffing, connecting healthcare facilities with skilled professionals in fields like radiology, physical therapy, and medical laboratory sciences to enhance patient care and efficiency.</p>
                  <div>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/outpatient-program">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>
                </div>
              </div>


{/* CASE MANAGEMENT */}

<div class="section3-flexItem">
                  <img src={Card4} alt="Mental Health" loading="lazy" />
                <div>
                  <h1>LOCUM TENENS</h1>
                  <p>55 Silver Healthcare Staffing offers Locum Tenens solutions, providing temporary healthcare professionals to fill gaps, ensuring continuous patient care, reducing staff burnout, and maintaining operational efficiency in medical facilities.</p>
                  <div>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/case-management">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>
                </div>
              </div>



{/* CRISIS INTERVENTION */}

<div class="section3-flexItem">
                  <img src={Card5} alt="Mental Health" loading="lazy" />
                <div>
                  <h1>RESPIRATORY</h1>
                  <p>55 Silver Healthcare Staffing provides specialized respiratory care professionals, ensuring top-tier support for patients with breathing disorders. Our dedicated staff delivers exceptional respiratory therapy, enhancing patient outcomes and healthcare facility efficiency.</p>
                  <div>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/crisis-intervention">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>
                </div>
              </div>



{/* FAMILY THERAPY */}

<div class="section3-flexItem">
                  <img src={Card6} alt="Mental Health" loading="lazy" />
                <div>
                  <h1>CORECTIONAL HEALTH</h1>
                  <p>55 Silver Healthcare Staffing excels in providing experienced healthcare professionals to correctional facilities, ensuring high-quality medical care and maintaining the health and well-being of incarcerated individuals.</p>
                  <div>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                      <Link to="/family-therapy">
                        <button>Learn More</button>
                      </Link>
                    </LinkRoll>
                  </div>
                </div>
              </div>



















          </div>
        </div>
      </div>

    </>
  );
};

export default Section3;
