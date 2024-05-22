import Card from 'react-bootstrap/Card';


import img3 from '../../Assets/img/postJob.jpg'
import img4 from '../../Assets/img/abtCompany.jpg'
import img5 from '../../Assets/img/contactUsEmp.webp';
import { Container, Row, Col,Button } from 'react-bootstrap';
import CardEmpComp from './cardsEmpComp';
function CardEmp(){
    return(
        <section>
<div>

<h1 className="head text-center mt-2 " style={{color:'#2B358C'}}>For Employers!</h1>
        <Container  className='mt-2 mb-5'>
 <CardEmpComp colour1="#E6E7FF" title1="Connect with Talent: Unlock Your Perfect Match!" image1={img3} content="Post your job vacancies on our website and unlock access to top-tier talent. Our platform connects employers with the best-suited candidates, ensuring you find the perfect match for your organization. Trust us to deliver exceptional employees who align with your company's goals and values." btn1="Post a Job Now"

         colour2="#FFF" title2="Open Doors: Share Your Company's Story & Reach Everyone!" image2={img4} content2="Share your company's details with us, and we'll make them available to everyone. By posting a vacancy on our website, you gain access to our extensive network and ensure that your job opening reaches the best potential candidates. Let us help you find the perfect fit for your team." btn2="Tell us About your company"

        title3="Connect with Us Anytime, Anywhere!" image3={img5} content3=" With our user-friendly contact options, you're just a click away from unlocking a world of possibilities. Need assistance? Our dedicated team is standing by, ready to lend a helping hand whenever you need it. Your feedback matters, and we're all ears!" btn3="Contact Us" />
        </Container>
        </div>
        </section>
        
        
       

    );
}
export default CardEmp;