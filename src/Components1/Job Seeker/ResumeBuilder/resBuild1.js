import React, { useState } from 'react';
import { Form, Button,Container,Row,Col } from 'react-bootstrap';

const FormValidation = () => {
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
    dob: ''
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

    if (!formData.name.trim()) {
      errors.name = "First Name is required";
    } else if (!/^[a-zA-Z ]+$/.test(formData.name)) {
      errors.name = "First Name is invalid";
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "Last Name is required";
    } else if (!/^[a-zA-Z ]+$/.test(formData.lastName)) {
      errors.lastName = "Last Name is invalid";
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

    if (!formData.file) {
      errors.file = "Please upload a file";
    } else {
      const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
      if (!allowedExtensions.exec(formData.file)) {
        errors.file = "Invalid file type. Please upload a JPG or PNG file.";
      }
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

  return (
    <section className='m-2'>
        <Container  style={{backgroundColor:'#E6E7FF',borderRadius:'10px',marginTop:'7rem'}}>
        <Form  onSubmit={handleSubmit}>
        <Container>
        <Row>
            <Col>
            <Form.Group className='m-3' controlId="name">
        <Form.Label>First Name<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          isInvalid={!!errors.name}
        />
        <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className='m-3' controlId="lastName">
        <Form.Label>Last Name<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="lastName"
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
          value={formData.mobile}
          onChange={handleChange}
          isInvalid={!!errors.mobile}
        />
        <Form.Control.Feedback type="invalid">{errors.mobile}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className='m-3' controlId="lang">
        <Form.Label>Language<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="lang"
          value={formData.lang}
          onChange={handleChange}
          isInvalid={!!errors.lang}
        />
        <Form.Control.Feedback type="invalid">{errors.lang}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className='m-3' controlId="email">
        <Form.Label>Email Address<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
      </Form.Group>

            </Col>
            <Col>
          

      <Form.Group className='m-3' controlId="nat">
        <Form.Label>Nationality<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="text"
          name="nat"
          value={formData.nat}
          onChange={handleChange}
          isInvalid={!!errors.nat}
        />
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
          type="text"
          name="blood"
          value={formData.blood}
          onChange={handleChange}
          isInvalid={!!errors.blood}
        />
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
        <Form.Label>File<span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
        <Form.Control
          type="file"
          name="file"
          onChange={handleChange}
          isInvalid={!!errors.file}
        />
        <Form.Control.Feedback type="invalid">{errors.file}</Form.Control.Feedback>
      </Form.Group>
            </Col>
        </Row>
        
        <Button variant="primary" className='m-3' type="submit" style={{backgroundColor:'#2B358C',border:'none'}}>
        Submit
      </Button>
    </Container>
     
      

      
    </Form>
        </Container>

    </section>
    
  );
};

export default FormValidation;
