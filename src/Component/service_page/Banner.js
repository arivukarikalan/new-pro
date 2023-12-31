import React from 'react';
import {Col, Container, Row} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'


const Banner = () => {
  return (
    <Container fluid>
        <Row className='justify-content-center'>
            <Col sm = {12}> 
              
                    <Carousel >
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src= {require('../../Images/service/banner1.png')}
                        alt="First slide"
                        />
                    
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src= {require('../../Images/service/banner2.png')}
                        alt="Second slide"
                        />

                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src= {require('../../Images/service/banner3.png')}
                        alt="Third slide"
                        />

                
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src= {require('../../Images/service/banner4.png')}  
                        alt="Fourth slide"
                        />

                    
                    </Carousel.Item>
                    </Carousel>
               
               
            </Col>
            
        </Row>
    </Container>
  
  )
}

export default Banner 