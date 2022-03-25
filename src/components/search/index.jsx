import React, { useState } from "react";
import ClockIcon from "../../assets/icons/clock";
import CloseIcon from "../../assets/icons/close";
import RocketIcon from "../../assets/icons/rocket";
import SearchIcon from "../../assets/icons/search";
import VoiceIcon from "../../assets/icons/voice";
import {
  ActionLink,
  CenterRow,
  FlatInput,
  IconButton,
  ListItem,
  PrimaryButton,
  Row,
  SearchBar,
  Separator,
} from "../styled";
import styles from "./styles.module.css";

const history = [
  "One apon a time",
  "there was an elf called bob",
  "he went down a flight of stairs",
  "and knocked his socks off",
  "One apon a time",
  "there was an elf called bob",
  "he went down a flight of stairs",
  "and knocked his socks off",
  "One apon a time",
  "there was an elf called bob",
  "he went down a flight of stairs",
  "and knocked his socks off",
  "One apon a time",
  "there was an elf called bob",
  "he went down a flight of stairs",
  "and knocked his socks off",
];

const languages = [
  "Afrikaans",
  "Sesotho",
  "isiZulu",
  "IsiXhosa",
  "Setswana",
  "Northern Sotho",
];

function Search() {
  const [search, setSearch] = useState("");

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
        <SearchBar className={styles["searchbar"]}>
          <div className={styles["search-actions"]}>
            {/* icon */}
            <IconButton ml={6}>
              <SearchIcon />
            </IconButton>
            {/* input */}
            <FlatInput
              value={search}
              onChange={({ target: { value } }) => setSearch(value)}
            />
            {/* icon */}
            <Row>
              <Row style={{ display: search ? "flex" : "none" }}>
                <IconButton
                  onClick={() => setSearch("")}
                  width={30}
                  height={30}
                >
                  <CloseIcon />
                </IconButton>
                <Separator vertical />
              </Row>
              <IconButton mr={6} width={40} height={40}>
                <VoiceIcon />
              </IconButton>
              <IconButton title="Feeling Lucky ?" mr={6} width={35} height={35}>
                <RocketIcon />
              </IconButton>
            </Row>
          </div>
          <div className={styles["search-options"]}>
            <Separator />
            <div className={styles.scrollview}>
              {history.map((item) => {
                return (
                  <ListItem key={item}>
                    <Row>
                      <div className={styles["option-icon"]}>
                        <ClockIcon />
                      </div>
                      <span>{item}</span>
                    </Row>
                    <ActionLink>Remove</ActionLink>
                  </ListItem>
                );
              })}
            </div>
            <CenterRow
              className={`${styles["search-buttons"]} ${styles["gutters"]}`}
            >
              <PrimaryButton>Google Search</PrimaryButton>
              <PrimaryButton>I'm Feeling Lucky</PrimaryButton>
            </CenterRow>
          </div>
        </SearchBar>
      </section>
      <CenterRow className={styles["search-buttons"]}>
        <PrimaryButton>Google Search</PrimaryButton>
        <PrimaryButton>Images Search</PrimaryButton>
      </CenterRow>
      {/* languages */}
      <section>
        {" "}
        <div className={`${styles["language-container"]}`}>
          <CenterRow>
            <span style={{ marginRight: 12 }}>
              Google is offered in:{"   "}
            </span>
            {languages.map((item) => {
              return <ActionLink blue>{item}</ActionLink>;
            })}
          </CenterRow>
        </div>
      </section>
    </div>
  );
}

export default Search;
