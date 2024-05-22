import React from 'react'
import CommonHeader from '../../Common/Common Layout/CommonHeader'
import CommonFooter from '../../Common/Common Layout/CommonFooter'
import CopyRightNote from '../../Notes/CopyRight/copyRightNote'
import Copyright from '../../Employer/Misc/Copyright'

function CommonCopyRight() {
  return (
    <div>
        <CommonHeader/>
       <Copyright/>
        <CommonFooter/>
    </div>
  )
}

export default CommonCopyRight