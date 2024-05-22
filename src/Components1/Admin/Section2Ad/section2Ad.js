import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
import Section2AdComp from './section2AdComp';
import CustomNavbar from '../HeaderAdmin/HeaderAd';
import FooterAdmin from '../HeaderAdmin/FooterAd';
import { addDataAsync, deleteDataAsync, fetchEmpAnAsync, fetchJSAnAsync, setSelectedData } from '../../../features/dataSlice';
import MyVerticallyCenteredModal from '../updateModal';
import { addIssueToServer, getIssuesFromServer, setSelectedIssue } from '../../../features/updateSlice';
import DeleteTask from '../deleteModal';
function Section2Ad(){
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: '', ancmnt: '', category: '' });
  const [formDataEmp, setFormDataEmp] = useState({ nameEmp: '', ancmntEmp: '' });
  const [selectedData,setSelectedData]=useState(null);
  const {issuesList} = useSelector((state)=>state.issues);
  const [deleteModalShow, setDeleteModalShow] = React.useState(false);
  const [IssueToDelete, setIssueToDelete] = useState(null);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  
  const handleChangeEmp = (e) => {
    setFormDataEmp({ ...formDataEmp, [e.target.name]: e.target.value });
  };

  const [modalShow,setModalShow]=useState(false);

  let updateAnnouncement =(issue)=>{
    dispatch(setSelectedIssue(issue));
    console.log(setSelectedData)
    setModalShow(true);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addIssueToServer({
      name:formData.name,
      ancmnt:formData.ancmnt,
      category: formData.category
    }));
    setFormData({ name: '', ancmnt: '', category: '' });
  };

 /*  const handleSubmitEmp = (e) => {
    e.preventDefault();
    dispatch(addDataAsync(formDataEmp));
    setFormDataEmp({ nameEmp: '', ancmntEmp: '' });
  };

  const handleDeleteClick = (id) => {
    dispatch(deleteDataAsync(id));
  }; */

  useEffect(() => {
   dispatch(getIssuesFromServer());
  }, [dispatch]);

  const users = useSelector((state) => state.data.users);
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);

/*   const jobSeekerUsers = users.filter(issue => issue.name);
  const employeeUsers = users.filter(user => user.nameEmp); */
    return(
      <div>
        <CustomNavbar/>
      <Container style={{marginTop:'5rem',minHeight:'100vh'}}>
        <Row>
          <Col>
            <Container>
              <h2 style={{textAlign:'center',color:'#2B358C'}}>Post Job Seeker's Announcement</h2>
              <Form onSubmit={handleSubmit} style={{ border: '1px solid black', padding: '10px', borderRadius: '10px', marginBottom: '20px' }}>
              <Row>
                <Col>
                <Form.Group controlId="formName" className='mb-1'>
                  <Form.Label style={{ textAlign: 'start' }}>Title</Form.Label>
                  <Form.Control type="text" name="name" placeholder="Enter title" value={formData.name} onChange={handleChange} />
                </Form.Group>
                </Col>
                <Col>
                <Form.Label style={{ textAlign: 'start' }}>Title</Form.Label>
                <Form.Select name="category" aria-label="Default select example" value={formData.category} onChange={handleChange}>
                      <option value="">Select category</option>
                      <option value="Job Seeker">Job Seeker</option>
                      <option value="Employer">Employer</option>
                    </Form.Select>

                </Col>
              </Row>
             
                
                <Form.Group controlId="formAcmnt">
                  <Form.Label>Announcement</Form.Label>
                  <Form.Control type="text" name="ancmnt" placeholder="Enter announcement" value={formData.ancmnt} onChange={handleChange} />
                </Form.Group>
                <Button className='mt-3 mb-1' variant="primary" type="submit" style={{backgroundColor:'#2B358C',border:'none'}}> 
                  Submit
                </Button>
              </Form>
            </Container>
            <Container>
            <Row>
  {issuesList && issuesList.map((issue, index) => (
    <Col  xs={12} lg={6}>
      <Card style={{ marginBottom: '10px' }}>
        <Card.Header style={{ backgroundColor: '#E6E7FF' }}>{issue.category} Announcement</Card.Header>
        <Card.Body>
          <Card.Title>{issue.name}</Card.Title>
          <Card.Text>{issue.ancmnt}</Card.Text>
          <Button variant="info" style={{ backgroundColor: '#2B358C', color: 'white', border: 'none' }} onClick={() => updateAnnouncement(issue)}>Update</Button>{' '}
          <Button variant="danger" onClick={() => { setIssueToDelete(issue); setDeleteModalShow(true); }} style={{ backgroundColor: 'maroon', border: 'none' }}>Delete</Button>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
              
            </Container>
          </Col>
         
        </Row>
      </Container>
      <div style={{width:'100%'}}>
      <FooterAdmin/>
      </div>
      
      <MyVerticallyCenteredModal show={modalShow} onHide={()=>setModalShow(false)} />
      <DeleteTask show={deleteModalShow} onHide={() => {  setDeleteModalShow(false); setIssueToDelete(null);}} issue={IssueToDelete}/>
    </div>

    );
}
export default Section2Ad;