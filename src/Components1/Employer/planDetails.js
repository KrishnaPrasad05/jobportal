import { Col, Container, Row } from "react-bootstrap";
import Section2AdComp from "../Admin/Section2Ad/section2AdComp";
import OperationComp from "../HomePage/Section2/operationComp";
import img from '../../Assets/img/findingJob.jpg'
import img1 from '../../Assets/img/resumePrep.png'
import img2 from '../../Assets/img/contactUs.jpg';
import img3 from '../../Assets/img/coin.png'
import img4 from '../../Assets/img/coin (1).png'
import img5 from '../../Assets/img/coin (2).png';

import PlanComp from "./planComp";

function PlanDetails(){
    return(
        <div>
        
        <h1 className="head text-center mt-5 " style={{color:'#2B358C'}}>Available Plans</h1>
                <Container  className='mt-2 mb-5'>
         <PlanComp colour1="#E6E7FF" title1="&#8377; 1600 per month" image1={img4} content="Are you tired of endlessly searching for the perfect job opportunity? Look no further! Welcome to [Your Website Name], your ultimate destination for finding the career of your dreams effortlessly." btn1="Subscribe"
        
                 colour2="#FFF" title2="&#8377; 1000 per month" image2={img5} content2="Are you tired of struggling to create a standout resume that gets noticed by employers? Say goodbye to the frustration and hello to your ticket to success! Our website is your secret weapon for crafting a powerful resume that lands interviews and opens doors to exciting opportunities." btn2="Subscribe"
        
                title3="&#8377; 800 per month" image3={img3} content3=" With our user-friendly contact options, you're just a click away from unlocking a world of possibilities. Need assistance? Our dedicated team is standing by, ready to lend a helping hand whenever you need it. Your feedback matters, and we're all ears!" btn3="Subscribe" />
                </Container>
                </div>
    );
}
export default PlanDetails;