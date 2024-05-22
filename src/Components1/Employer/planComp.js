import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CardGroup from 'react-bootstrap/CardGroup';
import { Container, Row, Col, Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import right from '../../Assets/img/check (1).png';
import wrong from '../../Assets/img/cross.png';
function PlanComp(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <CardGroup>
      <Card style={{display:'flex',alignItems:'center',justifyContent:'center',margin:'10px',border:'2px solid #2B358C',borderRadius:'10px'}}>
        <Card.Header className='text-center' style={{width:'100%',padding:'5px',backgroundColor:'#E6E7FF',borderRadius:'10px',fontSize:'1.5rem',fontWeight:'600',color:'#2B358C'}}>
          Plan : Gold
        </Card.Header>
        <Card.Img variant="top" src={props.image1} className='img-fluid' style={{width:'300px',height:'300px',padding:'20px'}} />
        <Card.Body>
          <Card.Title style={{color:'#2B358C',fontSize:'1.5rem',fontWeight:'600',textAlign:'center'}}>{props.title1}</Card.Title>
          <Card.Text>
          
            <div style={{display:'flex'}}>
              <Image src={right} style={{width:'20px',height:'20px',marginRight:'5px'}}/>
              <p>Detailed job description</p>
            </div>
            <div style={{display:'flex'}}>
              <Image src={right} style={{width:'20px',height:'20px',marginRight:'5px'}}/>
              <p>Boost on Job Search Page</p>
            </div>
            <div style={{display:'flex'}}>
              <Image src={right} style={{width:'20px',height:'20px',marginRight:'5px'}}/>
              <p>Job Branding</p>
            </div>
          
          </Card.Text>
        </Card.Body>
        <Button onClick={handleShow} variant="primary" style={{marginBottom:'20px',backgroundColor:'#2B358C',border:'none'}}>{props.btn1}</Button>
      </Card>
      <Card style={{display:'flex',alignItems:'center',justifyContent:'center',margin:'10px',border:'2px solid #2B358C',borderRadius:'10px'}}>
      <Card.Header className='text-center' style={{width:'100%',padding:'5px',backgroundColor:'#E6E7FF',borderRadius:'10px',fontSize:'1.5rem',fontWeight:'600',color:'#2B358C'}}>
          Plan : Silver
        </Card.Header>
        <Card.Img variant="top" src={props.image2} className='img-fluid' style={{width:'300px',height:'300px',padding:'20px'}} />
        <Card.Body>
          <Card.Title style={{color:'#2B358C',fontSize:'1.5rem',fontWeight:'600',textAlign:'center'}}>{props.title2}</Card.Title>
          <Card.Text>
          <div style={{display:'flex'}}>
              <Image src={right} style={{width:'20px',height:'20px',marginRight:'5px'}}/>
              <p>Detailed job description</p>
            </div>
            <div style={{display:'flex'}}>
              <Image src={right} style={{width:'20px',height:'20px',marginRight:'5px'}}/>
              <p>Boost on Job Search Page</p>
            </div>
            <div style={{display:'flex'}}>
              <Image src={wrong} style={{width:'20px',height:'20px',marginRight:'5px'}}/>
              <p>Job Branding</p>
            </div>
          </Card.Text>
        </Card.Body>
        <Button onClick={handleShow} variant="primary" style={{marginBottom:'20px',backgroundColor:'#2B358C',border:'none'}}>{props.btn2}</Button>
      </Card>
      <Card className='col-xl' style={{display:'flex',alignItems:'center',justifyContent:'center',margin:'10px',border:'2px solid #2B358C',borderRadius:'10px'}}>
      <Card.Header className='text-center' style={{width:'100%',padding:'5px',backgroundColor:'#E6E7FF',borderRadius:'10px',fontSize:'1.5rem',fontWeight:'600',color:'#2B358C'}}>
          Plan : Bronze
        </Card.Header>
        <Card.Img variant="top" src={props.image3} className='img-fluid' style={{width:'300px',height:'300px',padding:'20px'}} />
        <Card.Body>
          <Card.Title style={{color:'#2B358C',fontSize:'1.5rem',fontWeight:'600',textAlign:'center'}}>{props.title3}</Card.Title>
          <Card.Text>
          <div style={{display:'flex'}}>
              <Image src={right} style={{width:'20px',height:'20px',marginRight:'5px'}}/>
              <p>Detailed job description</p>
            </div>
            <div style={{display:'flex'}}>
              <Image src={wrong} style={{width:'20px',height:'20px',marginRight:'5px'}}/>
              <p>Boost on Job Search Page</p>
            </div>
            <div style={{display:'flex'}}>
              <Image src={wrong} style={{width:'20px',height:'20px',marginRight:'5px'}}/>
              <p>Job Branding</p>
            </div>
          </Card.Text>
        </Card.Body>
        <Button onClick={handleShow} variant="primary" style={{marginBottom:'20px',backgroundColor:'#2B358C',border:'none'}}>{props.btn3}</Button>
      </Card>
     
    </CardGroup>



<Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
            <Image src={right} style={{width:'70px',height:'70px',margin:'20px'}}/>
            <p>Successfully Subscribed</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" style={{backgroundColor:'#2B358C',border:'none'}} as={Link} to="/subscriptiondetails">
            View
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  
  );
}

export default PlanComp;