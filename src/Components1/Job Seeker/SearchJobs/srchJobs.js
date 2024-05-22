import React, { useEffect, useState } from 'react';
import { Form, Button,Container,Row,Col,Alert } from 'react-bootstrap';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import { Link } from 'react-router-dom';

const SearchJobs = () => {
  
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
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));

    // Validate field
    const errors = { ...formErrors };
    if (value.trim() === '') {
      errors[name] = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    } else {
      errors[name] = '';
    }
    setFormErrors(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasErrors = false;
    const errors = { ...formErrors };
    Object.keys(formData).forEach((key) => {
      if (formData[key].trim() === '') {
        errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
        hasErrors = true;
      }
    });

    if (hasErrors) {
      setFormErrors(errors);
    } else {
      // Form submission logic here
      console.log('Form submitted:', formData);
     window.location.href="/viewjobs"

      // Reset form fields
      setFormData({
        job: '',
        sal: '',
        dept: '',
        ind: '',
        exp: '',
        loc: ''
      });

      // Hide alert after 3 seconds
      
    }
  };

  return (
    <section  >
      <Header/>
      <nav aria-label="breadcrumb " style={{backgroundColor: '#E6E7FF',paddingLeft: '10px',top:'3.8rem',fontWeight: 500,fontSize: '16px',position:'fixed',width:'100%',zIndex:1000,height:'30px'}}>
                <ol class="breadcrumb p-1">
                  <li class="breadcrumb-item" aria-current="page"><Link to="/jobseeker-home" style={{textDecoration:'none',color:'#2B358C'}}>Home</Link></li>
                  <li class="breadcrumb-item active" aria-current="page">Search Jobs</li>
                </ol>
              </nav>
  <Container   style={{backgroundColor:'#E6E7FF',borderRadius:'10px',marginTop:'8rem'}}>
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
    <Footer/>
    </section>
  
    
  );
}
export default SearchJobs;
