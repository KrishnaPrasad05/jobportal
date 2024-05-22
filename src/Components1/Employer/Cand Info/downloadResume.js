import { Col, Container, Image, Row, Table, Modal, Alert } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import FooterEmp from '../footerEmp';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { removeResumeFromServer } from '../../../features/resumeSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function CandInfoPDF() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); 
    const dispatch=useDispatch();
    const [userData, setUserData] = useState(null);
    const [loggedName, setLoggedName] = useState(null);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [resumeIdToDelete, setResumeIdToDelete] = useState(null);

    useEffect(() => {
        const loggedInNameFromLocalStorage = localStorage.getItem('loggedName');
        if (loggedInNameFromLocalStorage) {
            setLoggedName(loggedInNameFromLocalStorage);
        }
    }, []);

   /*  const DeleteResumeData = (id) => {
       
        dispatch(removeResumeFromServer({ id: yourResumeId }));
          console.log('submitted deleted')
          // Hide the modal after deleting the issue
      }; */

    useEffect(() => {
        if (loggedName) {
            fetch(`http://localhost:3001/resume?name=${loggedName}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch user details');
                    }
                    return response.json();
                })
                .then(data => {
                    setUserData(data);
                })
                .catch(error => {
                    console.error('Error fetching user details:', error);
                });
        }
    }, [loggedName]);


    const handleDeleteResume = () => {
        // Dispatch action to delete the resume
        dispatch(removeResumeFromServer({ id: resumeIdToDelete }));
        // Close the confirmation modal
        setShowConfirmationModal(false);
        window.location.href="/resumebuilder";
    };

    const handleDownloadPDF = () => {
    const input = document.getElementById('pdf-container');

    html2canvas(input)
        .then((canvas) => {
            let imgData = canvas.toDataURL('image/png');
            console.log('imgData:', imgData); // Log imgData to check if it's null or contains data
            if (!imgData) {
                throw new Error('imgData is null or empty');
            }

            let pdf = new jsPDF();
            let imgProps = pdf.getImageProperties(imgData);
            let pdfWidth = pdf.internal.pageSize.getWidth();
            let pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

            let position = 10; // Adding 10 units of space at the top

            pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);

            let pageHeight = pdf.internal.pageSize.getHeight();
            let remainingHeight = pdfHeight - pageHeight;

            while (remainingHeight > 0) {
                position -= pageHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
                remainingHeight -= pageHeight;
            }

            // Adding 10 units of space at the bottom of the last page
            pdf.addPage();
            position = 10;
            pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);

            pdf.save('Resume.pdf');
        })
        .catch((error) => {
            console.error('Error generating PDF:', error);
        });
};

    

    return (
        <>
            <Header />
            <nav aria-label="breadcrumb " style={{backgroundColor: '#E6E7FF',paddingLeft: '10px',top:'3.8rem',fontWeight: 500,fontSize: '16px',position:'fixed',width:'100%',zIndex:1000,height:'30px'}}>
                <ol class="breadcrumb p-1">
                  <li class="breadcrumb-item" aria-current="page"><Link to="/jobseeker-home" style={{textDecoration:'none',color:'#2B358C'}}>Home</Link></li>
                  <li class="breadcrumb-item" aria-current="page"><Link to="/peofile" style={{textDecoration:'none',color:'#2B358C'}}>Profile</Link></li>
                  <li class="breadcrumb-item active" aria-current="page">Download resume</li>
                </ol>
              </nav>
              <Container>
              <Alert variant="secondary" style={{marginTop:'9rem',marginBottom:'20rem'}} >
          If no resume available, come on create one  <Link to='/resumebuilder' style={{color:'#2B358C'}}>Click Here</Link>
        </Alert>
              </Container>
             
            {userData && userData.map((resume, index) => (
    <Container id='pdf-container'>
<Card style={{border:'1px solid #2B358C',marginTop:'-17rem'}}>
<Card.Header style={{backgroundColor:'#E6E7FF',color:'#2B358C',textAlign:'center',fontSize:'1.5rem',fontWeight:600}}>Personal Information  </Card.Header>
      <Card.Body>
        <Container>
            

        <Row>
                        <Col>
                           
                                <Row>
                                    <Col className='m-1' style={{fontWeight:'600'}}>Name Name</Col>
                                    <Col>{resume.name ? resume.name : 'Lorem Ipsum'}</Col>
                                </Row>
                                <Row>
                                    <Col className='m-1' style={{fontWeight:'600'}}>Languages Known</Col>
                                    <Col>{resume.lang ? resume.lang : 'Lorem Ipsum'}</Col>
                                </Row>
                                <Row>
                                    <Col className='m-1' style={{fontWeight:'600'}}>DOB</Col>
                                    <Col>{resume.dob ? resume.dob : 'Lorem Ipsum'}</Col>
                                </Row>
                                <Row>
                                    <Col className='m-1' style={{fontWeight:'600'}}>Gender</Col>
                                    <Col>{resume.gender ? resume.gender : 'Lorem Ipsum'}</Col>
                                </Row>
                                <Row>
                                    <Col className='m-1' style={{fontWeight:'600'}}>Blood Group</Col>
                                    <Col>{resume.blood ? resume.blood : 'Lorem Ipsum'}</Col>
                                </Row>
                                <Row>
                                    <Col className='m-1' style={{fontWeight:'600'}}>Nationality</Col>
                                    <Col>{resume.nat ? resume.nat : 'Lorem Ipsum'}</Col>
                                </Row>
                                <Row>
                                    <Col className='m-1' style={{fontWeight:'600'}}>Address</Col>
                                    <Col>{resume.address ? resume.address : 'Lorem Ipsum'}</Col>
                                </Row>
                           
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
       <h4 style={{textAlign: 'center',padding: '10px',backgroundColor: 'rgb(245, 239, 239)',borderRadius: '10px',color: '#3e3e3f',marginTop: '10px;'}}>SSLC</h4>
    
    
                        <Row>
                           <Col className='m-2' style={{fontWeight:'600'}}>Institution Name</Col>
                            <Col>{resume.inName ? resume.inName : 'Lorem Ipsum'}</Col>
                        </Row>
                        <Row>
                           <Col className='m-2' style={{fontWeight:'600'}}>Course Name</Col>
                            <Col>{resume.crsName ? resume.crsName : 'Lorem Ipsum'}</Col>
                        </Row>
                        <Row>
                           <Col className='m-2' style={{fontWeight:'600'}}>Year of Passing</Col>
                            <Col>{resume.yop ? resume.yop : 'Lorem Ipsum'}</Col>
                        </Row>
                        <Row>
                           <Col className='m-2' style={{fontWeight:'600'}}>Percentage</Col>
                            <Col>{resume.agg ? resume.agg : 'Lorem Ipsum'}</Col>
                        </Row>
                   
       <h4 style={{textAlign: 'center',padding: '10px',backgroundColor: 'rgb(245, 239, 239)',borderRadius: '10px',color: '#3e3e3f',marginTop: '10px;'}}>HSC</h4>
    
       
                        <Row>
                            <Col className='m-2' style={{fontWeight:'600'}}>Institution Name</Col>
                            <Col>{resume.inName1 ? resume.inName1 : 'Lorem Ipsum'}</Col>
                        </Row>
                        <Row>
                            <Col className='m-2' style={{fontWeight:'600'}}>Course Name</Col>
                            <Col>{resume.crsName1 ? resume.crsName1 : 'Lorem Ipsum'}</Col>
                        </Row>
                        <Row>
                            <Col className='m-2' style={{fontWeight:'600'}}>Year of Passing</Col>
                            <Col>{resume.yop1 ? resume.yop1 : 'Lorem Ipsum'}</Col>
                        </Row>
                        <Row>
                            <Col className='m-2' style={{fontWeight:'600'}}>Percentage</Col>
                            <Col>{resume.agg1 ? resume.agg1 : 'Lorem Ipsum'}</Col>
                        </Row>
                    
       <h4 style={{textAlign: 'center',padding: '10px',backgroundColor: 'rgb(245, 239, 239)',borderRadius: '10px',color: '#3e3e3f',marginTop: '10px;'}}>UG</h4>
    
       
                        <Row>
<Col className='m-2' style={{fontWeight:'600'}}>Institution Name</Col>
                            <Col>{resume.inName2 ? resume.inName2 : 'Lorem Ipsum'}</Col>
                        </Row>
                        <Row>
<Col className='m-2' style={{fontWeight:'600'}}>Course Name</Col>
                            <Col>{resume.crsName2 ? resume.crsName2 : 'Lorem Ipsum'}</Col>
                        </Row>
                        <Row>
<Col className='m-2' style={{fontWeight:'600'}}>Year of Passing</Col>
                            <Col>{resume.yop2 ? resume.yop2 : 'Lorem Ipsum'}</Col>
                        </Row>
                        <Row>
<Col className='m-2' style={{fontWeight:'600'}}>Percentage</Col>
                            <Col>{resume.agg2 ? resume.agg2 : 'Lorem Ipsum'}</Col>
                        </Row>
                   
       <h4 style={{textAlign: 'center',padding: '10px',backgroundColor: 'rgb(245, 239, 239)',borderRadius: '10px',color: '#3e3e3f',marginTop: '10px;'}}>PG</h4>
    
       
                        <Row>
                            <Col className='m-2' style={{fontWeight:'600'}}>Institution Name</Col>
                            <Col>{resume.inName3 ? resume.inName3 : 'Lorem Ipsum'}</Col>
                        </Row>
                        <Row>
                            <Col className='m-2' style={{fontWeight:'600'}}>Course Name</Col>
                            <Col>{resume.crsName3 ? resume.crsName3 : 'Lorem Ipsum'}</Col>
                        </Row>
                        <Row>
                            <Col className='m-2' style={{fontWeight:'600'}}>Year of Passing</Col>
                            <Col>{resume.yop3 ? resume.yop3 : 'Lorem Ipsum'}</Col>
                        </Row>
                        <Row>
                            <Col className='m-2' style={{fontWeight:'600'}}>Percentage</Col>
                            <Col>{resume.agg3 ? resume.agg3 : 'Lorem Ipsum'}</Col>
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
                    <Col>{resume.carObj ? resume.carObj : "Lorem Ipsum"}</Col>
                </Row>
                <Row>
                    <Col className='m-2' style={{fontWeight:'600'}}>Skills</Col>
                    <Col>{resume.skills ? resume.skills : "Lorem Ipsum"}</Col>
                </Row>
          

            <h4 style={{textAlign: 'center',padding: '10px',backgroundColor: 'rgb(245, 239, 239)',borderRadius: '10px',color: '#3e3e3f',marginTop: '10px;'}}>Technical Activities</h4>
            
                <Row>
                    <Col className='m-2' style={{fontWeight:'600'}}>Event Name</Col>
                    <Col>{resume.evntName ? resume.evntName : 'Lorem Ipsum'}</Col>
                </Row>
                <Row>
                    <Col className='m-2' style={{fontWeight:'600'}}>Awarded By</Col>
                    <Col>{resume.award ? resume.award : 'Lorem Ipsum'}</Col>
                </Row>
          

            <h4 style={{textAlign: 'center',padding: '10px',backgroundColor: 'rgb(245, 239, 239)',borderRadius: '10px',color: '#3e3e3f',marginTop: '10px;'}}>Co-Curricular Activities</h4>
         
                <Row>
                     <Col className='m-2' style={{fontWeight:'600'}}>Event Name</Col>
                    <Col>{resume.evntName1 ? resume.evntName1 : 'Lorem Ipsum'}</Col>
                </Row>
                <Row>
                     <Col className='m-2' style={{fontWeight:'600'}}>Awarded By</Col>
                    <Col>{resume.award1 ? resume.award1 : 'Lorem Ipsum'}</Col>
                </Row>
           

            <h4 style={{textAlign: 'center',padding: '10px',backgroundColor: 'rgb(245, 239, 239)',borderRadius: '10px',color: '#3e3e3f',marginTop: '10px;'}}>Internship Details</h4>
           
                <Row>
                    <Col className='m-2' style={{fontWeight:'600'}}>Company Name</Col>
                    <Col>{resume.compName ? resume.compName : 'Lorem Ipsum'}</Col>
                </Row>
                <Row>
                    <Col className='m-2' style={{fontWeight:'600'}}>Duration</Col>
                    <Col>{resume.dur ? resume.dur : 'Lorem Ipsum'}</Col>
                </Row>
                <Row>
                    <Col className='m-2' style={{fontWeight:'600'}}>Role</Col>
                    <Col>{resume.role ? resume.role : 'Lorem Ipsum'}</Col>
                </Row>
            

            <h4 style={{textAlign: 'center',padding: '10px',backgroundColor: 'rgb(245, 239, 239)',borderRadius: '10px',color: '#3e3e3f',marginTop: '10px;'}}>Project Details</h4>
          
        <Row>
                    <Col className='m-2' style={{fontWeight:'600'}}>Project Name</Col>
                   <Col>{resume.prjName ? resume.prjName : 'Lorem Ipsum'}</Col>
               </Row>
               <Row>
                    <Col className='m-2' style={{fontWeight:'600'}}>Description</Col>
                   <Col>{resume.desc ? resume.desc : 'Lorem Ipsum'}</Col>
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
        <Col className='m-2'>{resume.email ? resume.email : 'Lorem Ipsum'}</Col>
    </Row>
    <Row>
        <Col className='m-2' style={{fontWeight:'600'}}>Mobile Number</Col>
        <Col className='m-2'>{resume.mobile ? resume.mobile : 'Lorem Ipsum'}</Col>
    </Row>
        <h4 style={{textAlign: 'center',padding: '10px',backgroundColor: 'rgb(245, 239, 239)',borderRadius: '10px',color: '#3e3e3f',marginTop: '10px;'}}>Extra-Curricular Activities</h4>
        <Row>
    <Col>
    <Row>
        <Col className='m-2' style={{fontWeight:'600'}}>Event Name</Col>
        <Col className='m-2'>{resume.evntName3 ? resume.evntName3 : 'Lorem Ipsum'}</Col>
    </Row>
    <Row>
        <Col  className='m-2' style={{fontWeight:'600'}}>Awarded By</Col>
        <Col className='m-2'>{resume.award3 ? resume.award3 : 'Lorem Ipsum'}</Col>
    </Row>
    <Row>
        <Col className='m-2' style={{fontWeight:'600'}}>Hobbies</Col>
        <Col className='m-2'>{resume.hob ? resume.hob : 'Lorem Ipsum'}</Col>
    </Row>
    <Row>
        <Col className='m-2' style={{fontWeight:'600'}}>SoftSkills</Col>
        <Col className='m-2'>{resume.sskills2 ? resume.sskills2 : 'Lorem Ipsum'}</Col>
    </Row>
  
    
        {/* <Table responsive>
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
                    <th>Upload resume</th>
                    <td>{resume.nat ? resume.nat : 'Lorem Ipsum'}</td>
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
                <Col className='m-2'>{resume.exp ? resume.exp : 'Lorem Ipsum'}</Col>
             </Row>
             <Row>
                <Col className='m-2' style={{fontWeight:'600'}}>Experience Description</Col>
                <Col className='m-2'>{resume.expDesc ? resume.expDesc : 'Lorem Ipsum'}</Col>
             </Row>
                 
                    </Col>
                    </Row>

        </Container>
      </Card.Body>
    </Card>
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly',marginBottom:'5rem'}}>
    <Button variant="success" onClick={handleDownloadPDF}>Download PDF</Button>{' '}
     
      <Button variant="danger" onClick={() => {
                            // Set resume ID to delete and show confirmation modal
                            setResumeIdToDelete(resume.id);
                            setShowConfirmationModal(true);
                        }}>Delete</Button>

   </div>
     
   </Container> ))}
            <Footer/>
             {/* Confirmation Modal */}
             <Modal show={showConfirmationModal} onHide={() => setShowConfirmationModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this resume?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowConfirmationModal(false)}>Cancel</Button>
                    <Button variant="danger" onClick={handleDeleteResume}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CandInfoPDF;
