import React from 'react'
import CommonLandingPage from './commonLand'
import CommonLogin from '../Common Login/commonLogIn'
import LoginPage from '../../Job Seeker/Login/loginPage'
import EmpLoginPage from '../../Employer/Employer Login/empLogin'
import EmpRegistration from '../../Employer/Employer Login/empRegisterPage'
import { Route, Routes } from 'react-router-dom'
import CommonPage from '../Common Page/commonPage'

function CommonHomePage() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<CommonPage/>}/>
      <Route path="/logins" element={<CommonLogin/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/employerlogin" element={<EmpLoginPage/>}/>
      <Route path="/employer-register" element={<EmpRegistration/>}/>
     {/*  <Route path="/communityguidelines" element={<comm/>}/>
      <Route path="/copyright" element={<Copyright/>}/>
      <Route path="/employerterms" element={<EmployerTerms/>}/>
      <Route path="/jobseekerterms" element={<JobSeekerTerms/>}/>
      <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
      <Route path="/faqpage" element={<FAQPage/>}/>
      <Route path="/sitemap" element={<SiteMap/>}/> */}
    </Routes>
   
  </div> 
  )
}

export default CommonHomePage