import React, { useState ,useEffect} from 'react';
import { Form, Button, Modal,Container,Row,Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import contact from '../../../Assets/img/logIn/jobSearch.png';
import user from '../../../Assets/img/logIn/profile.png';
import lock from '../../../Assets/img/logIn/padlock.png';
import check from '../../../Assets/img/check (1).png';
import cmt from '../../../Assets/img/cmt.png';
import cmt1 from '../../../Assets/img/cmt1.png';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProfilePage from './profileJs';
const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: ''
  });



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailureModal, setShowFailureModal] = useState(false);
  const [showEmptyModal, setShowEmptyModal] = useState(false);
  
  const [showPassword, setShowPassword] = useState(false);


  const [credentials, setCredentials] = useState({}); // State to store fetched credentials
  const [loggedInUserId, setLoggedInUserId] = useState(null);

  useEffect(() => {
    // Fetch credentials from JSON server
    fetch('http://localhost:3001/userData')
      .then(response => response.json())
      .then(data => setCredentials(data))
      .catch(error => console.error('Error fetching credentials:', error));
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleCloseSuccessModal = () => setShowSuccessModal(false);
  const handleCloseFailureModal = () => setShowFailureModal(false);
  const handleCloseEmptyModal = () => setShowEmptyModal(false);
  
  const handleEmail=()=>{
    let errors = {};
  
    // Email validation
    if (formData.email.trim() === '') {
      errors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    setFormErrors(errors)
  }

  const handlePass=()=>{
    let errors = {};
       // Password validation
       if (formData.password.trim() === '') {
        errors.password = 'Password is required';
      } 
      setFormErrors(errors)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
  
    // Email validation
    if (formData.email.trim() === '') {
      errors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
  
    // Password validation
    if (formData.password.trim() === '') {
      errors.password = 'Password is required';
    } 
  
    if (Object.keys(errors).length === 0) {
      // Validation successful, show success modal
      const foundCredential = credentials.find(
        credential => credential.email === formData.email && credential.password === formData.password
      );
  
      if (foundCredential) {
        console.log(foundCredential.id);
        setLoggedInUserId(foundCredential.id);
         localStorage.setItem('loggedInUserId', foundCredential.id);
         localStorage.setItem('loggedName', foundCredential.name);
        setShowSuccessModal(true);
        setFormData({
          email: '',
          password: ''
        });
      }
      else if(!foundCredential){
        setShowFailureModal(true);
       
      }
      
    }
    else{
      setShowEmptyModal(true);
    }
  };
  

  return (
    <section>
 <Container style={{backgroundColor:'#E6E7FF',borderRadius:'15px',marginTop:'1.2rem'}} >
 <Button as={Link} to="/logins" style={{backgroundColor:'maroon',marginTop:'10px',border:'none'}}>Back</Button>
   <Row  xs={1} md={2}>
   
       <Col style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
        
       {/* <h3 className='m-3' style={{color:'#2B358C'}}>Why Us?</h3>
           <div class="benefit">
               <div style={{display:'flex'}}>
                   <Image className='me-2' src={check} width={'20px'} height={'20px'}></Image>
                   <p>Better deals</p>
               </div>
               <div style={{display:'flex'}}>
                   <Image className='me-2'src={check} width={'20px'} height={'20px'}></Image>
                   <p>Better deals</p>
               </div>
               <div style={{display:'flex'}}>
                   <Image className='me-2' src={check} width={'20px'} height={'20px'}></Image>
                   <p>Better deals</p>
               </div>
           </div> */}
          
<h3 className='m-3' style={{color:'#2B358C'}}>Why Us?</h3>
<Carousel interval={2500} pause={false} fade controls={false} indicators={false}>
 
 <Carousel.Item>
 <div >
   <Image fluid
     className="d-block w-100 img-fluid"
     src="https://i.pinimg.com/originals/49/f3/73/49f3730c237a56c69fd9d057165378f8.jpg"
     alt="Second slide" thumbnail width={600} height={400} style={{borderRadius:'10px'}}
   /></div>
 </Carousel.Item>
 <Carousel.Item>
 <div >
   <Image fluid
     className="d-block w-100 img-fluid"
     src="https://cc.careersportal.ie/mce/plugins/filemanager/files/communities/jobsearch.png"
     alt="Third slide" thumbnail width={600} height={400} style={{borderRadius:'10px'}}
   /></div> 
 </Carousel.Item>
</Carousel>
       </Col>
       <Col className='p-2' style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
       <div className='p-3' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
<Image src={contact} rounded fluid width={'400px'} height={'70px'}/>
</div>

 <Form onSubmit={handleSubmit}>
   <Form.Group controlId="email" className='mb-3'>
       <div style={{display:'flex'}} >
           <div className='me-2'>
           <Form.Label><Image src={user} width={'20px'} height={'20px'}></Image><span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
           </div>
           <div>
           <Form.Control
       type="text"
       placeholder="Enter email address"
       name="email"
       value={formData.email}
       onKeyUp={handleEmail}
       onChange={handleChange}
       isInvalid={!!formErrors.email}
     />
     <Form.Control.Feedback type="invalid">{formErrors.email}</Form.Control.Feedback>
           </div>
       </div>
    
     
     
   </Form.Group>

   <Form.Group controlId="password" className='mb-3'>
       <div style={{display:'flex'}}>
       <div className='me-2'>
       <Form.Label><Image src={lock} width={'20px'} height={'20px'}></Image><span style={{color:'red',fontSize:'18px'}}>*</span></Form.Label>
       </div>
       <div>
       <div className="password-input-group">
       <Form.Control
         type={showPassword ? "text" : "password"}
         placeholder="Enter password"
         name="password"
         value={formData.password}
         onKeyUp={handlePass}
         onChange={handleChange}
         isInvalid={!!formErrors.password} className='mb-1'
       />
       <Form.Control.Feedback type="invalid">{formErrors.password}</Form.Control.Feedback>
       <Form.Check
         type="checkbox"
         label="Show Password"
         onChange={toggleShowPassword} 
       />
     </div>
       </div>
       </div>
       
     
    
     
   </Form.Group>

   <div className='mb-1' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      
       <div>
       <Button style={{backgroundColor:'transparent',border:'none',marginTop:'-15px',color:'maroon',textDecoration:'underline maroon',fontSize:'14px',cursor:'pointer'}} as={Link} to="/forgotpassword">Forgot Password ?</Button>
       </div>
   </div>


   <div className='mb-2' style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>
   <Button variant="primary" style={{backgroundColor:'#2B358C',border:'none'}} as={Link} to="/register">Register Now</Button>
   <Button variant="primary" type="submit" style={{backgroundColor:'#2B358C',border:'none'}}>Login</Button>
   </div>
   
 </Form>

       </Col>
   </Row>


 
 {/* <Modal show={show} onHide={handleClose}>
   <Modal.Header closeButton>
     <Modal.Title>Modal heading</Modal.Title>
   </Modal.Header>
   <Modal.Body>
   <table border="1" style={{borderCollapse: 'collapse'}}>
       <tr>
           <th style={{border: '1px solid black',padding: '7px'}}>User</th>
           <th style={{border: '1px solid black',padding: '7px'}}>Log In</th>
           <th style={{border: '1px solid black',padding: '7px'}}>Password</th>
       </tr>
       <tr>
          <td style={{border: '1px solid black',padding: '7px'}}>Job Seeker</td>
          <td style={{border: '1px solid black',padding: '7px'}}>user@example.com</td>
          <td style={{border: '1px solid black',padding: '7px'}}>root</td>
          
       </tr>
       <tr>
           <td style={{border: '1px solid black',padding: '7px'}}>Employer</td>
           
           <td style={{border: '1px solid black',padding: '7px'}}>user@example.com</td>
           <td style={{border: '1px solid black',padding: '7px'}}>root</td>
       </tr>
       <tr>
           <td style={{border: '1px solid black',padding: '7px'}}>Admin</td> 
           <td style={{border: '1px solid black',padding: '7px'}}>user@example.com</td>
           <td style={{border: '1px solid black',padding: '7px'}}>root</td>
          
           
       </tr>
     </table>
   </Modal.Body>
   <Modal.Footer>
     <Button variant="secondary" onClick={handleClose}>
       Close
     </Button>
     <Button variant="primary" onClick={handleClose}>
       Save Changes
     </Button>
   </Modal.Footer>
 </Modal> */}
</Container>
<Modal show={showSuccessModal} onHide={handleCloseSuccessModal} centered>
   <Modal.Header closeButton>
     <Modal.Title style={{color:'green',fontWeight:600}}>Login Successful</Modal.Title>
   </Modal.Header>
   <Modal.Body>You have successfully logged in.</Modal.Body>
   <Modal.Footer>
     <Button variant="secondary" as={Link} to="/jobseeker-home">
       Proceed
     </Button>
   </Modal.Footer>
 </Modal>


 <Modal show={showFailureModal} onHide={handleCloseFailureModal} centered>
   <Modal.Header closeButton>
     <Modal.Title style={{color:'#fcd12a',fontWeight:600}}>Login Unsuccessful</Modal.Title>
   </Modal.Header>
   <Modal.Body>You have entered wrong password.</Modal.Body>
 
 </Modal>
 <Modal show={showEmptyModal} onHide={handleCloseEmptyModal} centered>
   <Modal.Header closeButton>
     <Modal.Title style={{color:'maroon',fontWeight:600}}>Login Unsuccessful</Modal.Title>
   </Modal.Header>
   <Modal.Body>Values should not be empty.</Modal.Body>
 
 </Modal>
    </section>
   
  );
};

export default LoginForm;
