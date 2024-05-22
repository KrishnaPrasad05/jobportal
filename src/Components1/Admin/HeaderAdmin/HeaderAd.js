import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import logo from '../../../Assets/img/joblogo.png';
import manIcon from '../img/man.png';
import settingsIcon from '../img/setting (1).png';
import announcementsIcon from '../img/megaphone (1).png';
import powerOffIcon from '../img/power-off.png';
import { Link } from 'react-router-dom';
import h from './Header.module.scss'

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#E6E7FF' ,position:'fixed',top:0,width:'100%',zIndex:10000}} >
      <div className="container-fluid">
        <div className="navbar-header">
          <div className="logo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginLeft: '5px' }}>
            <div className="logo-img">
              <img src={logo} alt="" width="30px" height="30px" style={{ borderRadius: '50px' }} />
            </div>
            <div className="logo-desc">
              <p style={{ fontSize: '1.5rem', color: '#2B358C', fontWeight: 600, margin: '5px' }}>WorkQuake</p>
            </div>
          </div>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-around">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/admin-home">Home</Nav.Link>
            <Nav.Link as={Link} to="/joblistings-admin">Job Listings Approval</Nav.Link>
            <Nav.Link as={Link} to="/announcement-admin">Announcements</Nav.Link>
            <Nav.Link as={Link} to="/contactsection-admin">Contact Queries</Nav.Link>
            <Nav.Link as={Link} to="/reportsection-admin">Report Contents</Nav.Link>
            <Nav.Link as={Link} to="/performanalysis">Performance Analysis</Nav.Link>
            
          </Nav>
          <div >
          <Link to="/">
          <Image src={powerOffIcon} alt="" style={{ width: '30px', height: '30px', marginRight: '10px' }}></Image></Link>
          </div>
        </Navbar.Collapse>
        
      </div>
    </Navbar>
  );
};

export default CustomNavbar;
