import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/public_pages/LoginPage";
import HomePage from "../pages/private_pages/HomePage";
import ClientesPage from "../pages/private_pages/ClientesPage";
import NuevoClientePage from "../pages/private_pages/NuevoClientePage";
import NotFound from "../pages/public_pages/NotFound";
import AgendaPage from './../pages/private_pages/AgendaPage';
import CrearCita from './../components/CrearCita';
import Profesionales from './../pages/private_pages/Profesionales';
import NuevoProfesionalPage from "../pages/private_pages/NuevoProfesionalPage";
import VentasPage from "../pages/private_pages/VentasPage";
import NuevaVentaPage from "../pages/private_pages/NuevaVentaPage";
import NuevaCitaPage from "../pages/private_pages/NuevaCitaPage";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,
        errorElement: <NotFound />,
    },
    {
        path: "/",
        element: <HomePage />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/clientes",
                element: <ClientesPage />,
            },
            {
                path: "/clientes/nuevo",
                element: <NuevoClientePage />,
            },
            {
                path: "/agenda",
                element: <AgendaPage />,
            },
            {
                path: "/agenda/nuevo",
                element: <NuevaCitaPage />,
            },

            {
                path: "/profesionales",
                element: <Profesionales/>,
            },
            {
                path: "/profesionales/nuevo",
                element: <NuevoProfesionalPage/>,
            },
            {
                path: "/ventas",
                element: <VentasPage/>,
            },
            {
                path: "/ventas/nueva",
                element: <NuevaVentaPage />,
            },

        ],
    },
]);
