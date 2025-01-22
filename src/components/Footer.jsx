import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <h2 className={styles.logo}>Ghada Motors LLC</h2>
        </div>
        <div className={styles.linksSection}>
          <div className={styles.column}>
            <p>Home</p>
            <p>Inventory</p>
            <p>Finance</p>
          </div>
          <div className={styles.column}>
            <p>About Us</p>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
          </div>
        </div>
      </div>
      <p className={styles.disclaimer}>
        By calling the dealership, you agree and accept the Terms and Conditions
        of Use.
        <br />
        Powered by DealersAutoCenter © 2024 | All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
