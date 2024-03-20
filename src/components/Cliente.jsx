import React from "react";
import { Form, redirect } from "react-router-dom";
import { FaEdit, FaRegTrashAlt, FaEye } from "react-icons/fa";
import { eliminarCliente } from "../data/clientes";

//Funcion para eliminar un cliente
export async function action({ params }) {
    await eliminarCliente(params.id);
    return redirect("/");
}

const Cliente = ({ cliente }) => {
    const { id, nombre, apellido, email, telefono } = cliente;
    const handleSubmit = (e) => {
        if (!confirm("¿Estas seguro de eliminar el cliente?")) {
            e.preventDefault();
        }
    };
    return (
        <tr className="border-b">
            <td className="p-6">
                <p className="text-l text-center text-gray-800">{nombre}</p>
            </td>
            <td className="p-6">
                <p className="text-l text-center text-gray-600">{apellido}</p>
            </td>
            <td className="p-6">
                <p className="text-l text-center text-gray-600">{email}</p>
            </td>
            <td className="p-6">
                <p className="text-l text-center text-gray-600">{telefono}</p>
            </td>

            <td className="p-6 flex gap-3 items-center justify-center ">
                <button onClick={() => navigate(`/clientes/${id}/editar`)}>
                    <FaEdit style={{ color: "blue", fontSize: "20px" }} />
                </button>
                <Form
                    method="post"
                    action={`/clientes/${id}/eliminar`}
                    onSubmit={handleSubmit}
                >
                    <button type="submit">
                        <FaRegTrashAlt className="mt-1"
                            style={{ color: "red", fontSize: "20px" }}
                        />
                    </button>
                </Form>
            </td>
        </tr>
    );
};

export default Cliente;
