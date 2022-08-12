import React from "react";
import { SliderData } from "./SliderData";
import { useState } from "react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import styles from "./ImageSlider.module.css";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className={styles.slider}>
      <MdArrowBackIos className={styles.left_arrow} onClick={prevSlide} />
      <MdArrowForwardIos className={styles.right_arrow} onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? styles.slide_active : styles.slide}
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                className={styles.image}
                alt="appartment-photo"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;
