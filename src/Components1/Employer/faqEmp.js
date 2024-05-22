import { Container, Image } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import img1 from '../../Assets/img/ss/srchE.png'
import img2 from '../../Assets/img/ss/mngPst.png'
import img3 from '../../Assets/img/ss/man.png'
import img4 from '../../Assets/img/ss/profE.png'
import img5 from '../../Assets/img/ss/pst.png'

function FaqEmp() {
  return (
    <Container >
      <h1 style={{color:'#2B358C',marginTop:'2rem',textAlign:'center'}}>FAQ Employers</h1>
<Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header flush style={{backgroundColor:'#E6E7FF'}}>Question 1: How do I post a job opening?</Accordion.Header>
        <Accordion.Body >
          <p>To post a job opening, log in to your employer account and navigate to the job posting section.</p>
        <Image src={img5} style={{width:'900px',height:'350px',padding:'10px'}} className='img-fluid'/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header> Question 2: How can I search for candidates?</Accordion.Header>
        <Accordion.Body>
          <p> You can search for candidates in the candidate database by using various filters and keywords.</p>
        <Image src={img1} style={{width:'900px',height:'350px',padding:'10px'}} className='img-fluid'/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header> Question 3: Can I repost a job opening?</Accordion.Header>
        <Accordion.Body>
          <p>Yes, you can repost a job opening by going to your job postings and selecting the repost option.</p>
        <Image src={img2} style={{width:'900px',height:'350px',padding:'10px'}} className='img-fluid'/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header> Question 4: How do I manage applications?</Accordion.Header>
        <Accordion.Body>
          <p>You can view and manage applications in the applications section of your employer dashboard.</p>
        <Image src={img3} style={{width:'900px',height:'350px',padding:'10px'}} className='img-fluid'/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Question 5: How do I edit my company profile?</Accordion.Header>
        <Accordion.Body>
          <p>Navigate to the company settings in your account to edit your company profile information.</p>
        <Image src={img4} style={{width:'900px',height:'350px',padding:'10px'}} className='img-fluid'/>
        </Accordion.Body>
      </Accordion.Item>
     
     
    </Accordion>
    </Container>
    
  );
}

export default FaqEmp;