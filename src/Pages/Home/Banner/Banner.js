import React from "react";
import "./Banner.css";
import { Button, Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner/banner-1.jpg";
import banner2 from "../../../images/banner/banner-2.jpg";
import banner3 from "../../../images/banner/banner-3.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="banner d-block w-100"
            src={banner1}
            alt="First slide"
            height="480vh"
          />
          <Carousel.Caption>
            <h3>Royal Enfield</h3>
            <Link to="/allBikes">
              <Button variant="info" className="Primary-Button">
                Explore
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="banner d-block w-100"
            src={banner2}
            alt="Second slide"
            height="480vh"
          />

          <Carousel.Caption>
            <h3>KTM</h3>
            <Link to="/allBikes">
              <Button variant="info" className="Primary-Button">
                Explore
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="banner d-block w-100"
            src={banner3}
            alt="Third slide"
            height="480vh"
          />

          <Carousel.Caption>
            <h3>Suzuki</h3>
            <Link to="/allBikes">
              <Button variant="info" className="Primary-Button">
                Explore
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
