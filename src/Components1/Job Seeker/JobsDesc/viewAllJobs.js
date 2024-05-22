import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Row, Col,Button,Form ,Nav, NavDropdown} from 'react-bootstrap';
import locImg from '../../../Assets/img/index/jd/pin.png';
import degImg from '../../../Assets/img/index/jd/graduation-cap.png';
import expImg from '../../../Assets/img/index/jd/suitcase (1).png';
import descImg from '../../../Assets/img/index/jd/google-docs.png';
import saveImg from '../../../Assets/img/save-instagram.png';
import viewImg from '../../../Assets/img/index/jd/right-arrow (3).png';
import card1img from '../../../Assets/img/office.jpg'
import JobDesc from './jobDescComp';
import { Link } from 'react-router-dom';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import { fetchJobPostAsync } from '../../../features/dataSlice';


function ViewAllJobs(){
  const dispatch = useDispatch();
  const users = useSelector((state) => state.data.users);
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);

  useEffect(() => {
    dispatch(fetchJobPostAsync());
  }, [dispatch]);
  return (
    <section >
      <Header/>
      <nav aria-label="breadcrumb " style={{backgroundColor: '#E6E7FF',paddingLeft: '10px',top:'3.8rem',fontWeight: 500,fontSize: '16px',position:'fixed',width:'100%',zIndex:1000,height:'30px'}}>
                <ol class="breadcrumb p-1">
                  <li class="breadcrumb-item" aria-current="page"><Link to="/jobseeker-home" style={{textDecoration:'none',color:'#2B358C'}}>Home</Link></li>
                  <li class="breadcrumb-item active" aria-current="page">View all jobs</li>
                </ol>
              </nav>
 <div className="srch" style={{ marginTop: '7rem', marginBottom: '.5rem' }}>
    <div className="container">
      <Form className="d-flex">
        <Form.Control type="search" id="ipVAJ" placeholder="View Companies" aria-label="Search" className="form-control me-2 w-100" />
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
    <Container>
    {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
        <Row className='d-flex flex-row justify-content-center mt-5'>
        {users.map((user) => (<Col key={user.Role} style={{marginTop:'10px'}}>
          
               <JobDesc state="Posted" bgClr="#E6E7FF" disp2="none" cardImg={card1img} compName={user.Role} jobName={user.CompName} loc={locImg} deg={degImg} exp={expImg} des={descImg} save={saveImg} view={viewImg} location={user.Loc} experience={user.ExpReq} degree={user.Qual} desc="We  are seeking an..." day="3 days ago" 
                
                dest={`/jobinfo/${user.id}`} />
              
            </Col>   ))}
  
            
        </Row>
    </Container>
    <Footer/>
    </section>
   
    

  );
}
export default ViewAllJobs;