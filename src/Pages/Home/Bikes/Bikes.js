import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Bike from "../Bike/Bike";

const Bikes = () => {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allBikes")
      .then((res) => res.json())
      .then((data) => setBikes(data.slice(0, 6)));
  }, []);

  return (
    <Container>
      <h2 className="text-info my-5">Choose Your Favourite Bike</h2>
      <Row style={{ marginLeft: "20px" }}>
        {bikes.map((bike) => (
          <Bike key={bike.name} bike={bike} />
        ))}
      </Row>
    </Container>
  );
};

export default Bikes;

/* const bikes = [
    {
      name: "2021 Royal Enfield Himalayan",
      description: "A budget-conscious dual sport built in Bangladesh.",
      img: "https://i.ibb.co/56gdsW7/WXXZNQ2-LJZBUXEVZRDI7-HTSLIE.jpg",
    },
    {
      name: "2021 Yamaha XSR900",
      description:
        "The neo-retro version of the MT-09 adds more than cool looks to the mix.",
      img: "https://i.ibb.co/P41JY9w/4-LCUOZ4-FSFAXTHO37-CAUCERIHY.jpg",
    },
    {
      name: "2021 Yamaha MT-03",
      description:
        "The smallest MT model packs big fun in a very approachable package.",
      img: "https://i.ibb.co/bN4XKjm/URDEKKQB55-HELHTEMHBJCKZGLA.jpg",
    },
    {
      name: "2021 Yamaha XSR700",
      description:
        "The retro classic version of the MT-07 continues its successful run.",
      img: "https://i.ibb.co/r0Lj4C8/FUX4-AIH5-CREIVMNBUSTYDYM4-DQ.jpg",
    },
    {
      name: "2021 Ducati Monster 1200",
      description: "Ducati’s big-bore Monster.",
      img: "https://i.ibb.co/gdjf8kT/O4-QZSKHVURG4-XON527-U6-E3-IBPU.jpg",
    },
    {
      name: "2021 Suzuki SV650/X/ABS",
      description:
        "Suzuki’s long-popular V-twin middleweight continues in three versions.",
      img: "https://i.ibb.co/kGdvHTt/SJZAGOQ6-YJDZ5-FURKJ3-SE3-VBPU.jpg",
    },
    {
      name: "2021 Suzuki GSX-S750Z",
      description:
        "Suzuki offers a major bang-for-the-buck deal in the GSX-S750Z.",
      img: "https://i.ibb.co/hMyg7hw/3-GURGPA6-GVAXJNYJTDY4-FT7-UEU.jpg",
    },
    {
      name: "2021 Yamaha YZF-R3",
      description:
        "Yamaha’s entry-level R model packs serious supersport fun on a budget.",
      img: "https://i.ibb.co/QPK66kg/PLZW2-M7-EOVGHPM4-A6-Y2-DOW6-VZA.jpg",
    },
    {
      name: "2021 Harley-Davidson Street Bob 114",
      description:
        "Still lean but a bit meaner, with a bigger engine as standard this year.",
      img: "https://i.ibb.co/2hYkZH9/7-XQCR74-L6-ZFD3-ADPLJQ3-ZHJQHE.jpg",
    },
    {
      name: "2021 Ducati Diavel 1260",
      description: "Italy’s mid-control power cruiser.",
      img: "https://i.ibb.co/XFRxzTH/STWN7-QTIVFDNNLJ5-AZ6-EFQXH2-A.jpg",
    },
  ]; */
