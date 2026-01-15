import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      setError("No user found. Please register first.");
      return;
    }

    if (email === user.email && password === user.password) {
      setSuccess(true);
      setError("");

      // Save login status
      localStorage.setItem("isLoggedIn", "true");

      // Redirect after 1.5 sec
      setTimeout(() => {
        navigate("/events");
      }, 1500);
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Login</h2>

        {success && (
          <Alert variant="success">✅ Login Successful!</Alert>
        )}

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleLogin}>
          <Form.Control
            type="email"
            placeholder="Email"
            className="mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Form.Control
            type="password"
            placeholder="Password"
            className="mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button variant="primary" className="w-100" type="submit">
            Login
          </Button>

          <a href="#" className="auth-link">
            Forgot Password?
          </a>
        </Form>
      </div>
    </div>
  );
};

export default Login;
