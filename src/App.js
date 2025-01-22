import React from "react";
import styles from "./App.module.css";
import HeaderMain from "./components/HeaderMain";
import CarsSection from "./components/CarsSection";
import SearchInventory from "./components/SearchInventory";
import BodyClass from "./components/BodyClass";
import CarBody from "./components/CarBody";
import ServiceClass from "./components/ServiceClass";
import AutoLoanCalculator from "./components/AutoLoanCalculator";
import SellYourCar from "./components/SellYourCar";
import BuyCar from "./components/BuyCar";
import NextCar from "./components/NextCar";
import Footer from "./components/Footer";

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
      <AutoLoanCalculator />
      <SellYourCar />
      <div className={styles.containerBuy}>
        <CarBody />
        <NextCar />
        <BuyCar />
      </div>
      <Footer />
    </div>
  );
};

export default App;
