import FaqEmp from "../../Employer/faqEmp";
import Section6 from "../../HomePage/Section6/section6";
import React, { useEffect } from 'react';
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import { Link } from "react-router-dom";
function FAQPage(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); 
    return(
        <>
        <Header/>
        <nav aria-label="breadcrumb " style={{backgroundColor: '#E6E7FF',paddingLeft: '10px',top:'3.8rem',fontWeight: 500,fontSize: '16px',position:'fixed',width:'100%',zIndex:1000,height:'30px'}}>
                <ol class="breadcrumb p-1">
                  <li class="breadcrumb-item" aria-current="page"><Link to="/jobseeker-home" style={{textDecoration:'none',color:'#2B358C'}}>Home</Link></li>
                  <li class="breadcrumb-item active" aria-current="page">FAQ</li>
                </ol>
              </nav>
        <div style={{marginTop:'7rem'}}>
<Section6/>
<FaqEmp/>
        </div>

        <Footer/>
        </>
       
    );
}
export default FAQPage; 