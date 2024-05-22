import Comment from "../HomePage/Section4/comment";
import SponComp from "../HomePage/Section5/section5";
import FaqEmp from './faqEmp';
import HeaderEmp from '../../Components1/Employer/headerExp';

import CardEmp from "./cardsEmp";
import PlanDetails from "./planDetails";
import FooterEmp from "./footerEmp";
import { Link } from "react-router-dom";

function EmployerLandingPage(){
    return(
        <>
          <HeaderEmp/>
          <nav aria-label="breadcrumb " style={{backgroundColor: '#E6E7FF',paddingLeft: '10px',top:'3.8rem',fontWeight: 500,fontSize: '16px',position:'fixed',width:'100%',zIndex:1000,height:'30px'}}>
                <ol class="breadcrumb p-1">
                 
                  <li class="breadcrumb-item active" aria-current="page">Home</li>
                </ol>
              </nav>
        <div style={{marginTop:'7rem'}}>
<CardEmp/>
<PlanDetails/>
<Comment/>
<SponComp/>
<FaqEmp/>
</div>
<FooterEmp/>
        </>
      
       

    );
}
export default EmployerLandingPage;