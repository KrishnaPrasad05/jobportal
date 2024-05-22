import Rwomanct, { useState } from 'react';
import { Container, Row, Col,Button,Nav,Tab } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import man from '../../../Assets/img/man.png';
import woman from '../../../Assets/img/woman.png';
import React, { useEffect } from 'react';
import ExploreComp from './expComp';
import Header from '../headerExp';
import FooterEmp from '../footerEmp';
import { useDispatch, useSelector } from 'react-redux';
import { getResumeFromServer } from '../../../features/resumeSlice';

function ExploreCollectionsCand(){
  const [key, setKey] = useState('tab1');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  const dispatch = useDispatch();
  const users = useSelector((state) => state.resume.resumeDetails.filter(user => user.exp === "Experienced").slice(0,12));
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);

  useEffect(() => {
    dispatch(getResumeFromServer());
    console.log("ok")
    console.log(users)
  }, [dispatch]);
  return (
  
    <>
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
                  <li class="breadcrumb-item active" aria-current="page">Experienced </li>
                </ol>
              </nav>
      <h1 className="hwomand text-center" style={{color:'#2B358C',marginTop:'7rem'}}>Experienced Candidates</h1>
     
     
     
        <Container className='mt-3'>
    <Row >
        {users.map((user) => (<Col className='mt-3' key={user.id}>

        <ExploreComp dest={`/candidateinformation/${user.id}`} cardImage={user.file} title={user.name.substring(0, user.name.indexOf(' '))} content={user.nat} comp={user.exp}/>

            </Col>   ))}
            </Row>
    </Container>
        <div className="container d-flex justify-content-center mt-3 mb-3" style={{ height: '40px' }} id="ctgBtn">
        <Button variant="primary" data-bs-toggle="modal" as={Link} to="/viewallcandidates" data-bs-target="#exampleModal" style={{ backgroundColor: '#2B358C' }}>
          View all candidates
        </Button>
        
      </div>
      <FooterEmp/>
    </>
  );
}
export default ExploreCollectionsCand;