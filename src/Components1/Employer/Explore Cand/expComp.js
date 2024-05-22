import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function ExploreComp(props) {
  return (
    <Card as={Link} to={props.dest} style={{ textDecoration:'none',width: '12rem',display:'flex',alignItems:'center',justifyContent:'center' }}>
       
       <Card.Img variant="top" src={props.cardImage} style={{width:'70px',height:'70px',paddingTop:'5px'}} />
       
      
      <Card.Body style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <Card.Title style={{marginTop:'-10px'}}>{props.title}</Card.Title>
        <Card.Text style={{color:'grey'}}>
          {props.content}
        </Card.Text>
        <Card.Text style={{border:'1px solid #2B358C',borderRadius:'20px',padding:'3px',height:'30px'}}>
          {props.comp}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ExploreComp;