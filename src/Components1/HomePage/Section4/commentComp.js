import Card from 'react-bootstrap/Card';
import star from '../../../Assets/img/star.png';
import { Container, Row, Col } from 'react-bootstrap';
function CommentComp(props) {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < props.rating; i++) {
      stars.push(<Card.Img key={i} variant="top" src={star} style={{ width: '20px', height: '20px' }} />);
    }
    return stars;
  };
  return (
    
 <Card className='m-1' style={{ width: '25rem', display:'flex',justifyContent:'center',alignItems:'center',border:'1px solid #2B358C', maxWidth: '100%' }}>
      <Card.Body>
      <Card.Header style={{ backgroundColor: '#E6E7FF', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <Card.Img src={props.image} style={{ width: '40px', height: '40px' }} />
        <div style={{ marginLeft: '1rem' }}>
            <Card.Text style={{ fontSize: '16px' }}>{props.name}</Card.Text>
        </div>
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {renderStars()}
    </div>
</Card.Header>


        <Card.Subtitle className="mb-2 text-center" style={{color:'#2B358C',fontSize:'1.2rem',margin:'10px'}}>{props.caption}</Card.Subtitle>
        <Card.Text>
          {props.content}
        </Card.Text>
        <Card.Footer style={{backgroundColor:'#E6E7FF'}}>
        <Card.Text>
          <span style={{fontWeight:600}}>Posted :</span> 28 minutes ago
        </Card.Text>
        </Card.Footer>
      </Card.Body>
    </Card>
   
   
  );
}

export default CommentComp;