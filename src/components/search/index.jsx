import React from "react";
import { SearchBar } from "../styled";
import styles from "./styles.module.css";

function Search() {
  return (
    <div className={styles["main-container"]}>
      {/* google logo */}
      <section>
        <img
          src={require("../../assets/images/google-logo.png")}
          width={272}
          alt="google-logo"
        />
      </section>

      {/* searchbar */}
      <section className={styles["search-container"]}>
        <SearchBar>
          {/* icon */}

          {/* input */}

          {/* icon */}
        </SearchBar>
      </section>

      {/* languages */}
      <section></section>
    </div>
  );
}

export default Search;
