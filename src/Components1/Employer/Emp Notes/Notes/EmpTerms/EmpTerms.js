import React from 'react'
import EmployerTerms from '../../../../Employer/Misc/EmpTnD'
import Header from '../../../headerExp'
import Footer from '../../../../Layout/Footer'
import { Link } from 'react-router-dom'
import FooterEmp from '../../../footerEmp'

function EmpTermsEmp() {
  return (
    <>
    <Header/>
    <nav aria-label="breadcrumb " style={{backgroundColor: '#E6E7FF',paddingLeft: '10px',marginTop:'3.8rem',fontWeight: 500,fontSize: '17px'}}>
                <ol class="breadcrumb p-1">
              
                  <li class="breadcrumb-item" aria-current="page"><Link to="/employer-home" style={{textDecoration:'none',color:'#2B358C'}}>Home</Link></li>
                  <li class="breadcrumb-item active" aria-current="page">Employers Terms</li>
                </ol>
              </nav>
    <div>
        <EmployerTerms/>
    </div>
   <FooterEmp/>
    </>
   
  )
}

export default EmpTermsEmp