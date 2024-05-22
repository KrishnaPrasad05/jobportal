import React, { useState } from 'react';
import { Container, Row, Col,Button,Nav,Tab } from 'react-bootstrap';
import {Link} from 'react-router-dom';

import locImg from '../../../Assets/img/index/jd/pin.png';
import expImg from '../../../Assets/img/index/jd/suitcase (1).png';
import CardComp from '../../HomePage/Section3/cardComp';

function CommonCard(){
  const [key, setKey] = useState('tab1');
    return(
<section>
<style>{`
    #a .nav-link.active {
      background-color: #2B358C !important;
      color: white;
    }
    #a .nav-link {
      color: #2B358C;
    }
  `}</style>
<h1 className="head text-center mt-5" style={{color:'#2B358C'}}>Trending Jobs</h1>
      
        <Container className='mt-2 mb-5'>
        <Tab.Container  activeKey={key} onSelect={(k) => setKey(k)}>
      <Nav fill id="a" variant="pills" className="mb-3" style={{color:'black',paddingTop:'10px'}}>
        <Nav.Item>
          <Nav.Link eventKey="tab1">IT</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab2">Production</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab3">Technology</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab4">Remote</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab5">WFH</Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey="tab1">
        <Row>
                <Col className='m-1'>
                <CardComp jobName="Software Developer" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Software Developer" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Software Developer" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Software Developer" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col className='m-1'>
                <CardComp jobName="Software Developer" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Software Developer" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Software Developer" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Software Developer" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
            </Row>
          </Tab.Pane>
        <Tab.Pane eventKey="tab2">
        <Row>
                <Col className='m-1'>
                <CardComp jobName="Production Manager" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Production Manager" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Production Manager" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Production Manager" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col className='m-1'>
                <CardComp jobName="Production Manager" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Production Manager" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Production Manager" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Production Manager" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
            </Row>
          </Tab.Pane>
        <Tab.Pane eventKey="tab3">
        <Row>
                <Col className='m-1'>
                <CardComp jobName="Tech Lead" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Tech Lead" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Tech Lead" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Tech Lead" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col className='m-1'>
                <CardComp jobName="Tech Lead" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Tech Lead" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Tech Lead" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Tech Lead" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
            </Row>
          </Tab.Pane>
        <Tab.Pane eventKey="tab4">
        <Row>
                <Col className='m-1'>
                <CardComp jobName="Content Writer" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Content Writer" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Content Writer" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Content Writer" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col className='m-1'>
                <CardComp jobName="Content Writer" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Content Writer" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Content Writer" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Content Writer" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
            </Row>
          </Tab.Pane>
        <Tab.Pane eventKey="tab5">
        <Row>
                <Col className='m-1'>
                <CardComp jobName="Accounts Manager" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Accounts Manager" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Accounts Manager" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Accounts Manager" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col className='m-1'>
                <CardComp jobName="Accounts Manager" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Accounts Manager" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Accounts Manager" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Accounts Manager" dest="/logins" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
            </Row>
          </Tab.Pane>
          </Tab.Content>
          </Tab.Container>
            
        </Container>
</section>
       

    );
}
export default CommonCard;