import { Col, Container, Image, Row, Table } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import {Card,Alert} from 'react-bootstrap';
import Header from '../headerExp';
import Footer from '../../Layout/Footer';
import FooterEmp from '../footerEmp';
import { Link } from 'react-router-dom';

function CandInfo() {
    const [userData, setUserData] = useState(null);
  const [loggedName, setLoggedName] = useState(null);
  useEffect(() => {
    // Retrieve loggedInUserId from local storage when the component mounts
    const loggedInNameFromLocalStorage = localStorage.getItem('loggedName');
    if (loggedInNameFromLocalStorage) {
      setLoggedName(loggedInNameFromLocalStorage);
      
    }
  }, []);




  useEffect(() => {
    console.log(loggedName)
    // Check if loggedInUserId is truthy before making the API request
    if (loggedName) {
      // Make the API request using loggedName
      fetch(`http://localhost:3001/resume?name=${loggedName}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch user details');
          }
          return response.json();
        })
        .then(data => {
          // Handle the fetched data as needed
          setUserData(data);
          console.log(data);
        })
        .catch(error => {
          console.error('Error fetching user details:', error);
          setUserData({ name: 'Lorem Ipsum',
                        lang: 'Lorem Ipsum',
                        dob: 'Lorem Ipsum',
                        gender: 'Lorem Ipsum',
                        blood: 'Lorem Ipsum',
                        nat: 'Lorem Ipsum',
                        address: 'Lorem Ipsum',});
        });
    }
  }, [loggedName]);

  if (!userData) {
    return null; // Return null if userData is null to display nothing
}

  return (
    <>
    <Header/>
    <nav aria-label="breadcrumb " style={{backgroundColor: '#E6E7FF',paddingLeft: '10px',top:'3.8rem',fontWeight: 500,fontSize: '16px',position:'fixed',width:'100%',zIndex:1000,height:'30px'}}>
                <ol class="breadcrumb p-1">
                  <li class="breadcrumb-item" aria-current="page"><Link to="/jobseeker-home" style={{textDecoration:'none',color:'#2B358C'}}>Home</Link></li>
                  <li class="breadcrumb-item" aria-current="page"><Link to="/profilejs" style={{textDecoration:'none',color:'#2B358C'}}>Profile</Link></li>
                  <li class="breadcrumb-item active" aria-current="page">Download Resume</li>
                </ol>
              </nav>
    <h1 style={{marginTop:'7rem',fontSize:'2rem',textAlign:'center',color:'#2B358C',marginBottom:'2rem'}}>Download Resume</h1>
    <Container style={{marginBottom:'5rem'}}>
              <Alert variant="secondary" >
          If no resume available, come on create one  <Link to='/resumebuilder' style={{color:'#2B358C'}}>Click Here</Link>
        </Alert>
              </Container>
    
    {userData && userData.map((resume, index) => (
    <Container key={index}>
<Card style={{border:'1px solid #2B358C',marginTop:'7rem'}}>
      <Card.Header style={{backgroundColor:'#E6E7FF',color:'#2B358C',textAlign:'center',fontSize:'1.5rem',fontWeight:600}}>Personal Information  </Card.Header>
      <Card.Body>
        <Container>
            

        <Row>
                        <Col>
                            <Table responsive>
                                <tr>
                                    <th>Name Name</th>
                                    <td>{resume.name ? resume.name : 'Lorem Ipsum'}</td>
                                </tr>
                                <tr>
                                    <th>Languages Known</th>
                                    <td>{resume.lang ? resume.lang : 'Lorem Ipsum'}</td>
                                </tr>
                                <tr>
                                    <th>DOB</th>
                                    <td>{resume.dob ? resume.dob : 'Lorem Ipsum'}</td>
                                </tr>
                                <tr>
                                    <th>Gender</th>
                                    <td>{resume.gender ? resume.gender : 'Lorem Ipsum'}</td>
                                </tr>
                                <tr>
                                    <th>Blood Group</th>
                                    <td>{resume.blood ? resume.blood : 'Lorem Ipsum'}</td>
                                </tr>
                                <tr>
                                    <th>Nationality</th>
                                    <td>{resume.nat ? resume.nat : 'Lorem Ipsum'}</td>
                                </tr>
                                <tr>
                                    <th>Address</th>
                                    <td>{resume.address ? resume.address : 'Lorem Ipsum'}</td>
                                </tr>
                            </Table>
                        </Col>
                        <Col>
                            <div className="resume" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                <Image src={resume.file} alt="" width="200px" height="200px" style={{ border: '1px solid black', borderRadius: '10px', padding: '10px' }} />
                                <div className="rsmBtn" style={{ backgroundColor: '#2B358C', color: 'white', padding: '5px', borderRadius: '5px', cursor: 'pointer', marginTop: '15px' }}>
                                    <a href={resume.lastName} target="_blank" style={{ color: 'white', textDecoration: 'none' }}>Resume</a>
                                </div>
                            </div>
                        </Col>
                    </Row> 

        </Container>
        
      </Card.Body>
    </Card>
    
     <Card style={{border:'1px solid #2B358C',marginTop:'2rem'}}>
     <Card.Header style={{backgroundColor:'#E6E7FF',color:'#2B358C',textAlign:'center',fontSize:'1.5rem',fontWeight:600}}>Academic Information  </Card.Header>
     <Card.Body>
       <Container>
       <h4 style={{textAlign: 'center',padding: '10px',backgroundColor: 'rgb(245, 239, 239)',borderRadius: '10px',color: '#3e3e3f',marginTop: '10px;'}}>PG</h4>
    
       <Row>
                <Col>
                    <Table responsive>
                        <tr>
                            <th>Institution Name</th>
                            <td>{resume.inName ? resume.inName : 'Lorem Ipsum'}</td>
                        </tr>
                        <tr>
                            <th>Course Name</th>
                            <td>{resume.crsName ? resume.crsName : 'Lorem Ipsum'}</td>
                        </tr>
                        <tr>
                            <th>Year of Passing</th>
                            <td>{resume.yop ? resume.yop : 'Lorem Ipsum'}</td>
                        </tr>
                        <tr>
                            <th>Percentage</th>
                            <td>{resume.agg ? resume.agg : 'Lorem Ipsum'}</td>
                        </tr>
                    </Table>
                </Col>
            </Row>
       <h4 style={{textAlign: 'center',padding: '10px',backgroundColor: 'rgb(245, 239, 239)',borderRadius: '10px',color: '#3e3e3f',marginTop: '10px;'}}>UG</h4>
    
       <Row>
                <Col>
                    <Table responsive>
                        <tr>
                            <th>Institution Name</th>
                            <td>{resume.inName1 ? resume.inName1 : 'Lorem Ipsum'}</td>
                        </tr>
                        <tr>
                            <th>Course Name</th>
                            <td>{resume.crsName1 ? resume.crsName1 : 'Lorem Ipsum'}</td>
                        </tr>
                        <tr>
                            <th>Year of Passing</th>
                            <td>{resume.yop1 ? resume.yop1 : 'Lorem Ipsum'}</td>
                        </tr>
                        <tr>
                            <th>Percentage</th>
                            <td>{resume.agg1 ? resume.agg1 : 'Lorem Ipsum'}</td>
                        </tr>
                    </Table>
                </Col>
            </Row>
       <h4 style={{textAlign: 'center',padding: '10px',backgroundColor: 'rgb(245, 239, 239)',borderRadius: '10px',color: '#3e3e3f',marginTop: '10px;'}}>HSC</h4>
    
       <Row>
                <Col>
                    <Table responsive>
                        <tr>
                            <th>Institution Name</th>
                            <td>{resume.inName2 ? resume.inName2 : 'Lorem Ipsum'}</td>
                        </tr>
                        <tr>
                            <th>Course Name</th>
                            <td>{resume.crsName2 ? resume.crsName2 : 'Lorem Ipsum'}</td>
                        </tr>
                        <tr>
                            <th>Year of Passing</th>
                            <td>{resume.yop2 ? resume.yop2 : 'Lorem Ipsum'}</td>
                        </tr>
                        <tr>
                            <th>Percentage</th>
                            <td>{resume.agg2 ? resume.agg2 : 'Lorem Ipsum'}</td>
                        </tr>
                    </Table>
                </Col>
            </Row>
       <h4 style={{textAlign: 'center',padding: '10px',backgroundColor: 'rgb(245, 239, 239)',borderRadius: '10px',color: '#3e3e3f',marginTop: '10px;'}}>SSLC</h4>
    
       <Row>
                <Col>
                    <Table responsive>
                        <tr>
                            <th>Institution Name</th>
                            <td>{resume.inName3 ? resume.inName3 : 'Lorem Ipsum'}</td>
                        </tr>
                        <tr>
                            <th>Course Name</th>
                            <td>{resume.crsName3 ? resume.crsName3 : 'Lorem Ipsum'}</td>
                        </tr>
                        <tr>
                            <th>Year of Passing</th>
                            <td>{resume.yop3 ? resume.yop3 : 'Lorem Ipsum'}</td>
                        </tr>
                        <tr>
                            <th>Percentage</th>
                            <td>{resume.agg3 ? resume.agg3 : 'Lorem Ipsum'}</td>
                        </tr>
                    </Table>
                </Col>
            </Row>
       </Container>
     </Card.Body>
   </Card>

   <Card style={{border:'1px solid #2B358C',marginTop:'2rem'}}> 
      <Card.Header style={{backgroundColor:'#E6E7FF',color:'#2B358C',textAlign:'center',fontSize:'1.5rem',fontWeight:600}}>Technical Information  </Card.Header>
      <Card.Body>
        <Container>
        <h4 style={{textAlign: 'center',padding: '10px',backgroundColor: 'rgb(245, 239, 239)',borderRadius: '10px',color: '#3e3e3f',marginTop: '10px;'}}>PG</h4>
        <Row>
    <Col>
        <Table responsive>
            <tbody>
                <tr>
                    <th>Career Objective</th>
                    <td>{resume.carObj ? resume.carObj : "Lorem Ipsum"}</td>
                </tr>
                <tr>
                    <th>Skills</th>
                    <td>{resume.skills ? resume.skills : "Lorem Ipsum"}</td>
                </tr>
            </tbody>
        </Table>
    </Col>
</Row>

            <h4 style={{textAlign: 'center',padding: '10px',backgroundColor: 'rgb(245, 239, 239)',borderRadius: '10px',color: '#3e3e3f',marginTop: '10px;'}}>PG</h4>
            <Row>
    <Col>
        <Table responsive>
            <tbody>
                <tr>
                    <th>Event Name</th>
                    <td>{resume.evntName ? resume.evntName : 'Lorem Ipsum'}</td>
                </tr>
                <tr>
                    <th>Awarded By</th>
                    <td>{resume.award ? resume.award : 'Lorem Ipsum'}</td>
                </tr>
            </tbody>
        </Table>
    </Col>
</Row>

            <h4 style={{textAlign: 'center',padding: '10px',backgroundColor: 'rgb(245, 239, 239)',borderRadius: '10px',color: '#3e3e3f',marginTop: '10px;'}}>PG</h4>
            <Row>
    <Col>
        <Table responsive>
            <tbody>
                <tr>
                    <th>Event Name</th>
                    <td>{resume.evntName1 ? resume.evntName1 : 'Lorem Ipsum'}</td>
                </tr>
                <tr>
                    <th>Awarded By</th>
                    <td>{resume.award1 ? resume.award1 : 'Lorem Ipsum'}</td>
                </tr>
            </tbody>
        </Table>
    </Col>
</Row>

            <h4 style={{textAlign: 'center',padding: '10px',backgroundColor: 'rgb(245, 239, 239)',borderRadius: '10px',color: '#3e3e3f',marginTop: '10px;'}}>PG</h4>
            <Row>
    <Col>
        <Table responsive>
            <tbody>
                <tr>
                    <th>Company Name</th>
                    <td>{resume.compName ? resume.compName : 'Lorem Ipsum'}</td>
                </tr>
                <tr>
                    <th>Duration</th>
                    <td>{resume.dur ? resume.dur : 'Lorem Ipsum'}</td>
                </tr>
                <tr>
                    <th>Role</th>
                    <td>{resume.role ? resume.role : 'Lorem Ipsum'}</td>
                </tr>
            </tbody>
        </Table>
    </Col>
</Row>

            <h4 style={{textAlign: 'center',padding: '10px',backgroundColor: 'rgb(245, 239, 239)',borderRadius: '10px',color: '#3e3e3f',marginTop: '10px;'}}>PG</h4>
            <Row>
    <Col>
        <Table responsive>
            <tbody>
                <tr>
                    <th>Project Name</th>
                    <td>{resume.prjName ? resume.prjName : 'Lorem Ipsum'}</td>
                </tr>
                <tr>
                    <th>Description</th>
                    <td>{resume.desc ? resume.desc : 'Lorem Ipsum'}</td>
                </tr>
            </tbody>
        </Table>
    </Col>
</Row>

        </Container>
      </Card.Body>
    </Card>
    <Card style={{border:'1px solid #2B358C',marginTop:'2rem',marginBottom:'3rem'}}>
      <Card.Header style={{backgroundColor:'#E6E7FF',color:'#2B358C',textAlign:'center',fontSize:'1.5rem',fontWeight:600}}>Additional Information </Card.Header>
      <Card.Body>
        <Container>
        <Row>
    <Col>
        <Table responsive>
            <tbody>
                <tr>
                    <th>Event Name</th>
                    <td>{resume.evntName3 ? resume.evntName3 : 'Lorem Ipsum'}</td>
                </tr>
                <tr>
                    <th>Awarded By</th>
                    <td>{resume.award3 ? resume.award3 : 'Lorem Ipsum'}</td>
                </tr>
                <tr>
                    <th>Hobbies</th>
                    <td>{resume.hob ? resume.hob : 'Lorem Ipsum'}</td>
                </tr>
                <tr>
                    <th>SoftSkills</th>
                    <td>{resume.sskills2 ? resume.sskills2 : 'Lorem Ipsum'}</td>
                </tr>
                <tr>
                    <th>Email Id</th>
                    <td>{resume.email ? resume.email : 'Lorem Ipsum'}</td>
                </tr>
                <tr>
                    <th>Mobile Number</th>
                    <td>{resume.mobile ? resume.mobile : 'Lorem Ipsum'}</td>
                </tr>
                <tr>
                    <th>Upload Resume</th>
                    <td>{resume.nat ? resume.nat : 'Lorem Ipsum'}</td>
                </tr>
            </tbody>
        </Table>
    </Col>
</Row>

        </Container>
      </Card.Body>
    </Card>
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly',marginBottom:'5rem'}}>
    <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
   </div>
     
   </Container> ))}
   <div style={{position:'static',bottom:'0',width:'100%'}}>
   <Footer/>
   </div>
  
    </>
   
   
  );
}

export default CandInfo;