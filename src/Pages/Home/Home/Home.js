import React from "react";
import Banner from "../Banner/Banner";
import Bikes from "../Bikes/Bikes";

const Home = () => {
  return (
    <div
      style={{
        marginTop: "100px",
      }}
    >
      <Banner></Banner>
      <Bikes></Bikes>
    </div>
  );
};

export default Home;
