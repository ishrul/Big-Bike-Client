import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../images/logo/logo.png";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar
        bg="light"
        variant="light"
        fixed="top"
        collapseOnSelect
        expand="md"
        style={{
          borderBottom: "5px solid #12CBB5",
          backgroundColor: "transparent",
        }}
      >
        <Container>
          <img
            className="rounded-3"
            src={logo}
            alt=""
            width="180vh"
            height="80vh"
          />
          <Navbar.Toggle />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <NavLink
              activeStyle={{
                color: "#12CBB5",
                padding: "5px",
                borderBottom: "2px solid #12CBB5",
                borderRadius: "10px",
              }}
              className="text-decoration-none"
              to="/home"
            >
              Home
            </NavLink>

            {user.email && (
              <NavLink
                to="/dashboard"
                activeStyle={{
                  color: "#12CBB5",
                  padding: "5px",
                  borderBottom: "2px solid #12CBB5 ",
                  borderRadius: "10px",
                }}
                className="ms-3 text-decoration-none"
              >
                Dashboard
              </NavLink>
            )}
            {user.email ? (
              <button
                onClick={logOut}
                style={{
                  color: "#12CBB5",
                  padding: "5px",
                  borderBottom: "2px solid #12CBB5 ",
                  borderRadius: "10px",
                  border: "none",
                }}
                className="ms-3 text-decoration-none"
              >
                logOut
              </button>
            ) : (
              <NavLink
                activeStyle={{
                  color: "#12CBB5",
                  padding: "5px",
                  borderBottom: "2px solid #12CBB5 ",
                  borderRadius: "10px",
                }}
                className="ms-3 text-decoration-none"
                to="/login"
              >
                Login
              </NavLink>
            )}
            {user?.displayName && (
              <Navbar.Text className="ms-2">
                <Link className="ms-1 text-decoration-none" to="/login">
                  {user.displayName}
                </Link>
              </Navbar.Text>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
