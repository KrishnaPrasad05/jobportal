import { Col, Container, Image, Row, Table } from 'react-bootstrap';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from '../headerExp';
import Footer from '../../Layout/Footer';
import { Link } from 'react-router-dom';

function EditCandInfo() {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
      firstName: 'Lorem Ipsum',
      lastName: 'Lorem Ipsum',
      // Add other form fields here
    });
  
    const handleEditClick = () => {
      if (isEditing) {
        // Save the form data
        // You can perform any action with the formData, such as updating it in the database
        console.log('Form data saved:', formData);
      }
      setIsEditing(!isEditing);
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const renderField = (label, value) => {
      if (isEditing) {
        return (
          <input
            type="text"
            name={label.toLowerCase().replace(/\s/g, '')} // Convert label to lowercase and remove spaces for name attribute
            value={formData[label.toLowerCase().replace(/\s/g, '')]}
            onChange={handleInputChange}
          />
        );
      } else {
        return value;
      }
    };
  return (
    <>
    <Header/>
    <nav aria-label="breadcrumb " style={{backgroundColor: '#E6E7FF',paddingLeft: '10px',marginTop:'3.8rem',fontWeight: 500,fontSize: '17px'}}>
                <ol class="breadcrumb p-1">
        
                  <li class="breadcrumb-item" aria-current="page"><Link to="/" style={{textDecoration:'none',color:'#2B358C'}}>Home</Link></li>
                  <li class="breadcrumb-item" aria-current="page"><Link to="/profilejs" style={{textDecoration:'none',color:'#2B358C'}}>Profile</Link></li>
                  <li class="breadcrumb-item active" aria-current="page">Edit Resume</li>
                </ol>
              </nav>
    <Container style={{marginTop:'3rem'}}>
<Card style={{border:'1px solid #2B358C',marginTop:'2rem'}}>
      <Card.Header style={{backgroundColor:'#E6E7FF',color:'#2B358C',textAlign:'center',fontSize:'1.5rem',fontWeight:600}}>Personal Information  <Button variant="success">Edit</Button>{' '}</Card.Header>
      <Card.Body>
        <Container>
            <Row>
                <Col>
                <Table responsive>
                <tr>
                        <th >First Name</th>
                        <td>Lorem Ipsum</td>
                    </tr>
                    <tr>
                        <th>Last Name</th>
                        <td>Lorem Ipsum</td>
                    </tr>
                    <tr>
                        <th>Languages Known</th>
                        <td>Lorem Ipsum</td>
                    </tr>
                    <tr>
                        <th>DOB</th>
                        <td>Lorem Ipsum</td>
                    </tr>
                    <tr>
                        <th>Gender</th>
                        <td>Lorem Ipsum</td>
                    </tr>
                    <tr>
                        <th>Blood Group</th>
                        <td>Lorem Ipsum</td>
                    </tr>
                    <tr>
                        <th>Nationality</th>
                        <td>Lorem Ipsum</td>
                    </tr>
                    <tr>
                        <th>Address</th>
                        <td>Lorem Ipsum</td>
                    </tr>
                </Table>
                </Col>
                <Col>
                <div class="resume " style={{display: 'flex',alignItems: 'center',justifyContent: 'center',flexDirection: 'column'}}>
                    <Image src="../../img/man.png" alt="" width="200px" height="200px" style={{border: '1px solid black', borderRadius: '10px',padding: '10px'}}/>
                    <div class="rsmBtn" style={{backgroundColor: '#2B358C',color: 'white',padding: '5px',borderRadius: '5px',cursor: 'pointer',marginTop: '15px'}}>
                        <a href="../img/resume.pdf" target="_blank" style={{color: 'white',textDecoration: 'none'}}>Resume</a>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
        
      </Card.Body>
    </Card>
    
     <Card style={{border:'1px solid #2B358C',marginTop:'2rem'}}>
     <Card.Header style={{backgroundColor:'#E6E7FF',color:'#2B358C',textAlign:'center',fontSize:'1.5rem',fontWeight:600}}>Academic Information  <Button variant="success">Edit</Button>{' '}</Card.Header>
     <Card.Body>
       <Container>
       <h4 style={{textAlign: 'center',padding: '10px',backgroundColor: 'rgb(245, 239, 239)',borderRadius: '10px',color: '#3e3e3f',marginTop: '10px;'}}>PG</h4>
    
        <Row>
            <Col>

<Table responsive>
        <tr>
            <th>Institution Name </th>
            <td>Lorem Ipsum</td>
            </tr>
            <tr>
            <th>Course Name </th>
            <td>Lorem Ipsum</td>
        </tr>
        <tr>
            <th>Year of Passing</th>
            <td>Lorem Ipsum</td>
            </tr>
            <tr>
            <th>Percentage </th>
            <td>Lorem Ipsum</td>
        </tr>
        
            
        
</Table>
            </Col>
        </Row>
       <h4 style={{textAlign: 'center',padding: '10px',backgroundColor: 'rgb(245, 239, 239)',borderRadius: '10px',color: '#3e3e3f',marginTop: '10px;'}}>UG</h4>
    
        <Row>
            <Col>

<Table responsive>
        <tr>
            <th>Institution Name </th>
            <td>Lorem Ipsum</td>
            </tr>
            <tr>
            <th>Course Name </th>
            <td>Lorem Ipsum</td>
        </tr>
        <tr>
            <th>Year of Passing</th>
            <td>Lorem Ipsum</td>
            </tr>
            <tr>
            <th>Percentage </th>
            <td>Lorem Ipsum</td>
        </tr>
        
            
        
</Table>
            </Col>
        </Row>
       <h4 style={{textAlign: 'center',padding: '10px',backgroundColor: 'rgb(245, 239, 239)',borderRadius: '10px',color: '#3e3e3f',marginTop: '10px;'}}>HSC</h4>
    
        <Row>
            <Col>

<Table responsive>
        <tr>
            <th>Institution Name </th>
            <td>Lorem Ipsum</td>
            </tr>
            <tr>
            <th>Course Name </th>
            <td>Lorem Ipsum</td>
        </tr>
        <tr>
            <th>Year of Passing</th>
            <td>Lorem Ipsum</td>
            </tr>
            <tr>
            <th>Percentage </th>
            <td>Lorem Ipsum</td>
        </tr>
        
            
        
</Table>
            </Col>
        </Row>
       <h4 style={{textAlign: 'center',padding: '10px',backgroundColor: 'rgb(245, 239, 239)',borderRadius: '10px',color: '#3e3e3f',marginTop: '10px;'}}>SSLC</h4>
    
        <Row>
            <Col>

<Table responsive>
        <tr>
            <th>Institution Name </th>
            <td>Lorem Ipsum</td>
            </tr>
            <tr>
            <th>Course Name </th>
            <td>Lorem Ipsum</td>
        </tr>
        <tr>
            <th>Year of Passing</th>
            <td>Lorem Ipsum</td>
            </tr>
            <tr>
            <th>Percentage </th>
            <td>Lorem Ipsum</td>
        </tr>
        
            
        
</Table>
            </Col>
        </Row>
       </Container>
     </Card.Body>
   </Card>

   <Card style={{border:'1px solid #2B358C',marginTop:'2rem'}}> 
      <Card.Header style={{backgroundColor:'#E6E7FF',color:'#2B358C',textAlign:'center',fontSize:'1.5rem',fontWeight:600}}>Technical Information  <Button variant="success">Edit</Button>{' '}</Card.Header>
      <Card.Body>
        <Container>
        <h4 style={{textAlign: 'center',padding: '10px',backgroundColor: 'rgb(245, 239, 239)',borderRadius: '10px',color: '#3e3e3f',marginTop: '10px;'}}>PG</h4>
            <Row>
                <Col>
                <Table responsive>
                <tr>
                <th>Career Objective</th>
                <td>Lorem Ipsum</td>
            </tr>
            <tr>
                <th>Skills </th>
                <td>Lorem Ipsum</td>
            </tr>
                </Table>
                </Col>
            </Row>
            <h4 style={{textAlign: 'center',padding: '10px',backgroundColor: 'rgb(245, 239, 239)',borderRadius: '10px',color: '#3e3e3f',marginTop: '10px;'}}>PG</h4>
            <Row>
                <Col>
                <Table responsive>
                <tr>
                <th>Event Name </th>
                <td>Lorem Ipsum</td>
            </tr>
            <tr>
                <th>Awarded By </th>
                <td>Lorem Ipsum</td>
            </tr>
                </Table>
                </Col>
            </Row>
            <h4 style={{textAlign: 'center',padding: '10px',backgroundColor: 'rgb(245, 239, 239)',borderRadius: '10px',color: '#3e3e3f',marginTop: '10px;'}}>PG</h4>
            <Row>
                <Col>
                <Table responsive>
                <tr>
                <th>Event Name </th>
                <td>Lorem Ipsum</td>
            </tr>
            <tr>
                <th>Awarded By </th>
                <td>Lorem Ipsum</td>
            </tr>
                </Table>
                </Col>
            </Row>
            <h4 style={{textAlign: 'center',padding: '10px',backgroundColor: 'rgb(245, 239, 239)',borderRadius: '10px',color: '#3e3e3f',marginTop: '10px;'}}>PG</h4>
            <Row>
                <Col>
                <Table responsive>
                <tr>
                <th>Company Name</th>
                <td>Lorem Ipsum</td>
            </tr>
            <tr>
                <th>Duration </th>
                <td>Lorem Ipsum</td>
            </tr>
            <tr>
                <th>Role </th>
                <td>Lorem Ipsum</td>
            </tr>
                </Table>
                </Col>
            </Row>
            <h4 style={{textAlign: 'center',padding: '10px',backgroundColor: 'rgb(245, 239, 239)',borderRadius: '10px',color: '#3e3e3f',marginTop: '10px;'}}>PG</h4>
            <Row>
                <Col>
                <Table responsive>
                <tr>
                <th>Project Name</th>
                <td>Lorem Ipsum</td>
            </tr>
            <tr>
                <th>Description </th>
                <td>Lorem Ipsum</td>
            </tr>
                </Table>
                </Col>
            </Row>
        </Container>
      </Card.Body>
    </Card>
    <Card style={{border:'1px solid #2B358C',marginTop:'2rem',marginBottom:'3rem'}}>
      <Card.Header style={{backgroundColor:'#E6E7FF',color:'#2B358C',textAlign:'center',fontSize:'1.5rem',fontWeight:600}}>Additional Information <Button variant="success">Edit</Button>{' '}</Card.Header>
      <Card.Body>
        <Container>
            <Row>
                <Col>
                <Table responsive>
                <tr>
                <th>Event Name</th>
                <td>Lorem Ipsum</td>
            </tr>
            <tr>
                <th>Awarded By </th>
                <td>Lorem Ipsum</td>
            </tr>
            <tr>
                <th>Hobbies</th>
                <td>Lorem Ipsum</td>
            </tr>
            <tr>
                <th>SoftSkills </th>
                <td>Lorem Ipsum</td>
            </tr>
            <tr>
                <th>Email Id</th>
                <td>Lorem Ipsum</td>
            </tr>
            <tr>
                <th>Mobile Number </th>
                <td>Lorem Ipsum</td>
            </tr>
            <tr>
                <th>Upload Resume</th>
                <td>Lorem Ipsum</td>
            </tr>
                    </Table></Col>
            </Row>
        </Container>
      </Card.Body>
    </Card>
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly',marginBottom:'5rem'}}>
    <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
   </div>
     
   </Container>
    <Footer/>
    </>
  
   
  );
}

export default EditCandInfo;