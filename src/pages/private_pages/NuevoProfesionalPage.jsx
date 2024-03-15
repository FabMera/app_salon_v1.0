import { Form, redirect, useActionData, useNavigate } from "react-router-dom";
import CrearProfesional from "./../../components/CrearProfesional";
import Error from "./../../components/Error";
const NuevoProfesionalPage = () => {
    const errores = useActionData();
    const navigate = useNavigate();
    return (
        <>
            <h1 className="font-black text-4xl text-indigo-900">
                Nuevo Profesional del Salón de Belleza.
            </h1>
            <p className="mt-3">
                Ingresa todos los campos para registrar un Profesional.
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
                    <CrearProfesional />
                    <input
                        type="submit"
                        className="cursor-pointer mt-5 w-full bg-indigo-700 p-3 uppercase font-bold text-white text-lg rounded-sm"
                        value="Crear Profesional"
                    />
                </Form>
            </div>
        </>
    );
};

export default NuevoProfesionalPage;
