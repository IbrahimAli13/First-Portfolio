import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Body.css';

function Body() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="carousel-background">
          <div className="carousel-content">
            <h3>Programmer</h3>
            <p>Pure Platform</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-background">
          <div className="carousel-content">
            <h3>Translator</h3>
            <p>Iraqi Federation of Industries</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-background">
          <div className="carousel-content">
            <h3>Sales Representitive</h3>
            <p>Lezzo</p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Body;
