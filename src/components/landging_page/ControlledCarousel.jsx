/** @format */
// import React from 'react';ss
import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import img1 from './a.png';
import img2 from './b.png';
import img3 from './c.png';
function ControlledCarousel() {
  return (
    // <Container>
    //   <Row>
    //     <Col>
    <div
      style={{
        margin: 'auto',
        marginTop: '60px',
        width: '80%',
        // border: 'solid black',
      }}
      className='p-5'>
      <h2>What our users have to say</h2>
      <Carousel>
        <Carousel.Item>
          <img className='d-block w-100' src={img1} alt='First slide' />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={img2} alt='Second slide' />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={img3} alt='Third slide' />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    //     </Col>
    //   </Row>
    // </Container>
  );
}

export default ControlledCarousel;
