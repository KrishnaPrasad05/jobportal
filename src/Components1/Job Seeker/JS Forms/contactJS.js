import React, { useEffect } from 'react'
import Header from '../../Layout/Header'

import Footer from '../../Layout/Footer'
import ContactSection from '../conRprt/contactForm'
function ContactJS() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  return (
    <div>
        <Header/>
       <ContactSection/>
        <Footer/>
    </div>
  )
}

export default ContactJS