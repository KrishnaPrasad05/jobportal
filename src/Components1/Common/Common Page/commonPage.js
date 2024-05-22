import React from 'react'
import CommonDashboard from '../Common Homepage/commonDashboard'
import CommonJobs4U from '../Common Homepage/commonJob4U'
import CommonHeader from '../Common Layout/CommonHeader'
import CommonTopFtd from '../Common Homepage/CommonTopFtd'
import CommonOperation from '../Common Homepage/CommonOperation'
import CommonCard from '../Common Homepage/CommonCard'
import CommonSponComp from '../Common Homepage/CommonCompany'
import FAQPage from '../../Job Seeker/FAQ/FaqPage'
import Comment from '../../HomePage/Section4/comment'
import FaqEmp from '../../Employer/faqEmp'
import CommonFooter from '../Common Layout/CommonFooter'
import Section6 from '../../HomePage/Section6/section6'
import CommonSponCompanies from '../Common Homepage/CommonSponComp'

function CommonPage() {
  return (
    <div>
        <CommonHeader/>
<div style={{marginTop:'7rem'}}>
    <CommonDashboard/>
    <h1 className='text-center mt-5' style={{color:'#2B358C'}}>Jobs For You</h1>
    <CommonJobs4U/>
    <h1 className='text-center mt-5' style={{color:'#2B358C'}}>Top Featured Companies</h1>
    <CommonTopFtd/>
    <CommonOperation/>
    <CommonCard/>
    <Comment/>
    <div style={{marginBottom:'5rem'}}>
    <CommonSponCompanies/>
    </div>
  
   <Section6/>
   <FaqEmp/>
   </div>
   <CommonFooter/>
    </div>
   
  )
}

export default CommonPage