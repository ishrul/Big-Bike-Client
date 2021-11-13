import React, { useState } from "react";
import { Form, Spinner } from "react-bootstrap";
import { Google } from "react-bootstrap-icons";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Register = () => {
  const history = useHistory();
  const {
    createAccountWithGoogle,
    error,
    setError,
    setIsLoading,
    setUser,
    setUserName,
    isLoading,
    saveUser,
  } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    createAccountWithGoogle(email, password)
      .then((res) => {
        // Signed in
        const user = res.user;
        console.log(user);
        setUser(user);
        setUserName(name);
        saveUser(email, name);
        setError("");
        alert("Successfully Registered");
        history.push("/home");
        window.location.reload(true);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      })
      .finally(() => setIsLoading(false));
    document.querySelectorAll("input").forEach((input) => (input.value = ""));
  };

  return (
    <div>
      {!isLoading && (
        <Form onSubmit={handleRegistration} className="login my-5">
          <h3>Create Account</h3>
          <br />
          <input
            onBlur={handleNameChange}
            type="text"
            placeholder="Enter Your Name"
            required
          />
          <br />
          <input
            onBlur={handleEmailChange}
            type="email"
            placeholder="Enter Your Email"
            required
          />
          <br />
          <input
            onBlur={handlePasswordChange}
            type="password"
            placeholder="Enter Your Password"
            required
          />
          <br />
          <p className="text-danger">{error.slice(10, 100)}</p>
          <p>
            Already have an account? <Link to="/login">Login</Link>{" "}
          </p>
          <input
            className="submit-button"
            type="submit"
            value="Create Account"
          />
        </Form>
      )}
      {isLoading && (
        <div
          style={{
            marginTop: "100px",
          }}
        >
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
        </div>
      )}
    </div>
  );
};

export default Register;
