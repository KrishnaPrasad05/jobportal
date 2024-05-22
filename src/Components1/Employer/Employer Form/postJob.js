import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDataAsync } from '../../../features/dataSlice';
import { Nav, Tab, Form, Button, Container, Row, Col,Alert, Modal } from 'react-bootstrap';
import HeaderEmp from '../headerExp';
import FooterEmp from '../footerEmp';
import { Link } from 'react-router-dom';
function PostJobForm() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  const [show, setShow] = useState(true);
    const dispatch = useDispatch();
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showFailureModal, setShowFailureModal] = useState(false);
    const [showEmptyModal, setShowEmptyModal] = useState(false);
    const handleCloseSuccessModal = () => setShowSuccessModal(false);
    const handleCloseFailureModal = () => setShowFailureModal(false);
    const handleCloseEmptyModal = () => setShowEmptyModal(false);
  const [key, setKey] = useState('tab1');
  const [formData, setFormData] = useState({
    Role: '',
    CompName: '',
    ExpReq: '',
    Qual: '',
    Loc: '',
    Sal:'',
    aboutCompany: '',
    jobDesc:'',
    skillsReq:'',
    Hiring:'',
    EmpType:'',
    JobCat:'',
    Country:'',
    empName:''
    
    
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
              Role: '',
              CompName: '',
              ExpReq: '',
              Qual: '',
              Loc: '',
              Sal:'',
              aboutCompany: '',
              jobDesc:'',
              skillsReq:'',
              Hiring:'',
              EmpType:'',
              JobCat:'',
              Country:'',
              empName:''
            });
            // Reset errors
            setErrors({
              Role: '',
              CompName: '',
              ExpReq: '',
              Qual: '',
              Loc: '',
              Sal:'',
              aboutCompany: '',
              jobDesc:'',
              skillsReq:'',
              Hiring:'',
              EmpType:'',
              JobCat:'',
              Country:'',
              empName:''
            });
            setShowSuccessModal(true);
          } else {
            // There are errors, handle them accordingly (e.g., display error messages)
            console.log('Form has errors. Please fix them.');
          }
    }
    else{
        setShowEmptyModal(true);
    }
    
 
   
  };

  const handleKeyUp = (e) => {
    const { name, value } = e.target;

    // Validation logic
    switch (name) {
      case 'Role':
        setErrors({ ...errors, Role: value.length === 0 ? 'Role is required' : '' });
        break;
      case 'CompName':
        setErrors({ ...errors, CompName: value.length === 0 ? 'CompName is required' : '' });
        break;
      case 'ExpReq':
        setErrors({ ...errors, ExpReq: value.length == 0 ? 'ExpReq is required' : '' });
        break;
      case 'Qual':
        setErrors({ ...errors, Qual: value.length == 0 ? 'Qual is required' : '' });
        break;
      case 'Loc':
        setErrors({ ...errors, Loc: value.length == 0 ? 'Loc is required' : '' });
        break;
      case 'Sal':
        setErrors({ ...errors, Sal: value.length == 0 ? 'Sal is required' : '' });
        break;
      case 'aboutCompany':
        setErrors({ ...errors, aboutCompany: value.length == 0 ? 'aboutCompany is required' : '' });
        break;
        
        case 'jobDesc':
          setErrors({ ...errors, jobDesc: value.length == 0 ? 'jobDesc is required' : '' });
          break;
        case 'skillsReq':
          setErrors({ ...errors, skillsReq: value.length == 0 ? 'skillsReq is required' : '' });
          break;
        case 'Hiring':
          setErrors({ ...errors, Hiring: value.length == 0 ? 'Hiring is required' : '' });
          break;
        case 'EmpType':
          setErrors({ ...errors, EmpType: value.length == 0 ? 'EmpType is required' : '' });
          break;
        case 'JobCat':
          setErrors({ ...errors, JobCat: value.length == 0 ? 'JobCat is required' : '' });
          break;
        case 'Country':
          setErrors({ ...errors, Country: value.length == 0 ? 'Country is required' : '' });
          break;
        case 'empName':
          setErrors({ ...errors, empName: value.length == 0 ? 'Employer Name is required' : '' });
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
                  <li class="breadcrumb-item active" aria-current="page">Post Job</li>
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
      <Nav id='a' fill variant="pills" style={{color:'black',paddingTop:'10px'}}>
        <Nav.Item>
          <Nav.Link eventKey="tab1">General Details</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab2">Job Details</Nav.Link>
        </Nav.Item>
       
        
      </Nav>
      <Form onSubmit={handleSubmit}>
      <Tab.Content>
        <Tab.Pane eventKey="tab1">
          <Container >
            
             
             
        
        <Container>
        <Row>
            <Col>
            <Form.Group className='m-3' controlId="Role">
        <Form.Label>Role<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="Role"
          placeholder='Eg: Front End Developer'
          value={formData.Role}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          isInvalid={!!errors.Role}
        />
        <Form.Control.Feedback type="invalid">{errors.Role}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className='m-3' controlId="CompName">
        <Form.Label>Company Name<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="CompName"
          placeholder='Eg: ABC Company Pvt Ltd'
          value={formData.CompName}
          onChange={handleChange} onKeyUp={handleKeyUp}
          isInvalid={!!errors.CompName}
        />
        <Form.Control.Feedback type="invalid">{errors.CompName}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='m-3' controlId="ExpReq">
        <Form.Label>Experience<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="ExpReq"
          placeholder='Eg: 0 to 3+ years'
          value={formData.ExpReq}
          onChange={handleChange} onKeyUp={handleKeyUp}
          isInvalid={!!errors.ExpReq}
        />
        <Form.Control.Feedback type="invalid">{errors.ExpReq}</Form.Control.Feedback>
      </Form.Group>




            </Col>
            <Col>
          

      <Form.Group className='m-3' controlId="Qual">
        <Form.Label>Qualification<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="Qual"
          placeholder='Eg: B.E'
          value={formData.Qual}
          onChange={handleChange} onKeyUp={handleKeyUp}
          isInvalid={!!errors.Qual}
        />
        <Form.Control.Feedback type="invalid">{errors.Qual}</Form.Control.Feedback>
      </Form.Group>

<Container className='m-1'>
  <Row>
    <Col>
    <Form.Group   controlId="Sal">
        <Form.Label>Salary<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="Sal"
          placeholder='Eg: 4LPA'
          value={formData.Sal}
          onChange={handleChange} onKeyUp={handleKeyUp}
          isInvalid={!!errors.Sal}
        />
        <Form.Control.Feedback type="invalid">{errors.Sal}</Form.Control.Feedback>
      </Form.Group>
    </Col>
    <Col>
    <Form.Group className='me-2'  controlId="Loc">
        <Form.Label>Location<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="Loc"
          placeholder='Eg: Chennai'
          value={formData.Loc}
          onChange={handleChange} onKeyUp={handleKeyUp}
          isInvalid={!!errors.Loc}
        />
        <Form.Control.Feedback type="invalid">{errors.Loc}</Form.Control.Feedback>
      </Form.Group>
    </Col>
  </Row>
</Container>
      
     
<Form.Group className='m-3' controlId="empName">
        <Form.Label>Employer Name<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="empName"
          placeholder='Name must matches the Profile'
          value={formData.empName}
          onChange={handleChange} onKeyUp={handleKeyUp}
          isInvalid={!!errors.empName}
        />
        <Form.Control.Feedback type="invalid">{errors.empName}</Form.Control.Feedback>
      </Form.Group>
    
     
     
            </Col>
        </Row>
        
       <Row className='m-1'>
       <Form.Group className='mb-3' controlId="aboutCompany">
        <Form.Label>About Company<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="aboutCompany"
          placeholder='Describe about your company'
          value={formData.aboutCompany}
          onChange={handleChange} onKeyUp={handleKeyUp}
          isInvalid={!!errors.aboutCompany} style={{resize:'none'}}
        />
        <Form.Control.Feedback type="invalid">{errors.aboutCompany}</Form.Control.Feedback>
      </Form.Group>
       </Row>
   
     
      

      
  
        </Container>
             
             
         
          </Container>
        </Tab.Pane>
        <Tab.Pane eventKey="tab2">
          
              <Container  >

        <Container >
            <Row>
               <Col>
               <Form.Group className='mb-3' controlId="jobDesc">
        <Form.Label>Job Description<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          name="jobDesc"
          placeholder='Describe about the job'
          value={formData.jobDesc}
          onChange={handleChange} onKeyUp={handleKeyUp}
          isInvalid={!!errors.jobDesc} style={{resize:'none'}}
        />
        <Form.Control.Feedback type="invalid">{errors.jobDesc}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className='mb-3' controlId="skillsReq">
        <Form.Label>Skills<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          name="skillsReq"
          placeholder='Eg: C, Java, Python etc..,'
          value={formData.skillsReq}
          onChange={handleChange} onKeyUp={handleKeyUp}
          isInvalid={!!errors.skillsReq} style={{resize:'none'}}
        />
        <Form.Control.Feedback type="invalid">{errors.skillsReq}</Form.Control.Feedback>
      </Form.Group>
               </Col>
         

      <Col>
      <Form.Group className='m-3' controlId="Hiring">
        <Form.Label>Hiring Process<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="Hiring"
          placeholder='Eg: Virtual'
          value={formData.Hiring}
          onChange={handleChange} onKeyUp={handleKeyUp}
          isInvalid={!!errors.Hiring}
        />
        <Form.Control.Feedback type="invalid">{errors.Hiring}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='m-3' controlId="EmpType">
        <Form.Label>Employment Type<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="EmpType"
          placeholder='Eg: Full time / Part time'
          value={formData.EmpType}
          onChange={handleChange} onKeyUp={handleKeyUp}
          isInvalid={!!errors.EmpType}
        />
        <Form.Control.Feedback type="invalid">{errors.EmpType}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='m-3' controlId="JobCat">
        <Form.Label>Job Category<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="JobCat"
          placeholder='Eg: IT Service'
          value={formData.JobCat}
          onChange={handleChange} onKeyUp={handleKeyUp}
          isInvalid={!!errors.JobCat}
        />
        <Form.Control.Feedback type="invalid">{errors.JobCat}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='m-3' controlId="Country">
        <Form.Label>Country<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="Country"
          placeholder='Eg: India'
          value={formData.Country}
          onChange={handleChange} onKeyUp={handleKeyUp}
          isInvalid={!!errors.Country}
        />
        <Form.Control.Feedback type="invalid">{errors.Country}</Form.Control.Feedback>
      </Form.Group>
      </Col>
               
            </Row>
        </Container>
      

      

     

      

     
   
             
              <Button variant="primary" className='m-3' type="submit" style={{ backgroundColor: '#2B358C', border: 'none' }}>
                Submit
              </Button>
           
          </Container>
        </Tab.Pane>
       
        
      </Tab.Content>
      </Form>
      
    </Tab.Container>
    <Modal show={showSuccessModal} onHide={handleCloseSuccessModal} centered>
   <Modal.Header closeButton>
     <Modal.Title style={{color:'green',fontWeight:600}}>Form submitted Successfully.</Modal.Title>
   </Modal.Header>
   <Modal.Body>Job posted successfully.</Modal.Body>
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

export default PostJobForm;
