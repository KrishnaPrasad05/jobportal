import React, { useEffect, useState } from 'react';
import { Container, Row, Col,Button,Nav,Tab } from 'react-bootstrap';
import {Link} from 'react-router-dom';

import locImg from '../../../Assets/img/index/jd/pin.png';
import expImg from '../../../Assets/img/index/jd/suitcase (1).png';
import CardComp from './cardComp';

function Card(){
  const [key, setKey] = useState('tab1');
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    // Check if loggedInUserId is truthy before making the API request
  
    // Make the API request using loggedName
    fetch("https://wry-seemly-berry.glitch.me/users")
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch user details');
        }
        return response.json();
      })
      .then(data => {
        // Extract specific attributes from the fetched data
        const extractedData = data
          .filter(item => item.id && item.Role && item.CompName && item.Loc && item.ExpReq) // Filter out items with missing attributes
          .map(item => ({
            id: item.id,
            Role: item.Role,
            CompName: item.CompName,
            Loc: item.Loc,
            ExpReq: item.ExpReq
          }));

        // Handle the extracted data as needed
        setUserData(extractedData);
        console.log(extractedData);
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
        setUserData([]);
      });
  
}, []);

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
              
               
                {userData && userData.map((data, index) => (  <Col className='m-1'>
                <CardComp jobName={data.Role} dest={`/jobinfo/${data.id}`} btnName="Apply now" CompName={data.CompName} location={data.Loc} experience={data.ExpReq} img1={locImg} img2={expImg}/>
                </Col>))}
             
            </Row>
            <Row className='mt-5'>
                <Col className='m-1'>
                <CardComp jobName="Software Developer" dest="/jobinfo" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Software Developer" dest="/jobinfo" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Software Developer" dest="/jobinfo" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Software Developer" dest="/jobinfo" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
            </Row>
          </Tab.Pane>
        <Tab.Pane eventKey="tab2">
        <Row>
              
               
              {userData && userData.map((data, index) => (  <Col className='m-1'>
              <CardComp jobName={data.Role} dest={`/jobinfo/${data.id}`} btnName="Apply now" CompName={data.CompName} location={data.Loc} experience={data.ExpReq} img1={locImg} img2={expImg}/>
              </Col>))}
           
          </Row>
            <Row className='mt-5'>
                <Col className='m-1'>
                <CardComp jobName="Production Manager" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Production Manager" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Production Manager" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Production Manager" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
            </Row>
          </Tab.Pane>
        <Tab.Pane eventKey="tab3">
        <Row>
              
               
              {userData && userData.map((data, index) => (  <Col className='m-1'>
              <CardComp jobName={data.Role} dest={`/jobinfo/${data.id}`} btnName="Apply now" CompName={data.CompName} location={data.Loc} experience={data.ExpReq} img1={locImg} img2={expImg}/>
              </Col>))}
           
          </Row>
            <Row className='mt-5'>
                <Col className='m-1'>
                <CardComp jobName="Tech Lead" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Tech Lead" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Tech Lead" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Tech Lead" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
            </Row>
          </Tab.Pane>
        <Tab.Pane eventKey="tab4">
        <Row>
              
               
              {userData && userData.map((data, index) => (  <Col className='m-1'>
              <CardComp jobName={data.Role} dest={`/jobinfo/${data.id}`} btnName="Apply now" CompName={data.CompName} location={data.Loc} experience={data.ExpReq} img1={locImg} img2={expImg}/>
              </Col>))}
           
          </Row>
            <Row className='mt-5'>
                <Col className='m-1'>
                <CardComp jobName="Content Writer" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Content Writer" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Content Writer" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Content Writer" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
            </Row>
          </Tab.Pane>
        <Tab.Pane eventKey="tab5">
        <Row>
              
               
                {userData && userData.map((data, index) => (  <Col className='m-1'>
                <CardComp jobName={data.Role} dest={`/jobinfo/${data.id}`} btnName="Apply now" CompName={data.CompName} location={data.Loc} experience={data.ExpReq} img1={locImg} img2={expImg}/>
                </Col>))}
             
            </Row>
            <Row className='mt-5'>
                <Col className='m-1'>
                <CardComp jobName="Accounts Manager" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Accounts Manager" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Accounts Manager" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
                <Col className='m-1'>
                <CardComp jobName="Accounts Manager" btnName="Apply Now" CompName="Bharath Technologies Pvt Ltd" location="Banglore, India" experience="5 to 10 Yrs" img1={locImg} img2={expImg}/>
                </Col>
            </Row>
          </Tab.Pane>
          </Tab.Content>
          </Tab.Container>
            
        </Container>
</section>
       

    );
}
export default Card;