import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';


function JobSearchCatComp(props) {
  return (
    <Card style={{ width: '15rem' }}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <Card.Img variant="top" style={{marginTop:'1rem',width:'200px',height:'200px'}} src={props.cardImage} />
      </div>
     
      <Card.Body>
        <Card.Title style={{color:'#2B358C',fontWeight:600}}>{props.cardTitle}</Card.Title>
        <Card.Text>
          {props.cardContent}
        </Card.Text>
      </Card.Body>
      
      <Card.Body style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Card.Link className='text-center' as={Link} to="/viewjobs" style={{textDecoration:'none',border:'1px solid black',borderRadius:'5px',padding:'3px',backgroundColor:'#E6E7FF',color:'#2B358C',width:'100px',display:props.disp1}}>View</Card.Link>
        <Card.Link className='text-center' as={Link} to="/viewallcandidates" style={{textDecoration:'none',border:'1px solid black',borderRadius:'5px',padding:'3px',backgroundColor:'#E6E7FF',color:'#2B358C',width:'100px',display:props.disp2}}>View</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default JobSearchCatComp;