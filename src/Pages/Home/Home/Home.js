import React from "react";
import Banner from "../Banner/Banner";
import Bikes from "../Bikes/Bikes";
import InstagramGallary from "../InstagramGallary/InstagramGallary";

const Home = () => {
  return (
    <div
      style={{
        marginTop: "100px",
      }}
    >
      <Banner></Banner>
      <Bikes></Bikes>
      <InstagramGallary></InstagramGallary>
    </div>
  );
};

export default Home;
