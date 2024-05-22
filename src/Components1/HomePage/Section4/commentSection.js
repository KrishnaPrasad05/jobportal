import React, { useState } from 'react';
import { Form, Button, Col, Row, Container, Image } from 'react-bootstrap';
import comImg from '../../../Assets/img/commentSect.jpg';
import { useDispatch } from 'react-redux';
import { addIssueToServer } from '../../../features/updateSlice';

const CommentSection = () => {
    const dispatch = useDispatch();
    const initialFormData = {
        CommentName: '',
        commentRating: '',
        CommentCategory: '',
        UserComment: '',
        Caption: '' // Updated field name
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
            newErrors[name] = `${name === 'UserComment' ? 'Comment' : (name === 'CommentName' ? 'Name' : 'Caption')} is required`; // Updated field name
        } else if (name === 'Caption' && value.trim().length > 50) { // Example validation for Caption
            newErrors[name] = 'Caption must be 50 characters or less'; // Example error message
        } else {
            delete newErrors[name];
        }
        setErrors(newErrors);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if any field is empty
        const isEmpty = Object.values(formData).some(value => value.trim() === '');

        // Validate UserComment separately
        if (isEmpty || formData.UserComment.trim() === '') {
            const emptyErrors = {};
            Object.entries(formData).forEach(([key, value]) => {
                if (value.trim() === '' || (key === 'UserComment' && value.trim() === '')) {
                    emptyErrors[key] = `${key === 'UserComment' ? 'Comment' : key.charAt(0).toUpperCase() + key.slice(1)} is required`;
                }
            });
            setErrors(emptyErrors);
        } else {
            // Clear any existing errors
            setErrors({});
            dispatch(addIssueToServer(formData));
            // Handle form submission
            console.log(formData);
            // Reset form
            setFormData(initialFormData);
        }
    };

    return (
        <section className='m-2'>
            <Container style={{ backgroundColor: '#E6E7FF', borderRadius: '10px' }}>
                <Row className='pt-2 pb-2' xs={1} md={2}>
                    <Col>
                        <div className="container">
                            <h3 style={{ color: '#2B358C' }}>Feel free to connect with us,</h3>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="name" className='mb-3'>
                                    <Form.Label>Name<span style={{ color: 'red', fontSize: '18px' }}>*</span></Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                        name="CommentName"
                                        value={formData.CommentName}
                                        onChange={handleChange}
                                        isInvalid={!!errors.CommentName}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.CommentName}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="rating" className='mb-3'>
                                    <Form.Label>Rating out of 5<span style={{ color: 'red', fontSize: '18px' }}>*</span></Form.Label>
                                    <Form.Control
                                        type="number"
                                        min="1"
                                        max="5"
                                        placeholder="Enter rating out of 5"
                                        name="commentRating"
                                        value={formData.commentRating}
                                        onChange={handleChange}
                                        isInvalid={!!errors.commentRating}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.commentRating}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="category" className='mb-3'>
                                    <Form.Label>Category<span style={{ color: 'red', fontSize: '18px' }}>*</span></Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="CommentCategory"
                                        value={formData.CommentCategory}
                                        onChange={handleChange}
                                        isInvalid={!!errors.CommentCategory}
                                    >
                                        <option value="">Select category</option>
                                        <option value="job seeker">Job Seeker</option>
                                        <option value="employer">Employer</option>
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.CommentCategory}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="comment" className='mb-3'>
                                    <Form.Label>Comment<span style={{ color: 'red', fontSize: '18px' }}>*</span></Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Enter your comment"
                                        name="UserComment"
                                        value={formData.UserComment}
                                        onChange={handleChange}
                                        isInvalid={!!errors.UserComment}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.UserComment}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="caption" className='mb-3'>
                                    <Form.Label>Caption<span style={{ color: 'red', fontSize: '18px' }}>*</span></Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your caption"
                                        name="Caption"
                                        value={formData.Caption}
                                        onChange={handleChange}
                                        isInvalid={!!errors.Caption}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.Caption}
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
    );
};

export default CommentSection;
