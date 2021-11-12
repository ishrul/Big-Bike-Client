import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";

const Purchase = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  const { bikeName } = useParams();

  const { register, handleSubmit, reset } = useForm();

  const [order, setOrder] = useState({});

  const { user } = useAuth();

  const onSubmit = (details) => {
    details.BikeName = bikeName;
    setOrder(details);
    console.log(order);

    axios.post("http://localhost:5000/myOrder", details).then((res) => {
      console.log(res);
      if (res.data.insertedId) {
        alert("Successfully Added To Your orders");
        reset();
      }
    });
  };

  return (
    <div
      style={{
        marginTop: "100px",
      }}
    >
      <h3 className="text-info mb-0">Confirm Your Order {bikeName} </h3>
      <form
        style={{ marginTop: "0px !important" }}
        className="login"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          defaultValue={user.displayName}
          {...register("name")}
          required
          placeholder="Enter Your Name"
        />
        <br />
        <br />
        <input
          defaultValue={user.email}
          {...register("email")}
          required
          placeholder="Enter Your Email"
        />
        <br />
        <br />
        <input
          {...register("address")}
          required
          placeholder="Enter your Address"
        />
        <br />
        <br />
        <input {...register("city")} required placeholder="Enter your City" />
        <br />
        <br />
        <input
          {...register("phone")}
          required
          placeholder="Enter your Phone Number"
        />
        <br />
        <br />
        <input className="btn-info fw-bold text-white my-3" type="submit" />
      </form>
      {/* <Link className=" fw-bold" to="/myOrders">
        Want To See All Of Your Orders?
      </Link> */}
    </div>
  );
};

export default Purchase;
