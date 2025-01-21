import React from "react";
import styles from "./CarCard.module.css";
import CircleIcon from "@mui/icons-material/Circle";
const CarCard = ({ car }) => {
  return (
    <div className={styles.card}>
      <button className={styles.heartButton}>❤️</button>
      <img src={car.image} alt={car.model} className={styles.image} />
      <div className={styles.carFooter}>
        <div className={styles.titleMiles}>
          <h3 className={styles.title}>{car.model}</h3>
          <p className={styles.miles}>{car.miles} mi</p>
        </div>
        <div className={styles.finalColor}>
          <p className={styles.carColor}>
            Int.Color &nbsp;{" "}
            <CircleIcon sx={{ color: "#000", fontSize: "15px" }} />{" "}
          </p>
          <p className={styles.carColor}>
            Ext.Color &nbsp;
            <CircleIcon sx={{ color: "#1d82f5", fontSize: "15px" }} />{" "}
          </p>
        </div>
      </div>
      <p className={styles.price}>${car.price}</p>
      <button className={styles.availabilityButton}>Check Availability</button>
    </div>
  );
};

export default CarCard;
