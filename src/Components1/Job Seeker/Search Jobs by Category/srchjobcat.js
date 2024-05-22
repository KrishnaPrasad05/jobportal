import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import JobSearchCatComp from './srchjobcatcomp';
import card1img from '../../../Assets/img/logIn/jobSearch.png'
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import { Link } from 'react-router-dom';

const SearchJobCategories = () => {
  return (
    <>
    <Header/>
    <nav aria-label="breadcrumb " style={{backgroundColor: '#E6E7FF',paddingLeft: '10px',top:'3.8rem',fontWeight: 500,fontSize: '16px',position:'fixed',width:'100%',zIndex:1000,height:'30px'}}>
                <ol class="breadcrumb p-1">
                  <li class="breadcrumb-item" aria-current="page"><Link to="/jobseeker-home" style={{textDecoration:'none',color:'#2B358C'}}>Home</Link></li>
                  <li class="breadcrumb-item active" aria-current="page">Search jobs by categories</li>
                </ol>
              </nav>
      <h1 className="head text-center" style={{color:'#2B358C',marginTop:'7rem'}}>Job Search by Categories</h1>
      <Container className="mt-3">
        <Row className="contain1 row d-flex flex-row">
        <Col className="container1 col">
            <JobSearchCatComp  disp1="block" disp2="none" cardImage={card1img} cardTitle="Full Stack Java" cardContent="Some quick example text to build on the card title and make up the
          bulk of the card's content." cardList1="Content 01" cardList2="Content 02" cardList3="Content 03"/>
            
        </Col>
        <Col className="container1 col">
            <JobSearchCatComp disp1="block" disp2="none" cardImage={card1img} cardTitle="Technical" cardContent="Some quick example text to build on the card title and make up the
          bulk of the card's content." cardList1="Content 01" cardList2="Content 02" cardList3="Content 03"/>
            
        </Col>
        <Col className="container1 col">
            <JobSearchCatComp disp1="block" disp2="none" cardImage={card1img} cardTitle="Production" cardContent="Some quick example text to build on the card title and make up the
          bulk of the card's content." cardList1="Content 01" cardList2="Content 02" cardList3="Content 03"/>
            
        </Col>
        <Col className="container1 col">
            <JobSearchCatComp disp1="block" disp2="none" cardImage={card1img} cardTitle="Research" cardContent="Some quick example text to build on the card title and make up the
          bulk of the card's content." cardList1="Content 01" cardList2="Content 02" cardList3="Content 03"/>
            
        </Col>
        </Row>
        <Row className="contain1 row d-flex flex-row mt-5 mb-5">
        <Col className="container1 col">
            <JobSearchCatComp disp1="block" disp2="none" cardImage={card1img} cardTitle="Science" cardContent="Some quick example text to build on the card title and make up the
          bulk of the card's content." cardList1="Content 01" cardList2="Content 02" cardList3="Content 03"/>
            
        </Col>
        <Col className="container1 col">
            <JobSearchCatComp disp1="block" disp2="none" cardImage={card1img} cardTitle="Tech Asst" cardContent="Some quick example text to build on the card title and make up the
          bulk of the card's content." cardList1="Content 01" cardList2="Content 02" cardList3="Content 03"/>
            
        </Col>
        <Col className="container1 col">
            <JobSearchCatComp disp1="block" disp2="none" cardImage={card1img} cardTitle="Front End Web" cardContent="Some quick example text to build on the card title and make up the
          bulk of the card's content." cardList1="Content 01" cardList2="Content 02" cardList3="Content 03"/>
            
        </Col>
        <Col className="container1 col">
            <JobSearchCatComp disp1="block" disp2="none" cardImage={card1img} cardTitle="Mobile Application" cardContent="Some quick example text to build on the card title and make up the
          bulk of the card's content." cardList1="Content 01" cardList2="Content 02" cardList3="Content 03"/>
            
        </Col>
        </Row>
        </Container>
        <Footer/>
        </>
        );
        }

        export default SearchJobCategories;