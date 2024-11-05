import "./Footer.css"
import { Container, Row, Col } from "react-bootstrap";
function Footer(){
    return(
        <footer>
            <Container>
                <Row>
                    <Col>
                        <h2 style={{fontWeight: 'bold'}} className="mb-3">رسالت آوینا کد</h2>
                        <p>
                        آوینا کد با هدف تولید آموزش هایی ایجاد شده ، که حس شیرینِ یادگیری لذت بخش برنامه نویسی و طراحی وب رو تجربه کنید.
                        </p>
                    </Col>
                    <Col style={{textAlign : 'left'}}>
                        <img src="https://cdn.zarinpal.com/badges/trustLogo/1.svg" />
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer