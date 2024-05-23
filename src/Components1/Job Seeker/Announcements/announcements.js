import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import {Container,Alert} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {fetchJSAnAsync,fetchEmpAnAsync} from '../../../features/dataSlice'
import mega from '../../../Assets/img/megaphone.png'
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import { Link } from 'react-router-dom';
import { getAnnouncement, getIssuesFromServer } from '../../../features/updateSlice';

function Announcements() {
  const dispatch = useDispatch();
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('');
  const [alertCompany, setAlertCompany] = useState('');
  const {issuesList} = useSelector((state)=>state.issues);
 /*  To display the details fetched from Json server using dispath and already written slice */

 const [loggedName, setLoggedInUserName] = useState(null);
 useEffect(() => {
   // Retrieve loggedInUserId from local storage when the component mounts
   const loggedInUserIdFromLocalStorage = localStorage.getItem('loggedName');
   if (loggedInUserIdFromLocalStorage) {
    setLoggedInUserName(loggedInUserIdFromLocalStorage);
     console.log(loggedName)
   }
 }, []);

  
  useEffect(() => {
    dispatch(getAnnouncement("Job Seeker")); // Fetch data with category "job seeker"
  }, [dispatch]);

  const users = useSelector((state) => state.data.users);
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);


 
  useEffect(() => {
    fetch('https://wry-seemly-berry.glitch.me/response')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data); // Log the fetched data
        console.log(loggedName)
        const matchingIssue = data.find(issue => issue && issue.nameAlert=== loggedName);
        console.log(matchingIssue)
        if (matchingIssue) {
          if (matchingIssue.option === 'selected') {
            setAlertVariant('success');
            setAlertMessage(`${matchingIssue.nameAlert} : You're selected`);
            setAlertCompany(` in ${matchingIssue.companyName}`);
          } else if (matchingIssue.option === 'rejected') {
            setAlertVariant('danger');
            setAlertMessage(`${matchingIssue.nameAlert} : You're rejected`);
            setAlertCompany(` in ${matchingIssue.companyName}`);
          }
          else if (matchingIssue.option === 'waiting list') {
            setAlertVariant('warning');
            setAlertMessage(`${matchingIssue.nameAlert} : You're in waiting list`);
            setAlertCompany(` in ${matchingIssue.companyName}`);
          }
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [loggedName]);

  return (
    <> 
    <Header/>
    <nav aria-label="breadcrumb " style={{backgroundColor: '#E6E7FF',paddingLeft: '10px',top:'3.8rem',fontWeight: 500,fontSize: '16px',position:'fixed',width:'100%',zIndex:1000,height:'30px'}}>
                <ol class="breadcrumb p-1">
                  <li class="breadcrumb-item" aria-current="page"><Link to="/jobseeker-home" style={{textDecoration:'none',color:'#2B358C'}}>Home</Link></li>
                  <li class="breadcrumb-item active" aria-current="page">Announcements</li>
                </ol>
              </nav>
    <section style={{marginTop:'10rem'}}>
 <Container >
 
<Card className='m-2'>
<Card.Header style={{backgroundColor:'#E6E7FF',padding:'10px',display:'flex',alignItems:'center',justifyContent:'center'}}>
<div style={{display:'flex'}}>
<Card.Img variant="top" src={mega} style={{width:'50px',height:'50px',marginRight:'20px'}} className='img-fluid' />
<h1>Announcements</h1>
</div>
</Card.Header>
<Card.Body >
{alertMessage && (
  <Alert variant={alertVariant}>
   <strong>{alertMessage}</strong>  {alertCompany}
  </Alert>
)}
{loading && <p>Loading Job Seeker Announcements...</p>}
              {error && <p>Error: {error}</p>}
              {issuesList && issuesList.map((issue,index)=>(
                <Card key={issue.id} style={{marginBottom: '10px',backgroundColor:'#ECECEC' }}>
                  
                  <Card.Body>
                    
                  
                    <Card.Title style={{fontWeight:600}}>{issue.name}</Card.Title>
                    <Card.Text>{issue.ancmnt}</Card.Text>
                   
                  </Card.Body>
                </Card>
              ))}
</Card.Body>
</Card>
</Container>
</section>
    <Footer/>
    </>
   
  );
}
export default Announcements;