import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Credenciales de prueba
    const validUser = "admin";
    const validPass = "pass";

    if (username === validUser && password === validPass) {
      onLogin(); // Llama a la función para cambiar de vista
    } else {
      setError("Usuario o contraseña incorrectos.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-lg">
        <h2 className="text-center">Adopta un Robot con Robot Lovers!</h2>
        <img
          src="/resources/banner.png"
          alt=""
          className="img-fluid banner-image"
        />
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Nombre de usuario</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary">Ingresar</button>
            <button type="reset" className="btn btn-danger">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
