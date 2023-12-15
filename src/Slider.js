import React, { Component } from "react";
import Slider from "react-slick";
import './style.css';

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div>
            <img src="" />
          </div>
          <div>
            <img src="" />
          </div>
          <div>
            <img src="" />
          </div>
          <div>
            <img src="" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider;