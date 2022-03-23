import React from "react";
import { CenterRow, Link, Separator } from "../styled";
import styles from "./styles.module.css";

const leftLinks = ["About", "Advertising", "Business", "How Search Works"];

const rightLinks = ["Privacy", "Terms", "Settings"];

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.location}>South Africa</div>
      <Separator color="#dadcd0" />
      <div className={styles["link-container"]}>
        <div className={styles.order1}>
          {leftLinks.map((item) => {
            return (
              <Link color="#70757a" size={14}>
                {item}
              </Link>
            );
          })}
        </div>
        <CenterRow className={styles.order2}>
          <img
            src={require("../../assets/images/carbon.png")}
            alt="carbon-leaf"
            width={12}
            style={{ marginRight: 6 }}
          />
          <Link color="#70757a" size={14}>
            Carbon neutral since 2007
          </Link>
        </CenterRow>
        <div className={styles.order3}>
          {rightLinks.map((item) => {
            return (
              <Link color="#70757a" size={14}>
                {item}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;
