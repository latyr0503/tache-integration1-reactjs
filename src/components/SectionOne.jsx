import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Oeuff from '../Assets/oeuf.png';
import Tasse from '../Assets/tasse.png'
import Pomme from '../Assets/asset_12-removebg-preview.png';
import Orange from '../Assets/asset_13-removebg-preview.png';

function SectionOne() {
    return (
        <Container fluid>
            <Row>
                <Col lg={6} sm={12} className=' my-5 p-5 sectionText1'>
                    <h2 className='fs-1 mt-5'>
                        Transform your Brang
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem facilis iure,
                        libero, repellat placeat quisquam nobis quis quas eius quia asperiores possimus
                        mollitia! Sint officia exercitationem magnam, doloremque perspiciatis ad.
                    </p>
                    <Button className='barreJaune' variant="light">Learn more</Button>

                </Col>

                <Col lg={6} sm={12} className='px-5 sectionjaune m-auto'>
                    <img src={Oeuff} className='my-5 d-flex mx-auto' alt="" />
                </Col>

            </Row>
            <Row>
                <Col lg={6} sm={12} className='px-5 pt-5 sectionrose m-auto'>
                    <img src={Tasse} className='mt-5 d-flex mx-auto img-fluid' alt="" />
                </Col>
                <Col lg={6} sm={12} className=' my-5 p-5 sectionText1'>
                    <h2 className='fs-1 mt-5'>
                        Stand out to the right audience
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem facilis iure,
                        libero, repellat placeat quisquam nobis quis quas eius quia asperiores possimus
                        mollitia! Sint officia exercitationem magnam, doloremque perspiciatis ad.
                    </p>
                    <Button className='barreRose' variant="light">Learn more</Button>

                </Col>

            </Row>
            <Row >
                <Col lg={6} sm={12} className='sectionvert'>
                    <img src={Pomme} className='d-flex mx-auto img-fluid' alt="" />
                    <h2 className='fs-1 text-center'>
                        Graphic Design
                    </h2>
                    <p className='text-center mx-5'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto ut quisquam qui, alias voluptas minus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, saepe.
                    </p>
                </Col>
                <Col lg={6} sm={12} className='sectionbleu'>
                    <img src={Orange} className='d-flex mx-auto img-fluid' alt="" />
                    <h2 className='fs-1 text-center'>
                        Photography
                    </h2>
                    <p className='text-center mx-5'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto ut quisquam qui, alias voluptas minus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, saepe.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default SectionOne