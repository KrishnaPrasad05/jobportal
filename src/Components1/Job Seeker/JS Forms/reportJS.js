import React, { useEffect } from 'react'
import Header from '../../Layout/Header'
import ReportSection from '../conRprt/reportForm'
import Footer from '../../Layout/Footer'
function ReportJS() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  return (
    <div>
        <Header/>
        <ReportSection/>
        <Footer/>
    </div>
  )
}

export default ReportJS