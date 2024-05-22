import Card from 'react-bootstrap/Card';
import OperationComp from '../../HomePage/Section2/operationComp';
import img from '../../../Assets/img/findingJob.jpg'
import img1 from '../../../Assets/img/resumePrep.png'
import img2 from '../../../Assets/img/contactUs.jpg';
import img3 from '../../../Assets/img/postJob.jpg'
import img4 from '../../../Assets/img/abtCompany.jpg'
import img5 from '../../../Assets/img/contactUsEmp.webp';
import { Container, Row, Col,Button } from 'react-bootstrap';
function CommonOperation(){
    return(
        <section>
<div>
<h1 className="head text-center mt-5 " style={{color:'#2B358C'}}>For Job Seekers!</h1>
        <Container  className='mt-2 mb-5'>
 <OperationComp colour1="#FFF" dest1="/logins" title1="Discover Your Dream Job with Ease!" image1={img} content="Are you tired of endlessly searching for the perfect job opportunity? Look no further! Welcome to WorkQuake, your ultimate destination for finding the career of your dreams effortlessly." btn1="Find a Job Now"

         colour2="#E6E7FF" dest2="/logins" title2="Craft an Exceptional Resume with Us!" image2={img1} content2="Are you tired of struggling to create a standout resume that gets noticed by employers? Say goodbye to the frustration and hello to your ticket to success! Our website is your secret weapon for crafting a powerful resume that lands interviews and opens doors to exciting opportunities." btn2="Build a resume now"

        title3="Connect with Us Anytime, Anywhere!" dest3="/logins" image3={img2} content3=" With our user-friendly contact options, you're just a click away from unlocking a world of possibilities. Need assistance? Our dedicated team is standing by, ready to lend a helping hand whenever you need it. Your feedback matters, and we're all ears!" btn3="Contact Us" />
        </Container>
        </div>
        <div>
<h1 className="head text-center mt-5 " style={{color:'#2B358C'}}>For Employers!</h1>
        <Container  className='mt-2 mb-5'>
 <OperationComp colour1="#E6E7FF" dest1="/logins" title1="Discover Your Dream Job with Ease!" image1={img3} content="Are you tired of endlessly searching for the perfect job opportunity? Look no further! Welcome to WorkQuake, your ultimate destination for finding the career of your dreams effortlessly." btn1="Post a Job Now"

         colour2="#FFF" dest2="/logins" title2="Craft an Exceptional Resume with Us!" image2={img4} content2="Are you tired of struggling to create a standout resume that gets noticed by employers? Say goodbye to the frustration and hello to your ticket to success! Our website is your secret weapon for crafting a powerful resume that lands interviews and opens doors to exciting opportunities." btn2="Tell us About your company"

        title3="Connect with Us Anytime, Anywhere!" dest3="/logins" image3={img5} content3=" With our user-friendly contact options, you're just a click away from unlocking a world of possibilities. Need assistance? Our dedicated team is standing by, ready to lend a helping hand whenever you need it. Your feedback matters, and we're all ears!" btn3="Contact Us" />
        </Container>
        </div>
        </section>
        
        
       

    );
}
export default CommonOperation;