import React from "react";
import CubeDots from "../../assets/icons/cube-dots";
import { IconButton, Link, ProfileButton } from "../styled";
import "./styles.module.css";

const links = ["Gmail", "Images"];

function Header() {
  return (
    <header className="flex row justify-end align-vertical mr-8">
      {links.map((item) => {
        return <Link key={item}>{item}</Link>;
      })}
      <IconButton className="mr-12">
        <CubeDots />
      </IconButton>
      <ProfileButton>R</ProfileButton>
    </header>
  );
}

export default Header;
