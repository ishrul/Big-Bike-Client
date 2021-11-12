import React from "react";
import "./Bike.css";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Bike = ({ bike }) => {
  const { name, description, img, _id } = bike;

  return (
    <Col sm>
      <Card className="bike-card">
        <Card.Img variant="top" src={img} height="180vh" className="banner" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link to={`/purchase/${name}`}>
            <Button variant="info" className="Primary-Button">
              Purchase
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Bike;
