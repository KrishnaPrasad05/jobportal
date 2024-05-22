import Card from 'react-bootstrap/Card';


function DashBoardComp(props) {
  return (
    <Card className='m-1' style={{ width: '18rem',display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#E6E7FF' }}>
      <Card.Img variant="top" src={props.image} style={{width:'45px',height:'45px',margin:'5px'}} />
      <Card.Body style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <Card.Title style={{color:'#2B358C',fontWeight:700,marginTop:'-15px'}}>{props.count}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default DashBoardComp;