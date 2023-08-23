import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Body.css';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="about_right.jpg"
          alt="First slide"
          height={900}
        />
        <Carousel.Caption className='custom-caption'>
          <h5>Pure Platform</h5>
          <p>Programmer</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="banner.jpg"
          alt="Second slide"
          height={900}
        />
        <Carousel.Caption className='custom-caption'>
          <h5>Lezzo</h5>
          <p>Representitive</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img3.jpg"
          alt="Third slide"
          height={900}
        />
        <Carousel.Caption className='custom-caption'>
          <h5>Iraqi Federation of Industries</h5>
          <p>
            Translator
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
