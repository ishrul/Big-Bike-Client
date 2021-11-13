import React, { useState } from "react";
import { Button, Container, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import MyOrders from "../MyOrders/MyOrders";
import MakeReviews from "../MakeReviews/MakeReviews";
import Pay from "../Pay/Pay";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import AddAProduct from "../AddAProduct/AddAProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageProducts from "../ManageProducts/ManageProducts";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { Box } from "react-bootstrap-icons";

const Dashboard = () => {
  const [show, setShow] = useState(false);

  const { user, logOut, admin } = useAuth();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let { path, url } = useRouteMatch();

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
        Open Dashboard {">>>"}
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
            to={`${url}/MyOrders`}
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
            to={`${url}/pay`}
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
            to={`${url}/MakeReview`}
          >
            Review
          </NavLink>
          <br />
          <br />
          {admin && (
            <div>
              <NavLink
                activeStyle={{
                  color: "#12CBB5",
                  padding: "5px",
                  borderBottom: "2px solid #12CBB5",
                  borderRadius: "10px",
                }}
                className="text-decoration-none"
                to={`${url}/manageAllOrders`}
              >
                Manage All Orders
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
                to={`${url}/addAProduct`}
              >
                Add A Product
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
                to={`${url}/makeAdmin`}
              >
                Make Admin
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
                to={`${url}/manageProducts`}
              >
                Manage All Products
              </NavLink>
            </div>
          )}
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

      <Switch>
        <Route exact path={path}>
          <MyOrders></MyOrders>
        </Route>
        <Route path={`${path}/MyOrders`}>
          <MyOrders></MyOrders>
        </Route>
        <Route path={`${path}/pay`}>
          <Pay></Pay>
        </Route>
        <Route path={`${path}/MakeReview`}>
          <MakeReviews></MakeReviews>
        </Route>
        <Route path={`${path}/manageAllOrders`}>
          <ManageAllOrders></ManageAllOrders>
        </Route>
        <Route path={`${path}/addAProduct`}>
          <AddAProduct></AddAProduct>
        </Route>
        <Route path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route path={`${path}/manageProducts`}>
          <ManageProducts></ManageProducts>
        </Route>
      </Switch>
    </div>
  );
};

export default Dashboard;
