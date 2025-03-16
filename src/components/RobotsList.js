import { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import RobotDetail from "./RobotDetail";

const RobotList = () => {
  const [robots, setRobots] = useState([]);
  const [selectedRobot, setSelectedRobot] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/robots")
      .then((response) => response.json())
      .then((data) => {
        setRobots(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="container mt-4">
      <div className="text-center mb-3">
        <h2 className="fw-bold">
          <FormattedMessage id="Adopt a Robot" />
        </h2>
      </div>

      <div className="mb-4">
                <img
                    src="/resources/banner.png"
                    alt="Banner de robots coloridos"
                    className="img-fluid"
                    style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        margin: "0 auto",
                        border: "1px solid #e0e0e0",
                        borderRadius: "2px"
                    }}
                />
            </div>

      <div className="row">
        <div className="col-md-8">
          <table className="table">
            <thead>
              <tr className="table-dark">
                <th className="text-center" style={{ fontWeight: "bold" }}>
                  <FormattedMessage id="ID" />
                </th>
                <th>
                  <FormattedMessage id="Nombre" />
                </th>
                <th>
                  <FormattedMessage id="Modelo" />
                </th>
                <th>
                  <FormattedMessage id="Empresa Fabricante" />
                </th>
              </tr>
            </thead>
            <tbody>
              {robots.map((robot) => (
                <tr
                  key={robot.id}
                  onClick={() => setSelectedRobot(robot)}
                  style={{
                    cursor: "pointer",
                    backgroundColor:
                      selectedRobot && selectedRobot.id === robot.id ? "#f0f0f0" : "transparent",
                  }}
                >
                  <td className="text-center">{robot.id}</td>
                  <td>{robot.nombre}</td>
                  <td>{robot.modelo}</td>
                  <td>{robot.empresaFabricante}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="col-md-3 robot-detail-col">
          {selectedRobot && <RobotDetail robot={selectedRobot} />}
        </div>
      </div>

      <div className="text-center mt-4 mb-3 text-muted">
        <p>
          <FormattedMessage id="Contact" />
        </p>
      </div>
    </div>
  );
};

export default RobotList;
