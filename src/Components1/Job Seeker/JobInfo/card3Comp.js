import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Card3Comp(props) {
  return (
    <Card style={{ width: '15rem',border:'1px solid grey'  }}>
      <Card.Body>
        <Card.Title style={{color:'#2B358C'}}>{props.jobName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.CompName}</Card.Subtitle>
        <Card.Text >
            <div style={{display:'flex',flexDirection:'column'}}>
            <div> <Card.Img variant="top" src={props.img1} style={{width:'20px',height:'20px',marginRight:'5px'}} /><span>{props.location}</span><br></br></div>
         
         <div><Card.Img variant="top" src={props.img2} style={{width:'20px',height:'20px',marginRight:'5px'}} /><span>{props.experience}</span><br></br></div>
            </div>
        
        </Card.Text>
        <Button variant="primary" style={{backgroundColor:'#2B358C',border:'none'}}>Apply Now</Button>
      </Card.Body>
    </Card>
  );
}

export default Card3Comp;