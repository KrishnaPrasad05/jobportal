import React, { useEffect, useState } from 'react';
import { Nav, Tab, Form, Button, Container, Row, Col,Alert } from 'react-bootstrap';
import { PDFDownloadLink, Document, Page, Text, StyleSheet, View, Image  } from '@react-pdf/renderer';
import profilePic from '../../../Assets/img/save.png';
import Section1 from '../../HomePage/Section1/section1';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addResumeToServer } from '../../../features/resumeSlice';
function ResumeBuilderForm() {
  const dispatch = useDispatch();
  const [pgDone, setPgDone] = useState(false); // State to track checkbox status

  const handleChangeCheckbox = () => {
    setPgDone(!pgDone);
  };

  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const handleCheckboxChange = () => {
    setShowAdditionalFields(!showAdditionalFields);
  };

  const [showAdditionalFields1, setShowAdditionalFields1] = useState(false);
  const handleCheckboxChange1 = () => {
    setShowAdditionalFields1(!showAdditionalFields1);
  };

  const [showAdditionalFields2, setShowAdditionalFields2] = useState(false);
  const handleCheckboxChange2 = () => {
    setShowAdditionalFields2(!showAdditionalFields2);
  };

  const [showAdditionalFields3, setShowAdditionalFields3] = useState(false);
  const handleCheckboxChange3 = () => {
    setShowAdditionalFields3(!showAdditionalFields3);
  };
  const [showAdditionalFields4, setShowAdditionalFields4] = useState(false);
  const handleCheckboxChange4 = () => {
    setShowAdditionalFields4(!showAdditionalFields4);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  const [key, setKey] = useState('tab1');
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    mobile: '',
    lang: '',
    email: '',
    file: '',
    nat: '',
    gender: '',
    blood: '',
    dob: '',
    inName: '',
    crsName: '',
    yop: '',
    agg: '',
    inName1: '',
    crsName1: '',
    yop1: '',
    agg1: '',
    inName2: '',
    crsName2: '',
    yop2: '',
    agg2: '',
    inName3: '',
    crsName3: '',
    yop3: '',
    agg3: '',
    carObj: '',
    skills: '',
    skills1: '',
    skills2: '',
    compName: '',
    dur: '',
    role: '',
    compName1: '',
    dur1: '',
    role1: '',
    evntName: '',
    award: '',
    evntName3: '',
    award3: '',
    evntName31: '',
    award31: '',
    evntName1: '',
    award1: '',
    evntName11: '',
    award11: '',
    prjName: '',
    desc: '',
    prjName1: '',
    desc1: '',
    sskills2: '',
    hob: '',
    evntName21: '',
    award21: '',
    evntName211: '',
    award211: '',
    address:'',
    exp:'',
    expDesc:'',
    isChecked: false
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    const errors = validateForm1(formData);
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
        // Move to the next tab upon successful validation
       
        if (key === 'tab1') {
          setKey('tab2');
          
        }
        console.log('Form submitted successfully!');
      } else {
        console.log(errors)
        console.log('Form has errors. Please fix them.');
      }
  };
  const handleSubmit2 = (e) => {
    e.preventDefault();
    const errors = validateForm2(formData);
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
        
        // Move to the next tab upon successful validation
        if (key === 'tab2') {
          setKey('tab3');
        }
        console.log('Form submitted successfully!');
      } else {
        console.log('Form has errors. Please fix them.');
      }
  };

  const handleSubmit3 = (e) => {
    e.preventDefault();
    const errors = validateForm3(formData);
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
        
        // Move to the next tab upon successful validation
        if (key === 'tab3') {
          setKey('tab4');
        }
        
        console.log('Form submitted successfully!');
      } else {
        console.log(errors)
        console.log('Form has errors. Please fix them.');
      }
  };
  const handleSubmit4 = (e) => {
    e.preventDefault();
    const errors = validateForm4(formData);
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
        
        // Move to the next tab upon successful validation
        if (key === 'tab4') {
          console.log(formData)
        }
       
        dispatch(addResumeToServer(formData));
        console.log('Form submitted successfully!');
        window.location.href="/download-resume";
      } else {
        console.log(errors)
        console.log('Form has errors. Please fix them.');
      }
  };

  const validateForm4 = (formData) => {
    let errors = {};
    if (!formData.sskills2.trim()) {
        errors.sskills2 = "Soft Skills is required";
      }
  
      if (!formData.hob.trim()) {
        errors.hob = "Hobbies is required";
      }
  
     
      if (!formData.evntName21.trim()) {
        errors.evntName21 = "Event Name is required";
      }
  
      if (!formData.award21.trim()) {
        errors.award21 = "Awardee is required";
      }
      if(showAdditionalFields4){
        if (!formData.evntName211.trim()) {
          errors.evntName211 = "Event Name is required";
        }
    
        if (!formData.award211.trim()) {
          errors.award211 = "Awardee is required";
        }
      }
      if (!formData.address.trim()) {
        errors.address = "Awardee is required";
      }
      if (!formData.expDesc.trim()) {
        errors.expDesc = "Experience Description is required";
      }
      if (!formData.exp.trim()) {
        errors.exp = "Experience status is required";
      }
      if (!formData.isChecked) {
        errors.isChecked = "Please check the checkbox before proceeding.";
      }
    return errors;
  }


  const validateForm3 = (formData) => {
    let errors = {};
//Form 3
    
if (!formData.carObj.trim()) {
    errors.carObj = "Career Objective is required";
  }

  if (!formData.skills.trim()) {
    errors.skills = "Skills is required";
  }

 /*  if (!formData.skills1.trim()) {
    errors.skills1 = "Skills is required";
  }

  if (!formData.skills2.trim()) {
    errors.skills2 = "Skills is required";
  } */

  if (!formData.compName.trim()) {
    errors.compName = "Company Name is required";
  }

  if (!formData.dur.trim()) {
    errors.dur = "Duration is required";
  }

  if (!formData.role.trim()) {
    errors.role = "Role is required";
  }
  if(showAdditionalFields){
    if (!formData.compName1.trim()) {
      errors.compName1 = "Company Name is required";
    }
  
    if (!formData.dur1.trim()) {
      errors.dur1 = "Duration is required";
    }
  
    if (!formData.role1.trim()) {
      errors.role1 = "Role is required";
    }
  }


  if (!formData.evntName.trim()) {
    errors.evntName = "Event is required";
  }

  if (!formData.award.trim()) {
    errors.award = "Awardee is required";
  }

  if(showAdditionalFields1){
    if (!formData.evntName1.trim()) {
      errors.evntName1 = "Event is required";
    }
  
    if (!formData.award1.trim()) {
      errors.award1 = "Awardee is required";
    }
  }

  if (!formData.evntName3.trim()) {
    errors.evntName3 = "Event is required";
  }

  if (!formData.award3.trim()) {
    errors.award3 = "Awardee is required";
  }

  if(showAdditionalFields2){
    
  if (!formData.evntName31.trim()) {
    errors.evntName31 = "Event is required";
  }

  if (!formData.award31.trim()) {
    errors.award31 = "Awardee is required";
  }
  }

//   if (!formData.evntName11.trim()) {
//     errors.evntName11 = "Event is required";
//   }

//   if (!formData.award11.trim()) {
//     errors.award11 = "Awardee is required";
//   }

  if (!formData.prjName.trim()) {
    errors.prjName = "Project Name is required";
  }

  if (!formData.desc.trim()) {
    errors.desc = "Description is required";
  }

  if(showAdditionalFields3){
    if (!formData.prjName1.trim()) {
      errors.prjName1 = "Project Name is required";
    }
  
    if (!formData.desc1.trim()) {
      errors.desc1 = "Description is required";
    }
  }

 

    return errors;
  }

  const validateForm2 = (formData) => {
    let errors = {};
// Additional validation for Tab 2 fields
if (!formData.inName.trim()) {
    errors.inName = "Institution Name is required";
  }

  if (!formData.crsName.trim()) {
    errors.crsName = "Course Name is required";
  }

  if (!formData.yop.trim()) {
    errors.yop = "Year of passing is required";
  }

  if (!formData.agg.trim()) {
    errors.agg = "Course Score is required";
  }
  if (!formData.inName1.trim()) {
    errors.inName1 = "Institution Name is required";
  }

  if (!formData.crsName1.trim()) {
    errors.crsName1 = "Course Name is required";
  }

  if (!formData.yop1.trim()) {
    errors.yop1 = "Year of passing is required";
  }

  if (!formData.agg1.trim()) {
    errors.agg1 = "Course Score is required";
  }
  if (!formData.inName2.trim()) {
    errors.inName2 = "Institution Name is required";
  }

  if (!formData.crsName2.trim()) {
    errors.crsName2 = "Course Name is required";
  }

  if (!formData.yop2.trim()) {
    errors.yop2 = "Year of passing is required";
  }

  if (!formData.agg2.trim()) {
    errors.agg2 = "Course Score is required";
  }

  if(pgDone){
    if (!formData.inName3.trim()) {
      errors.inName3 = "Institution Name is required";
    }
  
    if (!formData.crsName3.trim()) {
      errors.crsName3 = "Course Name is required";
    }
  
    if (!formData.yop3.trim()) {
      errors.yop3 = "Year of passing is required";
    }
  
    if (!formData.agg3.trim()) {
      errors.agg3 = "Course Score is required";
    }
  }
 
  return errors;
  };

  const validateForm1 = (formData) => {
    let errors = {};

    if (!formData.name.trim()) {
      errors.name = "First Name is required";
    } else if (!/^[a-zA-Z ]+$/.test(formData.name)) {
      errors.name = "First Name is invalid";
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "Resume URL is required";
    }

    if (!formData.mobile.trim()) {
      errors.mobile = "Mobile Number is required";
    } else if (isNaN(formData.mobile) || formData.mobile.length !== 10 || !['6', '7', '8', '9'].includes(formData.mobile.charAt(0))) {
      errors.mobile = "Invalid mobile number";
    }

    if (!formData.lang.trim()) {
      errors.lang = "Language is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email Address is required";
    } else if (!/^([a-zA-Z0-9_])+\@([a-zA-Z.]{2,6})+\.([a-zA-Z]{2,6})$/.test(formData.email)) {
      errors.email = "Invalid email address";
    }

    if (!formData.file.trim()) {
      errors.file = "Picture is required";
    }

    if (!formData.nat.trim()) {
      errors.nat = "Nationality is required";
    }

    if (!formData.gender) {
      errors.gender = "Please select a gender";
    }

    if (!formData.blood.trim()) {
      errors.blood = "Blood Group is required";
    }

    if (!formData.dob.trim()) {
      errors.dob = "Date of Birth is required";
    } else {
      const currentDate = new Date();
      const selectedDate = new Date(formData.dob);
      if (selectedDate >= currentDate) {
        errors.dob = "Date of Birth cannot be a future date";
      }
    }

    

    
    return errors;
  };

 

  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic (Czechia)",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Holy See",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine State",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe"
  ];
  
  const languages = [
    "Afrikaans",
    "Albanian",
    "Amharic",
    "Arabic",
    "Armenian",
    "Azerbaijani",
    "Basque",
    "Belarusian",
    "Bengali",
    "Bosnian",
    "Bulgarian",
    "Catalan",
    "Cebuano",
    "Chichewa",
    "Chinese (Simplified)",
    "Chinese (Traditional)",
    "Corsican",
    "Croatian",
    "Czech",
    "Danish",
    "Dutch",
    "English",
    "Esperanto",
    "Estonian",
    "Filipino",
    "Finnish",
    "French",
    "Frisian",
    "Galician",
    "Georgian",
    "German",
    "Greek",
    "Gujarati",
    "Haitian Creole",
    "Hausa",
    "Hawaiian",
    "Hebrew",
    "Hindi",
    "Hmong",
    "Hungarian",
    "Icelandic",
    "Igbo",
    "Indonesian",
    "Irish",
    "Italian",
    "Japanese",
    "Javanese",
    "Kannada",
    "Kazakh",
    "Khmer",
    "Kinyarwanda",
    "Korean",
    "Kurdish (Kurmanji)",
    "Kyrgyz",
    "Lao",
    "Latin",
    "Latvian",
    "Lithuanian",
    "Luxembourgish",
    "Macedonian",
    "Malagasy",
    "Malay",
    "Malayalam",
    "Maltese",
    "Maori",
    "Marathi",
    "Mongolian",
    "Myanmar (Burmese)",
    "Nepali",
    "Norwegian",
    "Odia (Oriya)",
    "Pashto",
    "Persian",
    "Polish",
    "Portuguese",
    "Punjabi",
    "Romanian",
    "Russian",
    "Samoan",
    "Scots Gaelic",
    "Serbian",
    "Sesotho",
    "Shona",
    "Sindhi",
    "Sinhala",
    "Slovak",
    "Slovenian",
    "Somali",
    "Spanish",
    "Sundanese",
    "Swahili",
    "Swedish",
    "Tajik",
    "Tamil",
    "Tatar",
    "Telugu",
    "Thai",
    "Turkish",
    "Turkmen",
    "Ukrainian",
    "Urdu",
    "Uyghur",
    "Uzbek",
    "Vietnamese",
    "Welsh",
    "Xhosa",
    "Yiddish",
    "Yoruba",
    "Zulu"
  ];
  
  return (
    <section>
 <Header/>
 <nav aria-label="breadcrumb " style={{backgroundColor: '#E6E7FF',paddingLeft: '10px',top:'3.8rem',fontWeight: 500,fontSize: '16px',position:'fixed',width:'100%',zIndex:1000,height:'30px'}}>
                <ol class="breadcrumb p-1">
                  <li class="breadcrumb-item" aria-current="page"><Link to="/jobseeker-home" style={{textDecoration:'none',color:'#2B358C'}}>Home</Link></li>
                  <li class="breadcrumb-item active" aria-current="page">Resume Builder</li>
                </ol>
              </nav>
              <Container style={{marginTop:'7rem'}}>
              <Alert variant="warning" >
          Form once submitted cannot be changed, so check all the fields before submitting!
        </Alert>
              </Container>
      <Container style={{ backgroundColor: '#E6E7FF', borderRadius: '10px',marginTop:'1rem'}}>
       <style>{`
    #a .nav-link.active {
      background-color: #2B358C !important;
      color: white;
    }
    #a .nav-link{
      color:#2B358C;
    }
  `}</style>
  
<Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
      <Nav id="a" fill variant="pills" style={{color:'black',paddingTop:'10px'}}>
        <Nav.Item>
          <Nav.Link eventKey="tab1">Personal</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab2">Academic</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab3">Technical</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab4">Additional</Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey="tab1">
          <Container >
            
              
             
        <Form  onSubmit={handleSubmit1}>
        <Container>
        <Row>
            <Col>
            <Form.Group className='m-3' controlId="name">
        <Form.Label>Name<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder='Name must be same as given in profile'
          value={formData.name}
          onChange={handleChange}
          isInvalid={!!errors.name}
        />
        <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className='m-3' controlId="lastName">
        <Form.Label>Upload Resume<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="lastName"
          placeholder='Provide URL of your resume, if not type null'
          value={formData.lastName}
          onChange={handleChange}
          isInvalid={!!errors.lastName}
        />
        <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className='m-3' controlId="mobile">
        <Form.Label>Mobile Number<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="mobile"
          placeholder='Mobile Number must be of 10 digits'
          value={formData.mobile}
          onChange={handleChange}
          isInvalid={!!errors.mobile}
        />
        <Form.Control.Feedback type="invalid">{errors.mobile}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className='m-3' controlId="lang">
  <Form.Label>Language<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
  <Form.Control
    list="languages"
    type="text"
    name="lang"
    placeholder='Choose your language'
    value={formData.lang}
    onChange={handleChange}
    isInvalid={!!errors.lang}
  />
  <datalist id="languages">
    {languages.map((language, index) => (
      <option key={index} value={language} />
    ))}
  </datalist>
  <Form.Control.Feedback type="invalid">{errors.lang}</Form.Control.Feedback>
</Form.Group>

      <Form.Group className='m-3' controlId="email">
        <Form.Label>Email Address<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="email"
          placeholder='Eg: Sample@gmail.com'
          value={formData.email}
          onChange={handleChange}
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
      </Form.Group>

            </Col>
            <Col className='mt-2'>
          

            <Form.Group className='m-3' controlId="nat">
  <Form.Label>Nationality<span style={{color:'red', fontSize:'18px'}}>*</span></Form.Label>
  <Form.Control
    list="countries"
    type="text"
    name="nat"
    placeholder='Choose your nationality'
    value={formData.nat}
    onChange={handleChange}
    isInvalid={!!errors.nat}
  />
  <datalist id="countries">
    {countries.map((country, index) => (
      <option key={index} value={country} />
    ))}
  </datalist>
  <Form.Control.Feedback type="invalid">{errors.nat}</Form.Control.Feedback>
</Form.Group>


      <Form.Group className='m-3' controlId="gender">
        <Form.Label>Gender<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <Form.Check
          type="radio"
          label="Male"
          name="gender"
          value="male"
          checked={formData.gender === "male"}
          onChange={handleChange}
          isInvalid={!!errors.gender}
        />
        <Form.Check
          type="radio"
          label="Female"
          name="gender"
          value="female"
          checked={formData.gender === "female"}
          onChange={handleChange}
          isInvalid={!!errors.gender}
        />
        <Form.Check
          type="radio"
          label="Others"
          name="gender"
          value="others"
          checked={formData.gender === "others"}
          onChange={handleChange}
          isInvalid={!!errors.gender}
        />
        </div>
        
        <Form.Control.Feedback type="invalid">{errors.gender}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className='m-3' controlId="blood">
  <Form.Label>Blood Group<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
  <Form.Control
    as="select"
    name="blood"
    value={formData.blood}
    onChange={handleChange}
    isInvalid={!!errors.blood}
  >
    <option value="">Choose your blood group</option>
    <option value="A+">A+</option>
    <option value="A-">A-</option>
    <option value="B+">B+</option>
    <option value="B-">B-</option>
    <option value="AB+">AB+</option>
    <option value="AB-">AB-</option>
    <option value="O+">O+</option>
    <option value="O-">O-</option>
  </Form.Control>
  <Form.Control.Feedback type="invalid">{errors.blood}</Form.Control.Feedback>
</Form.Group>


      <Form.Group className='m-3' controlId="dob">
        <Form.Label>Date of Birth<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          isInvalid={!!errors.dob}
        />
        <Form.Control.Feedback type="invalid">{errors.dob}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='m-3' controlId="file">
        <Form.Label>Upload Picture<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="file"
          placeholder='Provide URL of your picture'
          value={formData.file}
          onChange={handleChange}
          isInvalid={!!errors.file}
        />
        <Form.Control.Feedback type="invalid">{errors.file}</Form.Control.Feedback>
      </Form.Group>
            </Col>
        </Row>
        
       
   
     
      

      
  
        </Container>
             
              <Button variant="primary" className='m-3' type="submit" style={{ backgroundColor: '#2B358C', border: 'none' }}>
                Next
              </Button>
            </Form>
          </Container>
        </Tab.Pane>
        <Tab.Pane eventKey="tab2">
          
              <Container  >
 <Form onSubmit={handleSubmit2}>
        <Container >
        <h4 className='mt-3' style={{backgroundColor:'#ecdadd',textAlign:'center',padding:'5px',borderRadius:'5px',color:'maroon',fontWeight:600}}>SSLC</h4>
            <Row xs={1} md={2}>
             
                <Col>
                <Form.Group className='mb-3' controlId="inName">
        <Form.Label>Institution Name<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="inName"
          placeholder='Enter your Instution Name'
          value={formData.inName}
          onChange={handleChange}
          isInvalid={!!errors.inName}
        />
        <Form.Control.Feedback type="invalid">{errors.inName}</Form.Control.Feedback>
      </Form.Group>
                </Col>
                <Col>
                <Form.Group className='mb-3' controlId="crsName">
        <Form.Label>Course Name<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="crsName"
          placeholder='Enter your Course Name'
          value={formData.crsName}
          onChange={handleChange}
          isInvalid={!!errors.crsName}
        />
        <Form.Control.Feedback type="invalid">{errors.crsName}</Form.Control.Feedback>
      </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form.Group className='mb-3' controlId="yop">
        <Form.Label>Year of Passing<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="month"
          name="yop"
          placeholder='Enter your Year of Passing'
          value={formData.yop}
          onChange={handleChange}
          isInvalid={!!errors.yop}
        />
        <Form.Control.Feedback type="invalid">{errors.yop}</Form.Control.Feedback>
      </Form.Group>
                </Col>
                <Col>
                <Form.Group className='mb-3' controlId="agg">
        <Form.Label>Course Score<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="agg"
          placeholder='Enter your score'
          value={formData.agg}
          onChange={handleChange}
          isInvalid={!!errors.agg}
        />
        <Form.Control.Feedback type="invalid">{errors.agg}</Form.Control.Feedback>
      </Form.Group>
                </Col>
            </Row>

            <h4 style={{backgroundColor:'#ecdadd',textAlign:'center',padding:'5px',borderRadius:'5px',color:'maroon',fontWeight:600}}>HSC</h4>
            <Row xs={1} md={2}>
             
                <Col>
                <Form.Group className='mb-3' controlId="inName1">
        <Form.Label>Institution Name<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="inName1"
          placeholder='Enter your Institution Name'
          value={formData.inName1}
          onChange={handleChange}
          isInvalid={!!errors.inName1}
        />
        <Form.Control.Feedback type="invalid">{errors.inName1}</Form.Control.Feedback>
      </Form.Group>
                </Col>
                <Col>
                <Form.Group className='mb-3' controlId="crsName1">
        <Form.Label>Course Name<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="crsName1"
          placeholder='Enter your Course Name'
          value={formData.crsName1}
          onChange={handleChange}
          isInvalid={!!errors.crsName1}
        />
        <Form.Control.Feedback type="invalid">{errors.crsName1}</Form.Control.Feedback>
      </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form.Group className='mb-3' controlId="yop1">
        <Form.Label>Year of Passing<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="month"
          name="yop1"
          placeholder='Enter your Year Of Passing'
          value={formData.yop1}
          onChange={handleChange}
          isInvalid={!!errors.yop1}
        />
        <Form.Control.Feedback type="invalid">{errors.yop1}</Form.Control.Feedback>
      </Form.Group>
                </Col>
                <Col>
                <Form.Group className='mb-3' controlId="agg1">
        <Form.Label>Course Score<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="agg1"
          placeholder='Enter your score'
          value={formData.agg1}
          onChange={handleChange}
          isInvalid={!!errors.agg1}
        />
        <Form.Control.Feedback type="invalid">{errors.agg1}</Form.Control.Feedback>
      </Form.Group>
                </Col>
            </Row>

            <h4 style={{backgroundColor:'#ecdadd',textAlign:'center',padding:'5px',borderRadius:'5px',color:'maroon',fontWeight:600}}>UG</h4>
            <Row xs={1} md={2}>
             
                <Col>
                <Form.Group className='mb-3' controlId="inName2">
        <Form.Label>Institution Name<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="inName2"
          placeholder='Enter your Institution Name'
          value={formData.inName2}
          onChange={handleChange}
          isInvalid={!!errors.inName2}
        />
        <Form.Control.Feedback type="invalid">{errors.inName2}</Form.Control.Feedback>
      </Form.Group>
                </Col>
                <Col>
                <Form.Group className='mb-3' controlId="crsName2">
        <Form.Label>Course Name<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="crsName2"
          placeholder='Enter your Course Name'
          value={formData.crsName2}
          onChange={handleChange}
          isInvalid={!!errors.crsName2}
        />
        <Form.Control.Feedback type="invalid">{errors.crsName2}</Form.Control.Feedback>
      </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form.Group className='mb-3' controlId="yop2">
        <Form.Label>Year of Passing<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="month"
          name="yop2"
          placeholder='Enter your Year Of Passing'
          value={formData.yop2}
          onChange={handleChange}
          isInvalid={!!errors.yop2}
        />
        <Form.Control.Feedback type="invalid">{errors.yop2}</Form.Control.Feedback>
      </Form.Group>
                </Col>
                <Col>
                <Form.Group className='mb-3' controlId="agg2">
        <Form.Label>Course Score<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="agg2"
          placeholder='Enter your score'
          value={formData.agg2}
          onChange={handleChange}
          isInvalid={!!errors.agg2}
        />
        <Form.Control.Feedback type="invalid">{errors.agg2}</Form.Control.Feedback>
      </Form.Group>
                </Col>
            </Row>


            <div>
      <Form.Group className="mb-3" controlId="pgCheckbox">
        <Form.Check
          type="checkbox"
          label="Have you done PG?"
          checked={pgDone}
          onChange={handleChangeCheckbox}
        />
      </Form.Group>
      {pgDone && ( // Render the form if pgDone is true
        <div>
          <h4 style={{ backgroundColor: '#ecdadd', textAlign: 'center', padding: '5px', borderRadius: '5px', color: 'maroon', fontWeight: 600 }}>PG</h4>
          <Row xs={1} md={2}>
            <Col>
              <Form.Group className='mb-3' controlId="inName3">
                <Form.Label>Institution Name<span style={{ color: 'red', fontSize: '18px' }}>*</span></Form.Label>
                <Form.Control
                  type="text"
                  name="inName3"
                  placeholder='Enter your Institution Name'
                  value={formData.inName3}
                  onChange={handleChange}
                  isInvalid={!!errors.inName3}
                />
                <Form.Control.Feedback type="invalid">{errors.inName3}</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className='mb-3' controlId="crsName3">
                <Form.Label>Course Name<span style={{ color: 'red', fontSize: '18px' }}>*</span></Form.Label>
                <Form.Control
                  type="text"
                  name="crsName3"
                  placeholder='Enter your Course Name'
                  value={formData.crsName3}
                  onChange={handleChange}
                  isInvalid={!!errors.crsName3}
                />
                <Form.Control.Feedback type="invalid">{errors.crsName3}</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className='mb-3' controlId="yop3">
                <Form.Label>Year of Passing<span style={{ color: 'red', fontSize: '18px' }}>*</span></Form.Label>
                <Form.Control
                  type="month"
                  name="yop3"
                  placeholder='Enter your Year Of Passing'
                  value={formData.yop3}
                  onChange={handleChange}
                  isInvalid={!!errors.yop3}
                />
                <Form.Control.Feedback type="invalid">{errors.yop3}</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className='mb-3' controlId="agg3">
                <Form.Label>Course Score<span style={{ color: 'red', fontSize: '18px' }}>*</span></Form.Label>
                <Form.Control
                  type="text"
                  name="agg3"
                  placeholder='Enter your score'
                  value={formData.agg3}
                  onChange={handleChange}
                  isInvalid={!!errors.agg3}
                />
                <Form.Control.Feedback type="invalid">{errors.agg3}</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
        </div>
      )}
    </div>
        </Container>
      

      

     

      

     
   
             
              <Button variant="primary" className='m-3' type="submit" style={{ backgroundColor: '#2B358C', border: 'none' }}>
                Next
              </Button>
            </Form>
          </Container>
        </Tab.Pane>
        <Tab.Pane eventKey="tab3">
        <Container  >
    <Form onSubmit={handleSubmit3}>
      <Container>
        <Row xs={1} md={2}> 
          <Col >
<Form.Group className='mb-3' controlId="carObj">
        <Form.Label>Career Objective<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="carObj"
          placeholder='Enter your career description'
          value={formData.carObj}
          onChange={handleChange}
          isInvalid={!!errors.carObj} style={{resize:'none'}}
        />
        <Form.Control.Feedback type="invalid">{errors.carObj}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className='mb-3' controlId="skills">
        <Form.Label>Skills<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="skills"
          placeholder='Enter skills'
          value={formData.skills}
          onChange={handleChange}
          isInvalid={!!errors.skills}
        />
        <Form.Control.Feedback type="invalid">{errors.skills}</Form.Control.Feedback>
      </Form.Group>

      
     



<Row>
          <h4 style={{backgroundColor:'#ecdadd',textAlign:'center',padding:'5px',borderRadius:'5px',color:'maroon',fontWeight:600}}>Technical Details</h4>
            <Col>
            <Form.Group className='mb-3' controlId="evntName">
        <Form.Label>Event Name - 01<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="evntName"
          placeholder='Enter event name'
          value={formData.evntName}
          onChange={handleChange}
          isInvalid={!!errors.evntName}
        />
        <Form.Control.Feedback type="invalid">{errors.evntName}</Form.Control.Feedback>
      </Form.Group>

            </Col>
            <Col>
            
      <Form.Group className='mb-3' controlId="award">
        <Form.Label>Awarded By - 01<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="award"
          placeholder='Provided by'
          value={formData.award}
          onChange={handleChange}
          isInvalid={!!errors.award}
        />
        <Form.Control.Feedback type="invalid">{errors.award}</Form.Control.Feedback>
      </Form.Group>
            </Col>
          </Row>





          <Form.Group className='mb-3' controlId="addAnotherCheckbox1">
        <Form.Check
          type="checkbox"
          label="Add Another"
          onChange={handleCheckboxChange1}
        />
      </Form.Group>

      {showAdditionalFields1 && (
        <div> <Row>
            <Col>
            <Form.Group className='mb-3' controlId="evntName1">
        <Form.Label>Event Name - 02<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="evntName1"
          placeholder='Enter event name'
          value={formData.evntName1}
          onChange={handleChange}
          isInvalid={!!errors.evntName1}
        />
        <Form.Control.Feedback type="invalid">{errors.evntName1}</Form.Control.Feedback>
      </Form.Group>

            </Col>
            <Col>
            
      <Form.Group className='mb-3' controlId="award1">
        <Form.Label>Awarded By - 02<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="award1"
          placeholder='Provided by'
          value={formData.award1}
          onChange={handleChange}
          isInvalid={!!errors.award1}
        />
        <Form.Control.Feedback type="invalid">{errors.award1}</Form.Control.Feedback>
      </Form.Group>
            </Col>
          </Row>
          </div>)}
       
<Row>
<h4 style={{backgroundColor:'#ecdadd',textAlign:'center',padding:'5px',borderRadius:'5px',color:'maroon',fontWeight:600}}>Non-Technical  Details</h4>
  <Col>
  <Form.Group className='mb-3' controlId="evntName3">
        <Form.Label>Event Name - 01<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="evntName3"
          placeholder='Enter event name'
          value={formData.evntName3}
          onChange={handleChange}
          isInvalid={!!errors.evntName3}
        />
        <Form.Control.Feedback type="invalid">{errors.evntName3}</Form.Control.Feedback>
      </Form.Group>
  </Col>
  <Col>
  
  <Form.Group className='mb-3' controlId="award3">
        <Form.Label>Awarded By - 01<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="award3"
          placeholder='Provided by'
          value={formData.award3}
          onChange={handleChange}
          isInvalid={!!errors.award3}
        />
        <Form.Control.Feedback type="invalid">{errors.award3}</Form.Control.Feedback>
      </Form.Group>
  </Col>
</Row>

<Form.Group className='mb-3' controlId="addAnotherCheckbox1">
        <Form.Check
          type="checkbox"
          label="Add Another"
          onChange={handleCheckboxChange2}
        />
      </Form.Group>

{showAdditionalFields2 && (
        <div>
<Row>

  <Col>
  <Form.Group className='mb-3' controlId="evntName31">
        <Form.Label>Event Name - 02<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="evntName31"
          placeholder='Enter event name'
          value={formData.evntName31}
          onChange={handleChange}
          isInvalid={!!errors.evntName31}
        />
        <Form.Control.Feedback type="invalid">{errors.evntName31}</Form.Control.Feedback>
      </Form.Group>
  </Col>
  <Col>
  
  <Form.Group className='mb-3' controlId="award31">
        <Form.Label>Awarded By - 02<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="award31"
          placeholder='Provided by'
          value={formData.award31}
          onChange={handleChange}
          isInvalid={!!errors.award31}
        />
        <Form.Control.Feedback type="invalid">{errors.award31}</Form.Control.Feedback>
      </Form.Group>
  </Col>
</Row>
</div>)}
      
          </Col>
          <Col>

          <Row>
          <h4 className='mt-3' style={{backgroundColor:'#ecdadd',textAlign:'center',padding:'5px',borderRadius:'5px',color:'maroon',fontWeight:600}}>Internship Details</h4>
          <Col>
          <Form.Group className='mb-3' controlId="compName">
        <Form.Label>Company Name - 01<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="compName"
          placeholder='Enter company name'
          value={formData.compName}
          onChange={handleChange}
          isInvalid={!!errors.compName}
        />
        <Form.Control.Feedback type="invalid">{errors.compName}</Form.Control.Feedback>
      </Form.Group>
          </Col>
          <Col>
          <Form.Group className='mb-3' controlId="dur">
        <Form.Label>Duration - 01<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="dur"
          placeholder='Enter duration in weeks'
          value={formData.dur}
          onChange={handleChange}
          isInvalid={!!errors.dur}
        />
        <Form.Control.Feedback type="invalid">{errors.dur}</Form.Control.Feedback>
      </Form.Group>
          </Col>
        </Row>
      <Form.Group className='mb-3' controlId="role">
        <Form.Label>Role - 01<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="role"
          placeholder='Enter role'
          value={formData.role}
          onChange={handleChange}
          isInvalid={!!errors.role}
        />
        <Form.Control.Feedback type="invalid">{errors.role}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className='mb-3' controlId="addAnotherCheckbox">
        <Form.Check
          type="checkbox"
          label="Add Another"
          onChange={handleCheckboxChange}
        />
      </Form.Group>

      {showAdditionalFields && (
        <div>
          <Row>
            <Col>
              <Form.Group className='mb-3' controlId="compName1">
                <Form.Label>Company Name - 02<span style={{ color: 'red', fontSize: '18px' }}>*</span></Form.Label>
                <Form.Control
                  type="text"
                  name="compName1"
                  placeholder='Enter company name'
                  value={formData.compName1}
                  onChange={handleChange}
                  isInvalid={!!errors.compName1}
                />
                <Form.Control.Feedback type="invalid">{errors.compName1}</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className='mb-3' controlId="dur1">
                <Form.Label>Duration - 02<span style={{ color: 'red', fontSize: '18px' }}>*</span></Form.Label>
                <Form.Control
                  type="text"
                  name="dur1"
                  placeholder='Enter duration in weeks'
                  value={formData.dur1}
                  onChange={handleChange}
                  isInvalid={!!errors.dur1}
                />
                <Form.Control.Feedback type="invalid">{errors.dur1}</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className='mb-3' controlId="role1">
            <Form.Label>Role - 02<span style={{ color: 'red', fontSize: '18px' }}>*</span></Form.Label>
            <Form.Control
              type="text"
              name="role1"
              placeholder='Enter role'
              value={formData.role1}
              onChange={handleChange}
              isInvalid={!!errors.role1}
            />
            <Form.Control.Feedback type="invalid">{errors.role1}</Form.Control.Feedback>
          </Form.Group>
        </div>
      )}
         


<h4 style={{backgroundColor:'#ecdadd',textAlign:'center',padding:'5px',borderRadius:'5px',color:'maroon',fontWeight:600}}>Projects Details</h4>

      <Form.Group className='mb-3' controlId="prjName">
        <Form.Label>Project Name - 01<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="prjName"
          placeholder='Enter project name'
          value={formData.prjName}
          onChange={handleChange}
          isInvalid={!!errors.prjName}
        />
        <Form.Control.Feedback type="invalid">{errors.prjName}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className='mb-3' controlId="desc">
        <Form.Label>Description - 01<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="desc"
          placeholder='Enter description of your project'
          value={formData.desc}
          onChange={handleChange}
          isInvalid={!!errors.desc}
        />
        <Form.Control.Feedback type="invalid">{errors.desc}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className='mb-3' controlId="addAnotherCheckbox1">
        <Form.Check
          type="checkbox"
          label="Add Another"
          onChange={handleCheckboxChange3}
        />
      </Form.Group>

{showAdditionalFields3 && (
        <div>
      <Form.Group className='mb-3' controlId="prjName1">
        <Form.Label>Project Name - 02<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="prjName1"
          placeholder='Enter project name'
          value={formData.prjName1}
          onChange={handleChange}
          isInvalid={!!errors.prjName1}
        />
        <Form.Control.Feedback type="invalid">{errors.prjName1}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className='mb-3' controlId="desc1">
        <Form.Label>Description - 02<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="desc1"
          placeholder='Enter description of your project'
          value={formData.desc1}
          onChange={handleChange}
          isInvalid={!!errors.desc1}
        />
        <Form.Control.Feedback type="invalid">{errors.desc1}</Form.Control.Feedback>
      </Form.Group>
</div>)}
      
</Col>
        </Row>
        <Button variant="primary" type="submit" className='mb-3' style={{ backgroundColor: '#2B358C', border: 'none' ,color:'white'}}>
        Next
      </Button>
      </Container>
      

     
      
    </Form>
    </Container>
        </Tab.Pane>
        <Tab.Pane eventKey="tab4">
        <Container>
            
      <Form onSubmit={handleSubmit4} className='p-4'>
      <Row xs={1} md={2}>
            <Col>
            <Form.Group  controlId="sskills2">
          <Form.Label >Soft Skills</Form.Label>
          
            <Form.Control
              type="text"
              name="sskills2"
              placeholder='Enter soft skills'
              value={formData.sskills2}
              onChange={handleChange}
              isInvalid={!!errors.sskills2}
            />
            <Form.Control.Feedback type="invalid">{errors.sskills2}</Form.Control.Feedback>
         
        </Form.Group>

        <Form.Group className='mb-5' controlId="hob">
          <Form.Label >Hobbies</Form.Label>
          
            <Form.Control
              type="text"
              name="hob"
              placeholder='Enter hobbies'
              value={formData.hob}
              onChange={handleChange}
              isInvalid={!!errors.hob}
            />
            <Form.Control.Feedback type="invalid">{errors.hob}</Form.Control.Feedback>
         
        </Form.Group>

       
        <h4 style={{backgroundColor:'#ecdadd',textAlign:'center',padding:'5px',borderRadius:'5px',color:'maroon',fontWeight:600}}>Extra Curricular Details</h4>
            
            <Form.Group  controlId="evntName21">
          <Form.Label >Event Name</Form.Label>
          
            <Form.Control
              type="text"
              name="evntName21"
              placeholder='Enter event name'
              value={formData.evntName21}
              onChange={handleChange}
              isInvalid={!!errors.evntName21}
            />
            <Form.Control.Feedback type="invalid">{errors.evntName21}</Form.Control.Feedback>
         
        </Form.Group>

        <Form.Group  controlId="award21">
          <Form.Label >Awardee</Form.Label>
          
            <Form.Control
              type="text"
              name="award21"
              placeholder='Provided by'
              value={formData.award21}
              onChange={handleChange} 
              isInvalid={!!errors.award21}
            />
            <Form.Control.Feedback type="invalid">{errors.award21}</Form.Control.Feedback>
         
        </Form.Group>

        <Form.Group className='mb-3' controlId="addAnotherCheckbox1">
        <Form.Check
          type="checkbox"
          label="Add Another"
          onChange={handleCheckboxChange4}
        />
      </Form.Group>
      {showAdditionalFields4 && (
        <div>
        <Form.Group  controlId="evntName211">
          <Form.Label >Event Name</Form.Label>
          
            <Form.Control
              type="text"
              name="evntName211"
              placeholder='Enter event name'
              value={formData.evntName211}
              onChange={handleChange}
              isInvalid={!!errors.evntName211}
            />
            <Form.Control.Feedback type="invalid">{errors.evntName211}</Form.Control.Feedback>
         
        </Form.Group>

        <Form.Group  controlId="award211">
          <Form.Label >Awardee</Form.Label>
          
            <Form.Control
              type="text"
              name="award211"
              placeholder='Provided by'
              value={formData.award211}
              onChange={handleChange} 
              isInvalid={!!errors.award211}
            />
            <Form.Control.Feedback type="invalid">{errors.award211}</Form.Control.Feedback>
         
        </Form.Group>
        </div>)}
            </Col>
            
            <Col>
           

      <h4 className='m-3' style={{backgroundColor:'#ecdadd',textAlign:'center',padding:'5px',borderRadius:'5px',color:'maroon',fontWeight:600}}>Experience Details</h4>
      <Form.Group className='m-3' controlId="exp">
  <Form.Label>Experience<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
  <Form.Control
    as="select"
    name="exp"
    value={formData.exp}
    onChange={handleChange}
    isInvalid={!!errors.exp}
  >
    <option value="">Choose experience status</option>
    <option value="Experienced">Experienced</option>
    <option value="Fresher">Fresher</option>
  
  </Form.Control>
  <Form.Control.Feedback type="invalid">{errors.exp}</Form.Control.Feedback>
</Form.Group>
<Form.Group className='m-3'  controlId="expDesc">
          <Form.Label >Experience Description</Form.Label>
          
            <Form.Control
             as="textarea" rows={3}
              name="expDesc"
              placeholder='Provide experience description'
              value={formData.expDesc}
              onChange={handleChange}
              isInvalid={!!errors.expDesc}
            />
            <Form.Control.Feedback type="invalid">{errors.expDesc}</Form.Control.Feedback>
         
        </Form.Group>
        <Form.Group className='m-3'  controlId="address">
          <Form.Label >Address</Form.Label>
          
            <Form.Control
             as="textarea" rows={3}
              name="address"
              placeholder='Provide your address'
              value={formData.address}
              onChange={handleChange}
              isInvalid={!!errors.address}
            />
            <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
         
        </Form.Group>

            </Col>
        </Row>
        
       
        <Form.Group  controlId="myCheckbox">
          <Col >
            <Form.Check
              type="checkbox"
              label="I agree to the terms and conditions"
              name="isChecked"
              checked={formData.isChecked}
              onChange={handleChange}
              isInvalid={!!errors.isChecked} 
            />
            <Form.Control.Feedback type="invalid">{errors.isChecked}</Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Button variant="primary" type="submit" style={{ backgroundColor: '#2B358C', border: 'none',color:'white' }}>
        {/* <PDFDownloadLink document={<MyDocument />} fileName="resume.pdf" style={{color:'white',textDecoration:'none'}}>
            {({ blob, url, loading, error }) =>
              loading ? 'Loading document...' : 'Download PDF'
            }
          </PDFDownloadLink> */}
          Submit
        </Button>
      </Form>
    </Container>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
    </Container>
      <Footer/>
    </section>
     
  
 
    
  );
}

export default ResumeBuilderForm;
