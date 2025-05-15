import RutaProtegida from '../components/RutaProtegida';
import Home from '../Home';
import Login from '../pages/Login';
import Registro from '../pages/Registro';
import Servicios from '../pages/Servicios'; // Importa el componente Servicios
import Contacto from '../pages/Contacto';   // Importa el componente Contacto
import AcercaDe from '../pages/AcercaDe';   // Importa el componente AcercaDe

export let enrutador = [
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: <RutaProtegida proteger={<Home />} />,
  },
  {
    path: '/registro',
    element: <Registro />,
  },
  {
    path: '/servicios',
    element: <RutaProtegida proteger={<Servicios />} />, // Ruta protegida para Servicios
  },
  {
    path: '/contacto',
    element: <RutaProtegida proteger={<Contacto />} />,   // Ruta protegida para Contacto
  },
  {
    path: '/acerca-de',
    element: <RutaProtegida proteger={<AcercaDe />} />,   // Ruta protegida para AcercaDe
  },
];