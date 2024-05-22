import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import locImg from '../../../Assets/img/index/jd/pin.png';
import degImg from '../../../Assets/img/index/jd/graduation-cap.png';
import expImg from '../../../Assets/img/index/jd/suitcase (1).png';
import descImg from '../../../Assets/img/index/jd/google-docs.png';
import saveImg from '../../../Assets/img/bookmark.png';
import viewImg from '../../../Assets/img/index/jd/right-arrow (3).png';
import card1img from '../../../Assets/img/office.jpg'
import JobDesc from '../../Job Seeker/JobsDesc/jobDescComp';
import Header from '../headerExp';
import FooterEmp from '../footerEmp';
import { Link } from 'react-router-dom';


function ManagePosts(){
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
      fetch(`http://localhost:3001/users?empName=${loggedName}`)
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
          setUserData('');
        });
    }
  }, [loggedName]);

  if (!userData) {
    return null; // Return null if userData is null to display nothing
}
  return (
    <>
    <Header/>
    <nav aria-label="breadcrumb " style={{backgroundColor: '#E6E7FF',paddingLeft: '10px',top:'3.8rem',fontWeight: 500,fontSize: '16px',position:'fixed',width:'100%',zIndex:1001,height:'30px'}}>
                <ol class="breadcrumb p-1">
                  <li class="breadcrumb-item" aria-current="page"><Link to="/employer-home" style={{textDecoration:'none',color:'#2B358C'}}>Home</Link></li>
                  <li class="breadcrumb-item" aria-current="page"><Link to="/profile-employer" style={{textDecoration:'none',color:'#2B358C'}}>Profile</Link></li>

                  <li class="breadcrumb-item active" aria-current="page">Manage posts</li>
                </ol>
              </nav>
              <Container style={{marginTop:'10rem'}}>
        <h1 className="head text-center" style={{color:'#2B358C'}}>Manage Post</h1>
        <Alert variant="secondary" style={{marginTop:'3rem',marginBottom:'3rem'}} >
          If no job post available, come on create one  <Link to='/postjob' style={{color:'#2B358C'}}>Click Here</Link>
        </Alert>
        <Row className='d-flex flex-row justify-content-center mt-5'>
        {userData && userData.map((data, index) => (  <Col>
            <JobDesc disp1="none" id={data.id} disp2="block" state="Posted" bgClr="#E6E7FF" cardImg={card1img} jobName={data.Role} compName={data.CompName} loc={locImg} deg={degImg} exp={expImg} des={descImg} save={saveImg} view={viewImg} location={data.Loc} experience={data.ExpReq} degree={data.Qual} desc={data.jobDesc.slice(0, 53)} day="3 days ago" />
            </Col>))}
           
            
        </Row>
     
    </Container>
    <FooterEmp/>
    </>
    
 
    

  );
}
export default ManagePosts;