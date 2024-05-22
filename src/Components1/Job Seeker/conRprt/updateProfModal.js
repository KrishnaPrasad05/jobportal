import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { updateIssueToServer } from '../../../features/updateSlice';
import { updateProfileToServer } from '../../../features/dataSlice';
import { Col, Container, Row } from 'react-bootstrap';

function UpdatProfileModal({ userData, modalShow, setModalShow }) {
    const [name, setName] = useState('');
    const [profURL, setProfURl] = useState('');
    const [dob, setdob] = useState('');
    const [bloodGroup, setbloodGroup] = useState('');
    const [address, setaddress] = useState('');
    const [email, setMail] = useState('');
    const [mob, setMob] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
  
    // Update state with userData on component mount or when userData changes
    useEffect(() => {
      if (userData) {
        setName(userData.name);
        setProfURl(userData.profURL);
        setdob(userData.dob);
        setbloodGroup(userData.bloodGroup);
        setaddress(userData.address);
        setMail(userData.email);
        setMob(userData.mob);
        setPassword(userData.password);
      }
    }, [userData]);
  
    // Function to handle form submission
    const handleSubmit = () => {
        // Dispatch action to update profile
        dispatch(updateProfileToServer({ id: userData.id, name,profURL,address,bloodGroup,dob,email, mob, password }))
          .then(() => {
            // Close modal
            setModalShow(false);
            // Refresh the page
            window.location.reload();
          })
          .catch((error) => {
            // Handle error if needed
            console.error('Error updating profile:', error);
          });
      };

    return (
        <Modal show={modalShow} onHide={() => setModalShow(false)} centered size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Container>
              <Row>
                <Col>
                <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId="formBasicProfURL">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={profURL} onChange={(e) => setProfURl(e.target.value)} />
            </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setMail(e.target.value)} />
            </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId="formBasicDateOfBirth">
              <Form.Label>Date of birth</Form.Label>
               <Form.Control type="date" placeholder="Enter date of birth" value={dob} onChange={(e) => setdob(e.target.value)} />
            </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                <Form.Group controlId="formBasicBloodGroup">
  <Form.Label>Blood Group</Form.Label>
  <Form.Control as="select" value={bloodGroup} onChange={(e) => setbloodGroup(e.target.value)}>
    <option value="">Select blood group</option>
    <option value="A+">A+</option>
    <option value="A-">A-</option>
    <option value="B+">B+</option>
    <option value="B-">B-</option>
    <option value="AB+">AB+</option>
    <option value="AB-">AB-</option>
    <option value="O+">O+</option>
    <option value="O-">O-</option>
  </Form.Control>
</Form.Group>
                </Col>
                <Col>
                <Form.Group controlId="formBasicBloodGroup">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter email" value={address} onChange={(e) => setaddress(e.target.value)} />
            </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                <Form.Group controlId="formBasicMob">
              <Form.Label>Mobile number</Form.Label>
              <Form.Control type="text" placeholder="Enter mobile number" value={mob} onChange={(e) => setMob(e.target.value)} />
            </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
                </Col>
              </Row>
            </Container>
          
          
            
           
            

          
            
           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalShow(false)} style={{backgroundColor:'maroon',border:'none'}}>Close</Button>
          <Button variant="primary" onClick={handleSubmit} style={{backgroundColor:'#2B358C',border:'none'}}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    );
}
export default UpdatProfileModal;
