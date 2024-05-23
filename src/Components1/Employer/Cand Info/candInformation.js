import { Col, Container, Image, Row, Table } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from '../headerExp';
import Footer from '../../Layout/Footer';
import FooterEmp from '../footerEmp';
import { Link, useParams } from 'react-router-dom';

function CandInformation() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); 
    const { id } = useParams();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const response = await fetch(`https://wry-seemly-berry.glitch.me/resume/${id}`);
          const data = await response.json();
          setUserData(data);
          setLoading(false);
          console.log(userData)
        } catch (error) {
          console.error('Error fetching user data:', error);
          setLoading(false);
        }
      };
    
      fetchUserData();
    }, [id]);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (!userData) {
      return <p>Error: User data not found</p>;
    }

  return (
    <section>
    <Header/>
    <nav aria-label="breadcrumb " style={{backgroundColor: '#E6E7FF',paddingLeft: '10px',top:'3.8rem',fontWeight: 500,fontSize: '16px',position:'fixed',width:'100%',zIndex:1000,height:'30px'}}>
                <ol class="breadcrumb p-1">
                  <li class="breadcrumb-item" aria-current="page"><Link to="/employer-home" style={{textDecoration:'none',color:'#2B358C'}}>Home</Link></li>
                  <li class="breadcrumb-item active" aria-current="page">Candidate information</li>
                </ol>
              </nav>
    <Container>
<Card style={{border:'1px solid #2B358C',marginTop:'7rem'}}>
      <Card.Header style={{backgroundColor:'#E6E7FF',color:'#2B358C',textAlign:'center',fontSize:'1.5rem',fontWeight:600}}>Personal Information  </Card.Header>
      <Card.Body>
        <Container>
            

        <Row>
                        <Col>
                           
                                <Row>
                                    <Col className='m-1' style={{fontWeight:'600'}}>Name Name</Col>
                                    <Col>{userData.name ? userData.name : 'Lorem Ipsum'}</Col>
                                </Row>
                                <Row>
                                    <Col className='m-1' style={{fontWeight:'600'}}>Languages Known</Col>
                                    <Col>{userData.lang ? userData.lang : 'Lorem Ipsum'}</Col>
                                </Row>
                                <Row>
                                    <Col className='m-1' style={{fontWeight:'600'}}>DOB</Col>
                                    <Col>{userData.dob ? userData.dob : 'Lorem Ipsum'}</Col>
                                </Row>
                                <Row>
                                    <Col className='m-1' style={{fontWeight:'600'}}>Gender</Col>
                                    <Col>{userData.gender ? userData.gender : 'Lorem Ipsum'}</Col>
                                </Row>
                                <Row>
                                    <Col className='m-1' style={{fontWeight:'600'}}>Blood Group</Col>
                                    <Col>{userData.blood ? userData.blood : 'Lorem Ipsum'}</Col>
                                </Row>
                                <Row>
                                    <Col className='m-1' style={{fontWeight:'600'}}>Nationality</Col>
                                    <Col>{userData.nat ? userData.nat : 'Lorem Ipsum'}</Col>
                                </Row>
                                <Row>
                                    <Col className='m-1' style={{fontWeight:'600'}}>Address</Col>
                                    <Col>{userData.address ? userData.address : 'Lorem Ipsum'}</Col>
                                </Row>
                           
                        </Col>
                        <Col>
                            <div className="userData" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                <Image src={userData.file} alt="" width="200px" height="200px" style={{ border: '1px solid black', borderRadius: '10px', padding: '10px' }} />
                                <div className="rsmBtn" style={{ backgroundColor: '#2B358C', color: 'white', padding: '5px', borderRadius: '5px', cursor: 'pointer', marginTop: '15px' }}>
                                    <a href={userData.lastName} target="_blank" style={{ color: 'white', textDecoration: 'none' }}>Resume</a>
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
       <h4 style={{textAlign: 'center',padding: '10px',backgroundColor: 'rgb(245, 239, 239)',borderRadius: '10px',color: '#3e3e3f',marginTop: '10px;'}}>SSLC</h4>
    
    
                        <Row>
                           <Col className='m-2' style={{fontWeight:'600'}}>Institution Name</Col>
                            <Col>{userData.inName ? userData.inName : 'Lorem Ipsum'}</Col>
                        </Row>
                        <Row>
                           <Col className='m-2' style={{fontWeight:'600'}}>Course Name</Col>
                            <Col>{userData.crsName ? userData.crsName : 'Lorem Ipsum'}</Col>
                        </Row>
                        <Row>
                           <Col className='m-2' style={{fontWeight:'600'}}>Year of Passing</Col>
                            <Col>{userData.yop ? userData.yop : 'Lorem Ipsum'}</Col>
                        </Row>
                        <Row>
                           <Col className='m-2' style={{fontWeight:'600'}}>Percentage</Col>
                            <Col>{userData.agg ? userData.agg : 'Lorem Ipsum'}</Col>
                        </Row>
                   
       <h4 style={{textAlign: 'center',padding: '10px',backgroundColor: 'rgb(245, 239, 239)',borderRadius: '10px',color: '#3e3e3f',marginTop: '10px;'}}>HSC</h4>
    
       
                        <Row>
                            <Col className='m-2' style={{fontWeight:'600'}}>Institution Name</Col>
                            <Col>{userData.inName1 ? userData.inName1 : 'Lorem Ipsum'}</Col>
                        </Row>
                        <Row>
                            <Col className='m-2' style={{fontWeight:'600'}}>Course Name</Col>
                            <Col>{userData.crsName1 ? userData.crsName1 : 'Lorem Ipsum'}</Col>
                        </Row>
                        <Row>
                            <Col className='m-2' style={{fontWeight:'600'}}>Year of Passing</Col>
                            <Col>{userData.yop1 ? userData.yop1 : 'Lorem Ipsum'}</Col>
                        </Row>
                        <Row>
                            <Col className='m-2' style={{fontWeight:'600'}}>Percentage</Col>
                            <Col>{userData.agg1 ? userData.agg1 : 'Lorem Ipsum'}</Col>
                        </Row>
                    
       <h4 style={{textAlign: 'center',padding: '10px',backgroundColor: 'rgb(245, 239, 239)',borderRadius: '10px',color: '#3e3e3f',marginTop: '10px;'}}>UG</h4>
    
       
                        <Row>
<Col className='m-2' style={{fontWeight:'600'}}>Institution Name</Col>
                            <Col>{userData.inName2 ? userData.inName2 : 'Lorem Ipsum'}</Col>
                        </Row>
                        <Row>
<Col className='m-2' style={{fontWeight:'600'}}>Course Name</Col>
                            <Col>{userData.crsName2 ? userData.crsName2 : 'Lorem Ipsum'}</Col>
                        </Row>
                        <Row>
<Col className='m-2' style={{fontWeight:'600'}}>Year of Passing</Col>
                            <Col>{userData.yop2 ? userData.yop2 : 'Lorem Ipsum'}</Col>
                        </Row>
                        <Row>
<Col className='m-2' style={{fontWeight:'600'}}>Percentage</Col>
                            <Col>{userData.agg2 ? userData.agg2 : 'Lorem Ipsum'}</Col>
                        </Row>
                   
       <h4 style={{textAlign: 'center',padding: '10px',backgroundColor: 'rgb(245, 239, 239)',borderRadius: '10px',color: '#3e3e3f',marginTop: '10px;'}}>PG</h4>
    
       
                        <Row>
                            <Col className='m-2' style={{fontWeight:'600'}}>Institution Name</Col>
                            <Col>{userData.inName3 ? userData.inName3 : 'Lorem Ipsum'}</Col>
                        </Row>
                        <Row>
                            <Col className='m-2' style={{fontWeight:'600'}}>Course Name</Col>
                            <Col>{userData.crsName3 ? userData.crsName3 : 'Lorem Ipsum'}</Col>
                        </Row>
                        <Row>
                            <Col className='m-2' style={{fontWeight:'600'}}>Year of Passing</Col>
                            <Col>{userData.yop3 ? userData.yop3 : 'Lorem Ipsum'}</Col>
                        </Row>
                        <Row>
                            <Col className='m-2' style={{fontWeight:'600'}}>Percentage</Col>
                            <Col>{userData.agg3 ? userData.agg3 : 'Lorem Ipsum'}</Col>
                        </Row>
                 
       </Container>
     </Card.Body>
   </Card>

   <Card style={{border:'1px solid #2B358C',marginTop:'2rem'}}> 
      <Card.Header style={{backgroundColor:'#E6E7FF',color:'#2B358C',textAlign:'center',fontSize:'1.5rem',fontWeight:600}}>Technical Information  </Card.Header>
      <Card.Body>
        <Container>
       
        
                <Row>
                    <Col className='m-2' style={{fontWeight:'600'}}>Career Objective</Col>
                    <Col>{userData.carObj ? userData.carObj : "Lorem Ipsum"}</Col>
                </Row>
                <Row>
                    <Col className='m-2' style={{fontWeight:'600'}}>Skills</Col>
                    <Col>{userData.skills ? userData.skills : "Lorem Ipsum"}</Col>
                </Row>
          

            <h4 style={{textAlign: 'center',padding: '10px',backgroundColor: 'rgb(245, 239, 239)',borderRadius: '10px',color: '#3e3e3f',marginTop: '10px;'}}>Technical Activities</h4>
            
                <Row>
                    <Col className='m-2' style={{fontWeight:'600'}}>Event Name</Col>
                    <Col>{userData.evntName ? userData.evntName : 'Lorem Ipsum'}</Col>
                </Row>
                <Row>
                    <Col className='m-2' style={{fontWeight:'600'}}>Awarded By</Col>
                    <Col>{userData.award ? userData.award : 'Lorem Ipsum'}</Col>
                </Row>
          

            <h4 style={{textAlign: 'center',padding: '10px',backgroundColor: 'rgb(245, 239, 239)',borderRadius: '10px',color: '#3e3e3f',marginTop: '10px;'}}>Co-Curricular Activities</h4>
         
                <Row>
                     <Col className='m-2' style={{fontWeight:'600'}}>Event Name</Col>
                    <Col>{userData.evntName1 ? userData.evntName1 : 'Lorem Ipsum'}</Col>
                </Row>
                <Row>
                     <Col className='m-2' style={{fontWeight:'600'}}>Awarded By</Col>
                    <Col>{userData.award1 ? userData.award1 : 'Lorem Ipsum'}</Col>
                </Row>
           

            <h4 style={{textAlign: 'center',padding: '10px',backgroundColor: 'rgb(245, 239, 239)',borderRadius: '10px',color: '#3e3e3f',marginTop: '10px;'}}>Internship Details</h4>
           
                <Row>
                    <Col className='m-2' style={{fontWeight:'600'}}>Company Name</Col>
                    <Col>{userData.compName ? userData.compName : 'Lorem Ipsum'}</Col>
                </Row>
                <Row>
                    <Col className='m-2' style={{fontWeight:'600'}}>Duration</Col>
                    <Col>{userData.dur ? userData.dur : 'Lorem Ipsum'}</Col>
                </Row>
                <Row>
                    <Col className='m-2' style={{fontWeight:'600'}}>Role</Col>
                    <Col>{userData.role ? userData.role : 'Lorem Ipsum'}</Col>
                </Row>
            

            <h4 style={{textAlign: 'center',padding: '10px',backgroundColor: 'rgb(245, 239, 239)',borderRadius: '10px',color: '#3e3e3f',marginTop: '10px;'}}>Project Details</h4>
          
        <Row>
                    <Col className='m-2' style={{fontWeight:'600'}}>Project Name</Col>
                   <Col>{userData.prjName ? userData.prjName : 'Lorem Ipsum'}</Col>
               </Row>
               <Row>
                    <Col className='m-2' style={{fontWeight:'600'}}>Description</Col>
                   <Col>{userData.desc ? userData.desc : 'Lorem Ipsum'}</Col>
                   </Row>
    

        </Container>
      </Card.Body>
    </Card>
    <Card style={{border:'1px solid #2B358C',marginTop:'2rem',marginBottom:'3rem'}}>
      <Card.Header style={{backgroundColor:'#E6E7FF',color:'#2B358C',textAlign:'center',fontSize:'1.5rem',fontWeight:600}}>Additional Information </Card.Header>
      <Card.Body>
        <Container>
        <Row>
        <Col className='m-2' style={{fontWeight:'600'}}>Email Id</Col>
        <Col className='m-2'>{userData.email ? userData.email : 'Lorem Ipsum'}</Col>
    </Row>
    <Row>
        <Col className='m-2' style={{fontWeight:'600'}}>Mobile Number</Col>
        <Col className='m-2'>{userData.mobile ? userData.mobile : 'Lorem Ipsum'}</Col>
    </Row>
        <h4 style={{textAlign: 'center',padding: '10px',backgroundColor: 'rgb(245, 239, 239)',borderRadius: '10px',color: '#3e3e3f',marginTop: '10px;'}}>Extra-Curricular Activities</h4>
        <Row>
    <Col>
    <Row>
        <Col className='m-2' style={{fontWeight:'600'}}>Event Name</Col>
        <Col className='m-2'>{userData.evntName3 ? userData.evntName3 : 'Lorem Ipsum'}</Col>
    </Row>
    <Row>
        <Col  className='m-2' style={{fontWeight:'600'}}>Awarded By</Col>
        <Col className='m-2'>{userData.award3 ? userData.award3 : 'Lorem Ipsum'}</Col>
    </Row>
    <Row>
        <Col className='m-2' style={{fontWeight:'600'}}>Hobbies</Col>
        <Col className='m-2'>{userData.hob ? userData.hob : 'Lorem Ipsum'}</Col>
    </Row>
    <Row>
        <Col className='m-2' style={{fontWeight:'600'}}>SoftSkills</Col>
        <Col className='m-2'>{userData.sskills2 ? userData.sskills2 : 'Lorem Ipsum'}</Col>
    </Row>
  
    
        {/* <Table responsive>
            <tbody>
                <tr>
                    <th>Event Name</th>
                    <td>{userData.evntName3 ? userData.evntName3 : 'Lorem Ipsum'}</td>
                </tr>
                <tr>
                    <th>Awarded By</th>
                    <td>{userData.award3 ? userData.award3 : 'Lorem Ipsum'}</td>
                </tr>
                <tr>
                    <th>Hobbies</th>
                    <td>{userData.hob ? userData.hob : 'Lorem Ipsum'}</td>
                </tr>
                <tr>
                    <th>SoftSkills</th>
                    <td>{userData.sskills2 ? userData.sskills2 : 'Lorem Ipsum'}</td>
                </tr>
                <tr>
                    <th>Email Id</th>
                    <td>{userData.email ? userData.email : 'Lorem Ipsum'}</td>
                </tr>
                <tr>
                    <th>Mobile Number</th>
                    <td>{userData.mobile ? userData.mobile : 'Lorem Ipsum'}</td>
                </tr>
                <tr>
                    <th>Upload userData</th>
                    <td>{userData.nat ? userData.nat : 'Lorem Ipsum'}</td>
                </tr>
            </tbody>
        </Table> */}
    </Col>
</Row>
<h4 style={{textAlign: 'center',padding: '10px',backgroundColor: 'rgb(245, 239, 239)',borderRadius: '10px',color: '#3e3e3f',marginTop: '10px;'}}>Experience Details</h4>
    
    <Row>
             <Col>
             <Row>
                <Col className='m-2' style={{fontWeight:'600'}}>Experience Status</Col>
                <Col className='m-2'>{userData.exp ? userData.exp : 'Lorem Ipsum'}</Col>
             </Row>
             <Row>
                <Col className='m-2' style={{fontWeight:'600'}}>Experience Description</Col>
                <Col className='m-2'>{userData.expDesc ? userData.expDesc : 'Lorem Ipsum'}</Col>
             </Row>
                 
                    </Col>
                    </Row>

        </Container>
      </Card.Body>
    </Card>
 
     
   </Container>
    <FooterEmp/>
    </section>
   
   
  );
}

export default CandInformation;