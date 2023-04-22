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
      <h2 className="text-center mb-4">Welcome</h2>
      <Card>
        <Card.Body>
          <p>
            <strong>Email:</strong> {currentUser.email}
          </p>
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
