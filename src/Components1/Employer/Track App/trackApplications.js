import { Container,Row,Col,Nav,Tab, Alert } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import locImg from '../../../Assets/img/index/jd/pin.png';
import expImg from '../../../Assets/img/index/jd/suitcase (1).png';
import CardComp from '../../HomePage/Section3/cardComp';
import Header from '../headerExp';
import FooterEmp from '../footerEmp';
import { Link } from 'react-router-dom';

function TrackApplications(){
  const [key, setKey] = useState('tab1');
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
    return(
<section>
  <Header/>
<style>{`
    #a .nav-link.active {
      background-color: #2B358C !important;
      color: white;
    }
    #a .nav-link {
      color: #2B358C;
    }
  `}</style>
   <nav aria-label="breadcrumb " style={{backgroundColor: '#E6E7FF',paddingLeft: '10px',top:'3.8rem',fontWeight: 500,fontSize: '16px',position:'fixed',width:'100%',zIndex:1000,height:'30px'}}>
                <ol class="breadcrumb p-1">
                  <li class="breadcrumb-item" aria-current="page"><Link to="/employer-home" style={{textDecoration:'none',color:'#2B358C'}}>Home</Link></li>
                  <li class="breadcrumb-item active" aria-current="page">Track Applicants</li>
                </ol>
              </nav>
          
        <Container className='mt-2 mb-5'>
        <Alert variant="secondary" style={{marginTop:'9rem',marginBottom:'3rem'}} >
          If no job post available, come on create one  <Link to='/postjob' style={{color:'#2B358C'}}>Click Here</Link>
        </Alert>
<h1 className="head text-center " style={{color:'#2B358C',marginTop:'3rem',marginBottom:'5rem'}}>Track Job Responses</h1>
      
        <Row>
        {userData && userData.map((data, index) => (  <Col className='m-1'>
                <CardComp jobName={data.Role} dest={`/responsetable/${data.id}`} btnName="View Responses" CompName={data.CompName} location={data.Loc} experience={data.ExpReq} img1={locImg} img2={expImg}/>
                </Col>))}
               
            </Row>
          
         
            
        </Container>
        <FooterEmp/>
</section>
       

    );
}
export default TrackApplications;