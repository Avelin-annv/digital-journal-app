import { Container } from "react-bootstrap";
import { AuthProvider } from "./Context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Components/Signup";
import Login from "./Components/Login";
import DashboardPage from "./Components/DashboardPage";

function App() {
  return (
    <Container style={{ maxWidth: "500px", minWidth: "350px" }}>
      <div>
        {" "}
        <BrowserRouter>
          <AuthProvider>
            {/* <SignUp /> */}
            <Routes>
              <Route exact path="/" element={<DashboardPage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </Container>
  );
}

export default App;
