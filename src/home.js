import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Search from "./components/search";

function Home() {
  return (
    <div>
      <Header />
      <main>
        <Search />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
