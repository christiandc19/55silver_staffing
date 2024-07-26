// src/data/nurseJobs.js
const nurseJobs = [
    { 
      id: 1, 
      title: 'RN Case Manager', 
      reference: '33764',
      description: 'Providing patient care', 
      location: 'New York', 
      salary: '$70,000',
      responsibilities: [
        'Conducting intake assessments with patients and families.',
        'Ensuring that families feel sufficiently equipped and supported.',
        'Developing individualized treatment plans that account for physical, financial, and other constraints.',
        'Adjusting treatment protocols, as needed.',
        'Suggesting and coordinating appropriate follow-up services to promote wellness.',
        'Ensuring that patients have transport to and from their homes and all pertinent healthcare facilities.',
        "Meeting with members of healthcare teams to discuss patients' progress, and to deliberate on appropriate care.",
        "Checking to see whether patients have sufficient insurance coverage or finances to pay for their treatment.",
        "Devising innovative solutions or suggesting appropriate referrals for patients who cannot afford to access treatment."
      ],
      requirements: [
        '2 years of Acute Care experience (can consider 1.5 years)',
        'Experience with Utilization Review and Discharge Planning',
        'Experience with InterQual',
        '1st-time travelers accepted',
      ],     
    }, 
    
    { 
      id: 2, 
      title: 'Pediatric Nurse', 
      reference: '012345',
      description: 'Specializing in child care', 
      location: 'Los Angeles', 
      salary: '$75,000',
      responsibilities: [
        'Assess patients’ conditions',
        'Administer medications and treatments',
        'Monitor and record patient vital signs',
        'Educate patients and their families on health management',
        'Collaborate with other healthcare professionals'
      ],
      requirements: [
        '2 years of Acute Care experience (can consider 1.5 years)',
        'Experience with Utilization Review and Discharge Planning',
        'Experience with InterQual',
        '1st-time travelers accepted',
      ],    
    },


    { 
      id: 3, 
      title: 'ICU Nurse', 
      reference: '012345',
      description: 'Critical care nurse', 
      location: 'Chicago', 
      salary: '$80,000',
      responsibilities: [
        'Assess patients’ conditions',
        'Administer medications and treatments',
        'Monitor and record patient vital signs',
        'Educate patients and their families on health management',
        'Collaborate with other healthcare professionals'
      ],
      requirements: [
        '2 years of Acute Care experience (can consider 1.5 years)',
        'Experience with Utilization Review and Discharge Planning',
        'Experience with InterQual',
        '1st-time travelers accepted',
      ],    
    },

    {
      id: 4,
      title: "Emergency Room Nurse",
      reference: '012345',
      location: "Houston, TX",
      description: "Assist patients in the emergency room with acute health issues.",
      salary: "$80,000 - $90,000",
      responsibilities: [
        'Assess patients’ conditions',
        'Administer medications and treatments',
        'Monitor and record patient vital signs',
        'Educate patients and their families on health management',
        'Collaborate with other healthcare professionals'
      ],
      requirements: [
        '2 years of Acute Care experience (can consider 1.5 years)',
        'Experience with Utilization Review and Discharge Planning',
        'Experience with InterQual',
        '1st-time travelers accepted',
      ],    
    },

    {
      id: 5,
      title: "Home Health Nurse",
      reference: '012345',
      location: "Phoenix, AZ",
      description: "Provide in-home care for patients recovering from illness or injury.",
      salary: "$70,000 - $80,000",
      responsibilities: [
        'Assess patients’ conditions',
        'Administer medications and treatments',
        'Monitor and record patient vital signs',
        'Educate patients and their families on health management',
        'Collaborate with other healthcare professionals'
      ],
      requirements: [
        '2 years of Acute Care experience (can consider 1.5 years)',
        'Experience with Utilization Review and Discharge Planning',
        'Experience with InterQual',
        '1st-time travelers accepted',
      ],    
    },
    {
      id: 6,
      title: "Cardiac Nurse",
      reference: '012345',
      location: "Philadelphia, PA",
      description: "Specialize in treating patients with heart conditions.",
      salary: "$85,000 - $95,000",
      responsibilities: [
        'Assess patients’ conditions',
        'Administer medications and treatments',
        'Monitor and record patient vital signs',
        'Educate patients and their families on health management',
        'Collaborate with other healthcare professionals'
      ],
      requirements: [
        '2 years of Acute Care experience (can consider 1.5 years)',
        'Experience with Utilization Review and Discharge Planning',
        'Experience with InterQual',
        '1st-time travelers accepted',
      ],   
    },

    {
      id: 7,
      title: "Surgical Nurse",
      reference: '012345',
      location: "San Antonio, TX",
      description: "Assist with surgical procedures and post-operative care.",
      salary: "$90,000 - $100,000",
      responsibilities: [
        'Assess patients’ conditions.',
        'Administer medications and treatments.',
        'Monitor and record patient vital signs.',
        'Educate patients and their families on health management.',
        'Collaborate with other healthcare professionals.'
      ],
      requirements: [
        '2 years of Acute Care experience (can consider 1.5 years)',
        'Experience with Utilization Review and Discharge Planning',
        'Experience with InterQual',
        '1st-time travelers accepted',
      ],   
    },

    {
      id: 8,
      title: "Oncology Nurse",
      reference: '012345',
      location: "San Diego, CA",
      description: "Care for cancer patients and administer treatments.",
      salary: "$85,000 - $95,000",
      responsibilities: [
        'Assess patients’ conditions.',
        'Administer medications and treatments.',
        'Monitor and record patient vital signs.',
        'Educate patients and their families on health management.',
        'Collaborate with other healthcare professionals.'
      ],
      requirements: [
        '2 years of Acute Care experience (can consider 1.5 years)',
        'Experience with Utilization Review and Discharge Planning',
        'Experience with InterQual',
        '1st-time travelers accepted',
      ],  
    },

    {
      id: 9,
      title: "Geriatric Nurse",
      reference: '012345',
      location: "Dallas, TX",
      description: "Provide care for elderly patients in various settings.",
      salary: "$75,000 - $85,000",
      responsibilities: [
        'Assess patients’ conditions.',
        'Administer medications and treatments.',
        'Monitor and record patient vital signs.',
        'Educate patients and their families on health management.',
        'Collaborate with other healthcare professionals.'
      ],
      requirements: [
        '2 years of Acute Care experience (can consider 1.5 years)',
        'Experience with Utilization Review and Discharge Planning',
        'Experience with InterQual',
        '1st-time travelers accepted',
      ], 
    },

    {
      id: 10,
      title: "Labor and Delivery Nurse",
      reference: '012345',
      location: "San Jose, CA",
      description: "Assist in the delivery of babies and care for new mothers.",
      salary: "$80,000 - $90,000",
      responsibilities: [
        'Assess patients’ conditions.',
        'Administer medications and treatments.',
        'Monitor and record patient vital signs.',
        'Educate patients and their families on health management.',
        'Collaborate with other healthcare professionals.'
      ],
      requirements: [
        '2 years of Acute Care experience (can consider 1.5 years)',
        'Experience with Utilization Review and Discharge Planning',
        'Experience with InterQual',
        '1st-time travelers accepted',
      ], 
    },

    {
      id: 11,
      title: "Neonatal Nurse",
      reference: '012345',
      location: "Austin, TX",
      description: "Care for newborns, especially those with health issues.",
      "salary": "$85,000 - $95,000",
      responsibilities: [
        'Assess patients’ conditions.',
        'Administer medications and treatments.',
        'Monitor and record patient vital signs.',
        'Educate patients and their families on health management.',
        'Collaborate with other healthcare professionals.'
      ],
      requirements: [
        '2 years of Acute Care experience (can consider 1.5 years)',
        'Experience with Utilization Review and Discharge Planning',
        'Experience with InterQual',
        '1st-time travelers accepted',
      ], 
    },

    {
      id: 12,
      title: "Orthopedic Nurse",
      reference: '012345',
      location: "Jacksonville, FL",
      description: "Assist patients with orthopedic conditions and surgeries.",
      salary: "$80,000 - $90,000",
      responsibilities: [
        'Assess patients’ conditions.',
        'Administer medications and treatments.',
        'Monitor and record patient vital signs.',
        'Educate patients and their families on health management.',
        'Collaborate with other healthcare professionals.'
      ],
      requirements: [
        '2 years of Acute Care experience (can consider 1.5 years)',
        'Experience with Utilization Review and Discharge Planning',
        'Experience with InterQual',
        '1st-time travelers accepted',
      ], 
    },

    {
      id: 13,
      title: "Public Health Nurse",
      reference: '012345',
      location: "Columbus, OH",
      description: "Promote community health through education and outreach.",
      salary: "$70,000 - $80,000",
      responsibilities: [
        'Assess patients’ conditions.',
        'Administer medications and treatments.',
        'Monitor and record patient vital signs.',
        'Educate patients and their families on health management.',
        'Collaborate with other healthcare professionals.'
      ],
      requirements: [
        '2 years of Acute Care experience (can consider 1.5 years)',
        'Experience with Utilization Review and Discharge Planning',
        'Experience with InterQual',
        '1st-time travelers accepted',
      ], 
    },

    {
      id: 14,
      title: "Nurse Anesthetist",
      reference: '012345',
      location: "Indianapolis, IN",
      description: "Administer anesthesia and monitor patients during surgery.",
      salary: "$120,000 - $140,000",
      responsibilities: [
        'Assess patients’ conditions.',
        'Administer medications and treatments.',
        'Monitor and record patient vital signs.',
        'Educate patients and their families on health management.',
        'Collaborate with other healthcare professionals.'
      ],
      requirements: [
        '2 years of Acute Care experience (can consider 1.5 years)',
        'Experience with Utilization Review and Discharge Planning',
        'Experience with InterQual',
        '1st-time travelers accepted',
      ], 
    },

    {
      id: 15,
      title: "Clinical Nurse Specialist",
      reference: '012345',
      location: "San Francisco, CA",
      description: "Provide specialized care and consult on complex cases.",
      salary: "$95,000 - $115,000",
      responsibilities: [
        'Assess patients’ conditions.',
        'Administer medications and treatments.',
        'Monitor and record patient vital signs.',
        'Educate patients and their families on health management.',
        'Collaborate with other healthcare professionals.'
      ],
      requirements: [
        '2 years of Acute Care experience (can consider 1.5 years)',
        'Experience with Utilization Review and Discharge Planning',
        'Experience with InterQual',
        '1st-time travelers accepted',
      ], 
    },

    {
      id: 16,
      title: "Dialysis Nurse",
      reference: '012345',
      location: "Charlotte, NC",
      description: "Assist patients undergoing dialysis treatments.",
      salary: "$80,000 - $90,000",
      responsibilities: [
        'Assess patients’ conditions.',
        'Administer medications and treatments.',
        'Monitor and record patient vital signs.',
        'Educate patients and their families on health management.',
        'Collaborate with other healthcare professionals.'
      ],
      requirements: [
        '2 years of Acute Care experience (can consider 1.5 years)',
        'Experience with Utilization Review and Discharge Planning',
        'Experience with InterQual',
        '1st-time travelers accepted',
      ], 
    },

    {
      id: 17,
      title: "Rehabilitation Nurse",
      reference: '012345',
      location: "Seattle, WA",
      description: "Help patients recover and adapt after serious injuries or illnesses.",
      salary: "$75,000 - $85,000",
      responsibilities: [
        'Assess patients’ conditions.',
        'Administer medications and treatments.',
        'Monitor and record patient vital signs.',
        'Educate patients and their families on health management.',
        'Collaborate with other healthcare professionals.'
      ],
      requirements: [
        '2 years of Acute Care experience (can consider 1.5 years)',
        'Experience with Utilization Review and Discharge Planning',
        'Experience with InterQual',
        '1st-time travelers accepted',
      ], 
    },

    {
      id: 18,
      title: "Wound Care Nurse",
      reference: '012345',
      location: "Denver, CO",
      description: "Specialize in treating chronic wounds and skin conditions.",
      salary: "$80,000 - $90,000",
      responsibilities: [
        'Assess patients’ conditions.',
        'Administer medications and treatments.',
        'Monitor and record patient vital signs.',
        'Educate patients and their families on health management.',
        'Collaborate with other healthcare professionals.'
      ],
      requirements: [
        '2 years of Acute Care experience (can consider 1.5 years)',
        'Experience with Utilization Review and Discharge Planning',
        'Experience with InterQual',
        '1st-time travelers accepted',
      ], 
    },
    {
      id: 19,
      title: "Infection Control Nurse",
      reference: '012345',
      location: "Washington, DC",
      description: "Monitor and prevent infections in healthcare settings.",
      salary: "$85,000 - $95,000",
      responsibilities: [
        'Assess patients’ conditions.',
        'Administer medications and treatments.',
        'Monitor and record patient vital signs.',
        'Educate patients and their families on health management.',
        'Collaborate with other healthcare professionals.'
      ],
      requirements: [
        '2 years of Acute Care experience (can consider 1.5 years)',
        'Experience with Utilization Review and Discharge Planning',
        'Experience with InterQual',
        '1st-time travelers accepted',
      ], 
    },
    {
      id: 20,
      title: "Clinical Research Nurse",
      reference: '012345',
      location: "Boston, MA",
      description: "Conduct research and trials on new medical treatments.",
      salary: "$90,000 - $110,000",
      responsibilities: [
        'Assess patients’ conditions.',
        'Administer medications and treatments.',
        'Monitor and record patient vital signs.',
        'Educate patients and their families on health management.',
        'Collaborate with other healthcare professionals.'
      ],
      requirements: [
        '2 years of Acute Care experience (can consider 1.5 years)',
        'Experience with Utilization Review and Discharge Planning',
        'Experience with InterQual',
        '1st-time travelers accepted',
      ], 
    },
    {
      id: 21,
      title: "School Nurse",
      reference: '012345',
      location: "El Paso, TX",
      description: "Provide health care and support in a school environment.",
      salary: "$60,000 - $70,000",
      responsibilities: [
        'Assess patients’ conditions.',
        'Administer medications and treatments.',
        'Monitor and record patient vital signs.',
        'Educate patients and their families on health management.',
        'Collaborate with other healthcare professionals.'
      ],
      requirements: [
        '2 years of Acute Care experience (can consider 1.5 years)',
        'Experience with Utilization Review and Discharge Planning',
        'Experience with InterQual',
        '1st-time travelers accepted',
      ], 
    },
    {
      id: 22,
      title: "Nurse Educator",
      reference: '012345',
      location: "Detroit, MI",
      description: "Teach and mentor future nurses in educational settings.",
      salary: "$85,000 - $105,000",
      responsibilities: [
        'Assess patients’ conditions.',
        'Administer medications and treatments.',
        'Monitor and record patient vital signs.',
        'Educate patients and their families on health management.',
        'Collaborate with other healthcare professionals.'
      ],
      requirements: [
        '2 years of Acute Care experience (can consider 1.5 years)',
        'Experience with Utilization Review and Discharge Planning',
        'Experience with InterQual',
        '1st-time travelers accepted',
      ], 
    },
    {
      id: 23,
      title: "Telemetry Nurse",
      reference: '012345',
      location: "Memphis, TN",
      description: "Monitor and interpret patient heart rhythms and data.",
      salary: "$80,000 - $90,000",
      responsibilities: [
        'Assess patients’ conditions.',
        'Administer medications and treatments.',
        'Monitor and record patient vital signs.',
        'Educate patients and their families on health management.',
        'Collaborate with other healthcare professionals.'
      ],
      requirements: [
        '2 years of Acute Care experience (can consider 1.5 years)',
        'Experience with Utilization Review and Discharge Planning',
        'Experience with InterQual',
        '1st-time travelers accepted',
      ], 
    },

    {
      id: 24,
      title: "Health Informatics Nurse",
      reference: '012345',
      location: "Baltimore, MD",
      description: "Utilize technology to improve patient care and health records.",
      salary: "$95,000 - $115,000",
      responsibilities: [
        'Assess patients’ conditions.',
        'Administer medications and treatments.',
        'Monitor and record patient vital signs.',
        'Educate patients and their families on health management.',
        'Collaborate with other healthcare professionals.'
      ],
      requirements: [
        '2 years of Acute Care experience (can consider 1.5 years)',
        'Experience with Utilization Review and Discharge Planning',
        'Experience with InterQual',
        '1st-time travelers accepted',
      ], 
    },

    {
      id: 25,
      title: "Case Management Nurse",
      reference: '012345',
      location: "Omaha, NE",
      description: "Coordinate patient care and manage healthcare services.",
      salary: "$85,000 - $95,000",
      responsibilities: [
        'Assess patients’ conditions.',
        'Administer medications and treatments.',
        'Monitor and record patient vital signs.',
        'Educate patients and their families on health management.',
        'Collaborate with other healthcare professionals.'
      ],
      requirements: [
        '2 years of Acute Care experience (can consider 1.5 years)',
        'Experience with Utilization Review and Discharge Planning',
        'Experience with InterQual',
        '1st-time travelers accepted',
      ], 
    },

    {
      id: 26,
      title: "Nephrology Nurse",
      reference: '012345',
      location: "Las Vegas, NV",
      description: "Provide care for patients with kidney disorders.",
      salary: "$80,000 - $90,000",
      responsibilities: [
        'Assess patients’ conditions.',
        'Administer medications and treatments.',
        'Monitor and record patient vital signs.',
        'Educate patients and their families on health management.',
        'Collaborate with other healthcare professionals.'
      ],
      requirements: [
        '2 years of Acute Care experience (can consider 1.5 years)',
        'Experience with Utilization Review and Discharge Planning',
        'Experience with InterQual',
        '1st-time travelers accepted',
      ], 
    },
    {
      id: 27,
      title: "Psychiatric Nurse",
      reference: '012345',
      location: "Milwaukee, WI",
      description: "Care for patients with mental health disorders.",
      salary: "$75,000 - $85,000",
      responsibilities: [
        'Assess patients’ conditions.',
        'Administer medications and treatments.',
        'Monitor and record patient vital signs.',
        'Educate patients and their families on health management.',
        'Collaborate with other healthcare professionals.'
      ],
      requirements: [
        '2 years of Acute Care experience (can consider 1.5 years)',
        'Experience with Utilization Review and Discharge Planning',
        'Experience with InterQual',
        '1st-time travelers accepted',
      ],
    },
    {
      id: 28,
      title: "Gastroenterology Nurse",
      reference: '012345',
      location: "Albuquerque, NM",
      description: "Assist with digestive health and gastrointestinal conditions.",
      salary: "$80,000 - $90,000",
      responsibilities: [
        'Assess patients’ conditions.',
        'Administer medications and treatments.',
        'Monitor and record patient vital signs.',
        'Educate patients and their families on health management.',
        'Collaborate with other healthcare professionals.'
      ],
      requirements: [
        '2 years of Acute Care experience (can consider 1.5 years)',
        'Experience with Utilization Review and Discharge Planning',
        'Experience with InterQual',
        '1st-time travelers accepted',
      ],
    },
    {
      id: 29,
      title: "Urology Nurse",
      reference: '012345',
      location: "Tucson, AZ",
      description: "Care for patients with urinary and reproductive system issues.",
      salary: "$85,000 - $95,000",
      responsibilities: [
        'Assess patients’ conditions.',
        'Administer medications and treatments.',
        'Monitor and record patient vital signs.',
        'Educate patients and their families on health management.',
        'Collaborate with other healthcare professionals.'
      ],
      requirements: [
        '2 years of Acute Care experience (can consider 1.5 years)',
        'Experience with Utilization Review and Discharge Planning',
        'Experience with InterQual',
        '1st-time travelers accepted',
      ],
    },
    {
      id: 30,
      title: "Occupational Health Nurse",
      reference: '012345',
      location: "Fresno, CA",
      description: "Promote health and safety in the workplace.",
      salary: "$75,000 - $85,000",
      responsibilities: [
        'Assess patients’ conditions.',
        'Administer medications and treatments.',
        'Monitor and record patient vital signs.',
        'Educate patients and their families on health management.',
        'Collaborate with other healthcare professionals.'
      ],
      requirements: [
        '2 years of Acute Care experience (can consider 1.5 years)',
        'Experience with Utilization Review and Discharge Planning',
        'Experience with InterQual',
        '1st-time travelers accepted',
      ],
    },
  ];
  
  export default nurseJobs;
  