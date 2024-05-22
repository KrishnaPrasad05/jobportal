import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import face from '../../../Assets/img/social/facebook.png';
import tweet from '../../../Assets/img/social/twitter.png';
import linked from '../../../Assets/img/social/linkedin.png';
import insta from '../../../Assets/img/social/instagram.png';
import thread from '../../../Assets/img/social/threads.png';
import red from '../../../Assets/img/social/reddit.png';
import locImg from '../../../Assets/img/index/jd/pin.png';
import degImg from '../../../Assets/img/index/jd/graduation-cap.png';
import expImg from '../../../Assets/img/index/jd/suitcase (1).png';
import descImg from '../../../Assets/img/index/jd/google-docs.png';
import saveImg from '../../../Assets/img/bookmark.png';
import viewImg from '../../../Assets/img/index/jd/right-arrow (3).png';
import card1img from '../../../Assets/img/office.jpg'
import share from '../../../Assets/img/share.png'
import save from '../../../Assets/img/save-instagram.png'
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function WithHeaderExample2() {
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);
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

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
  };

  const shareToFacebook = () => {
    window.open('https://www.facebook.com/', '_blank');
  };

  const shareToInstagram = () => {
    window.open('https://www.instagram.com/', '_blank');
  };
  const shareToTwitter= () => {
    window.open('https://www.twitter.com/', '_blank');
  };
  const shareToReddit = () => {
    window.open('https://www.reddit.com/', '_blank');
  };
  const shareToThreads = () => {
    window.open('https://www.threads.net/', '_blank');
  };
  const shareToLinkedIn = () => {
    window.open('https://www.linkedin.com/', '_blank');
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container>
<Card className='m-2' >
<Card.Header style={{display:'flex',alignItems:'center',justifyContent:'space-between',backgroundColor:'#E6E7FF'}}>
    <div>
   Details
    </div>
    <div style={{display:'flex'}}> 
  <Link style={{textDecoration:'none',color:'black'}} to="/savedjobs"><div> <Card.Img variant="top" src={save} style={{width:'20px',height:'20px',marginRight:'5px'}} /><span  style={{marginRight:'10px'}}>Save</span><br></br></div></Link> 
    <div onClick={handleShow} style={{cursor:'pointer'}}> <Card.Img variant="top" src={share} style={{width:'20px',height:'20px',marginRight:'5px'}} /><span>Share</span><br></br></div>
    </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>Job Description</Card.Title>
        <Card.Text>{userData.jobDesc}</Card.Text>
        <hr></hr>
        <Card.Title>About Company</Card.Title>
        <Card.Text>{userData.aboutCompany}</Card.Text>
        <hr></hr>
        <Card.Title>Skills Required</Card.Title>
        <Card.Text>{userData.skillsReq}</Card.Text>
             <hr></hr>
             <Card.Title>Job Particulars</Card.Title>
             <table>
                <tr>
                    <td style={{color: 'grey',paddingRight:'10px'}}>Role</td>
                    <td>{userData.Role}</td>
                </tr>
                <tr>
                    <td style={{color: 'grey',paddingRight:'10px'}}>Education</td>
                    <td>{userData.Qual}</td>
                </tr>
                <tr>
                    <td style={{color: 'grey',paddingRight:'10px'}}>Who can apply</td>
                    <td>All</td>
                </tr>
                <tr>
                    <td style={{color: 'grey',paddingRight:'10px'}}>Hiring Process</td>
                    <td>{userData.Hiring}</td>
                </tr>
                <tr>
                    <td style={{color: 'grey',paddingRight:'10px'}}>Employement Type</td>
                    <td>{userData.EmpType}</td>
                </tr>
                <tr>
                    <td style={{color: 'grey',paddingRight:'10px'}}>Job ID</td>
                    <td>{userData.id}</td>
                </tr>
                <tr>
                    <td style={{color: 'grey',paddingRight:'10px'}}>Job Category</td>
                    <td>{userData.JobCat}</td>
                </tr>
                <tr>
                    <td style={{color: 'grey',paddingRight:'10px'}}>Country</td>
                    <td>{userData.Country}</td>
                </tr>
            </table>
      </Card.Body>
      
      
    </Card>
    <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Share</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>Copy to Clipboard : </Col>
              <Col> <Button onClick={copyToClipboard} disabled={copied}>
            {copied ? 'Link Copied!' : 'Copy Link'}
          </Button></Col>
            </Row>
          </Container>
         
         <Container>
          <Row style={{marginTop:'15px'}}>
            <Col>Share to :</Col>
            <Col>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
            <img src={face} onClick={shareToFacebook}  alt="" style={{width:'30px',height:'30px',cursor:'pointer'}} />
              <img src={insta} onClick={shareToInstagram} alt="" style={{width:'30px',height:'30px',cursor:'pointer'}} />
              <img src={tweet} onClick={shareToTwitter} alt="" style={{width:'30px',height:'30px',cursor:'pointer'}} />
              <img src={linked} onClick={shareToLinkedIn} alt="" style={{width:'30px',height:'30px',cursor:'pointer'}} />
              <img src={thread} onClick={shareToThreads} alt="" style={{width:'30px',height:'30px',cursor:'pointer'}} />
              <img src={red} onClick={shareToReddit} alt="" style={{width:'30px',height:'30px',cursor:'pointer'}} />
            </div>
           
           </Col>
          </Row>
         </Container>
        
         
        </Modal.Body>
      </Modal>
    </Container>
    
  );
}

export default WithHeaderExample2;