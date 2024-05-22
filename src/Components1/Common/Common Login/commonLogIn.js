import { Button, Col, Container, Row } from "react-bootstrap";

import img from '../../../Assets/img/findingJob.jpg'
import img1 from '../../../Assets/img/resumePrep.png'
import img2 from '../../../Assets/img/contactUs.jpg';
import img3 from '../../../Assets/img/jobFiner.png'
import img4 from '../../../Assets/img/index/employer.jpg'
import img5 from '../../../Assets/img/adminImg.png';

import CommonLoginComp from "./commonLogInComp";
import LoginLogo from "../../Job Seeker/Login/headerLog";
import FooterLog from "../../Job Seeker/Login/footerLog";
import CommonHeader from "../Common Layout/CommonHeader";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function CommonLogin(){
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo({ top: 0, behavior: 'smooth' });
    
      }, []);
    return(
        <div>

 <LoginLogo/>
 <Container>
 <Button as={Link} to="/" style={{backgroundColor:'maroon',marginTop:'5px',border:'none',marginLeft:'8px'}}>Back</Button>
 </Container>
 
                <Container style={{marginTop:'1.3rem'}}>
         <CommonLoginComp colour1="#E6E7FF" title1="Job Seeker" image1={img3} content="Are you tired of endlessly searching for the perfect job opportunity? Look no further! Welcome to [Your Website Name], your ultimate destination for finding the career of your dreams effortlessly." btn1="Post a Job Now"
        
                 colour2="#FFF" title2="Employer" image2={img4} content2="Are you tired of struggling to create a standout resume that gets noticed by employers? Say goodbye to the frustration and hello to your ticket to success! Our website is your secret weapon for crafting a powerful resume that lands interviews and opens doors to exciting opportunities." btn2="Tell us About your company"
        
                title3="Admin" image3={img5} content3=" With our user-friendly contact options, you're just a click away from unlocking a world of possibilities. Need assistance? Our dedicated team is standing by, ready to lend a helping hand whenever you need it. Your feedback matters, and we're all ears!" btn3="Contact Us" />
                </Container>
                <FooterLog/>
                </div>
    );
}
export default CommonLogin;