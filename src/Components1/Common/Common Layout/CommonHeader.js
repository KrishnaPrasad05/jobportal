import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Breadcrumb ,Button} from 'react-bootstrap';
import logo from '../../../Assets/img/joblogo.png';
import bell from '../../../Assets/img/bell.png';
import female from '../../../Assets/img/female.png';
import h from '../../Layout/Header.module.scss';
import { Link } from 'react-router-dom';


function CommonHeader() {
  return (
    <section style={{marginTop:'5rem'}}>
<header className="container-fluid" style={{ width: '100%', padding: 0,zIndex:10000 }}>
      <Navbar expand="lg" style={{ backgroundColor: '#2B358C',display:'block' }}>
        <Container fluid className="p-0 m-0">
          <div className="logo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '5px' }}>
            <div className="logo-img">
              <img src={logo} alt="" width="30px" height="30px" style={{ borderRadius: '50px' }} />
            </div>
            <div className="logo-desc">
              <p style={{ fontSize: '1.5rem', color: 'white', fontWeight: 600, margin: '5px' }}>WorkQuake</p>
            </div>
          </div>
          <Navbar.Toggle className='bg-light me-2' aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto mb-2 mb-lg-0 ms-auto fs-5 ">
              <Nav.Link href="/" style={{fontSize:'19px'}} className="text-light ms-5"  active>Home</Nav.Link>
             
              <NavDropdown title={<span style={{ color: 'white',fontSize:'19px' }}>Job Search</span>}  id="basic-nav-dropdown" className="ms-5 " >
                <NavDropdown.Item className={h.hover1} as={Link} to="/logins">Job Search</NavDropdown.Item>
                <NavDropdown.Item className={h.hover1} as={Link} to="/logins"  href="srchJobsCat.html"  >Search by Categories</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={<span style={{ color: 'white',fontSize:'19px' }}>Companies</span>} id="basic-nav-dropdown" className="ms-5 ">
                <NavDropdown.Item className={h.hover1} href="expCat.html" as={Link} to="/logins">Explore Categories</NavDropdown.Item>
                <NavDropdown.Item className={h.hover1} href="expCol.html" as={Link} to="/logins">Explore Collections</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={<span style={{ color: 'white',fontSize:'19px' }}>Services</span>} id="basic-nav-dropdown" className="ms-5">
                <NavDropdown.Item className={h.hover1} href="resumeBuild.html" as={Link} to="/logins" >Resume Builder</NavDropdown.Item>
                <NavDropdown.Item className={h.hover1} href="contactUs.html" as={Link} to="/logins" >Contact Us</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Button variant="primary" as={Link} to="/logins" style={{backgroundColor:'rgb(230, 231, 255)',border:'none',marginRight:'20px',color:'#2B358C'}}>Login</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </header>
    </section>
    
  );
}

export default CommonHeader;
