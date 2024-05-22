import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function TopFtdComp(props){
    return(
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
<Card as={Link} to={props.dest} style={{ textDecoration:'none',width: '6rem',display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid grey'}}>
      <Card.Img variant="top" src={props.image} style={{width:'70px',height:'70px',margin:'5px'}} />
    </Card>
        </div>

    );
}
export default TopFtdComp;