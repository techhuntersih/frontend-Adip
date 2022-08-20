import React from "react";
import "./Slider.css";
import leftArrow from "./images/left-arrow.svg";
import rightArrow from "./images/right-arrow.svg";
 function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} alt= ""/>
    </button>
  );
}
export default BtnSlider;