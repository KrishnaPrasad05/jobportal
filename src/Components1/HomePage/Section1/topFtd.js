import React, { useEffect } from 'react';
import TopFtdComp from '../Section1/topFtdComp';
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
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanyAsync } from '../../../features/dataSlice';
function TopFtd(){
    const dispatch = useDispatch();
    const users = useSelector((state) => state.data.users.slice(0, 10));
    const loading = useSelector((state) => state.data.loading);
    const error = useSelector((state) => state.data.error);
  
    useEffect(() => {
      dispatch(fetchCompanyAsync());
    }, [dispatch]);
    return(
        
       /*  <Container className="mt-3">
        <Row>
            <Col>
            <TopFtdComp image={amd}/>
            </Col>
            <Col>
            <TopFtdComp image={amazon}/>
            </Col>
            <Col>
            <TopFtdComp image={brother}/>
            </Col>
            <Col>
            <TopFtdComp image={ebay}/>
            </Col>
            <Col>
            <TopFtdComp image={fedex}/>
            </Col>
            <Col>
            <TopFtdComp image={htc}/>
            </Col>
            <Col>
            <TopFtdComp image={ea}/>
            </Col>
            <Col>
            <TopFtdComp image={ibm}/>
            </Col>
            <Col>
            <TopFtdComp image={intel}/>
            </Col>
            <Col>
            <TopFtdComp image={lenovo}/>
            </Col>
        </Row>

        </Container> */
         <Container className='mt-3'>
         <Row >
             {users.map((user) => (<Col key={user.id} className='mt-3'>
     
             <TopFtdComp dest={`/companydetails/${user.id}`} image={user.Compfile} />
     
                 </Col>   ))}
                 </Row>
         </Container>
        
    );
}
export default TopFtd;