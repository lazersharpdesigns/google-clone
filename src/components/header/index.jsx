import React from "react";
import CubeDotsIcon from "../../assets/icons/cube-dots";
import { IconButton, Link } from "../styled";
import styles from "./styles.module.css";

const links = ["Gmail", "Drive"];

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
        <IconButton variant="flat" className={styles["nav-item"]}>
          <CubeDotsIcon />
        </IconButton>
        <IconButton variant="filled" className={styles["nav-item"]}>
          R
        </IconButton>
      </div>
    </header>
  );
}

export default Header;
