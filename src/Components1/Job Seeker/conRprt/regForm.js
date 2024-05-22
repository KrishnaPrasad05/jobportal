import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, Modal,Container,Row,Col } from 'react-bootstrap';
import contact from '../../../Assets/img/contact.jpg';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import { addDataAsync, addUserDataAsync } from '../../../features/dataSlice';
const Registration = () => {
  const dispatch = useDispatch();
  const [showFailureModal, setShowFailureModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    profURL: '',
    dob: '',
    mob: '',
    email: '',
    bloodGroup: '',
    password: '',
    confirmPassword: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    profURL: '',
    dob: '',
    mob: '',
    email: '',
    bloodGroup: '',
    password: '',
    confirmPassword: ''
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const handleCloseSuccessModal = () => setShowSuccessModal(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const [errors, setErrors] = useState({});
  const handleCloseFailureModal = () => setShowFailureModal(false);
  const handleSubmit = (e) => {
    e.preventDefault();
   
    const isEmpty = Object.values(formData).some((value) => value.trim() === '');
    if (!isEmpty) {
        const hasErrors = Object.values(errors).some((error) => error);
        if (!hasErrors) {
            // No errors, show success alert
            dispatch(addUserDataAsync(formData));
            setFormData({
              name: '',
              profURL: '',
              dob: '',
              mob: '',
              address:'',
              email: '',
              bloodGroup: '',
              password: '',
              confirmPassword: ''
            });
            setFormErrors({});
            setShowSuccessModal(true);
            // Clear form fields
           
          } else {
            setFormErrors(errors);
          }
        }
        else{
        setShowFailureModal(true)
      }
      };

      const handleKeyUp = (e) => {
        const { name, value } = e.target;
    
        // Validation logic
        switch (name) {
            case 'name':
                setFormErrors((prevErrors) => ({
                    ...prevErrors,
                    name: value.trim() === '' ? 'First Name is required' : (/^[a-zA-Z ]+$/.test(value) ? '' : 'First Name is invalid')
                }));
                break;
                case 'profURL':
                  setFormErrors((prevErrors) => ({
                      ...prevErrors,
                      profURL: value.trim() === '' ? 'Profile URL is required' : ''
                  }));
                  break;
            case 'dob':
                setFormErrors((prevErrors) => ({
                    ...prevErrors,
                    dob: value.trim() === '' ? 'DOB is required' : (new Date(value) >= new Date() ? 'Date of Birth cannot be a future date' : '')
                }));
                break;
            case 'mob':
                setFormErrors((prevErrors) => ({
                    ...prevErrors,
                    mob: value.trim() === '' ? 'Mobile Number is required' : (isNaN(value) || value.length !== 10 ? 'Invalid mobile number' : '')
                }));
                break;
                case 'address':
                  setFormErrors((prevErrors) => ({
                      ...prevErrors,
                      address: value.trim() === '' ? 'Address is required' : ''
                  }));
                  break;
            case 'email':
                setFormErrors((prevErrors) => ({
                    ...prevErrors,
                    email: value.trim() === '' ? 'Email Address is required' : (!/^([a-zA-Z0-9_])+@([a-zA-Z.]{2,6})+\.([a-zA-Z]{2,6})$/.test(value) ? 'Invalid email address' : '')
                }));
                break;
            case 'bloodGroup':
                setFormErrors((prevErrors) => ({
                    ...prevErrors,
                    bloodGroup: value === '' ? 'Blood Group is required' : ''
                }));
                break;
            case 'password':
                setFormErrors((prevErrors) => ({
                    ...prevErrors,
                    password: value.trim() === '' ? 'Password is required' : (value.length < 8 ? 'Password must be at least 8 characters' : '')
                }));
                break;
            case 'confirmPassword':
                setFormErrors((prevErrors) => ({
                    ...prevErrors,
                    confirmPassword: value.trim() === '' ? 'Confirm Password is required' : (value !== formData.password ? 'Passwords do not match' : '')
                }));
                break;
            default:
                break;
        }
    };
    

  return (

    <section>
 <Container style={{backgroundColor:'#E6E7FF',borderRadius:'10px',marginTop:'1rem'}}>
 <Button as={Link} to="/logins" style={{backgroundColor:'maroon',marginTop:'20px',border:'none',marginBottom:'7px'}}>Back</Button>
      <Row className='pt-2 pb-3' xs={1} md={2}>
        <Col>
        <Form onSubmit={handleSubmit}>
      <Row >
        <Col>
        <Form.Group className='mb-2' controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter first name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          isInvalid={!!formErrors.name}
        />
        <Form.Control.Feedback type="invalid">{formErrors.name}</Form.Control.Feedback>
      </Form.Group>
        </Col>
        <Col>
        <Form.Group className='mb-2' controlId="profURL">
        <Form.Label>Profile Picture</Form.Label>
        <Form.Control
          type="text"
          placeholder="Provide Profile Pic URL"
          name="profURL"
          value={formData.profURL}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          isInvalid={!!formErrors.profURL}
        />
        <Form.Control.Feedback type="invalid">{formErrors.profURL}</Form.Control.Feedback>
      </Form.Group>
        </Col>
      </Row>
      

      
    
      
      <Row>
      <Col>
      <Form.Group className='mb-2' controlId="dob">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control
          type="date"
          placeholder="Enter date of birth"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          isInvalid={!!formErrors.dob}
        />
        <Form.Control.Feedback type="invalid">{formErrors.dob}</Form.Control.Feedback>
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className='mb-2' controlId="bloodGroup">
        <Form.Label>Blood Group</Form.Label>
        <Form.Control
          as="select"
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          isInvalid={!!formErrors.bloodGroup && formData.bloodGroup === ''}
        >
          <option value="">Select</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </Form.Control>
        <Form.Control.Feedback type="invalid">{formErrors.bloodGroup}</Form.Control.Feedback>
      </Form.Group>
      </Col>
      </Row>
      
      
     

     

      <Form.Group className='mb-2' controlId="mob">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter mobile number"
          name="mob"
          value={formData.mob}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          isInvalid={!!formErrors.mob}
        />
        <Form.Control.Feedback type="invalid">{formErrors.mob}</Form.Control.Feedback>
      </Form.Group>


      <Form.Group className='mb-2' controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control
         as="textarea" 
         rows={3}
          type="text"
          placeholder="Enter Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          isInvalid={!!formErrors.address}
        />
        <Form.Control.Feedback type="invalid">{formErrors.address}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className='mb-2' controlId="email">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          isInvalid={!!formErrors.email}
        />
        <Form.Control.Feedback type="invalid">{formErrors.email}</Form.Control.Feedback>
      </Form.Group>

     <Row>
      <Col>
      <Form.Group className='mb-2' controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          isInvalid={!!formErrors.password}
        />
        <Form.Control.Feedback type="invalid">{formErrors.password}</Form.Control.Feedback>
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className='mb-2' controlId="confirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          isInvalid={!!formErrors.confirmPassword}
        />
        <Form.Control.Feedback type="invalid">{formErrors.confirmPassword}</Form.Control.Feedback>
      </Form.Group>
      </Col>
     </Row>

   

    

      <Button variant="primary" type="submit" className='mt-2 ' style={{backgroundColor:'#2B358C',border:'none'}}>Submit</Button>
    </Form>
        </Col>
        <Col style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Image src={contact} rounded fluid width={'300px'} height={'200px'}/>
        </Col>
      </Row>

    </Container>


<Modal show={showSuccessModal} onHide={handleCloseSuccessModal}
aria-labelledby="contained-modal-title-vcenter"
centered>
  <Modal.Header closeButton>
    <Modal.Title id="contained-modal-title-vcenter" style={{color:'green',fontWeight:600}}>Form Submitted Successfully</Modal.Title>
  </Modal.Header>
  <Modal.Body>Your form has been submitted successfully.</Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" as={Link} to="/login">
      Proceed
    </Button>
  </Modal.Footer>
</Modal>
<Modal show={showFailureModal} onHide={handleCloseFailureModal} centered>
   <Modal.Header closeButton>
     <Modal.Title style={{color:'maroon',fontWeight:600}}>Registration Unsuccessful</Modal.Title>
   </Modal.Header>
   <Modal.Body>Please fill all the required fields.</Modal.Body>
 
 </Modal>
    </section>
   
    
  );
};

export default Registration;
