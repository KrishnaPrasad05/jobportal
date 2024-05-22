import Card from 'react-bootstrap/Card';

import Dashboard from '../../HomePage/Section1/dashboard';
import { Container } from 'react-bootstrap';
import CustomNavbar from '../HeaderAdmin/HeaderAd';
import FooterAdmin from '../HeaderAdmin/FooterAd';

function AdminHome() {
  return (
    <>
    <CustomNavbar/>
    <Container>
 <h1 style={{marginTop:'8rem',color: '#2B358C'}} >Welcome back ,</h1>
    <Dashboard style={{marginTop:'3rem'}}/>
    <Card style={{marginTop:'6rem'}}>
      <Card.Header>Quote</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0" style={{color:'maroon'}}>
          <p>
            {' '}
            And, when you want something, all the universe conspires in helping you to achieve it.{' '}
          </p>
          <footer className="blockquote-footer">
            Paulo Coelho
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    </Container>
    <FooterAdmin/>
    </>
   
   
  );
}

export default AdminHome;