import { Col, Container, Image, Row, Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import plan from '../../../Assets/img/subscription.png';
import React, { useEffect } from 'react';
import FooterEmp from '../footerEmp';
import HeaderEmp from '../headerExp';
import { Link } from 'react-router-dom';
function SubscriptionDetails() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); 
  return (
    <>
    <HeaderEmp/>
    <nav aria-label="breadcrumb " style={{backgroundColor: '#E6E7FF',paddingLeft: '10px',top:'3.8rem',fontWeight: 500,fontSize: '16px',position:'fixed',width:'100%',zIndex:1001,height:'30px'}}>
                <ol class="breadcrumb p-1">
                  <li class="breadcrumb-item" aria-current="page"><Link to="/employer-home" style={{textDecoration:'none',color:'#2B358C'}}>Home</Link></li>
                  <li class="breadcrumb-item" aria-current="page"><Link to="/profile-employer" style={{textDecoration:'none',color:'#2B358C'}}>Profile</Link></li>

                  <li class="breadcrumb-item active" aria-current="page">Manage posts</li>
                </ol>
              </nav>
    <Container style={{marginTop:'8rem'}}>
<Card>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Container fluid>
            <Row>
                <Col>
                <Table>
                <tr>
                        <th >Plan Name</th>
                        <td>Gold</td>
                    </tr>
                    <tr>
                        <th>Subscriber Name</th>
                        <td>User Name</td>
                    </tr>
                    <tr>
                        <th>Validity</th>
                        <td>12 months</td>
                    </tr>
                    <tr>
                        <th>Details</th>
                        <td>Able to access user details completely</td>
                    </tr>
                    <tr>
                        <th>Benefits</th>
                        <td>Able to retrive user profiles upto 100 per day</td>
                    </tr>
                    <tr>
                        <th>Expiry Date</th>
                        <td>12-06-2024</td>
                    </tr>
                </Table>
                </Col>
                <Col>
<Image src={plan} style={{width:'150px',height:'150px'}}/>
                </Col>
            </Row>
        </Container>
      </Card.Body>
    </Card>
    </Container>
    <FooterEmp/>
    </>
    
  );
}

export default SubscriptionDetails;