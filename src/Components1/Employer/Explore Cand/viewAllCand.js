import Rwomanct, { useState } from 'react';
import { Container, Row, Col,Button,Nav,Tab, NavDropdown,Form } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import man from '../../../Assets/img/man.png';
import woman from '../../../Assets/img/woman.png';
import React, { useEffect } from 'react';
import ExploreComp from './expComp';
import { getResumeFromServer } from '../../../features/resumeSlice';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../headerExp';
import FooterEmp from '../footerEmp';

function ViewAllCandidates(){
  const [key, setKey] = useState('tab1');
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  const dispatch = useDispatch();
  const users = useSelector((state) => state.resume.resumeDetails);
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);

  useEffect(() => {
    dispatch(getResumeFromServer());
    console.log("ok")
    console.log(users)
  }, [dispatch]);
  return (
  
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
                  <li class="breadcrumb-item active" aria-current="page">View all candidates </li>
                </ol>
              </nav>
     
     
      <div className="srch" style={{ marginTop: '7rem', marginBottom: '1rem' }}>
      <div className="container">
        <Form className="d-flex">
          <Form.Control type="search" id="ipVAJ" placeholder="View Candidates" aria-label="Search" className="form-control me-2 w-100" />
          <Button type="submit" className="btn btn-outline-success" style={{ height: '35px', backgroundColor: '#2B358C', color: 'white' }}>
            Search
          </Button>
          <Nav className="nav-item dropdown">
          <NavDropdown id="navbarDropdown" title={<span style={{ color: 'white',fontSize:'16px' }}>Filter</span>} style={{ backgroundColor: '#2B358C', color: 'white', marginLeft: '5px', borderRadius: '5px',height:'35px' }}>
              <Form.Control list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
              <datalist id="datalistOptions">
                <option value="San Francisco" />
                <option value="New York" />
                <option value="Seattle" />
                <option value="Los Angeles" />
                <option value="Chicago" />
              </datalist>
              <div className="opt">
                <Form.Check type="checkbox" id="itServicesCheckbox" label="IT Services" />
              </div>
              <div className="opt">
                <Form.Check type="checkbox" id="technologyCheckbox" label="Technology" />
              </div>
              <div className="opt">
                <Form.Check type="checkbox" id="manufacturingCheckbox" label="Manufacturing" />
              </div>
              <div className="opt">
                <Form.Check type="checkbox" id="bpmCheckbox" label="BPM" />
              </div>
              <div className="opt">
                <Form.Check type="checkbox" id="educationCheckbox" label="Education" />
              </div>
            </NavDropdown>
          </Nav>
        </Form>
      </div>
    </div>
    <Container className='mt-3'>
    <Row >
        {users.map((user) => (<Col className='mt-3' key={user.id}>

        <ExploreComp dest={`/candidateinformation/${user.id}`} cardImage={user.file} title={user.name.substring(0, user.name.indexOf(' '))} content={user.nat} comp={user.exp}/>

            </Col>   ))}
            </Row>
    </Container>
     
         
    <FooterEmp/>
          </section>
          );
    }
    export default ViewAllCandidates;