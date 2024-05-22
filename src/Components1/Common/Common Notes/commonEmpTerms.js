import React from 'react'
import CommonHeader from '../../Common/Common Layout/CommonHeader'
import CommonFooter from '../../Common/Common Layout/CommonFooter'
import EmpTerms from '../../Notes/EmpTerms/EmpTerms'
import EmployerTerms from '../../Employer/Misc/EmpTnD'

function CommonEmpTerms() {
  return (
    <div>
        <CommonHeader/>
        <EmployerTerms/>
        <CommonFooter/>
    </div>
  )
}

export default CommonEmpTerms