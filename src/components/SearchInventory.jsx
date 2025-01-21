// import React from "react";
// import styles from "./SearchInventory.module.css";

// const SearchInventory = () => {
//   return (
//     <div className={styles.searchContainer}>
//       <input
//         type="text"
//         placeholder="Search Inventory"
//         className={styles.input}
//       />
//     </div>
//   );
// };

// export default SearchInventory;
import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

export default function SearchInventory() {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        borderRadius: ".5rem",
      }}
    >
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Inventory"
        inputProps={{ "aria-label": "Search Inventory" }}
      />

      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <MenuIcon />
      </IconButton>
    </Paper>
  );
}
