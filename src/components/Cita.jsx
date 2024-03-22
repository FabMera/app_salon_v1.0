import React from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { Form } from "react-router-dom";
const Cita = ({ cita }) => {
    const { id } = cita;
    const fecha = new Date(cita?.fecha);

    const handleSubmit = (e) => {
        if (!confirm("¿Estas seguro de eliminar el cliente?")) {
            e.preventDefault();
        }
    };
    return (
        <tr className="border-b">
            <td className="p-6">
                <p className="text-l text-center text-gray-800">
                    {cita?.cliente.nombre} {cita.cliente.apellido}
                </p>
            </td>
            <td className="p-6">
                <p className="text-l text-center text-gray-600">
                    {cita?.cliente.telefono}
                </p>
            </td>
            <td className="p-6">
                <p className="text-l text-center text-gray-600">
                    {cita?.cliente.email}
                </p>
            </td>
            <td className="p-6">
                <p className="text-l text-center text-gray-600">
                    {cita?.profesional.nombre} {cita.profesional.apellido}
                </p>
            </td>
            <td className="p-6">
                <p className="text-l text-center text-gray-600">
                    {cita?.serviciosSeleccionados
                        .map((servicio) => servicio.nombre)
                        .join(", ")}
                </p>
            </td>
            <td className="p-6">
                <p className="text-l text-center text-gray-600">
                    {fecha.getDate()}/{fecha.getMonth() + 1}/
                    {fecha.getFullYear()}
                </p>
            </td>
            <td className="p-6">
                <p className="text-l text-center text-gray-600">
                    {fecha.getHours()}:{fecha.getMinutes() < 10 ? "0" : ""}
                    {fecha.getMinutes()}
                </p>
            </td>

            <td className="p-6 flex gap-3 items-center justify-center ">
                <button onClick={() => navigate(`/cita/${id}/editar`)}>
                    <FaEdit style={{ color: "blue", fontSize: "20px" }} />
                </button>
                <Form
                    method="post"
                    action={`/cita/${id}/eliminar`}
                    onSubmit={handleSubmit}
                >
                    <button type="submit">
                        <FaRegTrashAlt
                            className="mt-1"
                            style={{ color: "red", fontSize: "20px" }}
                        />
                    </button>
                </Form>
            </td>
        </tr>
    );
};

export default Cita;
