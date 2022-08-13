import React from "react";
import { useState } from "react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import styles from "./ImageSlider.module.css";

const ImageSlider = ({apartment}) => {
  const [current, setCurrent] = useState(0);
  const length = apartment.image.length;

  if (!Array.isArray(apartment.image) || apartment.image.length <= 0) {
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
      {apartment.image.map((slide, index) => {
        return (
          <div
            className={index === current ? styles.slide_active : styles.slide}
            key={index}
          >
            {index === current && (
              <img
                src={slide}
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
