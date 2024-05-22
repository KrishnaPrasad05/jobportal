import React from 'react';
import Cmp from '../../../Assets/img/index/programming.png'
import { Container, Row, Col } from 'react-bootstrap';
import Jobs4UComp from '../../HomePage/Section1/job4uComp';

function CommonJobs4U(){
    return (
       

<Container>
    <Row className='mt-3'>
    <Col className='m-1'>
                <Jobs4UComp dest="/logins" image={Cmp}text="IT Jobs" />
                </Col>
                <Col className='m-1'>
                <Jobs4UComp dest="/logins" image={Cmp} text="Prod.. Jobs" />
                </Col>
                <Col className='m-1'>
                <Jobs4UComp dest="/logins" image={Cmp}  text="Tech Jobs" />
                </Col>
                <Col className='m-1'>
                <Jobs4UComp dest="/logins" image={Cmp} text="Remote Jobs" />
                </Col>
                <Col className='m-1'>
                <Jobs4UComp dest="/logins" image={Cmp} text="WFH Jobs" />
                </Col>
                <Col className='m-1'>
                <Jobs4UComp dest="/logins" image={Cmp} text="Pt.Time Jobs" />
                </Col>
    </Row>
</Container>
    );
    
}
export default CommonJobs4U;