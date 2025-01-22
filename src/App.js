import React from "react";
import styles from "./App.module.css";
import HeaderMain from "./components/HeaderMain";
import CarsSection from "./components/CarsSection";
import SearchInventory from "./components/SearchInventory";
import BodyClass from "./components/BodyClass";
import CarBody from "./components/CarBody";
import ServiceClass from "./components/ServiceClass";
import AutoLoanCalculator from "./components/AutoLoanCalculator";

const App = () => {
  return (
    <div>
      <div className={styles.container}>
        <HeaderMain />
        <CarsSection />
        <div className={styles.SearchInventory}>
          <SearchInventory />
        </div>
      </div>
      <BodyClass />
      <div className={styles.containerBody}>
        <CarBody />
        <ServiceClass />
      </div>
      {/* <AutoLoanCalculator /> */}
    </div>
  );
};

export default App;
