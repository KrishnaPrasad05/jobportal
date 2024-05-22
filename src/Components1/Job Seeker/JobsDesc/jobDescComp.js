import { Button, Container,Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { deleteDataAsync, removePostFromServer } from '../../../features/dataSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function JobDesc(props) {
  const dispatch=useDispatch();
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [resumeIdToDelete, setResumeIdToDelete] = useState(null);
  const handleDeleteResume = () => {
    // Dispatch action to delete the resume
    console.log(resumeIdToDelete)
    dispatch(removePostFromServer({ id: resumeIdToDelete }));
    // Close the confirmation modal
    setShowConfirmationModal(false);
    window.location.href="/manageposts";
};
    return (
      <>
        <Card style={{ width: '18rem',border:'1px solid #2B358C' }}>
        <Card.Header style={{backgroundColor:props.bgClr}}>{props.jobName}</Card.Header>
        <Card.Body> 
        <Card.Img variant="top" src={props.cardImg} style={{width:'500px',height:'150px'}} className='img-fluid' />
          <Card.Title  style={{fontWeight:'700',color:'#2B358C'}}>{props.compName}</Card.Title>
          <Container style={{display:'flex',alignItems:'start',justifyContent:'flex-start',flexDirection:'column'}}>
            <div> <Card.Img variant="top" src={props.loc} style={{width:'20px',height:'20px',marginRight:'5px'}} /><span>{props.location}</span><br></br></div>
         
            <div><Card.Img variant="top" src={props.exp} style={{width:'20px',height:'20px',marginRight:'5px'}} /><span>{props.experience}</span><br></br></div>
            <div><Card.Img variant="top" src={props.deg} style={{width:'30px',height:'30px',marginRight:'3px',marginLeft:'-5px'}} /><span>{props.degree}</span><br></br></div>
            <div><Card.Img variant="top" src={props.des} style={{width:'20px',height:'20px',marginRight:'5px'}} /><span>{props.desc}</span></div>
          </Container>
          
          <Card.Footer style={{backgroundColor:props.bgClr,marginTop:'1rem'}}>
          <div> <span style={{fontWeight:'700'}}>{props.state} : </span><span>{props.day}</span><br></br></div>
          <Container style={{display:'flex',alignItems:'start',justifyContent:'space-between'}}>
            
         
            <div style={{marginLeft:'-15px'}}><Card.Img variant="top" src={props.save} style={{width:'20px',height:'20px',marginRight:'5px'}} /><span>Save</span><br></br></div>
            <Button as={Link} to={props.dest} style={{backgroundColor:'transparent',border:'none',marginTop:'-5px',display:props.disp1}} ><span style={{fontWeight:'700',color:'#2B358C'}} >View & Apply</span><Card.Img variant="top" src={props.view} style={{width:'20px',height:'20px',marginLeft:'5px'}} /><br></br></Button>
            <Button onClick={() => {
                            // Set resume ID to delete and show confirmation modal
                            setResumeIdToDelete(props.id);
                            setShowConfirmationModal(true);
                        }}  style={{backgroundColor:'transparent',border:'none',marginTop:'-5px',display:props.disp2}} ><span style={{fontWeight:'700',color:'#2B358C'}}  >Delete Post</span><Card.Img variant="top" src={props.view} style={{width:'13px',height:'13px',marginLeft:'5px'}} /><br></br></Button>
            
          </Container>
          </Card.Footer>
        </Card.Body>
      </Card>

<Modal show={showConfirmationModal} onHide={() => setShowConfirmationModal(false)} centered>
<Modal.Header closeButton>
    <Modal.Title>Confirmation</Modal.Title>
</Modal.Header>
<Modal.Body>Are you sure you want to delete this post?</Modal.Body>
<Modal.Footer>
    <Button variant="secondary" onClick={() => setShowConfirmationModal(false)}>Cancel</Button>
    <Button variant="danger" onClick={handleDeleteResume}>Delete</Button>
</Modal.Footer>
</Modal>
</>
      );
}

export default JobDesc;