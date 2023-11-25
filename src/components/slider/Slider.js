import React, { useEffect, useState } from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import "./slider.css";

export const Slider = ({ data }) => {
  const [slide, setSlide] = useState(0);


  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };



  return (
    <div className="carousel">
      <KeyboardArrowLeftIcon onClick={prevSlide} className="arrow arrow-left" />
      {data.map((item, idx) => {
        return (
          <img
            src={"http://localhost:4000/product-images/" + item}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <KeyboardArrowRightIcon
        onClick={nextSlide}
        className="arrow arrow-right"
      />
     
    </div>
  );
};