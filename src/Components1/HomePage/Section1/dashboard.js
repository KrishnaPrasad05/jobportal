import React from 'react';
import DashBoardComp from '../Section1/dashboardComp';
import Reg from '../../../Assets/img/index/user.png'
import Int from '../../../Assets/img/index/job-interview.png'
import Comp from '../../../Assets/img/index/enterprise.png'
import Res from '../../../Assets/img/index/jd/google-docs.png'
import { Container, Row, Col } from 'react-bootstrap';

function Dashboard(){
    return (
        <Container className='mt-5'>
            <Row className='d-flex flex-row justify-content-center mt-3'>
                <Col>
                <DashBoardComp image={Reg} count="2 Cr+" text="Registered Candidates" />
                </Col>
                <Col>
                <DashBoardComp image={Int} count="2000" text="Interviews per month" />
                </Col>
                <Col>
                <DashBoardComp image={Comp} count="1 K+" text="Verified Companies" />
                </Col>
                <Col>
                <DashBoardComp image={Res} count="1.5 L+" text="Resume Updated" />
                </Col>
            </Row>
        </Container>

    );
    
}
export default Dashboard;