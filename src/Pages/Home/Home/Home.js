import React from "react";
import Banner from "../Banner/Banner";
import Bikes from "../Bikes/Bikes";
import InstagramGallary from "../InstagramGallary/InstagramGallary";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div
      style={{
        marginTop: "100px",
      }}
    >
      <Banner></Banner>
      <Bikes></Bikes>
      <Reviews />
      <InstagramGallary></InstagramGallary>
    </div>
  );
};

export default Home;
