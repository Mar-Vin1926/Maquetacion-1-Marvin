import { useNavigate, Link } from "react-router-dom";

const MenuLateral = () => {
  const navigate = useNavigate();

  function cerrarSesion() {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    navigate("/");
  }

  return (
    <aside className="aplicacion__menu-lateral">
      <h1 className="aplicacion__menu-lateral-logo">Home</h1>
      <nav className="aplicacion__menu-lateral-navegacion">
        <Link to="/servicios" className="aplicacion__menu-lateral-navegacion-item">Servicios</Link>
        <Link to="/contacto" className="aplicacion__menu-lateral-navegacion-item">Contacto</Link>
        <Link to="/acerca-de" className="aplicacion__menu-lateral-navegacion-item">Acerca de</Link>
        <button onClick={cerrarSesion} type="button" className="aplicacion__menu-lateral-navegacion-item">Cerrar sesión</button>
      </nav>
    </aside>
  );
};

export default MenuLateral;