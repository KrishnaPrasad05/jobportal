import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {fetchJSAnAsync,fetchEmpAnAsync} from '../../../features/dataSlice'
import mega from '../../../Assets/img/megaphone.png'

import { Link } from 'react-router-dom';
import Header from '../headerExp';
import FooterEmp from '../footerEmp';
import { getAnnouncement } from '../../../features/updateSlice';

function EmpAnnouncements() {
  const {issuesList} = useSelector((state)=>state.issues);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAnnouncement("Employer")); // Fetch data with category "job seeker"
  }, [dispatch]);

  const users = useSelector((state) => state.data.users);
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);

  
  const employeeUsers = users.filter(user => user.nameEmp);
  return (
    <> 
    <Header/>
    <nav aria-label="breadcrumb " style={{backgroundColor: '#E6E7FF',paddingLeft: '10px',top:'3.8rem',fontWeight: 500,fontSize: '16px',position:'fixed',width:'100%',zIndex:1001,height:'30px'}}>
                <ol class="breadcrumb p-1">
                  <li class="breadcrumb-item" aria-current="page"><Link to="/employer-home" style={{textDecoration:'none',color:'#2B358C'}}>Home</Link></li>

                  <li class="breadcrumb-item active" aria-current="page">Announcements</li>
                </ol>
              </nav>
    <section style={{marginTop:'12rem',marginBottom:'6.5rem'}}>
 <Container >
<Card className='m-2'>
<Card.Header style={{backgroundColor:'#E6E7FF',padding:'10px',display:'flex',alignItems:'center',justifyContent:'center'}}>
<div style={{display:'flex'}}>
<Card.Img variant="top" src={mega} style={{width:'50px',height:'50px',marginRight:'20px'}} className='img-fluid' />
<h1>Announcements</h1>
</div>
</Card.Header>
<Card.Body >
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
  <FooterEmp/>
    </>
   
  );
}
export default EmpAnnouncements;