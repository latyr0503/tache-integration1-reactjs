import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Testimonialsbox from './Testimonialsbox'
import imgBox1 from '../Assets/asset 4.jpeg';
import imgBox2 from '../Assets/asset 5.jpeg';
import imgBox3 from '../Assets/asset 6.jpeg';

function Testimonials() {
  return (
    <Container className='my-5'>
        <Row> 
        <h2 className='text-center my-5 text-black-50 fw-bold'>CLIENT TESTIMONIALS</h2>
        <Col>
            < Testimonialsbox image={imgBox1} job={'Web developper'} name={"Latyr SENE"} />
        </Col>
        <Col>
            < Testimonialsbox image={imgBox2} job={'Web Designe'} name={"Abdoulaye SENE"} />
        </Col>
        <Col>
            < Testimonialsbox image={imgBox3} job={'infograph'} name={"Racky Cissé"} />
        </Col>
        </Row>
    </Container>
  )
}

export default Testimonials