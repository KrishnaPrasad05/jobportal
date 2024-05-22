import Comment from './Section4/comment';
import Operation from './Section2/operation';
import Section1 from './Section1/section1';
import Card from './Section3/card';
import SponComp from './Section5/section5';
import Section6 from './Section6/section6';
import { Container,Row,Col, Breadcrumb } from 'react-bootstrap';
import FaqEmp from '../Employer/faqEmp';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';






function HomePage() {
  return (
   <div>
     <Header/>
    {/*  <div style={{position:'fixed',width:'100%',top:'3.8rem',zIndex:'10000'}}>
     <nav aria-label="breadcrumb " style={{backgroundColor: '#E6E7FF',paddingLeft: '10px',fontWeight: 500,fontSize: '17px'}}>
                <ol class="breadcrumb p-1">
                 
                  <li class="breadcrumb-item active" aria-current="page">Home</li>
                </ol>
              </nav>
     </div> */}
     <nav aria-label="breadcrumb " style={{backgroundColor: '#E6E7FF',paddingLeft: '10px',top:'3.8rem',fontWeight: 500,fontSize: '16px',position:'fixed',width:'100%',zIndex:1000,height:'30px'}}>
                <ol class="breadcrumb p-1">
                 
                  <li class="breadcrumb-item active" aria-current="page">Home</li>
                </ol>
              </nav>
      <div style={{marginTop:'7rem'}}>
      <Section1/>
     <Operation/>
    <Card/>
    <Container>
    <Comment/>
    </Container>
   
    <SponComp/>
    <Section6/>
    <FaqEmp/>
      </div>
     <Footer/>
    </div>

   

   
  );
}

export default HomePage;
