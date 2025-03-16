import "./Detail.css";

const RobotDetail = ({ robot }) => {
    const imageUrl = `/robots/robot${robot.id}.png`;
    
    return (
        <div className="robot-card">
            <h5 className="robot-title">{robot.nombre}</h5>
            <div className="image-container">
                <img src={imageUrl} className="robot-image" alt={robot.nombre} />
            </div>
            <div className="robot-info">
                <p>→ Año de Fabricación: {robot.añoFabricacion}</p>
                <p>→ Capacidad de Procesamiento: {robot.capacidadProcesamiento}</p>
                <p>→ Humor: {robot.humor}</p>
            </div>
        </div>
    );
};

export default RobotDetail;