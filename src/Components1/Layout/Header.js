import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Breadcrumb } from 'react-bootstrap';
import logo from '../../Assets/img/joblogo.png';
import bell from '../../Assets/img/bell.png';
import female from '../../Assets/img/female.png';
import h from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function Header() {
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
  return (
    <header className="container-fluid" style={{ width: '100%', padding: 0,zIndex:10000 }}>
      <Navbar expand="lg" style={{ backgroundColor: '#2B358C' }}>
        <Container fluid className="p-0 m-0">
          <div className="logo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '5px' }}>
            <div className="logo-img">
              <img src={logo} alt="" width="30px" height="30px" style={{ borderRadius: '50px' }} />
            </div>
            <div className="logo-desc">
              <p style={{ fontSize: '1.5rem', color: 'white', fontWeight: 600, margin: '5px' }}>WorkQuake</p>
            </div>
          </div>
          <Navbar.Toggle className="bg-light me-2" aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto mb-2 mb-lg-0 ms-auto fs-5 ">
              <Nav.Link  style={{fontSize:'19px'}} className="text-light ms-5" active><Link style={{textDecoration:'none',color:'white'}} to="/jobseeker-home">Home</Link></Nav.Link>
             
              <NavDropdown title={<span style={{ color: 'white',fontSize:'19px' }}>Job Search</span>}  id="basic-nav-dropdown" className="ms-5 " >
                <NavDropdown.Item className={h.hover1} as={Link} to="/findjob">Job Search</NavDropdown.Item>
                <NavDropdown.Item className={h.hover1} as={Link} to="/searchjobsbycategory"  href="srchJobsCat.html"  >Search by Categories</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown style={{zIndex:10001}} title={<span style={{ color: 'white',fontSize:'19px' }}>Companies</span>} id="basic-nav-dropdown" className="ms-5 ">
                <NavDropdown.Item  className={h.hover1} href="expCat.html" as={Link} to="/explorecategories">Explore Categories</NavDropdown.Item>
                <NavDropdown.Item className={h.hover1} href="expCol.html" as={Link} to="/explorecollections">Explore Collections</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={<span style={{ color: 'white',fontSize:'19px' }}>Services</span>} id="basic-nav-dropdown" className="ms-5">
                <NavDropdown.Item className={h.hover1} href="resumeBuild.html" as={Link} to="/resumebuilder" >Resume Builder</NavDropdown.Item>
                <NavDropdown.Item className={h.hover1} href="contactUs.html" as={Link} to="/contactus-jobseeker" >Contact Us</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div className="block" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight:'80px' }}>
              <Link to={'/announcements'}><img src={bell} alt="" as={Link} to="/" width="25px" height="25px" style={{ transform: 'rotate(360deg)', marginRight: '20px' }} /></Link>
              <NavDropdown title={<img src={userData && userData.profURL} alt="" width="30px" height="30px" style={{borderRadius:'10px'}} />} id="basic-nav-dropdown" className="me-5" >
                <NavDropdown.Item className={h.hover1} as={Link} disabled style={{borderBottom:'1px solid black',color:'#2B358C',fontWeight:600}}>Hi, <span style={{color:'#2B358C'}}>{userData && userData.name && userData.name.substring(0, userData.name.indexOf(' '))}
 </span></NavDropdown.Item>
                <NavDropdown.Item className={h.hover1} as={Link} to="/profilejs" >Profile</NavDropdown.Item>
                <NavDropdown.Item className={h.hover1} as={Link} to="/" >Logout</NavDropdown.Item>
              </NavDropdown>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </header>
  );
}

export default Header;
