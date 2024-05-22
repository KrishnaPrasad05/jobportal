import React from 'react';
import TopFtdComp from '../../HomePage/Section1/topFtdComp';
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
import { Container, Row, Col } from 'react-bootstrap';
function CommonTopFtd(){
    return(
        
        <Container className="mt-3">
        <Row>
            <Col className='m-1'>
            <TopFtdComp image={amd}/>
            </Col>
            <Col className='m-1'>
            <TopFtdComp image={amazon}/>
            </Col>
            <Col className='m-1'>
            <TopFtdComp image={brother}/>
            </Col>
            <Col className='m-1'>
            <TopFtdComp image={ebay}/>
            </Col>
            <Col className='m-1'>
            <TopFtdComp image={fedex}/>
            </Col>
            <Col className='m-1'>
            <TopFtdComp image={htc}/>
            </Col>
            <Col className='m-1'>
            <TopFtdComp image={ea}/>
            </Col>
            <Col className='m-1'>
            <TopFtdComp image={ibm}/>
            </Col>
            <Col className='m-1'>
            <TopFtdComp image={intel}/>
            </Col>
            <Col className='m-1'>
            <TopFtdComp image={lenovo}/>
            </Col>
        </Row>

        </Container>
        
        
    );
}
export default CommonTopFtd;