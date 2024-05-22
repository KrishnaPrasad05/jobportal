import React, { useState } from 'react';
import { Form, Button, Col, Row, Container, Image, Alert } from 'react-bootstrap';
import comImg from '../../../Assets/img/Fraud-Alert.webp';
import { useDispatch } from 'react-redux';
import { addIssueToServer } from '../../../features/updateSlice';
import { Link } from 'react-router-dom';

const ReportSection = () => {
    const dispatch = useDispatch();
    const initialFormData = {
        reporterName: '',
        reporterEmail: '',
        reportQuery: '',
        proofDocument:''
    };

    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Validate the field immediately after change
        let newErrors = { ...errors };
        if (!value.trim()) {
            newErrors[name] = `${name === 'reportQuery' ? 'Query' : (name === 'reporterName' ? 'Name' : 'Email')} is required`;
        } else {
            delete newErrors[name];
        }
        setErrors(newErrors);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if any field is empty
        const isEmpty = Object.values(formData).some(value => value.trim() === '');

        if (isEmpty) {
            const emptyErrors = {};
            Object.entries(formData).forEach(([key, value]) => {
                if (value.trim() === '') {
                    emptyErrors[key] = `${key === 'reportQuery' ? 'Query' : (key === 'reporterName' ? 'Name' : 'Email')} is required`;
                }
            });
            setErrors(emptyErrors);
        } else {
            // Clear any existing errors
            setErrors({});
            // Dispatch action to add issue to server
            dispatch(addIssueToServer(formData));
            // Handle form submission
            console.log(formData);
            // Reset form
            setFormData(initialFormData);
        }
    };

    return (
        <div>
             <nav aria-label="breadcrumb " style={{backgroundColor: '#E6E7FF',paddingLeft: '10px',top:'3.8rem',fontWeight: 500,fontSize: '16px',position:'fixed',width:'100%',zIndex:1000,height:'30px'}}>
                <ol class="breadcrumb p-1">
                  <li class="breadcrumb-item" aria-current="page"><Link to="/jobseeker-home" style={{textDecoration:'none',color:'#2B358C'}}>Home</Link></li>
            
                  <li class="breadcrumb-item active" aria-current="page">Report Contents</li>
                </ol>
              </nav>
              <section className='m-2'>
            <Container style={{marginTop:'7rem'}}>
              <Alert variant="warning" >
          Form once submitted cannot be changed, so check all the fields before submitting!
        </Alert>
        </Container>
            <Container style={{ backgroundColor: '#E6E7FF', borderRadius: '10px',marginTop:'2rem' }}>
                <Row className='pt-2 pb-2' xs={1} md={2}>
                    <Col>
                        <div className="container">
                            <h3 style={{ color: '#2B358C' }}>Feel free to connect with us,</h3>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="reporterName" className='mb-3'>
                                    <Form.Label>Name<span style={{ color: 'red', fontSize: '18px' }}>*</span></Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                        name="reporterName"
                                        value={formData.reporterName}
                                        onChange={handleChange}
                                        isInvalid={!!errors.reporterName}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.reporterName}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="reporterEmail" className='mb-3'>
                                    <Form.Label>Email<span style={{ color: 'red', fontSize: '18px' }}>*</span></Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter your email"
                                        name="reporterEmail"
                                        value={formData.reporterEmail}
                                        onChange={handleChange}
                                        isInvalid={!!errors.reporterEmail}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.reporterEmail}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="reportQuery" className='mb-3'>
                                    <Form.Label>Query<span style={{ color: 'red', fontSize: '18px' }}>*</span></Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Enter your query"
                                        name="reportQuery"
                                        value={formData.reportQuery}
                                        onChange={handleChange}
                                        isInvalid={!!errors.reportQuery}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.reportQuery}
                                    </Form.Control.Feedback>
                                </Form.Group>


                                <Form.Group controlId="proofDocument" className='mb-3'>
                                    <Form.Label>Proof Document<span style={{ color: 'red', fontSize: '18px' }}>*</span></Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Provide URL"
                                        name="proofDocument"
                                        value={formData.proofDocument}
                                        onChange={handleChange}
                                        isInvalid={!!errors.proofDocument}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.proofDocument}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Button variant="primary" type="submit" className='mb-2' style={{ backgroundColor: '#2B358C', border: 'none' }}>
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Col>
                    <Col style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Image src={comImg} className='img-fluid' style={{ width: '400px', height: '400px', borderRadius: '10px' }}></Image>
                    </Col>
                </Row>
            </Container>
        </section>
        </div>
       
    );
};

export default ReportSection;
