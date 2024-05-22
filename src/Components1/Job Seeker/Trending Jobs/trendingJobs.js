import React from 'react'
import Header from '../../../Components1/Layout/Header';
import Footer from '../../../Components1/Layout/Footer';
import Card from '../../HomePage/Section3/card';
import { Link } from 'react-router-dom';
function TrendingJobs() {
  return (
    <>
    <Header/>
    <nav aria-label="breadcrumb " style={{backgroundColor: '#E6E7FF',paddingLeft: '10px',top:'3.8rem',fontWeight: 500,fontSize: '16px',position:'fixed',width:'100%',zIndex:1000,height:'30px'}}>
                <ol class="breadcrumb p-1">
                  <li class="breadcrumb-item" aria-current="page"><Link to="/jobseeker-home" style={{textDecoration:'none',color:'#2B358C'}}>Home</Link></li>
                  <li class="breadcrumb-item active" aria-current="page">Trending Jobs</li>
                </ol>
              </nav>
    <div style={{marginTop:'7rem'}}>
    <Card/>
    </div>

   <Footer/>
    </>
   
  )
}

export default TrendingJobs