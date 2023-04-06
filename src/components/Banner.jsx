import React from 'react';
import imgOrange from "../Assets/OrangeGM.png";
import { BsArrowDown } from "react-icons/bs";
import { Container, Row, Col } from 'react-bootstrap';
 
function Banner() {
    return (

        <Container fluid className='banner text-center'>
            <Row>
                <Col>
                <h1 className='text-white text-uppercase p-5 fs-1 fw-bold'> We are creatives</h1>
                <BsArrowDown className='arrow mx-auto'/>
                <img src={imgOrange} className='d-flex mx-auto img-fluid' alt="image d'une orange" /></Col>
            </Row>
        </Container>

    )
}

export default Banner