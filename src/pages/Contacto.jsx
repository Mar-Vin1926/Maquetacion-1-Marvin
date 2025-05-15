import MenuLateral from '../components/MenuLateral';
import './Contacto.css'; // Importa los estilos de Home para mantener la misma estructura visual

const Servicios = () => {
  return (
    <div className="aplicacion">
      <MenuLateral />
      <div className="aplicacion__contenido">
        <div className="aplicacion__contenido-fondo"></div>
        <main className="aplicacion__principal">
          <div className="aplicacion__eslogan">
            <h2 className="aplicacion__eslogan-texto">Contacto</h2> {/* Título específico para esta sección */}
          </div>
          <div className="aplicacion__informacion">
            {/* Aquí irá el contenido específico de la sección de Servicios */}
            {/* Puedes añadir más elementos HTML aquí */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Servicios;