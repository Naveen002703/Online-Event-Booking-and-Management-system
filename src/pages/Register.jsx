import React, { useState } from "react";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem("user", JSON.stringify(formData));

   
    setSuccess(true);


    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    });
  };

  return (
    <div className="auth-page">
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Card className="auth-card p-4">
          <h3 className="text-center mb-3">Register</h3>

          {success && (
            <Alert variant="success" className="text-center">
              ✅ Registered Successfully!
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Control
              name="name"
              placeholder="Name"
              className="mb-3"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              className="mb-3"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              className="mb-3"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <Form.Control
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="mb-3"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            <Form.Control
              name="phone"
              placeholder="Phone Number"
              className="mb-3"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <Button type="submit" className="w-100">
              Register
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default Register;
