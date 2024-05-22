import React, { useState } from 'react';
import { Form, Button,Container,Row,Col } from 'react-bootstrap';

const EducationForm = () => {
  const [formData, setFormData] = useState({
    inName: '',
    crsName: '',
    yop: '',
    agg: ''
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
      // Form submission logic here
      console.log('Form submitted successfully!');
    } else {
      console.log('Form has errors. Please fix them.');
    }
  };

  const validateForm = (formData) => {
    let errors = {};

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

    return errors;
  };

  return (
    <Container  style={{backgroundColor:'#E6E7FF',borderRadius:'10px'}}>
 <Form onSubmit={handleSubmit}>
        <Container >
            <Row xs={1} md={2}>
                <Col>
                <Form.Group className='mb-3' controlId="inName">
        <Form.Label>Institution Name<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="inName"
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
          type="text"
          name="yop"
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
          value={formData.agg}
          onChange={handleChange}
          isInvalid={!!errors.agg}
        />
        <Form.Control.Feedback type="invalid">{errors.agg}</Form.Control.Feedback>
      </Form.Group>
                </Col>
            </Row>
        </Container>
      

      

     

      

      <Button variant="primary" className='m-3' type="submit" style={{backgroundColor:'#2B358C',border:'none'}}>
        Submit
      </Button>
    </Form>
    </Container>
   
  );
};

export default EducationForm;
