import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import { Container, Row, Col, Image} from 'react-bootstrap';
import img6 from '../../../Assets/img/arrow-right.png';
import { Link } from 'react-router-dom';

function CommonLoginComp(props) {
  return (
    <CardGroup>
      <Card style={{display:'flex',alignItems:'center',justifyContent:'center',margin:'10px',border:'2px solid #2B358C',borderRadius:'10px'}}>
        <Card.Img variant="top" src={props.image1} className='img-fluid' style={{width:'300px',height:'300px',padding:'20px'}} />
        <Card.Body>
          <Card.Title style={{color:'#2B358C',fontWeight:'700',fontSize:'2rem'}}>{props.title1}</Card.Title>
          <Card.Text style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Button as={Link} to="/login" variant="primary" style={{marginBottom:'20px',backgroundColor:'transparent',border:'none'}}><Image src={img6} style={{width:'60px',height:'60px'}}/></Button>
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card style={{display:'flex',alignItems:'center',justifyContent:'center',margin:'10px',border:'2px solid #2B358C',borderRadius:'10px'}}>
        <Card.Img variant="top" src={props.image2} className='img-fluid' style={{width:'300px',height:'300px',padding:'20px'}} />
        <Card.Body>
          <Card.Title style={{color:'#2B358C',fontWeight:'700',fontSize:'2rem'}}>{props.title2}</Card.Title>
          <Card.Text style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Button as={Link} to="/employerlogin" variant="primary" style={{marginBottom:'20px',backgroundColor:'transparent',border:'none'}}><Image src={img6} style={{width:'60px',height:'60px'}}/></Button>
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card className='col-xl' style={{display:'flex',alignItems:'center',justifyContent:'center',margin:'10px',border:'2px solid #2B358C',borderRadius:'10px'}}>
        <Card.Img variant="top" src={props.image3} className='img-fluid' style={{width:'300px',height:'300px',padding:'20px'}} />
        <Card.Body>
          <Card.Title style={{color:'#2B358C',fontWeight:'700',fontSize:'2rem'}}>{props.title3}</Card.Title>
          <Card.Text style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Button as={Link} to='/admin-login' variant="primary" style={{marginBottom:'20px',backgroundColor:'transparent',border:'none'}}><Image src={img6} style={{width:'60px',height:'60px'}}/></Button>
          </Card.Text>
        </Card.Body>
        
      </Card>
     
    </CardGroup>
  );
}

export default CommonLoginComp;