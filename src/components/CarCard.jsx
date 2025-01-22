import React from "react";
import styles from "./CarCard.module.css";

import { Circle, Speed, Favorite } from "@mui/icons-material";
const CarCard = ({ car }) => {
  return (
    <div className={styles.card}>
      <button className={styles.heartButton}>
        <Favorite sx={{ color: "red" }} />
      </button>
      <img src={car.image} alt={car.model} className={styles.image} />
      <div className={styles.carFooter}>
        <div className={styles.titleMiles}>
          <h3 className={styles.title}>{car.model}</h3>
          <p className={styles.miles}>
            <Speed />
            {car.miles} mi
          </p>
        </div>
        <div className={styles.finalColor}>
          <p className={styles.carColor}>
            Int.Color &nbsp;{" "}
            <Circle
              sx={{
                fontSize: {
                  xs: "10px",
                  sm: "10px", // Small screens
                  md: "15px", // Medium screens and above
                },
                color: "#000",
              }}
            />{" "}
          </p>
          <p className={styles.carColor}>
            Ext.Color &nbsp;
            <Circle
              sx={{
                fontSize: {
                  xs: "10px",
                  sm: "10px", // Small screens
                  md: "15px", // Medium screens and above
                },
                color: "#1d82f5",
              }}
            />{" "}
          </p>
        </div>
      </div>
      <div className={styles.priceBottom}>
        <div className={styles.priceSection}>
          <p className={styles.price}>$ {car.price}</p>
          <p className={styles.monthPrice}>Est ${car.monthPrice} mo</p>
        </div>
        <button className={styles.availabilityButton}>
          Check Availability
        </button>
      </div>
    </div>
  );
};

export default CarCard;
