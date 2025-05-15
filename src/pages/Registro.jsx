import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registro.css'; // Importaremos un archivo CSS para estilos

let apiUsuarios = "https://back-json-server-sabado.onrender.com/usuarios/";

function Registro() {
  const [getUsuario, setUsuario] = useState("");
  const [getPassword, setPassword] = useState("");
  const [getName, setName] = useState("");
  const [getEmail, setEmail] = useState("");
  const navigate = useNavigate();

  function registrarUsuario() {
    let usuarioExistente = false;
    fetch(apiUsuarios)
      .then(response => response.json())
      .then(usuarios => {
        usuarioExistente = usuarios.some(item => item.usuario === getUsuario || item.email === getEmail);
        if (usuarioExistente) {
          alert("Error: El usuario o el correo ya existen en la base de datos.");
        } else {
          fetch(apiUsuarios, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              usuario: getUsuario,
              password: getPassword,
              nombre: getName,
              correo: getEmail,
            }),
          })
            .then(response => response.json())
            .then(data => {
              console.log("Usuario registrado:", data);
              alert("Usuario registrado exitosamente.");
              navigate('/'); // Redirigir al Login después del registro
            })
            .catch(error => {
              console.error("Error al registrar usuario:", error);
              alert("Error al registrar usuario. Por favor, intenta de nuevo.");
            });
        }
      })
      .catch(error => {
        console.error("Error al verificar usuarios:", error);
        alert("Error al verificar usuarios. Por favor, intenta de nuevo.");
      });
  }

  return (
    <div className="registro-container">
      <form className="registro-form">
        <h2 className="registro-heading">Registrarse</h2>
        <input
          type="text"
          placeholder="Usuario"
          className="registro-input"
          value={getUsuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="registro-input"
          value={getPassword}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nombre"
          className="registro-input"
          value={getName}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Correo"
          className="registro-input"
          value={getEmail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="button" className="registro-button" onClick={registrarUsuario}>
          Registrarse
        </button>
        <p className="registro-login-link">
            <a href="/">¿Ya tiene una cuenta?</a>
        </p>
      </form>
    </div>
  );
}

export default Registro;