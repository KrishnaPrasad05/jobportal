import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import mega from '../../../../Assets/img/megaphone.png'
import Header from '../../headerExp';
import Footer from '../../../Layout/Footer';
import { Link } from 'react-router-dom';
import FooterEmp from '../../footerEmp';

function Announcements() {
    
  return (
    <>
    <Header/>
    <nav aria-label="breadcrumb " style={{backgroundColor: '#E6E7FF',paddingLeft: '10px',marginTop:'3.8rem',fontWeight: 500,fontSize: '17px'}}>
                <ol class="breadcrumb p-1">
              
                  <li class="breadcrumb-item" aria-current="page"><Link to="/" style={{textDecoration:'none',color:'#2B358C'}}>Home</Link></li>
                  <li class="breadcrumb-item active" aria-current="page">Announcements</li>
                </ol>
              </nav>
    <section style={{marginTop:'4rem'}}>
 <Container >
<Card className='m-2'>
<Card.Header style={{backgroundColor:'#E6E7FF',padding:'10px',display:'flex',alignItems:'center',justifyContent:'center'}}>
<div style={{display:'flex'}}>
<Card.Img variant="top" src={mega} style={{width:'50px',height:'50px',marginRight:'20px'}} className='img-fluid' />
<h1>Announcements</h1>
</div>
</Card.Header>
<Card.Body style={{display:'flex',alignItems:'center',justifyContent:'center',padding:'100px'}}>
    <p>No announcements now</p>
</Card.Body>
</Card>
</Container>
</section>
   <FooterEmp/>
    </>
   
  );
}
export default Announcements;