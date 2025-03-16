import { useState } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

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
      setError("Error de autenticación. Revise sus credenciales");
    }
  };
  
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <h2 className="text-center fw-bold mb-3">Adopta un Robot con Robot Lovers!</h2>
      
      <div className="text-center mb-4 w-100" style={{ maxWidth: "700px" }}>
        <img
          src="/resources/banner.png"
          alt="Robot Lovers"
          className="img-fluid"
          style={{ background: "#ff6b77" }}
        />
      </div>
      
      <Row className="justify-content-center" style={{ maxWidth: "500px", width: "100%" }}>
        <Col xs={12} className="bg-white p-4">
          <Row className="mb-4">
            <Col xs={12} className="text-center">
              <h3 className="fw-bold mb-3">Inicio de sesión</h3>
            </Col>
          </Row>
          
          <Form onSubmit={handleLogin}>
            <Row className="mb-3">
              <Col xs={12}>
                <Form.Label className="fw-bold mb-3">Nombre de usuario</Form.Label>
                <Form.Control
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  style={{ backgroundColor: "#d3d3d3" }}
                />
              </Col>
            </Row>
            
            <Row className="mb-4">
              <Col xs={12}>
                <Form.Label className="fw-bold mb-3">Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{ backgroundColor: "#d3d3d3" }}
                />
              </Col>
            </Row>
            
            {error && (
              <Row className="mt-3">
                <Col xs={12} className="text-center">
                  <div className="text-danger">{error}</div>
                </Col>
              </Row>
            )}
            
            <Row className="mb-3">
              <Col xs={6} className="text-start">
                <Button 
                  type="submit" 
                  className="px-4 w-100" 
                  style={{ backgroundColor: "#0b4483", borderColor: "#0b4483" }}
                >
                  Ingresar
                </Button>
              </Col>
              <Col xs={6} className="text-end">
                <Button 
                  type="reset" 
                  className="px-4 w-100" 
                  variant="danger" 
                  style={{ backgroundColor: "#ff6b77", borderColor: "#ff6b77",  color: "#000" }}
                >
                  Cancelar
                </Button>
              </Col>
            </Row>
          </Form>
          
          <Row>
            <Col xs={12} className="text-center mt-4">
              <small className="text-muted">
                Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers
              </small>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;