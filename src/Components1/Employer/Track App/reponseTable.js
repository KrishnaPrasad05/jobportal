import React, { useEffect, useState } from 'react';
import {  Container, Table, Modal, Button, Form, Image  } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Header from '../headerExp';
import FooterEmp from '../footerEmp';
import { addResponseToServer } from '../../../features/updateSlice';
import { useDispatch } from 'react-redux';
import eye from '../../../Assets/img/eye (1).png'
import action from '../../../Assets/img/trace.png'

function ResponseTable() {
    const dispatch=useDispatch();
    const [userData, setUserData] = useState(null);
    const [compData, setCompData] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedOption, setSelectedOption] = useState('');
    const [showModal, setShowModal] = useState(false);
    const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`https://wry-seemly-berry.glitch.me/response?jobId=${id}`) // Corrected API endpoint
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch user details');
          }
          return response.json();
        })
        .then(data => {
          setUserData(data);
          console.log(data);
        })
        .catch(error => {
          console.error('Error fetching user details:', error);
        });
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      fetch(`https://wry-seemly-berry.glitch.me/users/${id}`) // Corrected API endpoint
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch user details');
          }
          return response.json();
        })
        .then(data => {
          setCompData(data);
          console.log(data);
        })
        .catch(error => {
          console.error('Error fetching user details:', error);
        });
    }
  }, [id]);

  console.log(compData)
  const handleActionClick = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleSubmit = () => {
    
    // Check if both selectedUser and selectedOption are valid
    if (selectedUser && selectedOption) {
      // Prepare the data to be sent in the request body
      const requestData = {
        nameAlert: selectedUser.name,
        option: selectedOption,
        companyName: compData.CompName
      };
  
      // Send a POST request to the server
      fetch('https://wry-seemly-berry.glitch.me/response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to submit response');
        }
        // Handle successful response here if needed
        console.log('Response submitted successfully');
        setShowModal(false); // Close the modal after successful submission
      })
      .catch(error => {
        console.error('Error submitting response:', error);
        // Handle error if needed
      });
    } else {
      // Handle invalid data (e.g., show an error message)
      console.error('Invalid data to submit');
    }
  };
  

  return (
    <>
    <Header/>
    <nav aria-label="breadcrumb " style={{backgroundColor: '#E6E7FF',paddingLeft: '10px',top:'3.8rem',fontWeight: 500,fontSize: '16px',position:'fixed',width:'100%',zIndex:1000,height:'30px'}}>
                <ol class="breadcrumb p-1">
                  <li class="breadcrumb-item" aria-current="page"><Link to="/employer-home" style={{textDecoration:'none',color:'#2B358C'}}>Home</Link></li>
                  <li class="breadcrumb-item active" aria-current="page">Response Table</li>
                </ol>
              </nav>
     <div style={{marginTop:'10rem',marginBottom:'7rem'}}>
   
      <Container>
      <h1 style={{color:'#2B358C',textAlign:'center',marginBottom:'2rem'}}>Response Table</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>Experience</th>
            <th>Resume URL</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userData && userData.map((user, index) => ( // Check if userData is not null or undefined
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.experience}</td>
              <td ><a href={user.resumeUrl} target="_blank" style={{color:'green',textAlign:'center'}} rel="noopener noreferrer"><Image src={eye} style={{width:'20px',height:'20px'}}></Image></a></td>
              <td><Button style={{backgroundColor:'transparent',border:'none'}} variant="primary" onClick={() => handleActionClick(user)}> <Image src={action} style={{width:'20px',height:'20px'}}></Image> </Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
      </Container>
      
    </div>
    <FooterEmp/>

    {/* Modal for Action */}
    <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Action</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Name: {selectedUser && selectedUser.name}</p>
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Select Option</Form.Label>
              <Form.Control as="select" onChange={(e) => setSelectedOption(e.target.value)}>
                <option value="">-- Select --</option>
                <option value="selected">Selected</option>
                <option value="rejected">Rejected</option>
                <option value="waiting list">Waiting List</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{backgroundColor:'maroon'}} variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
          <Button style={{backgroundColor:'#2B358C'}} variant="primary" onClick={handleSubmit}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
   
  );
}

export default ResponseTable;
