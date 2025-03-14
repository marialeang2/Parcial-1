import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";  
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import RobotDetail from "./RobotDetail";

const RobotList = () => {
    const [robots, setRobots] = useState([]);
    const [selectedRobot, setSelectedRobot] = useState(null);
  
    useEffect(() => {
        fetch("/robots.json")
            .then(response => response.json())
            .then(data => setRobots(data))
            .catch(error => console.error("Error:", error));
    }, []);
      
  
    return (
        <div className="container mt-5">
        <h2 className="text-center">Adopta un Robot con Robot Lovers!</h2>
        <img
          src="/resources/banner.png"
          alt=""
          className="img-fluid banner-image"
        />
        <div className="row">
            <div className="col-md-8">
                <table className="table table-striped table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Modelo</th>
                            <th>Empresa Fabricante</th>
                        </tr>
                    </thead>
                    <tbody>
                        {robots.map((robot) => (
                            <tr key={robot.id} onClick={() => setSelectedRobot(robot)} style={{ cursor: "pointer" }}>
                                <td>{robot.id}</td>
                                <td>{robot.nombre}</td>
                                <td>{robot.modelo}</td>
                                <td>{robot.empresaFabricante}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="col-md-4">
                {selectedRobot && <RobotDetail robot={selectedRobot} />}
            </div>
        </div>
    </div>
    );
  };
  
  export default RobotList;