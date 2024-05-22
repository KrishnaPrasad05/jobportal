import React, { useState } from 'react';
import { Form, Button, Container,Row, Col } from 'react-bootstrap';

const ResumeForm = () => {
  const [formData, setFormData] = useState({
    carObj: '',
    skills: '',
    skills1: '',
    skills2: '',
    compName: '',
    dur: '',
    role: '',
    evntName: '',
    award: '',
    evntName3: '',
    award3: '',
    evntName1: '',
    award1: '',
    evntName11: '',
    award11: '',
    prjName: '',
    desc: '',
    prjName1: '',
    desc1: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log('Form submitted successfully!');
    } else {
      console.log('Form has errors. Please fix them.');
    }
  };

  const validateForm = (formData) => {
    let errors = {};

    if (!formData.carObj.trim()) {
      errors.carObj = "Career Objective is required";
    }

    if (!formData.skills.trim()) {
      errors.skills = "Skills is required";
    }

    if (!formData.skills1.trim()) {
      errors.skills1 = "Skills is required";
    }

    if (!formData.skills2.trim()) {
      errors.skills2 = "Skills is required";
    }

    if (!formData.compName.trim()) {
      errors.compName = "Company Name is required";
    }

    if (!formData.dur.trim()) {
      errors.dur = "Duration is required";
    }

    if (!formData.role.trim()) {
      errors.role = "Role is required";
    }

    if (!formData.evntName.trim()) {
      errors.evntName = "Event is required";
    }

    if (!formData.award.trim()) {
      errors.award = "Awardee is required";
    }

    if (!formData.evntName3.trim()) {
      errors.evntName3 = "Event is required";
    }

    if (!formData.award3.trim()) {
      errors.award3 = "Awardee is required";
    }

    if (!formData.evntName1.trim()) {
      errors.evntName1 = "Event is required";
    }

    if (!formData.award1.trim()) {
      errors.award1 = "Awardee is required";
    }

    if (!formData.evntName11.trim()) {
      errors.evntName11 = "Event is required";
    }

    if (!formData.award11.trim()) {
      errors.award11 = "Awardee is required";
    }

    if (!formData.prjName.trim()) {
      errors.prjName = "Project Name is required";
    }

    if (!formData.desc.trim()) {
      errors.desc = "Description is required";
    }

    if (!formData.prjName1.trim()) {
      errors.prjName1 = "Project Name is required";
    }

    if (!formData.desc1.trim()) {
      errors.desc1 = "Description is required";
    }

    return errors;
  };

  return (
    <section className='m-2'>
<Container  style={{backgroundColor:'#E6E7FF',borderRadius:'10px'}}>
    <Form onSubmit={handleSubmit}>
      <Container>
        <Row xs={1} md={2}> 
          <Col >
<Form.Group className='mb-3' controlId="carObj">
        <Form.Label>Career Objective<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="carObj"
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
          value={formData.skills}
          onChange={handleChange}
          isInvalid={!!errors.skills}
        />
        <Form.Control.Feedback type="invalid">{errors.skills}</Form.Control.Feedback>
      </Form.Group>

      
        <Row>
          <h5>Internship Details</h5>
          <Col>
          <Form.Group className='mb-3' controlId="compName">
        <Form.Label>Company Name<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="compName"
          value={formData.compName}
          onChange={handleChange}
          isInvalid={!!errors.compName}
        />
        <Form.Control.Feedback type="invalid">{errors.compName}</Form.Control.Feedback>
      </Form.Group>
          </Col>
          <Col>
          <Form.Group className='mb-3' controlId="dur">
        <Form.Label>Duration<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="dur"
          value={formData.dur}
          onChange={handleChange}
          isInvalid={!!errors.dur}
        />
        <Form.Control.Feedback type="invalid">{errors.dur}</Form.Control.Feedback>
      </Form.Group>
          </Col>
        </Row>
   

      

     

      <Form.Group className='mb-3' controlId="role">
        <Form.Label>Role<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
          isInvalid={!!errors.role}
        />
        <Form.Control.Feedback type="invalid">{errors.role}</Form.Control.Feedback>
      </Form.Group>
          </Col>
          <Col>
          <Row>
          <h5>Technical Details</h5>
            <Col>
            <Form.Group className='mb-3' controlId="evntName">
        <Form.Label>Eventv</Form.Label>
        <Form.Control
          type="text"
          name="evntName"
          value={formData.evntName}
          onChange={handleChange}
          isInvalid={!!errors.evntName}
        />
        <Form.Control.Feedback type="invalid">{errors.evntName}</Form.Control.Feedback>
      </Form.Group>
            </Col>
            <Col>
            
      <Form.Group className='mb-3' controlId="award">
        <Form.Label>Awardee<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="award"
          value={formData.award}
          onChange={handleChange}
          isInvalid={!!errors.award}
        />
        <Form.Control.Feedback type="invalid">{errors.award}</Form.Control.Feedback>
      </Form.Group>
            </Col>
          </Row>
       
<Row>
<h5>Non-Technical  Details</h5>
  <Col>
  <Form.Group className='mb-3' controlId="evntName3">
        <Form.Label>Event<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="evntName3"
          value={formData.evntName3}
          onChange={handleChange}
          isInvalid={!!errors.evntName3}
        />
        <Form.Control.Feedback type="invalid">{errors.evntName3}</Form.Control.Feedback>
      </Form.Group>
  </Col>
  <Col>
  
  <Form.Group className='mb-3' controlId="award3">
        <Form.Label>Awardee<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="award3"
          value={formData.award3}
          onChange={handleChange}
          isInvalid={!!errors.award3}
        />
        <Form.Control.Feedback type="invalid">{errors.award3}</Form.Control.Feedback>
      </Form.Group>
  </Col>
</Row>

     


<h5>Projects Details</h5>

      <Form.Group className='mb-3' controlId="prjName">
        <Form.Label>Project Name<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="prjName"
          value={formData.prjName}
          onChange={handleChange}
          isInvalid={!!errors.prjName}
        />
        <Form.Control.Feedback type="invalid">{errors.prjName}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className='mb-3' controlId="desc">
        <Form.Label>Description<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="desc"
          value={formData.desc}
          onChange={handleChange}
          isInvalid={!!errors.desc}
        />
        <Form.Control.Feedback type="invalid">{errors.desc}</Form.Control.Feedback>
      </Form.Group>

      
</Col>
        </Row>
        <Button variant="primary" type="submit" className='mb-3'>
        Submit
      </Button>
      </Container>
      

     
      
    </Form>
    </Container>
    </section>
    
  );
};

export default ResumeForm;
