import { Container,Image } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import img1 from '../../../Assets/img/ss/reg.png'
import img2 from '../../../Assets/img/ss/res1.png'
import img3 from '../../../Assets/img/ss/res2.png'
import img4 from '../../../Assets/img/ss/res3.png'
import img5 from '../../../Assets/img/ss/res4.png'
import img6 from '../../../Assets/img/ss/srchJS.png'
import img7 from '../../../Assets/img/ss/mulJobs.png'
import img8 from '../../../Assets/img/ss/profJS.png'
function Section6() {
  return (
    <Container>
      <h1 style={{color:'#2B358C',marginTop:'2rem',textAlign:'center'}}>FAQ JobSeekers</h1>
<Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header flush style={{backgroundColor:'#E6E7FF'}}>Question 1: How do I create an account?</Accordion.Header>
        <Accordion.Body >
        <Image src={img1} style={{width:'900px',height:'350px',padding:'10px'}} className='img-fluid'/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Question 2: How can I upload my resume?</Accordion.Header>
        <Accordion.Body>
        <Image src={img2} style={{width:'900px',height:'350px',padding:'10px'}} className='img-fluid'/>
        <Image src={img3} style={{width:'900px',height:'350px',padding:'10px'}} className='img-fluid'/>
        <Image src={img4} style={{width:'900px',height:'350px',padding:'10px'}} className='img-fluid'/>
        <Image src={img5} style={{width:'900px',height:'350px',padding:'10px'}} className='img-fluid'/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header> Question 3: How do I search for jobs?</Accordion.Header>
        <Accordion.Body>
        <Image src={img6} style={{width:'900px',height:'350px',padding:'10px'}} className='img-fluid'/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Question 4: Can I apply for multiple jobs simultaneously?</Accordion.Header>
        <Accordion.Body>
        <Image src={img7} style={{width:'900px',height:'350px',padding:'10px'}} className='img-fluid'/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Question 5: How do I edit my profile information?</Accordion.Header>
        <Accordion.Body>
        <Image src={img8} style={{width:'900px',height:'350px',padding:'10px'}} className='img-fluid'/>
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
    </Container>
    
  );
}

export default Section6;