import React, { useEffect } from 'react'
import CommonHeader from '../../Common/Common Layout/CommonHeader'
import CommonFooter from '../../Common/Common Layout/CommonFooter'
import CommentSection from '../../HomePage/Section4/commentSection'

function CommonComment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  return (
    <div>
        <CommonHeader/>
        <CommentSection/>
        <CommonFooter/>
    </div>
  )
}

export default CommonComment