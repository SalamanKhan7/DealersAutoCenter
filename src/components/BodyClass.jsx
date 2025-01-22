import React, { useState } from "react";
import styles from "./BodyClass.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const carBodyClasses = [
  { name: "MPV", count: 12, image: "/firstImageB.png" },
  { name: "Incomplete vehicle", count: 0, image: "/secondImageB.png" },
  { name: "Coupe", count: 0, image: "/thirdImageB.png" },
  { name: "CROSSOVER", count: 0, image: "/forthImageB.png" },
  { name: "Hatchback", count: 0, image: "/fifthImageB.png" },
  { name: "Convertible", count: 0, image: "/sixthImageB.png" },
  { name: "SUV", count: 0, image: "/seventhImageB.png" },
  { name: "Sedan", count: 0, image: "/eightImageB.png" },
  { name: "TRUCK", count: 0, image: "ninthImageB.png" },
];
const cars = [
  { name: "MPV", count: 12, image: "/firstImageB.png" },
  { name: "Incomplete vehicle", count: 0, image: "/secondImageB.png" },
  { name: "Coupe", count: 0, image: "/thirdImageB.png" },
  { name: "CROSSOVER", count: 0, image: "/forthImageB.png" },
  { name: "Hatchback", count: 0, image: "/fifthImageB.png" },
  { name: "Convertible", count: 0, image: "/sixthImageB.png" },
  { name: "SUV", count: 0, image: "/seventhImageB.png" },
  { name: "Sedan", count: 0, image: "/eightImageB.png" },
  { name: "TRUCK", count: 0, image: "ninthImageB.png" },
  { name: "MPV", count: 12, image: "/firstImageB.png" },
  { name: "Incomplete vehicle", count: 0, image: "/secondImageB.png" },
  { name: "Coupe", count: 0, image: "/thirdImageB.png" },
];
const CarBodyClass = ({ name, count, image }) => {
  return (
    <div className={styles.carBodyClass}>
      <img src={image} alt={name} className={styles.image} />
      <hr style={{ color: "#fff" }} />
      <div className={styles.name}>{name}</div>
      <div className={styles.count}>{count}</div>
    </div>
  );
};

const BodyClass = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 6;
  const totalSlides = Math.ceil(cars.length / itemsPerSlide);
  const handleSlide = (index) => {
    setCurrentIndex(index * itemsPerSlide);
  };
  return (
    <div>
      <div className={styles.container}>
        {/* Desktop  */}
        <h1>Shop By Body Class</h1>
        <div className={styles.grid}>
          {carBodyClasses.slice(0, 4).map((item, index) => (
            <CarBodyClass key={index} {...item} />
          ))}
        </div>
        <div className={styles.gridBottom}>
          {carBodyClasses.slice(4).map((item, index) => (
            <CarBodyClass key={index} {...item} />
          ))}
        </div>
      </div>
      <div className={styles.containerMobile}>
        <div className={styles.bodyHeader}>
          <h2 className={styles.title}>BodyClass</h2>
          <h2 className={styles.viewAll}>
            ViewAll <ArrowForwardIcon />
          </h2>
        </div>

        <div className={styles.carousel}>
          <div className={styles.carouselWrapper}>
            {cars
              .slice(currentIndex, currentIndex + itemsPerSlide)
              .map((car, index) => (
                <div className={styles.carItem} key={index}>
                  <div className={styles.carIcon}>
                    <img
                      src={car.image}
                      alt={car.name}
                      className={styles.carImage}
                    />
                  </div>
                  <p>{car.name}</p>
                  <p>{car.count}</p>
                </div>
              ))}
          </div>
        </div>

        {/* Horizontal Line Slider */}
        <div className={styles.slider}>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              className={`${styles.sliderDot} ${
                index === Math.floor(currentIndex / itemsPerSlide)
                  ? styles.active
                  : ""
              }`}
              onClick={() => handleSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BodyClass;
