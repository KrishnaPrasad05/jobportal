import React, { useEffect, useState } from 'react';
import { Form, Button,Container,Row,Col,Alert } from 'react-bootstrap';
import Header from '../headerExp';
import FooterEmp from '../footerEmp';
import { Link } from 'react-router-dom';

const SearchCand = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  const [formData, setFormData] = useState({
    job: '',
    sal: '',
    dept: '',
    ind: '',
    exp: '',
    loc: ''
  });

  const [formErrors, setFormErrors] = useState({
    job: '',
    sal: '',
    dept: '',
    ind: '',
    exp: '',
    loc: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = '';

    // Validate each field
    if (name === 'job' && value.trim() === '') {
      error = 'Job/Skill is required';
    }
    if (name === 'sal' && value.trim() === '') {
      error = 'Salary is required';
    }
    if (name === 'dept' && value.trim() === '') {
      error = 'Department is required';
    }
    if (name === 'ind' && value.trim() === '') {
      error = 'Industry is required';
    }
    if (name === 'exp' && value.trim() === '') {
      error = 'Experience is required';
    }
    if (name === 'loc' && value.trim() === '') {
      error = 'Location is required';
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    // Validate each field
    if (formData.job.trim() === '') {
      errors.job = 'Job/Skill is required';
    }
    if (formData.sal.trim() === '') {
      errors.sal = 'Salary is required';
    }
    if (formData.dept.trim() === '') {
      errors.dept = 'Department is required';
    }
    if (formData.ind.trim() === '') {
      errors.ind = 'Industry is required';
    }
    if (formData.exp.trim() === '') {
      errors.exp = 'Experience is required';
    }
    if (formData.loc.trim() === '') {
      errors.loc = 'Location is required';
    }

    if (Object.keys(errors).length === 0) {
      // Form submission logic here
      // For example, you can submit the form data to a server
      console.log('Form submitted:', formData);
      
      window.location.href="/viewallcandidates";
      setFormData({ job: '',
      sal: '',
      dept: '',
      ind: '',
      exp: '',
      loc: ''})
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <>
    <Header/>
   
    <nav aria-label="breadcrumb " style={{backgroundColor: '#E6E7FF',paddingLeft: '10px',top:'3.8rem',fontWeight: 500,fontSize: '16px',position:'fixed',width:'100%',zIndex:1000,height:'30px'}}>
                <ol class="breadcrumb p-1">
                  <li class="breadcrumb-item" aria-current="page"><Link to="/employer-home" style={{textDecoration:'none',color:'#2B358C'}}>Home</Link></li>
                  <li class="breadcrumb-item active" aria-current="page">Search candidates</li>
                </ol>
              </nav>
    <section className='m-2' >
    <h1 className="hwomand text-center" style={{color:'#2B358C',marginTop:'9rem'}}>Search Candidates</h1>
  <Container  style={{backgroundColor:'#E6E7FF',borderRadius:'10px'}}>
<Form onSubmit={handleSubmit}>
        <Container >
            <Row xs={1} md={2} >
                <Col>
                <Form.Group className='mb-3 mt-3' controlId="job">
        <Form.Label>Job/Skill</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter job/skill"
          name="job"
          value={formData.job}
          onChange={handleChange}
          isInvalid={!!formErrors.job}
        />
        <Form.Control.Feedback type="invalid">{formErrors.job}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className='mb-3' controlId="sal">
        <Form.Label>Salary</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter salary"
          name="sal"
          value={formData.sal}
          onChange={handleChange}
          isInvalid={!!formErrors.sal}
        />
        <Form.Control.Feedback type="invalid">{formErrors.sal}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='mb-3' controlId="loc">
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Location"
          name="loc"
          value={formData.loc}
          onChange={handleChange}
          isInvalid={!!formErrors.loc}
        />
        <Form.Control.Feedback type="invalid">{formErrors.loc}</Form.Control.Feedback>
      </Form.Group>
                </Col>
                <Col>
                <Form.Group className='mb-3 mt-3' controlId="dept">
        <Form.Label>Department</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Department"
          name="dept"
          value={formData.dept}
          onChange={handleChange}
          isInvalid={!!formErrors.dept}
        />
        <Form.Control.Feedback type="invalid">{formErrors.dept}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='mb-3' controlId="ind">
        <Form.Label>Industry Type</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Industry Type"
          name="ind"
          value={formData.ind}
          onChange={handleChange}
          isInvalid={!!formErrors.ind}
        />
        <Form.Control.Feedback type="invalid">{formErrors.ind}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className='mb-3' controlId="exp">
        <Form.Label>Experience</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Experience"
          name="exp"
          value={formData.exp}
          onChange={handleChange}
          isInvalid={!!formErrors.exp}
        />
        <Form.Control.Feedback type="invalid">{formErrors.exp}</Form.Control.Feedback>
      </Form.Group>

                </Col>
            </Row>
            <Button variant="primary" className='mb-3' type="submit" style={{backgroundColor:'#2B358C',border:'none'}}>
        Submit
        </Button>
        </Container>
      
     
      
     
        </Form>
    </Container>
    </section>
    <FooterEmp/>
    </>
  
  
    
  );
}
export default SearchCand;
