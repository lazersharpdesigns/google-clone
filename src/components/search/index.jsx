import React from "react";
import "./styles.module.css";

function Search() {
  return (
    <div className="flex row align-center align-vertical">
      {/* google logo */}
      <section>
        <img
          src={require("../../assets/images/google-logo.png")}
          width={272}
          alt="google-logo"
        />
      </section>

      {/* searchbar */}
      <section></section>

      {/* languages */}
      <section></section>
    </div>
  );
}

export default Search;
