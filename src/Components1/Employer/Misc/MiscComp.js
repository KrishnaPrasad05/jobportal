import { Col, Container, Image, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect } from 'react';

function MiscComp(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  return (
    
    <Container style={{marginTop:'4rem'}}>
 <Card>
      <Card.Header style={{backgroundColor:'#E6E7FF',fontSize:'1.5rem',color:'#2B358C'}}>{props.title}</Card.Header>
      <Card.Body>
        <Container>
            <Row xs={1} md={2}>
                <Col style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Image src={props.image} style={{width:'400px',height:'400px'}} className='img-fluid'/>
                </Col>
                <Col>
                <p>{props.content1}</p>
                
                </Col>
            </Row>
            <Row>
            <p>{props.content2}</p>
            </Row>
        </Container>
      </Card.Body>
    </Card>
    </Container>
   
  );
}

export default MiscComp;