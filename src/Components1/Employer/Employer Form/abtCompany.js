import React, { useEffect, useState } from 'react';
import { Nav, Tab, Form, Button, Container, Row, Col,Alert, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addDataAsync } from '../../../features/dataSlice';
import FooterEmp from '../footerEmp';
import HeaderEmp from '../headerExp';
import { Link } from 'react-router-dom';
function AboutCompanyForm() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  const dispatch = useDispatch();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailureModal, setShowFailureModal] = useState(false);
  const [showEmptyModal, setShowEmptyModal] = useState(false);
  const handleCloseSuccessModal = () => setShowSuccessModal(false);
  const handleCloseFailureModal = () => setShowFailureModal(false);
  const handleCloseEmptyModal = () => setShowEmptyModal(false);
  const [key, setKey] = useState('tab1');
  const [formData, setFormData] = useState({
    CompanyName: '',
    CompSlgn: '',
    Compfile: '',
    Coverfile: '',
    ProfFile: '',
    LeadRole:'',
    LeadName:'',
    abtCompany: '',
    mission:'',
    vision:'',
    compType:'',
    compSize:'',
    found:'',
    head:'',
    webURL:'',
    instaLink:'',
    linkedInLink:'',
    twitterLink:'',
    faceLink:''
    
    
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmpty = Object.values(formData).some((value) => value.trim() === '');
    if (!isEmpty) {
        const hasErrors = Object.values(errors).some((error) => error);
        if (!hasErrors) {
            // No errors, show success alert
            dispatch(addDataAsync(formData));
            // Reset form data
            setFormData({
              CompanyName: '',
              CompSlgn: '',
              Compfile: '',
              Coverfile: '',
              ProfFile: '',
              LeadRole:'',
              LeadName:'',
              abtCompany: '',
              mission:'',
              vision:'',
              compType:'',
              compSize:'',
              found:'',
              head:'',
              webURL:'',
              instaLink:'',
              linkedInLink:'',
              twitterLink:'',
              faceLink:''
        });
        setErrors({});
        console.log('Form submitted successfully!');
        setShowSuccessModal(true);
      } else {
        console.log(errors)
        console.log('Form has errors. Please fix them.');
      }
  } else{
    setShowEmptyModal(true)
}
  };

 
  const handleKeyUp = (e) => {
    const { name, value } = e.target;

    // Validation logic
    switch (name) {
      case 'CompanyName':
        setErrors({ ...errors, CompanyName: value.length === 0 ? 'CompanyName is required' : '' });
        break;
      case 'CompSlgn':
        setErrors({ ...errors, CompSlgn: value.length === 0 ? 'CompSlgn is required' : '' });
        break;
      case 'Compfile':
        setErrors({ ...errors, Compfile: value.length === 0 ? 'Company Profile Image is required' : '' });
        break;
      case 'Coverfile':
        setErrors({ ...errors, Coverfile: value.length === 0 ? 'Company Cover Image is required' : '' });
        break;
      case 'ProfFile':
        setErrors({ ...errors, ProfFile: value.length === 0 ? 'Leader Profile Image is required' : '' });
        break;
      case 'LeadName':
        setErrors({ ...errors, LeadName: value.length == 0 ? 'LeadName is required' : '' });
        break;
      case 'LeadRole':
        setErrors({ ...errors, LeadRole: value.length == 0 ? 'LeadRole is required' : '' });
        break;
      case 'abtCompany':
        setErrors({ ...errors, abtCompany: value.length == 0 ? 'abtCompany is required' : '' });
        break;
      case 'mission':
        setErrors({ ...errors, mission: value.length == 0 ? 'mission is required' : '' });
        break;
      case 'vision':
        setErrors({ ...errors, vision: value.length == 0 ? 'vision is required' : '' });
        break;
        
        case 'compType':
          setErrors({ ...errors, compType: value.length == 0 ? 'compType is required' : '' });
          break;
        case 'compSize':
          setErrors({ ...errors, compSize: value.length == 0 ? 'compSize is required' : '' });
          break;
        case 'found':
          setErrors({ ...errors, found: value.length == 0 ? 'found is required' : '' });
          break;
        case 'head':
          setErrors({ ...errors, head: value.length == 0 ? 'head is required' : '' });
          break;
        case 'webURL':
          setErrors({ ...errors, webURL: value.length == 0 ? 'webURL is required' : '' });
          break;
        case 'instaLink':
          setErrors({ ...errors, instaLink: value.length == 0 ? 'instaLink is required' : '' });
          break;
        case 'faceLink':
          setErrors({ ...errors, faceLink: value.length == 0 ? 'faceLink is required' : '' });
          break;
        case 'linkedInLink':
          setErrors({ ...errors, linkedInLink: value.length == 0 ? 'linkedInLink is required' : '' });
          break;
        case 'twitterLink':
          setErrors({ ...errors, twitterLink: value.length == 0 ? 'twitterLink is required' : '' });
          break;
      default:
        break;
    }
  };


  



  return (

    <>
    <HeaderEmp/>
    <nav aria-label="breadcrumb " style={{backgroundColor: '#E6E7FF',paddingLeft: '10px',marginTop:'3.8rem',fontWeight: 500,fontSize: '17px'}}>
                <ol class="breadcrumb p-1">
                  <li class="breadcrumb-item" aria-current="page"><Link to="/employer-home" style={{textDecoration:'none',color:'#2B358C'}}>Home</Link></li>
                  <li class="breadcrumb-item active" aria-current="page">About Company</li>
                </ol>
              </nav>
              <Container className='mt-4'>
              <Alert variant="warning" >
          Form once submitted cannot be changed, so check all the fields before submitting!
        </Alert>
              </Container>
    <Container style={{ backgroundColor: '#E6E7FF', borderRadius: '10px',marginTop:'2rem'}}>
         <style>{`
    #a .nav-link.active {
      background-color: #2B358C !important;
      color: white;
    }
    #a .nav-link {
        color: #2B358C;
      }
  `}</style>
<Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
      <Nav id="a" fill variant="pills" style={{color:'black',paddingTop:'10px'}}>
        <Nav.Item>
          <Nav.Link eventKey="tab1">Info 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab2">Info 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab3">Info 3</Nav.Link>
        </Nav.Item>
        
      </Nav>
      <Form  onSubmit={handleSubmit}>
      <Tab.Content>
        <Tab.Pane eventKey="tab1">
          <Container >
            
              
             
        
        <Container>
        <Row>
            <Col>
            <Form.Group className='m-3' controlId="CompanyName">
        <Form.Label>Company Name<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="CompanyName"
          placeholder='Eg: ABC Company Pvt Ltd'
          value={formData.CompanyName}
          onChange={handleChange} onKeyUp={handleKeyUp}
          isInvalid={!!errors.CompanyName}
        />
        <Form.Control.Feedback type="invalid">{errors.CompanyName}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className='m-3' controlId="CompSlgn">
        <Form.Label>Company Slogan<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="CompSlgn"
          placeholder='Slogan of your company'
          value={formData.CompSlgn}
          onChange={handleChange} onKeyUp={handleKeyUp}
          isInvalid={!!errors.CompSlgn}
        />
        <Form.Control.Feedback type="invalid">{errors.CompSlgn}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className='m-3' controlId="Compfile">
        <Form.Label>Company Image<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="Compfile"
          placeholder='Provide URL of company profile image'
          onChange={handleChange} onKeyUp={handleKeyUp}
          isInvalid={!!errors.Compfile}
        />
        <Form.Control.Feedback type="invalid">{errors.Compfile}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className='m-3' controlId="Coverfile">
        <Form.Label>Company Cover Image<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="Coverfile"
          placeholder='Provide URL of company cover image'
          onChange={handleChange} onKeyUp={handleKeyUp}
          isInvalid={!!errors.Coverfile}
        />
        <Form.Control.Feedback type="invalid">{errors.Coverfile}</Form.Control.Feedback>
      </Form.Group>



            </Col>
            <Col>
          

      <Form.Group className='m-3' controlId="LeadName">
        <Form.Label>Name<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="LeadName"
          placeholder='Eg: John Doe'
          value={formData.LeadName}
          onChange={handleChange} onKeyUp={handleKeyUp}
          isInvalid={!!errors.LeadName}
        />
        <Form.Control.Feedback type="invalid">{errors.LeadName}</Form.Control.Feedback>
      </Form.Group>


      <Form.Group className='m-3' controlId="LeadRole">
        <Form.Label>Roles<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="LeadRole"
          placeholder='Eg: Assistant Manager'
          value={formData.LeadRole}
          onChange={handleChange} onKeyUp={handleKeyUp}
          isInvalid={!!errors.LeadRole}
        />
        <Form.Control.Feedback type="invalid">{errors.LeadRole}</Form.Control.Feedback>
      </Form.Group>

    
     
      <Form.Group className='m-3' controlId="ProfFile">
        <Form.Label>File<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          placeholder='Provide URL of leader profie image'
          name="ProfFile"
          onChange={handleChange} onKeyUp={handleKeyUp}
          isInvalid={!!errors.ProfFile}
        />
        <Form.Control.Feedback type="invalid">{errors.ProfFile}</Form.Control.Feedback>
      </Form.Group>
            </Col>
        </Row>
        
       
   
     
      

      
  
        </Container>
             
              
            
          </Container>
        </Tab.Pane>
        <Tab.Pane eventKey="tab2">
          
              <Container  >

        <Container >
            <Row>
               
                <Form.Group className='mb-3' controlId="abtCompany">
        <Form.Label>About Company<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="abtCompany"
          placeholder='Give description of your company'
          value={formData.abtCompany}
          onChange={handleChange} onKeyUp={handleKeyUp}
          isInvalid={!!errors.abtCompany} style={{resize:'none'}}
        />
        <Form.Control.Feedback type="invalid">{errors.abtCompany}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className='mb-3' controlId="mission">
        <Form.Label>Mission<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="mission"
          placeholder='Give mission of your company'
          value={formData.mission}
          onChange={handleChange} onKeyUp={handleKeyUp}
          isInvalid={!!errors.mission} style={{resize:'none'}}
        />
        <Form.Control.Feedback type="invalid">{errors.mission}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className='mb-3' controlId="vision">
        <Form.Label>Vision<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="vision"
          placeholder='Give vision of your company'
          value={formData.vision}
          onChange={handleChange} onKeyUp={handleKeyUp}
          isInvalid={!!errors.vision} style={{resize:'none'}}
        />
        <Form.Control.Feedback type="invalid">{errors.vision}</Form.Control.Feedback>
      </Form.Group>
               
            </Row>
        </Container>
      

      

     

      

     
   
             
              
          </Container>
        </Tab.Pane>
        <Tab.Pane eventKey="tab3">
        <Container  >
    
      <Container>
        <Row xs={1} md={2}> 
          <Col >
          <Form.Group className='mb-3' controlId="compType">
        <Form.Label>Company Type<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="compType"
          placeholder='eg: IT, Production, etc..,'
          value={formData.compType}
          onChange={handleChange} onKeyUp={handleKeyUp}
          isInvalid={!!errors.compType}
        />
        <Form.Control.Feedback type="invalid">{errors.compType}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='mb-3' controlId="compSize">
        <Form.Label>Company Size<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="compSize"
          placeholder='Eg: 1000-2000 Employees'
          value={formData.compSize}
          onChange={handleChange} onKeyUp={handleKeyUp}
          isInvalid={!!errors.compSize}
        />
        <Form.Control.Feedback type="invalid">{errors.compSize}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='mb-3' controlId="found">
        <Form.Label>Founded in<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          placeholder='Eg: 1998'
          name="found"
          value={formData.found}
          onChange={handleChange} onKeyUp={handleKeyUp}
          isInvalid={!!errors.found}
        />
        <Form.Control.Feedback type="invalid">{errors.found}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='mb-3' controlId="head">
        <Form.Label>HeadQuarters<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="head"
          placeholder='Eg: New Delhi'
          value={formData.head}
          onChange={handleChange} onKeyUp={handleKeyUp}
          isInvalid={!!errors.head}
        />
        <Form.Control.Feedback type="invalid">{errors.head}</Form.Control.Feedback>
      </Form.Group>
          </Col>
          <Col>
          
          
            <Form.Group className='mb-3' controlId="webURL">
        <Form.Label>Website URL<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="webURL"
          placeholder='Eg: https://www.example.com'
          value={formData.webURL}
          onChange={handleChange} onKeyUp={handleKeyUp}
          isInvalid={!!errors.webURL}
        />
        <Form.Control.Feedback type="invalid">{errors.webURL}</Form.Control.Feedback>
      </Form.Group>
           
           <h4>Get Connected in<span style={{color:'red',fontSize:'18px'}}>*</span></h4>
            
      <Form.Group className='mb-3' controlId="instaLink">
        <Form.Control
          type="text"
          name="instaLink"
          value={formData.instaLink}
          onChange={handleChange} onKeyUp={handleKeyUp}
          isInvalid={!!errors.instaLink}
          placeholder='Instagram Link'
        />
        <Form.Control.Feedback type="invalid">{errors.instaLink}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='mb-3' controlId="faceLink">
        <Form.Control
          type="text"
          name="faceLink"
          value={formData.faceLink}
          onChange={handleChange} onKeyUp={handleKeyUp}
          isInvalid={!!errors.faceLink}
          placeholder='Facebook Link'
        />
        <Form.Control.Feedback type="invalid">{errors.faceLink}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='mb-3' controlId="linkedInLink">
        <Form.Control
          type="text"
          name="linkedInLink"
          value={formData.linkedInLink}
          onChange={handleChange} onKeyUp={handleKeyUp}
          isInvalid={!!errors.linkedInLink}
          placeholder='LinkedIn Link'
        />
        <Form.Control.Feedback type="invalid">{errors.linkedInLink}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='mb-3' controlId="twitterLink">
        <Form.Control
          type="text"
          name="twitterLink"
          value={formData.twitterLink}
          onChange={handleChange} onKeyUp={handleKeyUp}
          isInvalid={!!errors.twitterLink}
          placeholder='Twitter (X) Link'
        />
        <Form.Control.Feedback type="invalid">{errors.twitterLink}</Form.Control.Feedback>
      </Form.Group>
           
          
       </Col>

        </Row>
        <Button variant="primary" type="submit" className='mb-3' style={{ backgroundColor: '#2B358C', border: 'none' ,color:'white'}}>
        Submit
      </Button>
      </Container>
      

     
      
    
    </Container>
        </Tab.Pane>
        
      </Tab.Content>
      </Form>
    </Tab.Container>
    <Modal show={showSuccessModal} onHide={handleCloseSuccessModal} centered>
   <Modal.Header closeButton>
     <Modal.Title style={{color:'green',fontWeight:600}}>Form submitted Successfully.</Modal.Title>
   </Modal.Header>
   <Modal.Body>About company posted successfully.</Modal.Body>
   <Modal.Footer>
     <Button variant="secondary" as={Link} to="/employer-home">
       Proceed
     </Button>
   </Modal.Footer>
 </Modal>
 <Modal show={showEmptyModal} onHide={handleCloseEmptyModal} centered>
   <Modal.Header closeButton>
     <Modal.Title style={{color:'maroon',fontWeight:600}}>Form not submitted</Modal.Title>
   </Modal.Header>
   <Modal.Body>Values should not be empty.</Modal.Body>
 
 </Modal>
    </Container>
    <FooterEmp/>

    </>
    
    
  );
}

export default AboutCompanyForm;
