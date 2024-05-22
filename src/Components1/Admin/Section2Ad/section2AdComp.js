import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

function Section2AdComp(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section>
<div>

<Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title style={{color:'#2B358C',fontWeight:'600'}}>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.user}</Card.Subtitle>
        <Card.Text>{props.content}
          
        </Card.Text>
        
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}} >
        <Button variant="primary" style={{backgroundColor:'#2B358C',border:'none'}} onClick={handleShow}>{props.btn1}</Button>
        <Button variant="primary" style={{backgroundColor:'#2B358C',border:'none',display:props.btnDisp}}>{props.btn2}</Button>
        </div>
       
       
      </Card.Body>
    </Card>
    </div>
   

<div>
<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
  <Modal.Title>Modal heading</Modal.Title>
</Modal.Header>
<Modal.Body>
    <div class="mb-3">
    <label for="com" class="form-label">Company Name</label>
    <input type="text" class="form-control" placeholder="name@example.com"></input>
    
  </div>
  <div class="mb-3">
    <label for="desc" class="form-label">Announcements</label>
    <textarea class="form-control" rows="3"></textarea>
    
  </div></Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>
  <Button variant="primary" onClick={handleClose}>
    Save Changes
  </Button>
</Modal.Footer>
</Modal>
</div>
    </section>
    

  );
}

export default Section2AdComp;