import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"; // Importa Link
import "../styles/Login.css";
import {
  alertaError,
  alertaRedireccion,
  generaToken,
} from "../helpers/funciones";
let apiUsuarios = "https://back-json-server-sabado.onrender.com/usuarios/";

function Login() {
  const [getUsuario, setUsuario] = useState("");
  const [getPassword, setPassword] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  let redireccion = useNavigate();

  function getUsuarios() {
    fetch(apiUsuarios)
      .then((response) => response.json())
      .then((data) => setUsuarios(data));
  }

  useEffect(() => {
    getUsuarios();
  }, []);

  function iniciarSesion() {
    let usuario = usuarios.find(
      (item) => item.usuario == getUsuario && item.password == getPassword
    );
    if (usuario) {
      let token = generaToken();
      localStorage.setItem("token", token);
      localStorage.setItem("usuario", usuario.nombre);
      alertaRedireccion("Bienvenido " + usuario.nombre, "/home", redireccion);
    } else {
      alertaError("Error", "Usuario y/o contraseña incorrecto", "error");
    }
  }

  return (
    <div className="container">
      <form className="form">
        <div className="form_details"></div> {}
        <input
          onChange={(e) => setUsuario(e.target.value)}
          type="text"
          className="input"
          placeholder="Usuario"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="input"
          placeholder="Contraseña"
        />
        <button type="button" onClick={iniciarSesion} className="btn">
          Iniciar sesión
        </button>
        <span className="switch">
          ¿No tiene una cuenta? {}
          <Link to="/registro" className="signup_tog">
            Regístrese
          </Link>
        </span>
      </form>
    </div>
  );
}

export default Login;