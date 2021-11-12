import React, { useState } from "react";
import { Button, Container, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import MyOrders from "../MyOrders/MyOrders";

const Dashboard = () => {
  const [show, setShow] = useState(false);

  const { user, logOut } = useAuth();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      style={{
        marginTop: "110px",
      }}
    >
      <Button
        variant="primary"
        onClick={handleShow}
        style={{
          width: "70%",
          fontWeight: "bold",
          fontSize: "20px",
          backgroundColor: "#12CBB5",
        }}
      >
        Dashboard {">>>"}
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Dashboard</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="ms-5">
          <NavLink
            activeStyle={{
              color: "#12CBB5",
              padding: "5px",
              borderBottom: "2px solid #12CBB5",
              borderRadius: "10px",
            }}
            className="text-decoration-none"
            to="/pay"
          >
            Pay
          </NavLink>
          <br />
          <br />
          <NavLink
            activeStyle={{
              color: "#12CBB5",
              padding: "5px",
              borderBottom: "2px solid #12CBB5",
              borderRadius: "10px",
            }}
            className="text-decoration-none"
            to="/myOrders"
          >
            My Orders
          </NavLink>
          <br />
          <br />
          <NavLink
            activeStyle={{
              color: "#12CBB5",
              padding: "5px",
              borderBottom: "2px solid #12CBB5",
              borderRadius: "10px",
            }}
            className="text-decoration-none"
            to="/pay"
          >
            Review
          </NavLink>
          <br />
          <br />
          {user.email && (
            <button
              onClick={logOut}
              style={{
                color: "#12CBB5",
                padding: "5px",
                borderBottom: "2px solid #12CBB5 ",
                borderRadius: "10px",
                border: "none",
              }}
              className=" text-decoration-none"
            >
              logOut
            </button>
          )}
        </Offcanvas.Body>
      </Offcanvas>
      <Container>
        <MyOrders></MyOrders>
      </Container>
    </div>
  );
};

export default Dashboard;
