import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import face from '../../Assets/img/social/facebook.png';
import tweet from '../../Assets/img/social/twitter.png';
import linked from '../../Assets/img/social/linkedin.png';
import insta from '../../Assets/img/social/instagram.png';
import thread from '../../Assets/img/social/threads.png';
import red from '../../Assets/img/social/reddit.png';
import logo from '../../Assets/img/joblogo.png';

function FooterEmp() {
  const [name, setName] = useState('');
  const [query, setQuery] = useState('');
  const [nameError, setNameError] = useState('');
  const [queryError, setQueryError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!name.trim()) {
      setNameError('Name is required');
      return;
    }
    if (!query.trim()) {
      setQueryError('Query is required');
      return;
    }

    // Proceed with form submission
    console.log('Name:', name);
    console.log('Query:', query);

    // Reset form and errors
    setName('');
    setQuery('');
    setNameError('');
    setQueryError('');
  };

  const footerStyle = {
    marginTop: '5rem',
    display: 'block',
    backgroundColor: '#2B358C',
    padding: '10px',
    width: '100%',
    flexDirection: 'column',
  };

  const headLogoStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: '30px',
    flexDirection:'row'
  };

  const linksStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const h4Style = {
    color: 'white',
  };

  const zoneH4Style = {
    marginTop: '-20px',
  };

  const olStyle = {
    color: 'white',
    listStyleType: 'none',
    textAlign:'justify'
  };

  const liStyle = {
    fontSize: '14px',
    margin: '10px 0px',
    cursor: 'pointer',
  };

  const cmtBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const inputStyle = {
    width: '200px',
    height: '20px',
    borderRadius: '3px',
    backgroundColor: '#E6E7FF',
    border: 'none',
    margin: '3px 0px',
  };

  const textareaStyle = {
    width: '200px',
    height: '40px',
    borderRadius: '5px',
    backgroundColor: '#E6E7FF',
    border: 'none',
    margin: '3px 0px',
    resize: 'none',
  };

  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E6E7FF',
    padding: '2px',
    borderRadius: '3px',
    border: 'none',
    margin: '3px 0px',
    width: '80px',
    height: '25px',
    cursor: 'pointer',
  };

  const socialImgStyle = {
    width: '30px',
    height: '30px',
    marginLeft:'5px',
  };

  const bottomStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTop: '1px solid #E6E7FF',
    padding: '7px',
    color: 'white',
    fontSize: '14px',
  };

  const con2Style = {
    display: 'inlineBlock'
  };

  const pStyle = {
    margin: '0px 30px',
  };

  return (
    <footer style={footerStyle}>
      <div className="foot">
        <Container fluid>
          <Row style={{display:'flex',flexDirection:'row'}} >
            <h2 className='text-center' style={{ color: 'yellow', fontWeight: 700 ,marginBottom:'30px'}}>WorkQuake</h2>
          </Row>
          <Row style={linksStyle}>
            <Col className="canLinks">
              <h4 className='text-left fs-6 ms-4 mt-2' style={{ ...h4Style, ...zoneH4Style }}>CANDIDATES ZONE</h4>
              <ul style={{lineHeight:'20px',fontSize:'15px'}}>
              <Link to="/logins" style={{textDecoration:'none',color:'white'}}><p>Jobs for u</p></Link>
              <Link to="/logins" style={{textDecoration:'none',color:'white'}}><p>Find Jobs</p></Link>
              <Link to="/logins" style={{textDecoration:'none',color:'white'}}> <p>Jobs in trending</p></Link>
              <Link to="/logins" style={{textDecoration:'none',color:'white'}}> <p>Resume Builder</p></Link>
              <Link to="/logins" style={{textDecoration:'none',color:'white'}}> <p>Top Featured Companies</p></Link>
              </ul> 
            </Col>
            <Col className="empLinks">
              <h4 className='text-left fs-6 ms-4 mt-2' style={{ ...h4Style, ...zoneH4Style }}>EMPLOYER ZONE</h4>
              <ul style={{lineHeight:'20px',fontSize:'15px'}}>
              <Link to="/postjob" style={{textDecoration:'none',color:'white'}}> <p >Post Jobs</p></Link>
              <Link to="/employer-home" style={{textDecoration:'none',color:'white'}}> <p >Pricings</p></Link>
              <Link to="/manageposts" style={{textDecoration:'none',color:'white'}}> <p >Manage Posts</p></Link>
              <Link to="/trackapplications" style={{textDecoration:'none',color:'white'}}> <p >Manage Applications</p></Link>
              <Link to="/employer-home" style={{textDecoration:'none',color:'white'}}> <p >Sponsored Companies</p></Link>
              </ul>
            </Col>
            <Col className="lglLinks">
              <h4 className='text-left fs-6 ms-4 mt-2' style={{ ...h4Style, ...zoneH4Style }}>LEGAL</h4>
              <ul style={{lineHeight:'20px',fontSize:'15px'}}>
              <Link to="/privacypolicy-employers" style={{textDecoration:'none',color:'white'}}> <p>Privacy Policies</p></Link>
              <Link to="/jsterms-employers" style={{textDecoration:'none',color:'white'}}> <p>Job Seekers TnC</p></Link>
              <Link to="/empterms-employers" style={{textDecoration:'none',color:'white'}}> <p>Employers TnC</p></Link>
              <Link to="/copyright-employers" style={{textDecoration:'none',color:'white'}}> <p>Copyright</p></Link>
              <Link to="/community-guide-employers" style={{textDecoration:'none',color:'white'}}> <p>Community Guidelines</p></Link>
              </ul>
            </Col>
            <Col lg style={cmtBoxStyle}>
            <h5 className="row fs-6 ms-2 mt-2"  style={{ marginTop: '-15px',color:'white' }}>LEAVE US A COMMENT</h5>
             
              <Button as={Link} to="/commentsection-employer" style={{width:'100px',marginBottom:'30px',backgroundColor:'rgb(230, 231, 255)',border:'none',color:'#2B358C',height:'30px'}}>Click Here</Button>
              <h5 className="fs-6 " style={{ marginTop: '5px',color:'white' }}>FOLLOW US</h5>
              <div className="image mb-3">
                <img src={face} alt="" style={socialImgStyle} />
                <img src={tweet} alt="" style={socialImgStyle} />
                <img src={linked} alt="" style={socialImgStyle} />
                <img src={insta} alt="" style={socialImgStyle} />
                <img src={thread} alt="" style={socialImgStyle} />
                <img src={red} alt="" style={socialImgStyle} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid>
        <Row style={bottomStyle}>
          <Col style={{ ...con2Style, ...{ marginRight: '30px' } }}>
            <p style={pStyle}>&copy; 2020-2023 WorkQuake.com | All Rights Reserved</p>
          </Col>
          <Col style={con2Style}>
            <Container>
              <Row style={{lineHeight:'1px',marginTop:'10px'}}>
              <Col><Link to="/faqpage-employer" style={{textDecoration:'none',color:'white'}}><p>FAQs</p></Link></Col>
                <Col><Link to="/contactus-employer" style={{textDecoration:'none',color:'white'}}><p>Contact Us</p></Link></Col>
                <Col><Link to="/reportsection-employer" style={{textDecoration:'none',color:'white'}}><p>Fraud Alert</p></Link></Col>
                <Col><Link to="/sitemap-employer" style={{textDecoration:'none',color:'white'}}><p>Site Map</p></Link></Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterEmp;
