import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(
      `https://cryptic-caverns-37917.herokuapp.com/orders?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [user.email]);

  //   deleting an order
  const handleDeleteAnOrder = (id) => {
    const proceed = window.confirm("Are You Sure, You Want To Delete?");
    if (proceed) {
      const url = `https://cryptic-caverns-37917.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Successfully Deleted Your Order");
            const remainingOrders = orders.filter((order) => order._id !== id);
            setOrders(remainingOrders);
          }
        });
    }
  };

  return (
    <div
      style={{
        marginTop: "50px",
      }}
    >
      <Container>
        <h3 className="text-info my-5">Your Orders</h3>
        <Row>
          {orders.map((order) => (
            <Col xs={12} md={3} className="my-3">
              <Card>
                <Card.Header as="h5">{order.BikeName}</Card.Header>
                <Card.Body>
                  <Card.Title>Name: {order.name}</Card.Title>
                  <Card.Text>
                    Address: {order.address}
                    <br />
                    Email: {order.email}
                  </Card.Text>
                  <Button
                    variant="primary"
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                      backgroundColor: "#12CBB5",
                    }}
                    onClick={() => handleDeleteAnOrder(order._id)}
                  >
                    Delete Order
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MyOrders;
