# Maquetación React con Menú Lateral

Este proyecto es una maquetación web desarrollada con React. Cuenta con un menú lateral fijo y varias secciones de contenido (Home, Servicios, Contacto, Acerca de), manteniendo una estructura visual coherente en todas las páginas.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Configuración del Proyecto](#configuración-del-proyecto)
- [Ejecución del Proyecto](#ejecución-del-proyecto)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Componentes Principales](#componentes-principales)
- [Rutas](#rutas)
- [Estilos](#estilos)
- [Funcionalidades](#funcionalidades)
- [Próximos Pasos (Opcional)](#próximos-pasos-opcional)
- [Autor](#autor)

## Descripción

Este proyecto de maquetación en React tiene como objetivo crear una interfaz de usuario con un menú de navegación lateral fijo que permite a los usuarios acceder a diferentes secciones de la aplicación: Home, Servicios, Contacto y Acerca de. Se ha enfocado en mantener una estructura visual consistente en todas las páginas, reutilizando estilos y componentes para lograr una experiencia de usuario fluida y coherente.

## Tecnologías Utilizadas

- [React](https://react.dev/): Librería de JavaScript para construir interfaces de usuario.
- [React Router DOM](https://reactrouter.com/): Para la gestión de las rutas de la aplicación.
- [CSS Modules (o CSS Global - según tu configuración)]: Para la aplicación de estilos.
- [Vite](https://vitejs.dev/): Entorno de desarrollo y empaquetador de módulos rápido.

## Configuración del Proyecto

Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

1.  **Clona el repositorio (si lo tienes en un repositorio remoto):**

    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd <NOMBRE_DEL_PROYECTO>
    ```

2.  **Instala las dependencias:**

    Asegúrate de tener [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/) (o [yarn](https://yarnpkg.com/)) instalados en tu sistema. Luego, ejecuta el siguiente comando en la raíz del proyecto:

    ```bash
    npm install
    # o
    yarn install
    ```

## Ejecución del Proyecto

Una vez que las dependencias estén instaladas, puedes iniciar el servidor de desarrollo de Vite con el siguiente comando:

```bash
npm run dev
# o
yarn dev
Esto iniciará la aplicación en modo de desarrollo. Abre tu navegador y ve a la dirección que te proporcione Vite (normalmente http://localhost:5173).

Estructura del Proyecto
Aquí se describe la estructura de las carpetas y archivos principales del proyecto:

maquetacion1/
├── public/
│   └── ... (archivos estáticos)
└── src/
    ├── assets/
    │   └── ... (imágenes, etc.)
    ├── components/
    │   ├── Contenido.jsx
    │   ├── MenuLateral.jsx
    │   └── RutaProtegida.jsx
    ├── helpers/
    │   └── funciones.js
    ├── pages/
    │   ├── AcercaDe.jsx
    │   ├── Contacto.jsx
    │   ├── Home.jsx
    │   ├── Login.css
    │   ├── Login.jsx
    │   ├── Registro.css
    │   └── Registro.jsx
    ├── routes/
    │   ├── enrutador.jsx
    │   └── Home.css
    ├── index.css
    ├── main.jsx
    └── App.jsx
├── .gitignore
├── README.md
├── package-lock.json
└── package.json
Componentes Principales
App.jsx: Componente raíz de la aplicación, donde se configura el enrutador.
components/MenuLateral.jsx: Componente que renderiza el menú de navegación lateral fijo.
components/RutaProtegida.jsx: Componente para proteger rutas que requieren autenticación.
pages/Home.jsx: Página de inicio de la aplicación.
pages/Servicios.jsx: Sección de servicios (estructura similar a Home).
pages/Contacto.jsx: Sección de contacto (estructura similar a Home).
pages/AcercaDe.jsx: Sección "Acerca de" (estructura similar a Home).
pages/Login.jsx: Componente para la página de inicio de sesión.
pages/Registro.jsx: Componente para la página de registro de usuarios.
Rutas
La navegación de la aplicación está configurada en src/routes/enrutador.jsx utilizando react-router-dom. Las rutas principales incluyen:

/: Página de inicio de sesión (Login).
/home: Página principal (Home), protegida por autenticación.
/registro: Página de registro de usuarios.
/servicios: Sección de servicios, protegida.
/contacto: Sección de contacto, protegida.
/acerca-de: Sección "Acerca de", protegida.
Estilos
Los estilos CSS se gestionan principalmente en los siguientes archivos:

src/index.css: Estilos globales base para la aplicación.
src/routes/Home.css: Estilos para la estructura general de las páginas con menú lateral (reutilizados en Servicios, Contacto, Acerca de).
src/pages/Login.css: Estilos específicos para el componente de inicio de sesión.
src/pages/Registro.css: Estilos específicos para el componente de registro.
src/pages/Contacto.css, src/pages/Servicios.css, src/pages/AcercaDe.css: Archivos para estilos específicos del contenido de cada sección.
Funcionalidades
Menú Lateral Fijo: Proporciona una navegación constante a través de las diferentes secciones.
Estructura Coherente: Mantiene un diseño visual similar en las páginas principales (Home, Servicios, Contacto, Acerca de).
Autenticación (Implementada): Rutas protegidas para asegurar que solo usuarios autenticados puedan acceder a ciertas secciones.
Inicio de Sesión y Registro: Funcionalidades básicas de autenticación de usuarios.
Próximos Pasos (Opcional)
Aquí podrías listar posibles mejoras o funcionalidades futuras:

Implementación completa del contenido para las secciones de Servicios, Contacto y Acerca de.
Mejoras en el diseño y la responsividad del menú lateral y el contenido.
Implementación de validaciones de formularios.
Conexión con una API para la gestión de datos.
Autor
[Tu Nombre o Nombre del Proyecto]