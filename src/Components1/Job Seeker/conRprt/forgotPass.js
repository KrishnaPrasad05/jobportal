import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setEmailError('Email is required');
      return;
    }

    if (!/^([a-zA-Z0-9._%+-])+@([a-zA-Z0-9.-])+\.([a-zA-Z]{2,})$/.test(email)) {
      setEmailError('Invalid email address');
      return;
    }

    // Reset email error
    setEmailError('');

    // Show modal
    setShowModal(true);

    // Reset email field
    setEmail('');
  };

  return (
    <div className="container margin text-dark grid-bg p-5" style={{ border: '1px solid gray', borderRadius: '10px', marginTop: '7rem', marginBottom: '10rem', backgroundColor: '#E6E7FF' }}>
      <h2 style={{ color: '#2B358C' }}>Forgot Password</h2>
      <p>
        Enter your email address, and we'll send you instructions on how to
        reset your password.
      </p>

      <Form onSubmit={handleSubmit} className="mx-auto">
        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-light"
            isInvalid={!!emailError}
          />
          <Form.Control.Feedback type="invalid">
            {emailError}
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" className="btn btn-primary mt-3" style={{ backgroundColor: '#2B358C' }}>
          Reset Password
        </Button>
      </Form>

      <Modal show={showModal} onHide={handleCloseModal} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>Check Your Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Check your email for instructions on how to reset your password.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" as={Link} to="/login">
            Proceed
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ForgotPassword;
