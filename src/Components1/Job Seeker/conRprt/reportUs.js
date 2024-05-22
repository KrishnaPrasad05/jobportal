import React, { useEffect } from 'react';
import ConRprtComp from './conRprtComp';
import contact from '../../../Assets/img/contact.jpg';
import report from '../../../Assets/img/Fraud-Alert.webp';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import { Link } from 'react-router-dom';

function ReportUs(){
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
    return(
        <>
        <Header/>
        <nav aria-label="breadcrumb " style={{backgroundColor: '#E6E7FF',paddingLeft: '10px',marginTop:'3.8rem',fontWeight: 500,fontSize: '17px'}}>
                <ol class="breadcrumb p-1">
        
                  <li class="breadcrumb-item" aria-current="page"><Link to="/" style={{textDecoration:'none',color:'#2B358C'}}>Home</Link></li>
                  <li class="breadcrumb-item" aria-current="page"><Link to="/profilejs" style={{textDecoration:'none',color:'#2B358C'}}>Profile</Link></li>
                  <li class="breadcrumb-item active" aria-current="page">Report Us</li>
                </ol>
              </nav>
        <div style={{marginTop:'3rem'}}>
        
        <ConRprtComp description="Query to be answered" image={report} />
        </div>
        <Footer/>
        </>
        
        
    );
}
export default ReportUs;