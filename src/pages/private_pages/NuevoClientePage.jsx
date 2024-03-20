import { Form, useActionData, useNavigate,redirect } from "react-router-dom";
import FormNuevoCliente from "../../components/FormNuevoCliente";
import Error from "../../components/Error";
import { guardarCliente } from "../../data/clientes";
import Swal from "sweetalert2";

export async function action({ request }) {
    const formData = await request.formData();
    const datos = Object.fromEntries(formData);
    const errores = [];
    if (Object.values(datos).includes("")) {
        errores.push("Todos los campos son obligatorios");
    }
    if (Object.keys(errores).length) {
        return errores;
    }
    try {
        await guardarCliente(datos);
        Swal.fire(
            "¡Cliente creado!",
            "El nuevo cliente ha sido creado exitosamente.",
            "success"
        ).then((result) => {
            if (result.isConfirmed) {
               return redirect("/clientes");
            }
        });
    } catch (error) {
        Swal.fire(
            "Error",
            "Hubo un error al crear el cliente. Por favor, inténtalo de nuevo.",
            "error"
        );
    }
    return null;
}

const NuevoClientePage = () => {
    const errores = useActionData();
    const navigate = useNavigate();
    return (
        <>
            <h1 className="font-black text-4xl text-indigo-900">
                Nuevo Cliente
            </h1>
            <p className="mt-3">
                Ingresa todos los campos para registrar un cliente
            </p>
            <div className="flex justify-end">
                <button
                    className="bg-indigo-800 text-white px-3 py-1 font-bold uppercase"
                    onClick={() => navigate(-1)}
                >
                    Volver
                </button>
            </div>
            <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">
                {errores?.length &&
                    errores.map((error, index) => (
                        <Error key={index}>{error}</Error>
                    ))}
                <Form method="POST" noValidate>
                    <FormNuevoCliente />
                    <input
                        type="submit"
                        className="cursor-pointer mt-5 w-full bg-indigo-700 p-3 uppercase font-bold text-white text-lg rounded-sm"
                        value="Crear Cliente"
                    />
                </Form>
            </div>
        </>
    );
};

export default NuevoClientePage;
