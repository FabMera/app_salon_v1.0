import Cliente from "../../components/Cliente";
import { useLoaderData } from "react-router-dom";
import { obtenerClientes } from "../../data/clientes";

//Funcion loader
export async function loader() {
    const clientes = await obtenerClientes();
    console.log(clientes);
    return clientes;
}

const ClientesPage = () => {
    const clientes = useLoaderData();
    return (
        <>
            <h1 className="font-black text-4xl text-indigo-900">
                Clientes del Salon
            </h1>
            <p className="mt-3">Administrar Clientes</p>
            {clientes.length ? (
                <table className="w-full bg-white shadow mt-5 table-auto">
                    <thead className="bg-indigo-800 text-white">
                        <tr>
                            <th className="p-2">Nombre </th>
                            <th className="p-2">Apellido</th>
                            <th className="p-2">Email</th>
                            <th className="p-2">Telefono</th>
                            <th className="p-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map((cliente) => (
                            <Cliente key={cliente.id} cliente={cliente} />
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center mt-5">No hay clientes registrados</p>
            )}
        </>
    );
};

export default ClientesPage;
