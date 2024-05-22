import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import { Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CardEmpComp(props) {
  return (
    <CardGroup>
      <Card style={{display:'flex',alignItems:'center',justifyContent:'center',margin:'10px',backgroundColor:props.colour1,border:'2px solid #2B358C',borderRadius:'10px'}}>
        <Card.Img variant="top" src={props.image1} className='img-fluid' style={{width:'500px',height:'300px',padding:'20px'}} />
        <Card.Body>
          <Card.Title style={{color:'#2B358C'}}>{props.title1}</Card.Title>
          <Card.Text>
          {props.content}
          </Card.Text>
        </Card.Body>
        <Button as={Link} to="/postjob" variant="primary" style={{marginBottom:'20px',backgroundColor:'#2B358C',border:'none'}}>{props.btn1}</Button>
      </Card>
      <Card style={{display:'flex',alignItems:'center',justifyContent:'center',margin:'10px',backgroundColor:props.colour2,border:'2px solid #2B358C',borderRadius:'10px'}}>
        <Card.Img variant="top" src={props.image2} className='img-fluid' style={{width:'500px',height:'300px',padding:'20px'}} />
        <Card.Body>
          <Card.Title style={{color:'#2B358C'}}>{props.title2}</Card.Title>
          <Card.Text>
          {props.content2}
          </Card.Text>
        </Card.Body>
        <Button as={Link} to="/aboutcompany" variant="primary" style={{marginBottom:'20px',backgroundColor:'#2B358C',border:'none'}}>{props.btn2}</Button>
      </Card>
      <Card className='col-xl' style={{display:'flex',alignItems:'center',justifyContent:'center',margin:'10px',backgroundColor:props.colour1,border:'2px solid #2B358C',borderRadius:'10px'}}>
        <Card.Img variant="top" src={props.image3} className='img-fluid' style={{width:'500px',height:'300px',padding:'20px'}} />
        <Card.Body>
          <Card.Title style={{color:'#2B358C'}}>{props.title3}</Card.Title>
          <Card.Text>
          {props.content3}
          </Card.Text>
        </Card.Body>
        <Button as={Link} to="/contactus-employer" variant="primary" style={{marginBottom:'20px',backgroundColor:'#2B358C',border:'none'}}>{props.btn3}</Button>
      </Card>
     
    </CardGroup>
  );
}

export default CardEmpComp;