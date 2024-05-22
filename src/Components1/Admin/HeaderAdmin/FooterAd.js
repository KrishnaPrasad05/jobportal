import { Col, Container, Row } from "react-bootstrap";

function FooterAdmin(){
    return(
        
        <Container style={{backgroundColor:'#E6E7FF',marginTop:'7.8rem'}} fluid>
            <Row className="pt-4 pb-1">
                <p className="text-center" style={{wordSpacing:'3px',letterSpacing:'1px'}}>&copy;2020-2025 WorkQuake.com | All Rights Reserved</p>
            </Row>
        </Container>
    );
}
export default FooterAdmin;