import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./components/LoginForm";
import RobotList from "./components/RobotsList";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Función que cambia el estado de autenticación
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="App">
      {isAuthenticated ? <RobotList /> : <LoginForm onLogin={handleLogin} />}
    </div>
  );
}

export default App;

