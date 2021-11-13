import React, { useState } from "react";
import { Alert, Form } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { LoginAccountWithGoogle, setUser, error, setError, setIsLoading } =
    useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const history = useHistory();

  const redirect_uri = location.state?.from || "/home";

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    LoginAccountWithGoogle(email, password)
      .then((res) => {
        // Signed in
        const user = res.user;
        setUser(user);
        alert("Successfully Loggin.");
        history.push(redirect_uri);

        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => setIsLoading(false));
    document.querySelectorAll("input").forEach((input) => (input.value = ""));
  };

  return (
    <div>
      <Form onSubmit={handleLogin} className="login my-5">
        <h3>Please Login</h3>
        <input
          onBlur={handleEmailChange}
          type="email"
          placeholder="Enter Your Email"
        />
        <br />
        <input
          onBlur={handlePasswordChange}
          type="password"
          placeholder="Enter Your Password"
        />
        <br />
        <p className="text-danger">{error.slice(10, 100)}</p>
        <p>
          New in Power GYM? <Link to="/register">Registration</Link>{" "}
        </p>
        <input className="submit-button" type="submit" value="Submit" />
      </Form>
    </div>
  );
};

export default Login;
