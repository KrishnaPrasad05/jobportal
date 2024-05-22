import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Container,Modal,Form} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import locImg from '../../../Assets/img/index/jd/pin.png';
import degImg from '../../../Assets/img/index/jd/graduation-cap.png';
import expImg from '../../../Assets/img/index/jd/suitcase (1).png';
import descImg from '../../../Assets/img/index/jd/google-docs.png';
import saveImg from '../../../Assets/img/bookmark.png';
import viewImg from '../../../Assets/img/index/jd/right-arrow (3).png';
import card1img from '../../../Assets/img/office.jpg'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addResponseToServer } from '../../../features/updateSlice';
import { useDispatch } from 'react-redux';

function WithHeaderExample() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    experience: '',
    resumeUrl: '',
    jobId: '',
  });

  const handleCloseModal = () => setShowModal(false);
  const handleSubmit = async () => {
    try {
      // Dispatch action with form data
      dispatch(addResponseToServer(formData));

      // Close modal after dispatching action
      handleCloseModal();
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/users/${id}`);
        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };
  
    fetchUserData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!userData) {
    return <p>Error: User data not found</p>;
  }

  return (
    <Container >
<Card className='m-2'>
      <Card.Header style={{backgroundColor:'#E6E7FF'}}>{userData.Role}</Card.Header>
      <Row>
        <Col>
        <Card.Body>
        <Card.Title>{userData.CompName}</Card.Title>
        <div> <Card.Img variant="top" src={locImg} style={{width:'20px',height:'20px',marginRight:'5px'}} /><span>{userData.Loc}</span><br></br></div>
         
         <div><Card.Img variant="top" src={expImg} style={{width:'20px',height:'20px',marginRight:'5px'}} /><span>{userData.ExpReq}</span><br></br></div>
         <div><Card.Img variant="top" src={degImg} style={{width:'30px',height:'30px',marginRight:'3px',marginLeft:'-5px'}} /><span>{userData.Qual}</span><br></br></div>
         <div><Card.Img variant="top" src={descImg} style={{width:'20px',height:'20px',marginRight:'5px'}} /><span>{userData.jobDesc}</span></div>
      </Card.Body>
      <Card.Footer style={{marginLeft:'20px',backgroundColor:'#E6E7FF'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <Card.Text>
            <span style={{fontWeight:600}}> Posted :</span>3 days ago
            </Card.Text>
            <Button variant="primary" style={{backgroundColor:'#2B358C',border:'none'}} onClick={() => setShowModal(true)}>Apply Now</Button>
        </div>
       
      </Card.Footer>
        </Col>
        <Col xl='6'>
        <Card.Body>
            
        <Card.Img variant="top" className='img-fluid' src={card1img} style={{width:'500px',height:'200px'}} />
      </Card.Body>
        </Col>
      </Row>
      
    </Card>
     {/* Modal */}
     <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Apply for Job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formExperience">
              <Form.Label>Experience</Form.Label>
              <Form.Control type="text" placeholder="Enter your experience" value={formData.experience} onChange={(e) => setFormData({ ...formData, experience: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formResumeUrl">
              <Form.Label>Resume URL</Form.Label>
              <Form.Control type="text" placeholder="Enter your resume URL" value={formData.resumeUrl} onChange={(e) => setFormData({ ...formData, resumeUrl: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formJobId">
              <Form.Label>Job ID</Form.Label>
              <Form.Control type="text" placeholder="Enter job ID" value={formData.jobId} onChange={(e) => setFormData({ ...formData, jobId: e.target.value })} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
    
  );
}

export default WithHeaderExample;