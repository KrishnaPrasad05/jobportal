import React from 'react'
import CommonHeader from '../../Common/Common Layout/CommonHeader'
import CommonFooter from '../../Common/Common Layout/CommonFooter'
import JSTerms from '../../Notes/JSTerms/JSTerms'
import JobSeekerTerms from '../../Employer/Misc/JobSeekerTerms'

function CommonJSTerms() {
  return (
    <div>
        <CommonHeader/>
        <JobSeekerTerms/>
        <CommonFooter/>
    </div>
  )
}

export default CommonJSTerms