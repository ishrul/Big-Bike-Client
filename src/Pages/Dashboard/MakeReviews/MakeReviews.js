import axios from "axios";
import React from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";

const MakeReviews = () => {
  const { user } = useAuth();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  const { register, handleSubmit, reset, TextField } = useForm();

  const onSubmit = (details) => {
    console.log(details);
    axios
      .post("https://cryptic-caverns-37917.herokuapp.com/reviews", details)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          alert("Successfully Added Your Review");
          reset();
        }
      });
  };

  return (
    <div>
      <form
        style={{ marginTop: "0px !important" }}
        className="login"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="text-info mb-0">Add Your Review</h3>
        <input
          defaultValue={user.displayName}
          {...register("name")}
          required
          placeholder="Enter Your Name"
        />
        <br />
        <br />
        <input {...register("review")} required placeholder="Enter Review" />
        <br />
        <br />
        <input
          type="number"
          {...register("rating", { min: 1, max: 5 })}
          placeholder="Rating star in 1 to 5 only."
        />
        <br />
        <br />
        <input className="btn-info fw-bold text-white my-3" type="submit" />
      </form>
    </div>
  );
};

export default MakeReviews;
