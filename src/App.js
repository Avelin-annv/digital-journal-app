import { Container } from "react-bootstrap";
import { AuthProvider } from "./Context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Components/Signup";
import Login from "./Components/Login";
import DashboardPage from "./Components/DashboardPage";
import PrivateRoute from "./Components/PrivateRoute";
import backgroundimg from "./Images/dashboard-background.png";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundimg})`,
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <div className="container-fluid">
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <PrivateRoute>
                    <DashboardPage />
                  </PrivateRoute>
                }
              />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
