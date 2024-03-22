import React from "react";
import Cita from "../../components/Cita";
import { useLoaderData } from "react-router-dom";
import { obtenerCitas } from "../../data/citas";

export async function loader() {
    const citas = await obtenerCitas();
    console.log(citas);
    return citas;
}
const AgendaPage = () => {
    const citas = useLoaderData();
    return (
        <>
            <h1 className="font-black text-4xl text-indigo-900">
                Citas de los Clientes
            </h1>
            <p className="mt-3">Administra las citas</p>
            {citas.length ? (
                <table className="w-full bg-white shadow mt-5 table-auto">
                    <thead className="bg-indigo-800 text-white">
                        <tr>
                            <th className="p-2">Cliente </th>
                            <th className="p-2">Telefono Contacto</th>
                            <th className="p-2">Email</th>
                            <th className="p-2">Profesional</th>
                            <th className="p-2">Servicios</th>
                            <th className="p-2">Fecha Cita</th>
                            <th className="p-2">Hora Cita</th>
                            <th className="p-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {citas.map((cita) => (
                            <Cita key={cita.id} cita={cita} />
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center mt-5">No hay citas creadas</p>
            )}
        </>
    );
};

export default AgendaPage;
