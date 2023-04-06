import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import galleryImg1 from '../Assets/asset 7.jpeg'
import galleryImg2 from '../Assets/asset 8.jpeg'
import galleryImg3 from '../Assets/asset 9.jpeg'
import galleryImg4 from '../Assets/asset 10.jpeg'


function Gallery() {
  return (
    <Container fluid>
      <Row className='gallery'>

      <Col lg={3} className='galleryCol'>
          <img src={galleryImg1} className='img-fluid' alt="" />
        </Col>

        <Col lg={3} className='galleryCol' >
        <img src={galleryImg2} className='img-fluid' alt="" />
        </Col>

        <Col lg={3} className='galleryCol'>
        <img src={galleryImg3} className='img-fluid' alt="" />
        </Col>

        <Col lg={3} className='galleryCol'>
        <img src={galleryImg4} className='img-fluid' alt="" />
        </Col>

      </Row>
    </Container>
  )
}

export default Gallery