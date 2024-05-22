import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

const MyForm = () => {
  const [formData, setFormData] = useState({
    sskills2: '',
    hob: '',
    evntName21: '',
    award21: '',
    isChecked: false
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

    if (!formData.isChecked) {
      errors.isChecked = "Please check the checkbox before proceeding.";
    }

    return errors;
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} controlId="sskills2">
          <Form.Label column sm={2}>Soft Skills</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="sskills2"
              value={formData.sskills2}
              onChange={handleChange}
              isInvalid={!!errors.sskills2}
            />
            <Form.Control.Feedback type="invalid">{errors.sskills2}</Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="hob">
          <Form.Label column sm={2}>Hobbies</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="hob"
              value={formData.hob}
              onChange={handleChange}
              isInvalid={!!errors.hob}
            />
            <Form.Control.Feedback type="invalid">{errors.hob}</Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="evntName21">
          <Form.Label column sm={2}>Event Name</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="evntName21"
              value={formData.evntName21}
              onChange={handleChange}
              isInvalid={!!errors.evntName21}
            />
            <Form.Control.Feedback type="invalid">{errors.evntName21}</Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="award21">
          <Form.Label column sm={2}>Awardee</Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="award21"
              value={formData.award21}
              onChange={handleChange}
              isInvalid={!!errors.award21}
            />
            <Form.Control.Feedback type="invalid">{errors.award21}</Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="myCheckbox">
          <Col sm={{ span: 10, offset: 2 }}>
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

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default MyForm;
