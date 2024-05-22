import React, { useEffect } from 'react'
import Header from './headerExp'
import ContactSection from '../Job Seeker/conRprt/contactForm'
import FooterEmp from './footerEmp'
import { Link } from 'react-router-dom';

function ContactEmp() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  return (
    <div>
        <Header/>
        <nav aria-label="breadcrumb " style={{backgroundColor: '#E6E7FF',paddingLeft: '10px',top:'3.8rem',fontWeight: 500,fontSize: '16px',position:'fixed',width:'100%',zIndex:1001,height:'30px'}}>
                <ol class="breadcrumb p-1">
                  <li class="breadcrumb-item" aria-current="page"><Link to="/employer-home" style={{textDecoration:'none',color:'#2B358C'}}>Home</Link></li>

                  <li class="breadcrumb-item active" aria-current="page">Contact us</li>
                </ol>
              </nav>
        <ContactSection/>
        <FooterEmp/>
    </div>
  )
}

export default ContactEmp