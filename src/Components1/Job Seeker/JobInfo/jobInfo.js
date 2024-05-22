import { Link } from "react-router-dom";
import Footer from "../../Layout/Footer";
import Header from "../../Layout/Header";
import WithHeaderExample2 from "./card1";
import WithHeaderExample from "./card1comp";
import WithHeaderExample3 from './card3';
import { useEffect } from "react";

function JobInfo(){
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });

   
  }, []); 
    return(
        <>
        <Header/>
        <nav aria-label="breadcrumb " style={{backgroundColor: '#E6E7FF',paddingLeft: '10px',top:'3.8rem',fontWeight: 500,fontSize: '16px',position:'fixed',width:'100%',zIndex:1000,height:'30px'}}>
                <ol class="breadcrumb p-1">
                  <li class="breadcrumb-item" aria-current="page"><Link to="/jobseeker-home" style={{textDecoration:'none',color:'#2B358C'}}>Home</Link></li>
                  <li class="breadcrumb-item active" aria-current="page">Job information</li>
                </ol>
              </nav>
              <div style={{marginTop:'7rem'}}>
    
<WithHeaderExample/>
   <WithHeaderExample2/>
   <WithHeaderExample3/>
    
</div>
        <Footer/>
        </>

    );
}
export default JobInfo;