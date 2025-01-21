import React, { useState } from "react";
import CarCard from "./CarCard";
import styles from "./CarSection.module.css";
const cars = [
  {
    image: "/carImage.jpeg",
    model: "2015 Mercedes Sprinter Passenger Extended 170 WB",
    miles: "125,452",
    price: "7,000",
  },
  {
    image: "/carImage.jpeg",
    model: "2015 Toyota Corolla",
    miles: "125,452",
    price: "$7,000",
  },
  {
    image: "/carImage.jpeg",
    model: "2015 Toyota Corolla",
    miles: "125,452",
    price: "$7,000",
  },
  {
    image: "/carImage.jpeg",
    model: "2015 Toyota Corolla",
    miles: "125,452",
    price: "$7,000",
  },
  {
    image: "/carImage.jpeg",
    model: "2015 Toyota Corolla",
    miles: "125,452",
    price: "$7,000",
  },
  {
    image: "/carImage.jpeg",
    model: "2015 Toyota Corolla",
    miles: "125,452",
    price: "$7,000",
  },
  {
    image: "/carImage.jpeg",
    model: "2015 Toyota Corolla",
    miles: "125,452",
    price: "$7,000",
  },
  {
    image: "/carImage.jpeg",
    model: "2015 Toyota Corolla",
    miles: "125,452",
    price: "$7,000",
  },
  {
    image: "/carImage.jpeg",
    model: "2015 Toyota Corolla",
    miles: "125,452",
    price: "$7,000",
  },
  {
    image: "/carImage.jpeg",
    model: "2015 Toyota Corolla",
    miles: "125,452",
    price: "$7,000",
  },
  {
    image: "/carImage.jpeg",
    model: "2015 Toyota Corolla",
    miles: "125,452",
    price: "$7,000",
  },
  {
    image: "/carImage.jpeg",
    model: "2015 Toyota Corolla",
    miles: "125,452",
    price: "$7,000",
  },
];
const CarSection = () => {
  const [visibleCount, setVisibleCount] = useState(8);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div>
      <div className={styles.grid}>
        {cars.slice(0, visibleCount).map((car, index) => (
          <CarCard car={car} key={index} />
        ))}
      </div>
      {visibleCount < cars.length && (
        <button onClick={handleViewMore} className={styles.viewMoreButton}>
          View More
        </button>
      )}
    </div>
  );
};

export default CarSection;
