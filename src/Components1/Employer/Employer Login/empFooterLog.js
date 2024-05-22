import { Col, Container, Row } from "react-bootstrap";

function EmpFooterLog(){
    return(
        
        <Container style={{backgroundColor:'#E6E7FF',marginTop:'3.9rem',borderRadius:'10px'}} >
            <Row className="pt-4 pb-1">
                <p className="text-center" style={{letterSpacing:'1px'}}>&copy;2020-2025 WorkQuake.com | All Rights Reserved</p>
              {/*   <Col>
                <Container>
                    <Row>
                        <Col><p>FAQ's</p></Col>
                        <Col><p>Contact Us</p></Col>
                        <Col><p>Report Content</p></Col>
                        <Col><p>Site Map</p></Col>
                    </Row>
                </Container>
                </Col> */}
            </Row>
        </Container>
    );
}
export default EmpFooterLog;