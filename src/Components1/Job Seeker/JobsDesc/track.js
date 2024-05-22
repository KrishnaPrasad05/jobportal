import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import locImg from '../../../Assets/img/index/jd/pin.png';
import degImg from '../../../Assets/img/index/jd/graduation-cap.png';
import expImg from '../../../Assets/img/index/jd/suitcase (1).png';
import descImg from '../../../Assets/img/index/jd/google-docs.png';
import saveImg from '../../../Assets/img/bookmark.png';
import viewImg from '../../../Assets/img/index/jd/right-arrow (3).png';
import card1img from '../../../Assets/img/office.jpg'
import JobDesc from './jobDescComp';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import { Link } from 'react-router-dom';


function Track(){
  return (
    <>
    <Header/>
    <nav aria-label="breadcrumb " style={{backgroundColor: '#E6E7FF',paddingLeft: '10px',top:'3.8rem',fontWeight: 500,fontSize: '16px',position:'fixed',width:'100%',zIndex:1000,height:'30px'}}>
                <ol class="breadcrumb p-1">
                  <li class="breadcrumb-item" aria-current="page"><Link to="/jobseeker-home" style={{textDecoration:'none',color:'#2B358C'}}>Home</Link></li>
                  <li class="breadcrumb-item" aria-current="page"><Link to="/profilejs" style={{textDecoration:'none',color:'#2B358C'}}>Profile</Link></li>
                  <li class="breadcrumb-item active" aria-current="page">Track your applications</li>
                </ol>
              </nav>
    <Container style={{marginTop:'7rem'}}>
        <h1 className="head text-center" style={{color:'#2B358C'}}>Track Your Applications</h1>
        <Row className='d-flex flex-row justify-content-center mt-5'>
            <Col>
            <JobDesc state="Status " disp2="none" bgClr="rgba(9, 255, 9, 0.226)" cardImg={card1img} jobName="Bharath IT Solutions" compName="Front End Web Developer" loc={locImg} deg={degImg} exp={expImg} des={descImg} save={saveImg} view={viewImg} location="Hyderabad , Chennai" experience="0 to 3+ Years" degree="B.E." desc="Apply to Front End......" day="Selected" />
            </Col>
            <Col>
            <JobDesc disp2="none" bgClr="rgba(255, 255, 0, 0.201)" cardImg={card1img} jobName="Bharath IT Solutions" compName="Front End Web Developer" loc={locImg} deg={degImg} exp={expImg} des={descImg} save={saveImg} view={viewImg} location="Hyderabad , Chennai" experience="0 to 3+ Years" degree="B.E." desc="Apply to Front End......" state="Status " day="On-Progress" />
            </Col>
            <Col>
            <JobDesc disp2="none" bgClr="rgba(9, 255, 9, 0.226)" cardImg={card1img} jobName="Bharath IT Solutions" compName="Front End Web Developer" loc={locImg} deg={degImg} exp={expImg} des={descImg} save={saveImg} view={viewImg} location="Hyderabad , Chennai" experience="0 to 3+ Years" degree="B.E." desc="Apply to Front End......" state="Status " day="Selected" />
            </Col>
            <Col>
            <JobDesc disp2="none" bgClr="rgba(9, 255, 9, 0.226)" cardImg={card1img} jobName="Bharath IT Solutions" compName="Front End Web Developer" loc={locImg} deg={degImg} exp={expImg} des={descImg} save={saveImg} view={viewImg} location="Hyderabad , Chennai" experience="0 to 3+ Years" degree="B.E." desc="Apply to Front End......" state="Status " day="Selected" />
            </Col>
            
        </Row>
        <Row className='mt-5 mb-5'>
            <Col>
            <JobDesc disp2="none" bgClr="rgba(255, 255, 0, 0.201)" cardImg={card1img} jobName="Bharath IT Solutions" compName="Front End Web Developer" loc={locImg} deg={degImg} exp={expImg} des={descImg} save={saveImg} view={viewImg} location="Hyderabad , Chennai" experience="0 to 3+ Years" degree="B.E." desc="Apply to Front End......"  state="Status " day="On-Progress" />
            </Col>
            <Col>
            <JobDesc disp2="none" bgClr="rgba(255, 0, 0, 0.162)" cardImg={card1img} jobName="Bharath IT Solutions" compName="Front End Web Developer" loc={locImg} deg={degImg} exp={expImg} des={descImg} save={saveImg} view={viewImg} location="Hyderabad , Chennai" experience="0 to 3+ Years" degree="B.E." desc="Apply to Front End......"  state="Status " day="Rejected" />
            </Col>
            <Col>
            <JobDesc disp2="none" bgClr="rgba(255, 0, 0, 0.162)" cardImg={card1img} jobName="Bharath IT Solutions" compName="Front End Web Developer" loc={locImg} deg={degImg} exp={expImg} des={descImg} save={saveImg} view={viewImg} location="Hyderabad , Chennai" experience="0 to 3+ Years" degree="B.E." desc="Apply to Front End......"  state="Status " day="Rejected" />
            </Col>
            <Col>
            <JobDesc disp2="none" bgClr="rgba(255, 255, 0, 0.201)" cardImg={card1img} jobName="Bharath IT Solutions" compName="Front End Web Developer" loc={locImg} deg={degImg} exp={expImg} des={descImg} save={saveImg} view={viewImg} location="Hyderabad , Chennai" experience="0 to 3+ Years" degree="B.E." desc="Apply to Front End......"  state="Status " day="On-Progress" />
            </Col>
            
        </Row>
    </Container>
    <Footer/>
    </>
    
   
    

  );
}
export default Track;