import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (details) => {
    console.log(details);

    fetch("https://cryptic-caverns-37917.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(details),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert(`Congratulation! ${details.email} is now Admin`);
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
        <h3 className="text-info mb-0">Make An Admin</h3>
        <input {...register("email")} required placeholder="Enter Your Email" />
        <br />
        <input className="btn-info fw-bold text-white my-3" type="submit" />
      </form>
    </div>
  );
};

export default MakeAdmin;
