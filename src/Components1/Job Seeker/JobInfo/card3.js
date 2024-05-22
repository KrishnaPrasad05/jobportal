import { Container,Row,Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import locImg from '../../../Assets/img/index/jd/pin.png';
import expImg from '../../../Assets/img/index/jd/suitcase (1).png';
import Card3Comp from './card3Comp';
import arImg from '../../../Assets/img/index/right-arrow (3).png'


function Card3(){
    return(
        <Container>
        <Card className='m-2'>
      <Card.Header style={{backgroundColor:'#E6E7FF'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div>
        <p style={{fontSize:'1.2rem'}}>Job seacrh</p>
            </div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <div style={{border:'1px solid black',padding:'5px',borderRadius:'5px'}}>
                <Card.Img variant="top" src={arImg} style={{width:'20px',height:'20px',transform:'rotate(180deg)'}} />
                </div>
                <div style={{border:'1px solid black',padding:'5px',borderRadius:'5px',marginLeft:'10px'}}>
                <Card.Img variant="top" src={arImg} style={{width:'20px',height:'20px'}} />
                </div>
            </div>
        </div>
      </Card.Header>
      
            <Row className='m-2'>
                <Col className='m-1'>
                <Card3Comp jobName="Software Developer" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <Card3Comp jobName="Software Developer" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <Card3Comp jobName="Software Developer" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <Card3Comp jobName="Software Developer" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                
            </Row>
           
            </Card>
             </Container>
    );
}
export default Card3;