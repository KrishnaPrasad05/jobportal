import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
function Jobs4UComp(props) {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>

   
    <Card as={Link} to={props.dest} style={{ width: '11rem',display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid #2B358C',textDecoration:'none'}}>
    <Card.Img variant="top" src={props.image} style={{width:'45px',height:'45px',margin:'5px'}} />
    <Card.Body style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Card.Title style={{color:'#2B358C',fontWeight:500,marginTop:'-15px'}}>{props.text}</Card.Title>
    </Card.Body>
  </Card>
  </div>
  );
}

export default Jobs4UComp;