import React from "react";
import styles from "./App.module.css";
import HeaderMain from "./components/HeaderMain";
import CarsSection from "./components/CarsSection";
import SearchInventory from "./components/SearchInventory";
import BodyClass from "./components/BodyClass";
import CarSection from "./components/CarSection";

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
      <CarSection />
    </div>
  );
};

export default App;
