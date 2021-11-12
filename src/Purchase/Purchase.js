import React from "react";
import { Form } from "react-bootstrap";
import useAuth from "../Hooks/useAuth";

const Purchase = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <div>
      <Form className="login my-5">
        <h3>Place Order</h3>
        <br />
        <input
          type="text"
          placeholder="Enter Your Name"
          value={user.displayName}
        />
        <br />
        <input type="email" placeholder="Enter Your Email" value={user.email} />
        <br />
        <input type="text" placeholder="Enter Your Address" />

        <input className="submit-button" type="submit" value="Place Order" />
      </Form>
    </div>
  );
};

export default Purchase;
