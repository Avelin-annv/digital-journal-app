import React, { useState } from "react";
import { Button, Card, Alert } from "react-bootstrap";
import { useAuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function DashboardPage() {
  const { logOut, currentUser } = useAuthContext();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (e) {
      setError("cannot log you out.");
    }
  };
  return (
    <>
      {error && error.length > 0 && <Alert variant="danger">{error}</Alert>}
      <h2 className="text-center mb-4 text-light">Have a good day!!</h2>
      <Card>
        <Card.Body>
          <p>
            <strong>Welcome</strong> {currentUser.email} !
          </p>
          <div className="btn-group-vertical">
            <Button className="m-2">Jot down ideas!</Button>
            <Button className="m-2">Save your Contacts </Button>
            <Button className="m-2">Check your todo list here</Button>
            <Button className="m-2">Sticky notes</Button>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button
          onClick={() => {
            handleLogout();
          }}
        >
          Log out
        </Button>
      </div>
    </>
  );
}
