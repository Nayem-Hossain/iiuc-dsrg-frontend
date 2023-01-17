import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
const Slider = () => {
  return (
    <Carousel fade>
    <Carousel.Item>
    <img width="1920" height="850" src="https://res.cloudinary.com/dpdq2a9fu/image/upload/v1673981852/slider1_xzhtys.jpg" sizes="(max-width: 1920px) 100vw, 1920px"/>
      <Carousel.Caption>
       
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img width="1920" height="850" src="https://res.cloudinary.com/dpdq2a9fu/image/upload/v1673981852/slider2_zfwjwt.jpg" sizes="(max-width: 1920px) 100vw, 1920px"/>

      <Carousel.Caption>
  
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img width="1920" height="850" src="https://res.cloudinary.com/dpdq2a9fu/image/upload/v1673981853/slider3_uwpvro.jpg" sizes="(max-width: 1920px) 100vw, 1920px"/>

      <Carousel.Caption>
     
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img width="1920" height="850" src="https://res.cloudinary.com/dpdq2a9fu/image/upload/v1673981853/slider4_qc2irb.jpg" sizes="(max-width: 1920px) 100vw, 1920px"/>
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default Slider