import React from "react";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Footers from "./Footers/Footers";
import Service from "./Service/Service";
import Banner from "./Banner/Banner";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Service></Service>
      <Contact></Contact>
      <Footers></Footers>
    </div>
  );
};

export default Home;
