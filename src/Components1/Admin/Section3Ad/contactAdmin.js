import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import CustomNavbar from '../HeaderAdmin/HeaderAd';
import FooterAdmin from '../HeaderAdmin/FooterAd';

const ContactCard = () => {
    const [contactContents, setContactContents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/contact/')
            .then(response => response.json())
            .then(data => {
                
                const filteredData = data.filter(item => (
                    item.contactername && item.contacterEmail && item.contactQuery
                ));
                setContactContents(filteredData);
            })
            .catch(error => console.error('Error fetching reported contents:', error));
    }, []);

    const handleDelete = (index) => {
        // Sending delete request to the server
        fetch(`http://localhost:3001/contact/${contactContents[index].id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(() => {
            // Removing the item from the local state
            const updatedContents = [...contactContents];
            updatedContents.splice(index, 1);
            setContactContents(updatedContents);
        })
        .catch(error => console.error('Error deleting reported content:', error));
    };

    return (
        <section>
            <CustomNavbar/>
            <Container style={{marginTop:'5.5rem'}}>
                <h1 style={{
                    textAlign:'center',color:'#2B358C',fontWeight:600,marginBottom:'3rem'
                }}>Contact Queries</h1>
            <Row>
            {contactContents.map((content, index) => (
                <Col md={6} key={index} className="mb-3">
                    <Card style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        <Card.Body>
                            <Card.Title className="text-primary">Contact Details</Card.Title>
                            <Card.Text>
                                <strong>Name:</strong> {content.contactername}<br />
                                <strong>Email:</strong> {content.contacterEmail}<br />
                                <strong>Query:</strong> {content.contactQuery}<br />
                                
                            </Card.Text>
                            <Button variant="danger" className="btn-sm" onClick={() => {
                                setDeleteIndex(index);
                                setShowModal(true);
                            }}>Delete</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            </Row>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this content?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={() => {
                        handleDelete(deleteIndex);
                        setShowModal(false);
                    }}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
            <FooterAdmin/>
        </section>
    
    );
};

export default ContactCard;
