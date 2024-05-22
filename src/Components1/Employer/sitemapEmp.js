import React, { useEffect } from 'react'
import Header from './headerExp'
import SiteMap from '../Job Seeker/SiteMap/SiteMap'
import FooterEmp from './footerEmp'
import { Link } from 'react-router-dom';
import contact1 from '../../Assets/img/mm job seek.png';
import contact2 from '../../Assets/img/Job Portal - Employer.png';
import contact3 from '../../Assets/img/adminMM.png';
import Image from 'react-bootstrap/Image';
import { Container, Row } from 'react-bootstrap';

function SitemapEmp() {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo({ top: 0, behavior: 'smooth' });
    
     
      }, []);
  return (
    <div>
        <Header/>
        <nav aria-label="breadcrumb " style={{backgroundColor: '#E6E7FF',paddingLeft: '10px',top:'3.8rem',fontWeight: 500,fontSize: '16px',position:'fixed',width:'100%',zIndex:1001,height:'30px'}}>
                <ol class="breadcrumb p-1">
                  <li class="breadcrumb-item" aria-current="page"><Link to="/employer-home" style={{textDecoration:'none',color:'#2B358C'}}>Home</Link></li>

                  <li class="breadcrumb-item active" aria-current="page">FAQ</li>
                </ol>
              </nav>
              <Container>
<Row>
    <h1 style={{color: '#2B358C',marginTop: '7rem'}} className='text-center'>Site Map (Job Seeker)</h1>
    <Image src={contact1} rounded fluid />
    </Row>
    <h1 style={{color: '#2B358C',marginTop: '3rem'}} className='text-center'>Site Map (Employer)</h1>
    <Row>
    <Image src={contact2} rounded fluid />
    </Row>
    <h1 style={{color: '#2B358C',marginTop: '3rem'}} className='text-center'>Site Map (Admin)</h1>
    <Row>
    <Image src={contact3} rounded fluid />
    </Row>
</Container>
        <FooterEmp/>
    </div>
  )
}

export default SitemapEmp