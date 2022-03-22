import React from "react";
import CubeDots from "../../assets/icons/cube-dots";
import { IconButton, Link, ProfileButton } from "../styled";
import styles from "./styles.module.css";

const links = ["Gmail", "Images"];

function Header() {
  return (
    <header>
      <div className={styles["header-container"]}>
        {links.map((item) => {
          return (
            <Link className={styles["nav-item"]} key={item}>
              {item}
            </Link>
          );
        })}
        <IconButton className={styles["nav-item"]}>
          <CubeDots />
        </IconButton>
        <ProfileButton className={styles["nav-item"]}>R</ProfileButton>
      </div>
    </header>
  );
}

export default Header;
