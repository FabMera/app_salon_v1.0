import { Form, redirect, useActionData, useNavigate } from "react-router-dom";
import FormNuevoCliente from "../../components/FormNuevoCliente"
import Error from "../../components/Error";


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
  )
}

export default NuevoClientePage