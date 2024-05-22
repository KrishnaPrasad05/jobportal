import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Section1CompAd from '../Section1Ad/section1CompAd';
import comp from '../../../Assets/img/company.jpg'
import CustomNavbar from '../HeaderAdmin/HeaderAd';
import FooterAdmin from '../HeaderAdmin/FooterAd';
function Section4Ad(){
    const [reportedContents, setReportedContents] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/issues?reporterName=')
            .then(response => response.json())
            .then(data => setReportedContents(data))
            .catch(error => console.error('Error fetching reported contents:', error));
    }, []);
    return (
        <>
        <CustomNavbar/>
        <section id="section4" style={{marginTop:'7rem'}}>
 <h1 className="head text-center mt-5" style={{color:'#2B358C'}}>Reported Contents</h1>
        <Container className='mt-5 mb-5'>
            <Row>
            {reportedContents.map((content, index) => (
                            <Col  className='m-1'>
        <Section1CompAd clr="red" image={comp} title={content.reporterName} detail={content.reportQuery} jobName={content.reporterEmail} btn1="Proof Company"/>
                </Col>
                ))}
            </Row>
        </Container>
        </section>
        <FooterAdmin/>
        </>
      
       
    );
}
export default Section4Ad;