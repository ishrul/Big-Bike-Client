import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Bike from "../Pages/Home/Bike/Bike";

const AllBikes = () => {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allBikes")
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, []);

  return (
    <div
      style={{
        marginTop: "100px",
      }}
    >
      <Container>
        <h2
          style={{
            marginTop: "150px",
            color: "#12CBB5",
          }}
        >
          Our Bikes
        </h2>
        <Row style={{ marginLeft: "20px" }}>
          {bikes.map((bike) => (
            <Bike key={bike.name} bike={bike} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AllBikes;
