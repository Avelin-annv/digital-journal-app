import React, { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { useAuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import JournalHeader from "./JournalHeader";

export default function SignUp() {
  const emailRef = useRef();
  const pswdRef = useRef();
  const pswdConfRef = useRef();
  const formRef = useRef();
  const [error, setError] = useState("");
  const [Loading, setIsLoading] = useState(false);
  const { signUp } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (pswdRef.current.value !== pswdConfRef.current.value)
      return setError("Passwords don't match");
    try {
      setError("");
      await signUp(emailRef.current.value, pswdRef.current.value);
      formRef.current.reset();
    } catch {
      setError("User could not be created");
    }
    setIsLoading(false);
  };
  return (
    <div className="container" style={{ maxWidth: "500px", minWidth: "350px" }}>
      <JournalHeader />
      <h2 className="text-center mb-4 text-light">Sign Up</h2>
      {error && error.length > 0 && <Alert variant="danger">{error}</Alert>}
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit} ref={formRef}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={pswdRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Confirm your password</Form.Label>
              <Form.Control type="password" ref={pswdConfRef} required />
            </Form.Group>
            <Button
              className="w-100  mt-4 bg-success "
              type="submit"
              disabled={Loading}
            >
              Sign up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2 ">
        <p className="text-light">Already have an account?</p>
        <Link class="text-light " to="/login">
          Login
        </Link>
      </div>
    </div>
  );
}
