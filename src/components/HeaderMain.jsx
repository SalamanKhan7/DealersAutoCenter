import React from "react";
import styles from "./HeaderMain.module.css";
import SearchInventory from "./SearchInventory";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const HeaderMain = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.SearchInventory}>
        <SearchInventory />
      </div>
      <ExitToAppIcon className={styles.logoutIcon} fontSize="large" />
    </header>
  );
};

export default HeaderMain;
