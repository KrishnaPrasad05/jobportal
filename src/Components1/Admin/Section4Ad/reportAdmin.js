import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import CustomNavbar from '../HeaderAdmin/HeaderAd';
import FooterAdmin from '../HeaderAdmin/FooterAd';

const ReportCard = () => {
    const [reportedContents, setReportedContents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState(null);

    useEffect(() => {
        fetch('https://wry-seemly-berry.glitch.me/report/')
            .then(response => response.json())
            .then(data => {
                
                const filteredData = data.filter(item => (
                    item.reporterName && item.reporterEmail && item.reportQuery && item.proofDocument
                ));
                setReportedContents(filteredData);
            })
            .catch(error => console.error('Error fetching reported contents:', error));
    }, []);

    const handleDelete = (index) => {
        // Sending delete request to the server
        fetch(`https://wry-seemly-berry.glitch.me/report/${reportedContents[index].id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(() => {
            // Removing the item from the local state
            const updatedContents = [...reportedContents];
            updatedContents.splice(index, 1);
            setReportedContents(updatedContents);
        })
        .catch(error => console.error('Error deleting reported content:', error));
    };

    return (
        <section>
            <CustomNavbar/>
    <Container style={{marginTop:'5rem'}}>
    <h1 style={{
                    textAlign:'center',color:'#2B358C',fontWeight:600,marginBottom:'1rem'
                }}>Reported Contents</h1>
            <Row>
            {reportedContents.map((content, index) => (
                <Col md={6} key={index} className="mb-3">
                    <Card style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        <Card.Body>
                            <Card.Title className="text-primary">Report Details</Card.Title>
                            <Card.Text>
                                <strong>Name:</strong> {content.reporterName}<br />
                                <strong>Email:</strong> {content.reporterEmail}<br />
                                <strong>Query:</strong> {content.reportQuery}<br />
                                <strong>Proof Document:</strong> <a href={content.proofDocument} target="_blank" rel="noopener noreferrer">{content.proofDocument}</a>
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

export default ReportCard;
