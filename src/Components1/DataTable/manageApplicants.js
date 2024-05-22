import React from 'react';
import DataTable from './dataTable';
import Container from 'react-bootstrap/Container';
import Header from '../Employer/headerExp';
import FooterEmp from '../Employer/footerEmp';
import { LineElement } from 'chart.js';
import { Link } from 'react-router-dom';
function ManageApplicants() {
  const columns = [
    { Header: 'Emp Id', accessor: 'id' },
    { Header: 'Name', accessor: 'name' },
    { Header: 'Email', accessor: 'email' },
    { Header: 'Number', accessor: 'number' },
    { Header: 'Department', accessor: 'department' },
    { Header: 'Designation', accessor: 'designation' },
  ];

  const data = [
    { id: 'E001', name: 'David Lee', email: 'davidlee@gmail.com', number: '9546321875', department: 'Management', designation: 'Development' },
    { id: 'E001', name: 'John Doe', email: 'johndoe@gmail.com', number: '9876543210', department: 'IT', designation: 'Developer' },
  { id: 'E002', name: 'Alice Smith', email: 'alicesmith@gmail.com', number: '9876543222', department: 'Marketing', designation: 'Sales' },
  { id: 'E003', name: 'Michael Johnson', email: 'michaeljohnson@gmail.com', number: '9876543233', department: 'Finance', designation: 'Accountant' },
  { id: 'E006', name: 'Emily Davis', email: 'emilydavis@gmail.com', number: '9876543244', department: 'IT', designation: 'Tester' },
  { id: 'E020', name: 'Christopher Wilson', email: 'christopherwilson@gmail.com', number: '9876543255', department: 'Marketing', designation: 'Coordinator' },
  { id: 'E030', name: 'Sarah Williams', email: 'sarahwilliams@gmail.com', number: '9876543266', department: 'IT', designation: 'Developer' },
  { id: 'E022', name: 'Matthew Brown', email: 'matthewbrown@gmail.com', number: '9876543277', department: 'Management', designation: 'Administration' },
  { id: 'E021', name: 'Emma Jones', email: 'emmajones@gmail.com', number: '9876543288', department: 'Marketing', designation: 'Sales' },
  { id: 'E090', name: 'William Turner', email: 'williamturner@gmail.com', number: '9876543311', department: 'Finance', designation: 'Accountant' },
  { id: 'E019', name: 'Lily Martinez', email: 'lilymartinez@gmail.com', number: '9876543322', department: 'IT', designation: 'Tester' },
  { id: 'E097', name: 'Aiden Harris', email: 'aidenharris@gmail.com', number: '9876543333', department: 'Management', designation: 'Coordinator' },
  { id: 'E026', name: 'Olivia Taylor', email: 'oliviataylor@gmail.com', number: '9876543300', department: 'Marketing', designation: 'Coordinator' },
  { id: 'E013', name: 'Taylor Johnson', email: 'taylorjohnson@gmail.com', number: '9876543311', department: 'Finance', designation: 'Accountant' },
  { id: 'E017', name: 'Nathan Robinson', email: 'nathanrobinson@gmail.com', number: '9876543322', department: 'IT', designation: 'Developer' },
  { id: 'E009', name: 'Grace Davis', email: 'gracedavis@gmail.com', number: '9876543333', department: 'Marketing', designation: 'Sales' },
  { id: 'E014', name: 'Sophia Miller', email: 'sophiamiller@gmail.com', number: '9876543344', department: 'IT', designation: 'Tester' },
  { id: 'E030', name: 'Ethan Turner', email: 'ethanturner@gmail.com', number: '9876543355', department: 'Management', designation: 'Coordinator' },
  { id: 'E040', name: 'Emma White', email: 'emmawhite@gmail.com', number: '9876543366', department: 'Marketing', designation: 'Sales' },
  { id: 'E050', name: 'Daniel Moore', email: 'danielmoore@gmail.com', number: '9876543377', department: 'IT', designation: 'Developer' },
  { id: 'E070', name: 'Ava Thompson', email: 'avathompson@gmail.com', number: '9876543388', department: 'Management', designation: 'Administration' },
  { id: 'E080', name: 'Mia Scott', email: 'miascott@gmail.com', number: '9876543399', department: 'Finance', designation: 'Accountant' },
  ];

  return (


    <>
    <Header/>
  
    <nav aria-label="breadcrumb " style={{backgroundColor: '#E6E7FF',paddingLeft: '10px',marginTop:'3.8rem',fontWeight: 500,fontSize: '17px'}}>
                <ol class="breadcrumb p-1">
      
                  <li class="breadcrumb-item" aria-current="page"><Link to="/" style={{textDecoration:'none',color:'#2B358C'}}>Home</Link></li>
                  <li class="breadcrumb-item" aria-current="page"><Link to="/profile" style={{textDecoration:'none',color:'#2B358C'}}>Profile</Link></li>
                  <li class="breadcrumb-item active" aria-current="page">Manage Applicants</li>
                </ol>
              </nav>
    <div className=' pt-md-5 mb-2'>
    <Container fluid>
      <div className="">
        <h6 className="text-light pt-2 mb-3">
          <i className="bx bxs-user-detail"></i> Employee details
        </h6>
      </div>
      <DataTable columns={columns} data={data} tableId="table-to-xls" fileName="data" />
      </Container>
    </div>
    <FooterEmp/>
    </>
   
  );
};


export default ManageApplicants