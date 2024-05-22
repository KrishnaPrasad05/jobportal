import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Breadcrumb, Table } from 'react-bootstrap';
import Header from '../headerExp';
import FooterEmp from '../footerEmp';

function WorkQuakeComponent() {
  return (
    <>
    <Header/>
    <div>
      {/* Header Section Starts here */}
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img
              alt=""
              src="../img/joblogo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            WorkQuake
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto">
              <Nav.Link href="#" active>Home</Nav.Link>
              <NavDropdown title="Jobs" id="basic-nav-dropdown">
                <NavDropdown.Item href="srchJobs.html">Job Search</NavDropdown.Item>
                <NavDropdown.Item href="srchJobsCat.html">Search by Categories</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Companies" id="basic-nav-dropdown">
                <NavDropdown.Item href="expCat.html">Explore Categories</NavDropdown.Item>
                <NavDropdown.Item href="expCol.html">Explore Collections</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="resumeBuild.html">Resume Builder</NavDropdown.Item>
                <NavDropdown.Item href="contactUs.html">Contact Us</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="announcements.html">
                <img
                  alt=""
                  src="../img/bell.png"
                  width="25"
                  height="25"
                  className="d-inline-block align-top"
                />
              </Nav.Link>
              <NavDropdown title={<img alt="" src="../img/female.png" width="25" height="25" />} id="basic-nav-dropdown">
                <NavDropdown.Item href="profile.html">Profile</NavDropdown.Item>
                <NavDropdown.Item href="logIn.html">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Breadcrumb>
        <Container>
          <Breadcrumb.Item href="indexJS.html" style={{ color: '#2B358C' }}>Home</Breadcrumb.Item>
          <Breadcrumb.Item href="../Employer/profileEmp.html" style={{ color: '#2B358C' }}>Profile</Breadcrumb.Item>
          <Breadcrumb.Item active>Track Employee Status</Breadcrumb.Item>
        </Container>
      </Breadcrumb>
      {/* Main Content starts here */}
      <Container>
        <div className="table-responsive">
          <Table striped bordered hover id="mydata">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Location</th>
                <th>Education</th>
                <th>Skill</th>
                <th>Type</th>
                <th>View</th>
                <th>Reject</th>
              </tr>
            </thead>
            <tbody>
              {/* Insert your table data here */}
            </tbody>
          </Table>
        </div>
      </Container>
      {/* Footer starts here */}
      <footer>
        {/* Insert your footer content here */}
      </footer>
    </div>
    <FooterEmp/>
    </>
   
  );
}

export default WorkQuakeComponent;
