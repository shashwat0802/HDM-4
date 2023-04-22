import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";

const Samplelogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    // Handle sign in logic here
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle sign up logic here
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Handle forgot password logic here
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6} lg={4}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Log In</h2>
              <Form onSubmit={handleSignIn}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </Form.Group>
                <Button
                  className="w-100 mt-3"
                  type="submit"
                  onClick={() => {
                    window.location.pathname = "/dashboard";
                  }}>
                  Log In
                </Button>
              </Form>
              <div className="w-100 text-center mt-3">
                <a href="#" onClick={handleForgotPassword}>
                  Forgot Password?
                </a>
              </div>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Need an account?{" "}
            <a href="#" onClick={handleSignUp}>
              Sign Up
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Samplelogin;
