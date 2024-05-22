import React, { useState } from 'react';
import { Container, Row, Col,Button,Nav,Tab } from 'react-bootstrap';
import {Link} from 'react-router-dom';

import amd from '../../../Assets/img/index/comp/amd.png';
import amazon from '../../../Assets/img/index/comp/amazon-pay.png';
import brother from '../../../Assets/img/index/comp/brother.png';
import ebay from '../../../Assets/img/index/comp/ebay.png';
import fedex from '../../../Assets/img/index/comp/fedex.png';
import htc from '../../../Assets/img/index/comp/htc.png';
import ea from '../../../Assets/img/index/comp/electronics-arts.png';
import ibm from '../../../Assets/img/index/comp/ibm.png';
import intel from '../../../Assets/img/index/comp/intel.png';
import lenovo from '../../../Assets/img/index/comp/lenovo.png';
import sam from '../../../Assets/img/index/comp/samsung.png';
import md from '../../../Assets/img/index/comp/mcdonalds.png';
import ExploreComp from '../../Job Seeker/Explore/exploreComp';


function CommonSponComp(){
  const [key, setKey] = useState('tab1');
  return (
    <>
     <style>{`
    #a .nav-link.active {
      background-color: #2B358C !important;
      color: white;
    }
    #a .nav-link {
      color: #2B358C;
    }
  `}</style>
      <h1 className="head text-center" style={{color:'#2B358C',marginTop:'7rem'}}>Sponsored Companies</h1>
     
     
      <Container className="contain container mt-3">
      <Tab.Container  activeKey={key} onSelect={(k) => setKey(k)}>
      <Nav id='a' fill variant="pills" className="mb-3" style={{color:'black',paddingTop:'10px'}}>
        <Nav.Item>
          <Nav.Link eventKey="tab1">Unicorn</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab2">MNC</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab3">Startup</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab4">Product</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab5">Service</Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey="tab1">
        <Row className=" row d-flex flex-row">
        <Col className="container1 col m-1">
            <ExploreComp dest="/logins" cardImage={amd} title="TATA" content="4.2 | 4.1k + reviews" comp="Unicorn"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp dest="/logins" cardImage={amazon} title="TATA" content="4.2 | 4.1k + reviews" comp="Unicorn"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp dest="/logins" cardImage={brother} title="TATA" content="4.2 | 4.1k + reviews" comp="Unicorn"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp dest="/logins" cardImage={ebay} title="TATA" content="4.2 | 4.1k + reviews" comp="Unicorn"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp dest="/logins" cardImage={fedex} title="TATA" content="4.2 | 4.1k + reviews" comp="Unicorn"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp dest="/logins" cardImage={htc} title="TATA" content="4.2 | 4.1k + reviews" comp="Unicorn"/>
        </Col>
        </Row>
        <Row className=" row d-flex flex-row mt-5">
        <Col className="container1 col m-1">
            <ExploreComp cardImage={ibm} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Unicorn"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={intel} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Unicorn"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={lenovo} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Unicorn"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={sam} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Unicorn"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={md} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Unicorn"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={ea} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Unicorn"/>
        </Col>
        </Row>
          </Tab.Pane>
        <Tab.Pane eventKey="tab2">
        <Row className=" row d-flex flex-row">
        <Col className="container1 col m-1">
            <ExploreComp cardImage={amd} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Indian MNC"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={amazon} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Indian MNC"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={brother} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Indian MNC"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={ebay} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Indian MNC"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={fedex} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Indian MNC"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={htc} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Indian MNC"/>
        </Col>
        </Row>
        <Row className=" row d-flex flex-row mt-5">
        <Col className="container1 col m-1">
            <ExploreComp cardImage={ibm} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Indian MNC"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={intel} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Indian MNC"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={lenovo} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Indian MNC"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={sam} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Indian MNC"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={md} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Indian MNC"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={ea} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Indian MNC"/>
        </Col>
        </Row>
          </Tab.Pane>
        <Tab.Pane eventKey="tab3">
        <Row className=" row d-flex flex-row">
        <Col className="container1 col m-1">
            <ExploreComp cardImage={amd} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Startup"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={amazon} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Startup"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={brother} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Startup"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={ebay} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Startup"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={fedex} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Startup"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={htc} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Startup"/>
        </Col>
        </Row>
        <Row className=" row d-flex flex-row mt-5">
        <Col className="container1 col m-1">
            <ExploreComp cardImage={ibm} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Startup"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={intel} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Startup"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={lenovo} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Startup"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={sam} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Startup"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={md} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Startup"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={ea} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Startup"/>
        </Col>
        </Row>
          </Tab.Pane>
        <Tab.Pane eventKey="tab4">
        <Row className=" row d-flex flex-row">
        <Col className="container1 col m-1">
            <ExploreComp cardImage={amd} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Product"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={amazon} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Product"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={brother} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Product"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={ebay} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Product"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={fedex} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Product"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={htc} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Product"/>
        </Col>
        </Row>
        <Row className=" row d-flex flex-row mt-5">
        <Col className="container1 col m-1">
            <ExploreComp cardImage={ibm} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Product"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={intel} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Product"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={lenovo} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Product"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={sam} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Product"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={md} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Product"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={ea} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Product"/>
        </Col>
        </Row>
          </Tab.Pane>
        <Tab.Pane eventKey="tab5">
        <Row className=" row d-flex flex-row">
        <Col className="container1 col m-1">
            <ExploreComp cardImage={amd} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Service"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={amazon} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Service"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={brother} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Service"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={ebay} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Service"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={fedex} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Service"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={htc} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Service"/>
        </Col>
        </Row>
        <Row className=" row d-flex flex-row mt-5">
        <Col className="container1 col m-1">
            <ExploreComp cardImage={ibm} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Service"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={intel} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Service"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={lenovo} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Service"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={sam} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Service"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={md} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Service"/>
        </Col>
        <Col className="container1 col m-1">
            <ExploreComp cardImage={ea} dest="/logins" title="TATA" content="4.2 | 4.1k + reviews" comp="Service"/>
        </Col>
        </Row>
          </Tab.Pane>
        </Tab.Content>
        </Tab.Container>
       
        </Container>

        <div className="container d-flex justify-content-center mt-3 mb-3" style={{ height: '40px' }} id="ctgBtn">
        <Button variant="primary" data-bs-toggle="modal" as={Link} to="/viewallcompanies" data-bs-target="#exampleModal" style={{ backgroundColor: '#2B358C' }}>
          View all companies
        </Button>
      </div>
    </>
  );
}
export default CommonSponComp;