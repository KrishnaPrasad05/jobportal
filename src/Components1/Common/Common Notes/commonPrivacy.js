import React from 'react'
import CommonHeader from '../../Common/Common Layout/CommonHeader'
import PrivacyPolicies from '../../Notes/PrivacyPolicy/privacyPolicies'
import CommonFooter from '../../Common/Common Layout/CommonFooter'
import PrivacyPolicy from '../../Employer/Misc/Privacy'

function CommonPrivacy() {
  return (
    <div>
        <CommonHeader/>
        <PrivacyPolicy/>
        <CommonFooter/>
    </div>
  )
}

export default CommonPrivacy