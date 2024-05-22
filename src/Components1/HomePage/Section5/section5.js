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
import ExploreComp from '../../Job Seeker/Explore/exploreComp';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanyAsync } from '../../../features/dataSlice';


function SponComp(){
  const [key, setKey] = useState('tab1');
  const dispatch = useDispatch();
  const users = useSelector((state) => state.data.users.slice(0, 12));
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);

  useEffect(() => {
    dispatch(fetchCompanyAsync());
  }, [dispatch]);
  return (
    <>
     <style>{`
    #a .nav-link.active {
      background-color: #2B358C !important;
      color: white;
    }
    #a .nav-link {
      color: #2B358C;
    }
  `}</style>
      <h1 className="head text-center" style={{color:'#2B358C',marginTop:'4rem'}}>Sponsored Companies</h1>
     
     
      <Container className='mt-3' >
    <Row >
        {users.map((user) => (<Col key={user.id} className='mt-3 mb-4'>

        <ExploreComp dest={`/companydetails/${user.id}`} cardImage={user.Compfile} title={user.CompanyName} content="4.2 | 4.1k + reviews" comp={user.compType}/>

            </Col>   ))}
            </Row>
    </Container>

       {/*  <div className="container d-flex justify-content-center mt-3 mb-5" style={{ height: '40px' }} id="ctgBtn">
        <Button variant="primary" data-bs-toggle="modal" as={Link} to="/viewallcompanies" data-bs-target="#exampleModal" style={{ backgroundColor: '#2B358C' }}>
          View all companies
        </Button>
      </div> */}
    </>
  );
}
export default SponComp;