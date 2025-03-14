

const RobotDetail = ({ robot }) => {
    return (
    
        <div className="card text-dark bg-light mb-3">
            <img src={robot.imagen} className="card-img-top" alt = ""/>
            <div className="card-body">
                <h5 className="card-title">{robot.nombre}</h5>
                <p><strong>Año de Fabricación:</strong> {robot.añoFabricacion}</p>
                <p><strong>Capacidad de Procesamiento:</strong> {robot.capacidadProcesamiento}</p>
                <p><strong>Humor:</strong> {robot.humor}</p>
            </div>
        </div>
    );
};

export default RobotDetail;
