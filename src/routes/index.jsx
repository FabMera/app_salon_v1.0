import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/public_pages/LoginPage";
import HomePage from "../pages/private_pages/HomePage";
import ClientesPage, {
    loader as clientesLoader,
} from "../pages/private_pages/ClientesPage";
import NuevoClientePage, {
    action as nuevoClienteAction,
} from "../pages/private_pages/NuevoClientePage";
import NotFound from "../pages/public_pages/NotFound";
import AgendaPage from "./../pages/private_pages/AgendaPage";
import Profesionales from "./../pages/private_pages/Profesionales";
import NuevoProfesionalPage from "../pages/private_pages/NuevoProfesionalPage";
import VentasPage from "../pages/private_pages/VentasPage";
import NuevaVentaPage from "../pages/private_pages/NuevaVentaPage";
import NuevaCitaPage, {
    loader as nuevaCitaLoader,
} from "../pages/private_pages/NuevaCitaPage";
import RegistrosPage from "../pages/private_pages/RegistrosPage";
import ContactoPages from "../pages/private_pages/ContactoPages";
import EditarClientePage from "./../pages/private_pages/EditarClientePage";

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
                loader: clientesLoader,
            },
            {
                path: "/clientes/nuevo",
                element: <NuevoClientePage />,
                action: nuevoClienteAction,
            },
            {
                path: "/clientes/:id/eliminar",
                action: "delete",
            },
            {
                path: "/clientes/:id/editar",
                element: <EditarClientePage />,
                action: "edit",
            },
            {
                path: "/agenda",
                element: <AgendaPage />,
            },
            {
                path: "/agenda/nuevo",
                element: <NuevaCitaPage />,
                loader: nuevaCitaLoader,
            },

            {
                path: "/profesionales",
                element: <Profesionales />,
            },
            {
                path: "/profesionales/nuevo",
                element: <NuevoProfesionalPage />,
            },
            {
                path: "/ventas",
                element: <VentasPage />,
            },
            {
                path: "/ventas/nueva",
                element: <NuevaVentaPage />,
            },
            {
                path: "/registros",
                element: <RegistrosPage />,
            },
            {
                path: "/contacto",
                element: <ContactoPages />,
            },
        ],
    },
]);
