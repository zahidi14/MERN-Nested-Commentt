import React from "react";
import { Break, Footer, Header } from "../../component";
import { Router } from "../../conf";

const Home = () => {
  return (
    <>
      <Header />
      <Break height={30} />
        <Router />
      <Break height={30} />
      <Footer />
    </>
  );
};

export default Home;
