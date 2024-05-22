import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function Section6CompAd(props) {

  return (
    <Card style={{ width: '18rem' }}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Card.Img variant="top" src={props.image} style={{width:'170px',height:'170px',padding:'10px'}} />
        </div>
      
      <Card.Body>
        <Card.Title style={{color:props.clr,fontWeight:'600'}}>{props.title}</Card.Title>
        <Card.Text style={{color:'grey'}}>{props.detail}
         
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{props.jobName}</ListGroup.Item>
        <ListGroup.Item>{props.compName}</ListGroup.Item>
       
      </ListGroup>
      <Card.Body style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <Button variant="primary" style={{backgroundColor:'#2B358C',border:'none'}} as={Link} to={props.dest1}>View Now</Button>
      </div>
      </Card.Body>
    </Card>
  );
}

export default Section6CompAd;