import React from 'react'
import CommonHeader from '../../Common/Common Layout/CommonHeader'
import CommonFooter from '../../Common/Common Layout/CommonFooter'
import CommunityGuidelines from '../../Notes/Community Guidelines/CommunityGuidelines'
import CommGuide from '../../Employer/Misc/Community'

function CommonCmntyGuide() {
  return (
    <div>
    <CommonHeader/>
    <CommGuide/>
    <CommonFooter/>
    </div>
  )
}

export default CommonCmntyGuide