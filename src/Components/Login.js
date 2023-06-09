import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { useAuthContext } from "../Context/AuthContext";
import JournalHeader from "./JournalHeader";

export default function Login() {
  const emailRef = useRef();
  const pswdRef = useRef();
  const [error, setError] = useState("");
  const [Loading, setIsLoading] = useState(false);
  const { logIn } = useAuthContext();
  const navigate = useNavigate();
  async function handleLogin(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      await logIn(emailRef.current.value, pswdRef.current.value);
      navigate("/");
    } catch {
      setError("cannot log you in at the moment.");
    }
    setIsLoading(false);
  }
  return (
    <div className="container" style={{ maxWidth: "500px", minWidth: "350px" }}>
      <JournalHeader />
      <h2 className="text-center mb-4 text-light">Log in</h2>
      {error && error.length > 0 && <Alert variant="danger">{error}</Alert>}
      <Card>
        <Card.Body>
          <Form onSubmit={handleLogin}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={pswdRef} required />
            </Form.Group>

            <Button
              className="w-100  mt-4 bg-success"
              type="submit"
              disabled={Loading}
            >
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <p className="text-light">Don't have an account yet , create one</p>
        <Link class="text-light " to="/signup">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
