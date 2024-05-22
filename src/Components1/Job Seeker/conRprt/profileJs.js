import React, { useEffect, useState } from 'react';
import { Button, Modal, Form, Container,Row,Col,Image,Card } from 'react-bootstrap';
import save from '../../../Assets/img/save.png';
import cv from '../../../Assets/img/cv.png';
import track from '../../../Assets/img/pointer.png';
import report from '../../../Assets/img/warning.png';
import { Link } from 'react-router-dom';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, setSelectedData } from '../../../features/dataSlice';
import UpdatProfileModal from './updateProfModal';
const ProfilePage = () => {
  

  const {users} = useSelector((state)=>state.data.users);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);
  const [loggedInUserId, setLoggedInUserId] = useState(null);
  useEffect(() => {
    // Retrieve loggedInUserId from local storage when the component mounts
    const loggedInUserIdFromLocalStorage = localStorage.getItem('loggedInUserId');
    if (loggedInUserIdFromLocalStorage) {
      setLoggedInUserId(loggedInUserIdFromLocalStorage);
      console.log(loggedInUserId)
    }
  }, []);
  /* useEffect(() => {
    console.log({loggedInUserId})
    dispatch(getProfile(loggedInUserId)); // Fetch data with category "job seeker"
  }, [dispatch,loggedInUserId]); */
  
  useEffect(() => {
    // Check if loggedInUserId is truthy before making the API request
    if (loggedInUserId) {
      // Make the API request using loggedInUserId
      fetch(`http://localhost:3001/userData/${loggedInUserId}`)
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
        });
    }
  }, [loggedInUserId]);
 
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);
  
 /*  let updateProfile =(user)=>{
    dispatch(setSelectedData(user));
    console.log(setSelectedData)
    setModalShow(true);
  } */
  const handleUpdateProfile = () => {
    setModalShow(true);
  };

  const [modalShow,setModalShow]=useState(false);
  return (
    <>
    <Header/>
    <nav aria-label="breadcrumb " style={{backgroundColor: '#E6E7FF',paddingLeft: '10px',top:'3.8rem',fontWeight: 500,fontSize: '16px',position:'fixed',width:'100%',zIndex:1000,height:'30px'}}>
                <ol class="breadcrumb p-1">
                  <li class="breadcrumb-item" aria-current="page"><Link to="/jobseeker-home" style={{textDecoration:'none',color:'#2B358C'}}>Home</Link></li>
                  <li class="breadcrumb-item active" aria-current="page">Profile</li>
                </ol>
              </nav>
<div>
{/* Logged In User ID: {loggedInUserId}
{userData && (
        <div>
          <h1>User Profile</h1>
          <p>Name: {userData.firstName}</p>
          <p>Email: {userData.email}</p>
          {/* Render other user data fields as needed 
        </div>
      )} */}

 {/*  {loading && <p>Loading Job Seeker Announcements...</p>}
              {error && <p>Error: {error}</p>}
              {users && users.map((user,index)=>(
                <Card key={user.id} style={{marginBottom: '10px',backgroundColor:'#ECECEC' }}>
                  
                  <Card.Body>
                    <Card.Title style={{fontWeight:600}}>{user.firstName}</Card.Title>
                    <Card.Text>{user.email}</Card.Text>
                   
                  </Card.Body>
                </Card>
              ))} */}
</div>

    <div style={{marginTop:'7rem'}}>
        
                <Container>
<Row>
  <Col>
  <div style={{border:'1px solid black',margin:'10px',borderRadius:'10px',padding:'10px',display:'flex',justifyContent:'space-between'}}>
      <h4 style={{backgroundColor:'#E6E7FF',padding:'10px',borderRadius:'10px',color:'#2B358C',fontWeight:530,height:'50px',flex:'1',marginRight:'10px'}}>Profile Pic</h4>
      <img src={userData && userData.profURL} alt="Profile Pic" style={{width:'100px',height:'100px',borderRadius:'15px'}} />
  </div>
  </Col>
  <Col>
  <div style={{border:'1px solid black',margin:'10px',borderRadius:'10px',padding:'10px'}}>
  <h4 style={{backgroundColor:'#E6E7FF',padding:'10px',borderRadius:'10px',color:'#2B358C',fontWeight:530}}>Name</h4>
  <p>{userData && userData.name}</p>
</div>
  </Col>
</Row>
<Row>
  <Col>
  <div style={{border:'1px solid black',margin:'10px',borderRadius:'10px',padding:'10px'}}>
  <h4 style={{backgroundColor:'#E6E7FF',padding:'10px',borderRadius:'10px',color:'#2B358C',fontWeight:530}}>Mobile Number</h4>
  <p>{userData && userData.mob}</p>
</div>
  </Col>
  <Col>
  <div style={{border:'1px solid black',margin:'10px',borderRadius:'10px',padding:'10px'}}>
  <h4 style={{backgroundColor:'#E6E7FF',padding:'10px',borderRadius:'10px',color:'#2B358C',fontWeight:530}}>Address</h4>
  <p>{userData && userData.address}</p>
</div>
  </Col>
</Row>
<Row>
  <Col>
  <div style={{border:'1px solid black',margin:'10px',borderRadius:'10px',padding:'10px'}}>
  <h4 style={{backgroundColor:'#E6E7FF',padding:'10px',borderRadius:'10px',color:'#2B358C',fontWeight:530}}>DOB</h4>
  <p>{userData && userData.dob}</p>
</div>
  </Col>
  <Col>
  <div style={{border:'1px solid black',margin:'10px',borderRadius:'10px',padding:'10px'}}>
  <h4 style={{backgroundColor:'#E6E7FF',padding:'10px',borderRadius:'10px',color:'#2B358C',fontWeight:530}}>Bloodgroup</h4>
  <p>{userData && userData.bloodGroup}</p>
</div>
  </Col>
</Row>
<Row>
  <Col>
  <div style={{border:'1px solid black',margin:'10px',borderRadius:'10px',padding:'10px'}}>
  <h4 style={{backgroundColor:'#E6E7FF',padding:'10px',borderRadius:'10px',color:'#2B358C',fontWeight:530}}>Email</h4>
  <p>{userData && userData.email}</p>
</div>
  </Col>
  <Col>
  <div style={{border:'1px solid black',margin:'10px',borderRadius:'10px',padding:'10px'}}>
  <h4 style={{backgroundColor:'#E6E7FF',padding:'10px',borderRadius:'10px',color:'#2B358C',fontWeight:530}}>Password</h4>
  <p>{userData && userData.password}</p>
</div>
  </Col>
  <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
<Button style={{backgroundColor:'#2B358C',border:'none'}} onClick={handleUpdateProfile}>Edit Profile</Button>
</div>
</Row>
       

 
  









 



<UpdatProfileModal userData={userData} modalShow={modalShow} setModalShow={setModalShow} />

</Container>

                
              
<Container className="addOns">
  <Row className='ms-2'>
    <Col>
      <Card className="m-3" style={{ width: '15rem' }}>
        <Card.Body className="save" style={{ border: '1px solid black', borderRadius: '10px', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Link to="/savedjobs">
            <Image src={save} alt="" style={{ width: '60px', height: '60px' }} className='img-fluid' />
          </Link>
          <h5>Show Saved Jobs</h5>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card className="m-3" style={{ width: '15rem' }}>
        <Card.Body className="resume" style={{ border: '1px solid black', borderRadius: '10px', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Link to="/download-resume">
            <Image src={cv} alt="" style={{ width: '60px', height: '60px' }} className='img-fluid' />
          </Link>
          <h5>Download CV</h5>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card className="m-3" style={{ width: '15rem' }}>
        <Card.Body className="track" style={{ border: '1px solid black', borderRadius: '10px', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Link to="/track">
            <Image src={track} alt="" style={{ width: '60px', height: '60px' }} className='img-fluid' />
          </Link>
          <h5>Track Applications</h5>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card className="m-3" style={{ width: '15rem' }}>
        <Card.Body className="report" style={{ border: '1px solid black', borderRadius: '10px', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Link to="/reportcontent-jobseeker">
            <Image src={report} alt="" style={{ width: '60px', height: '60px' }} className='img-fluid' />
          </Link>
          <h5>Report Content</h5>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</Container>

              
          
           
      
     
    </div>
    <Footer/>
    </>

  );
};

export default ProfilePage;
