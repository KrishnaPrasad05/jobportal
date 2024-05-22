import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Section1CompAd from './section1CompAd';
import comp from '../../../Assets/img/company.jpg'
import CustomNavbar from '../HeaderAdmin/HeaderAd';
import FooterAdmin from '../HeaderAdmin/FooterAd';
import { fetchJobPostAsync } from '../../../features/dataSlice';
import { useDispatch, useSelector } from 'react-redux';
function Section1Ad(){
    
    const dispatch = useDispatch();
  const users = useSelector((state) => state.data.users);
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);

  useEffect(() => {
    dispatch(fetchJobPostAsync());
  }, [dispatch]);
    return (
        <>
        <CustomNavbar/>
        <section id="section1" style={{marginTop:'5rem'}}>
 <h1 className="head text-center mt-5" style={{color:'#2B358C'}}>Job Listings Approval</h1>
 <Container>
    {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
        <Row className='d-flex flex-row justify-content-center mt-5'>
        {users.map((user) => (<Col className='m-1' key={user.Role}>
            <Section1CompAd clr="#2B358C" dest1={`/joblistings/${user.id}`} image={comp} title={user.Role} detail={user.jobDesc.split(' ').slice(0, 20).join(' ')} jobName={user.CompName} compName={`${user.Qual} - ${user.Sal} - ${user.Loc}`} btn1="About Company"/>
        </Col>))}
        </Row>
        </Container>
    
        </section>
        <FooterAdmin/>
        </>
       
       
    );
}
export default Section1Ad;