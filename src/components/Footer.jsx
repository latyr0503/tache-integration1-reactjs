import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { BsFacebook, BsInstagram, BsPinterest, BsTwitter } from "react-icons/bs";

function Footer() {
    return (
        <Container fluid className='footer'>
            <Row >
                <Col className='text-center fw-bold my-5'>
                    <h2 className='my-5 text-black-50 fs-1'>
                        sunnyside
                    </h2>
                    <ul className='d-flex justify-content-center list-unstyled text-black-50'>
                        <li className='mx-4'>
                            <a href="#" className='text-black text-decoration-none'>About</a>
                        </li>
                        <li className='mx-4'>
                            <a href="#" className='text-black text-decoration-none'>Services</a>
                        </li>
                        <li className='mx-4'>
                            <a href="#" className='text-black text-decoration-none'>Project</a>
                        </li>
                    </ul>
                    <ul className='d-flex justify-content-center list-unstyled  my-5'>
                        <li className='mx-3'>
                            <a href="#">< BsFacebook className='iconFooter text-black-50' /></a>
                        </li>
                        <li className='mx-3'>
                            <a href="#">< BsInstagram className='iconFooter text-black-50' /></a>
                        </li>
                        <li className='mx-3'>
                            <a href="#">< BsPinterest className='iconFooter text-black-50' /></a>
                        </li>
                        <li className='mx-3'>
                            <a href="#">< BsTwitter className='iconFooter text-black-50' /></a>
                        </li>
                    </ul>

                    <p>Intégration <span className='text-black-50'>React js Numéro1</span>. Coded by <span className='text-black-50'>Abdoulaye Latyr SENE</span>.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer