import React from "react";
import "./image.css";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

export default function Imageslider() {
  return (
    <div className="Image">
     <AliceCarousel autoPlay autoPlayInterval="3000">
      <img src='/images/img2.jpg' className="sliderimg" alt=""/>
      <img src='/images/img3.jpg'  className="sliderimg" alt=""/>
      <img src='/images/img4.jpg' className="sliderimg" alt=""/>
    </AliceCarousel>
    </div>
  );
}
