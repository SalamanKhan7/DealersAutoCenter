import React, { useState } from "react";
import CarCard from "./CarCard";
import styles from "./CarBody.module.css";
const cars = [
  {
    image: "/carImage.jpeg",
    model: "2015 Mercedes Sprinter Passenger Extended 170 WB",
    miles: "125,452",
    price: "7,000",
    monthPrice: "250",
  },
  {
    image: "/carImage.jpeg",
    model: "2015 Mercedes Sprinter Passenger Extended 170 WB",
    miles: "125,452",
    price: "7,000",
    monthPrice: "250",
  },
  {
    image: "/carImage.jpeg",
    model: "2015 Mercedes Sprinter Passenger Extended 170 WB",
    miles: "125,452",
    price: "7,000",
    monthPrice: "250",
  },
  {
    image: "/carImage.jpeg",
    model: "2015 Mercedes Sprinter Passenger Extended 170 WB",
    miles: "125,452",
    price: "7,000",
    monthPrice: "250",
  },
  {
    image: "/carImage.jpeg",
    model: "2015 Mercedes Sprinter Passenger Extended 170 WB",
    miles: "125,452",
    price: "7,000",
    monthPrice: "250",
  },
  {
    image: "/carImage.jpeg",
    model: "2015 Mercedes Sprinter Passenger Extended 170 WB",
    miles: "125,452",
    price: "7,000",
    monthPrice: "250",
  },

  {
    image: "/carImage.jpeg",
    model: "2015 Mercedes Sprinter Passenger Extended 170 WB",
    miles: "125,452",
    price: "7,000",
    monthPrice: "250",
  },
  {
    image: "/carImage.jpeg",
    model: "2015 Mercedes Sprinter Passenger Extended 170 WB",
    miles: "125,452",
    price: "7,000",
    monthPrice: "250",
  },
  {
    image: "/carImage.jpeg",
    model: "2015 Mercedes Sprinter Passenger Extended 170 WB",
    miles: "125,452",
    price: "7,000",
    monthPrice: "250",
  },
  {
    image: "/carImage.jpeg",
    model: "2015 Mercedes Sprinter Passenger Extended 170 WB",
    miles: "125,452",
    price: "7,000",
    monthPrice: "250",
  },
  {
    image: "/carImage.jpeg",
    model: "2015 Mercedes Sprinter Passenger Extended 170 WB",
    miles: "125,452",
    price: "7,000",
    monthPrice: "250",
  },
  {
    image: "/carImage.jpeg",
    model: "2015 Mercedes Sprinter Passenger Extended 170 WB",
    miles: "125,452",
    price: "7,000",
    monthPrice: "250",
  },
];
const CarBody = () => {
  const [visibleCount, setVisibleCount] = useState(8);
  const [visibleMobile, setVisibleMobile] = useState(6);
  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 4);
    setVisibleMobile((prev) => prev + 4);
  };

  return (
    <div>
      <div className={styles.cars}>
        <h1>Cars</h1>
      </div>
      <div className={styles.grid}>
        {cars.slice(0, visibleCount).map((car, index) => (
          <CarCard car={car} key={index} />
        ))}
      </div>
      <div className={styles.gridMobile}>
        {cars.slice(0, visibleMobile).map((car, index) => (
          <CarCard car={car} key={index} />
        ))}
      </div>
      {visibleCount < cars.length && (
        <button onClick={handleViewMore} className={styles.viewMoreButton}>
          See More
        </button>
      )}
    </div>
  );
};

export default CarBody;
