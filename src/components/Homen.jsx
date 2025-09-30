import './Homen.css';

function Homen() {
  return (
    <div className="homen-container">
      <h1 className="homen-title">🏢 Bienvenido a SmartCondominum</h1>
      <p className="homen-subtitle">
        Tu espacio digital para gestionar pagos, avisos y servicios del condominio.
      </p>
      <p>
        Organiza tu comunidad de forma 
        <span className="homen-highlight green"> simple</span>, 
        <span className="homen-highlight blue"> rápida</span> y 
        <span className="homen-highlight purple"> segura</span>.
      </p>
      
    </div>
  );
}

export default Homen;
