import React, { useState } from "react";
import styles from "./CarsSection.module.css";

const CarsSection = () => {
  const cars = [
    {
      id: 1,
      img: "/firstImage.png",
      description: "Best platform to buy a car.",
    },
    {
      id: 2,
      img: "/secondImage.png",
      description: "Easiest way to find the car you want.",
    },
    {
      id: 3,
      img: "/thirdImage.png",
      description: "Wide range of cars available.",
    },
  ];
  const carsDesktop = [
    {
      id: 1,
      img: "/firstImage.png",
      description: "Best platform to buy a car.",
    },
    {
      id: 2,
      img: "/secondImage.png",
      description: "Easiest way to find the car you want.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      {/* Mobile Slider */}
      <div className={styles.mobileSlider}>
        <div className={styles.cardMobile}>
          <div className={styles.cardFirst}>
            <p className={styles.descriptionMobile}>
              {cars[currentIndex].description}
            </p>
            <button className={styles.buttonMobile}>See more</button>
          </div>
          <img
            src={cars[currentIndex].img}
            alt={cars[currentIndex].description}
            className={styles.imageMobile}
          />
        </div>
        <div className={styles.dots}>
          {cars.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                currentIndex === index ? styles.activeDot : ""
              }`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
      {/* Desktop View */}
      <div className={styles.container}>
        {carsDesktop.map((car) => (
          <div key={car.id} className={styles.card}>
            <div className={styles.cardFirst}>
              <p className={styles.description}>{car.description}</p>
              <button className={styles.button}>See more</button>
            </div>
            <img src={car.img} alt={car.description} className={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarsSection;
