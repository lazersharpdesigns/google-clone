import React from "react";
import { Link } from "../styled";
import styles from "./styles.module.css";

const links = ["Gmail", "Images"];

function Header() {
  return (
    <header className="flex justify-end align-vertical">
      <div className="flex row">
        {links.map((item) => {
          return <Link key={item}>{item}</Link>;
        })}
      </div>
    </header>
  );
}

export default Header;
