import React, { useEffect } from 'react'
import FooterEmp from './footerEmp'
import Header from './headerExp'
import FaqEmp from './faqEmp'
import { Link } from 'react-router-dom'

function EmployerFAQ() {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo({ top: 0, behavior: 'smooth' });
    
     
      }, []);
  return (
    <div>
        <Header/>
        <nav aria-label="breadcrumb " style={{backgroundColor: '#E6E7FF',paddingLeft: '10px',top:'3.8rem',fontWeight: 500,fontSize: '16px',position:'fixed',width:'100%',zIndex:1001,height:'30px'}}>
                <ol class="breadcrumb p-1">
                  <li class="breadcrumb-item" aria-current="page"><Link to="/employer-home" style={{textDecoration:'none',color:'#2B358C'}}>Home</Link></li>

                  <li class="breadcrumb-item active" aria-current="page">FAQ</li>
                </ol>
              </nav>
              <div style={{marginTop:'7rem'}}>
              <FaqEmp/>
              </div>
       
        <FooterEmp/>
    </div>
  )
}

export default EmployerFAQ