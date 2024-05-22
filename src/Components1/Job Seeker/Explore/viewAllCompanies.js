import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanyAsync, fetchDataAsync } from '../../../features/dataSlice';
import { Container, Row, Col,Button,Form ,Nav, NavDropdown} from 'react-bootstrap';

import amd from '../../../Assets/img/index/comp/amd.png';
import officeImg from '../../../Assets/img/officeBuilding.png';
import amazon from '../../../Assets/img/index/comp/amazon-pay.png';
import brother from '../../../Assets/img/index/comp/brother.png';
import ebay from '../../../Assets/img/index/comp/ebay.png';
import fedex from '../../../Assets/img/index/comp/fedex.png';
import htc from '../../../Assets/img/index/comp/htc.png';
import ea from '../../../Assets/img/index/comp/electronics-arts.png';
import ibm from '../../../Assets/img/index/comp/ibm.png';
import intel from '../../../Assets/img/index/comp/intel.png';
import lenovo from '../../../Assets/img/index/comp/lenovo.png';
import sam from '../../../Assets/img/index/comp/samsung.png';
import md from '../../../Assets/img/index/comp/mcdonalds.png';
import ExploreComp from './exploreComp';
import { Link } from 'react-router-dom';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';

function ViewAllCompanies(){
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });

 
  }, []);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.data.users);
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);

  useEffect(() => {
    dispatch(fetchCompanyAsync());
  }, [dispatch]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [searchClicked, setSearchClicked] = useState(false);
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:3001/users?${selectedOption}=${searchTerm}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setSearchResults(data);
      setSearchClicked(true);
      console.log(data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <>
    <Header/>
    <nav aria-label="breadcrumb " style={{backgroundColor: '#E6E7FF',paddingLeft: '10px',top:'3.8rem',fontWeight: 500,fontSize: '16px',position:'fixed',width:'100%',zIndex:1000,height:'30px'}}>
                <ol class="breadcrumb p-1">
                  <li class="breadcrumb-item" aria-current="page"><Link to="/jobseeker-home" style={{textDecoration:'none',color:'#2B358C'}}>Home</Link></li>
                  <li class="breadcrumb-item active" aria-current="page">View all companies</li>
                </ol>
              </nav>
     <div className="srch" style={{ marginTop: '7rem', marginBottom: '1rem' }}>
      <div className="container">
      <Container>
      <Row className="mt-3">
        <Col  xs={6} md={6}>
        <Form.Control
  type="text"
  list="companyTypes"
  placeholder="Enter search term"
  value={searchTerm}
  onChange={handleInputChange}
/>

<datalist id="companyTypes">

    <option value="IBM" />
    <hr></hr>
    <option value="Microsoft" />
    <option value="Google" />
    {/* Add more MNC options here */}
 
  <optgroup label="Product">
    <option value="HTC" />
    <option value="Samsung" />
    <option value="Apple" />
    {/* Add more Product options here */}
  </optgroup>
  <optgroup label="Company Name">
    <option value="ABC Corp" />
    <option value="XYZ Solutions" />
    <option value="Tech Innovations" />
    {/* Add more Company Name options here */}
  </optgroup>
</datalist>

        </Col>
        <Col  xs={6} md={6}>
          <Form.Control
            as="select"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option value="">Select Option</option>
            <option value="compType">Company Type</option>
            <option value="CompanyName">Company Name</option>
            <option value="mnc">MNC</option>
          </Form.Control>
        </Col>
        <Col className='mt-3' xs={6} md={6}>
          <Button style={{ backgroundColor: '#2B358C' }} onClick={handleSearch}>
            Search
          </Button>
        </Col>
      </Row>
    </Container>
        {/* <Form className="d-flex">
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
        </Form> */}
      </div>
    </div>
     
    <Container className='mt-3'>
    <Row className="mt-3">
        {searchClicked ? (
          searchResults.map((result) => (
             <Col key={result.id} className='mt-3'>

            <ExploreComp dest={`/companydetails/${result.id}`} cardImage={result.Compfile} title={result.CompanyName} content="4.2 | 4.1k + reviews" comp={result.compType}/>
    
                </Col>
          ))
        ) : (
          users.map((user) => (
            (<Col key={user.id} className='mt-3'>

            <ExploreComp dest={`/companydetails/${user.id}`} cardImage={user.Compfile} title={user.CompanyName} content="4.2 | 4.1k + reviews" comp={user.compType}/>
    
                </Col>  ))) )}
       
      </Row>
    </Container>
        <Footer/>
    </>
  );
}
export default ViewAllCompanies;