import React, { useEffect, useState } from 'react';
import { Container, Row, Col,Button,Nav,Tab } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import amd from '../../../Assets/img/index/comp/amd.png';
import amazon from '../../../Assets/img/index/comp/amazon-pay.png';
import brother from '../../../Assets/img/index/comp/brother.png';
import ebay from '../../../Assets/img/index/comp/ebay.png';
import fedex from '../../../Assets/img/index/comp/fedex.png';
import htc from '../../../Assets/img/index/comp/htc.png';
import ea from '../../../Assets/img/index/comp/electronics-arts.png';
import ibm from '../../../Assets/img/index/comp/ibm.png';
import intel from '../../../Assets/img/index/comp/intel.png';
import lenovo from '../../../Assets/img/index/comp/lenovo.png';
import sam from '../../../Assets/img/index/comp/samsung.png';
import md from '../../../Assets/img/index/comp/mcdonalds.png';
import ExploreComp from './exploreComp';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanyAsync } from '../../../features/dataSlice';

function ExploreCategories(){
  const [key, setKey] = useState('tab1');
  const dispatch = useDispatch();
  const users = useSelector((state) => state.data.users.filter(user => user.compType === "Unicorn").slice(0, 12));
  const users1 = useSelector((state) => state.data.users.filter(user => user.compType === "MNC").slice(0, 12));
  const users2 = useSelector((state) => state.data.users.filter(user => user.compType === "Startup").slice(0, 12));
  const users3 = useSelector((state) => state.data.users.filter(user => user.compType === "Product").slice(0, 12));
  const users4 = useSelector((state) => state.data.users.filter(user => user.compType === "Service").slice(0, 12));
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);

  useEffect(() => {
    dispatch(fetchCompanyAsync());
  }, [dispatch]);
  return (
  
    <>
    <Header/>
    <nav aria-label="breadcrumb " style={{backgroundColor: '#E6E7FF',paddingLeft: '10px',top:'3.8rem',fontWeight: 500,fontSize: '16px',position:'fixed',width:'100%',zIndex:1000,height:'30px'}}>
                <ol class="breadcrumb p-1">
                  <li class="breadcrumb-item" aria-current="page"><Link to="/jobseeker-home" style={{textDecoration:'none',color:'#2B358C'}}>Home</Link></li>
                  <li class="breadcrumb-item active" aria-current="page">Explore Categories</li>
                </ol>
              </nav>
      <style>{`
    #a .nav-link.active {
      background-color: #2B358C !important;
      color: white;
    }
    #a .nav-link {
        color: #2B358C;
      }
  `}</style>
      <h1 className="head text-center" style={{color:'#2B358C',marginTop:'6rem'}}>Explore Categories</h1>
     
     
      <Container className="contain container mt-2">
      <Tab.Container  activeKey={key} onSelect={(k) => setKey(k)} >
      <Nav fill id="a" variant="pills" className="mb-3" style={{color:'black',paddingTop:'10px'}}>
        <Nav.Item >
          <Nav.Link eventKey="tab1" >Unicorn</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab2">MNC</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab3">Startup</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab4">Product</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab5">Service</Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey="tab1">
     
         <Container className='mt-3'>
    <Row >
        {users.map((user) => (<Col key={user.id} className='mt-3'>

        <ExploreComp dest={`/companydetails/${user.id}`} cardImage={user.Compfile} title={user.CompanyName} content="4.2 | 4.1k + reviews" comp={user.compType}/>

            </Col>   ))}
            </Row>
    </Container>
          </Tab.Pane>
        <Tab.Pane eventKey="tab2">
        <Container className='mt-3'>
    <Row >
        {users1.map((user) => (<Col key={user.id} className='mt-3'>

        <ExploreComp dest={`/companydetails/${user.id}`} cardImage={user.Compfile} title={user.CompanyName} content="4.2 | 4.1k + reviews" comp={user.compType}/>

            </Col>   ))}
            </Row>
    </Container>
          </Tab.Pane>
        <Tab.Pane eventKey="tab3">
        <Container className='mt-3'>
    <Row >
        {users2.map((user) => (<Col key={user.id} className='mt-3'>

        <ExploreComp dest={`/companydetails/${user.id}`} cardImage={user.Compfile} title={user.CompanyName} content="4.2 | 4.1k + reviews" comp={user.compType}/>

            </Col>   ))}
            </Row>
    </Container>
          </Tab.Pane>
        <Tab.Pane eventKey="tab4">
        <Container className='mt-3'>
    <Row >
        {users3.map((user) => (<Col key={user.id} className='mt-3'>

        <ExploreComp dest={`/companydetails/${user.id}`} cardImage={user.Compfile} title={user.CompanyName} content="4.2 | 4.1k + reviews" comp={user.compType}/>

            </Col>   ))}
            </Row>
    </Container>
          </Tab.Pane>
        <Tab.Pane eventKey="tab5">
        <Container className='mt-3'>
    <Row >
        {users4.map((user) => (<Col key={user.id} className='mt-3'>

        <ExploreComp dest={`/companydetails/${user.id}`} cardImage={user.Compfile} title={user.CompanyName} content="4.2 | 4.1k + reviews" comp={user.compType}/>

            </Col>   ))}
            </Row>
    </Container>
          </Tab.Pane>
        </Tab.Content>
        </Tab.Container>
       
        </Container>

        <div className="container d-flex justify-content-center mt-3 mb-3" style={{ height: '40px' }} id="ctgBtn">
        <Button variant="primary" data-bs-toggle="modal" as={Link} to="/viewallcompanies" data-bs-target="#exampleModal" style={{ backgroundColor: '#2B358C' }}>
          View all companies
        </Button>
      </div>
      <Footer/>
    </>
  );
}
export default ExploreCategories;