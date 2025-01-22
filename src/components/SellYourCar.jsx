import React from "react";
import styles from "./SellYourCar.module.css";

const SellYourCar = () => {
  return (
    <div className={styles.containerMain}>
      <h1 className={styles.title}>Sell Your Car</h1>
      <div className={styles.container}>
        <div className={styles.baseDiv}>
          <span className={styles.sectionLabel}>License</span>

          <div className={styles.bodyLicense}>
            <form action="">
              <input type="text" placeholder="License Plate Number" S />
            </form>
            <form action="">
              <input type="text" placeholder="What's your car registered?" />
            </form>
            <form action="">
              <input type="text" placeholder="What's your ZipCode?" />
            </form>
          </div>
        </div>
        <div className={styles.overlayDiv}>
          <span className={styles.sectionLabelVIN}>VIN</span>

          <div className={styles.body}>
            <form action="">
              <input type="text" placeholder="VIN Number" S />
            </form>
            <form action="">
              <input type="text" placeholder="What's your car registered?" />
            </form>
            <form action="">
              <input type="text" placeholder="What's your ZipCode?" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellYourCar;
