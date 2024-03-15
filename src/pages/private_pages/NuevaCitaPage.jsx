import React from "react";
import CrearCita from "./../../components/CrearCita";
import { Form, redirect, useActionData, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import { MdPersonSearch } from "react-icons/md";
import Error from "../../components/Error";

export async function action({ request }) {
    //usamos formdata para enviar los datos
    const formData = await request.formData();
    const datos = Object.fromEntries(formData);
    const errores = [];
    //validamos que los datos esten completos
    if (Object.values(datos).includes("")) {
        errores.push("Todos los campos son obligatorios");
    }
    if (Object.keys(errores).length) {
        return errores;
    }
    //enviamos los datos a la base de datos
    console.log(datos);
}

const NuevaCitaPage = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [searchTerm, setSearchTerm] = useState("");
    const [profesionales, setProfesionales] = useState([]);
    const handleSearch = () => {
        // Aquí puedes implementar la lógica de búsqueda
        console.log("Buscando:", searchTerm);
    };
    useEffect(() => {
        //  implementar la lógica para cargar los profesionales desde la base de datos
        // Por ahora, solo voy a usar un array de prueba
        setProfesionales(["Profesional 1", "Profesional 2", "Profesional 3"]);
    }, []);
    const errores = useActionData();
    const navigate = useNavigate();
    return (
        <div className="flex">
            <div className="w-1/2">
                <h1 className="font-black text-4xl text-indigo-900">
                    Nueva Cita
                </h1>
                <p className="mt-3">
                    Ingresa todos los campos para registrar una cita
                </p>
                <div className="md:w-3/4 mx-auto px-5 py-10">
                    {errores?.length &&
                        errores.map((error, index) => (
                            <Error key={index}>{error}</Error>
                        ))}
                    <div className="mb-4">
                        <label className="text-gray-800" htmlFor="nombre">
                            Buscar un Cliente:
                        </label>
                        <div className="relative mt-2">
                            <input
                                className="block w-full p-3 bg-gray-100 border border-gray-300 rounded-md"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <MdPersonSearch
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                                onClick={handleSearch}
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="text-gray-800" htmlFor="profesional">
                            Seleccionar un Profesional:
                        </label>
                        <select
                            id="profesional"
                            className="mt-2 block w-full p-3 bg-gray-100 border border-gray-300 rounded-md"
                        >
                            {profesionales.map((prof, index) => (
                                <option value={prof} key={index}>
                                    {prof}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="text-gray-800" htmlFor="profesional">
                            Seleccionar un Servicio:
                        </label>
                        <select
                            id="profesional"
                            className="mt-2 block w-full p-3 bg-gray-100 border border-gray-300 rounded-md"
                        >
                            {profesionales.map((prof, index) => (
                                <option value={prof} key={index}>
                                    {prof}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="w-1/2">
                <div className="flex justify-end">
                    <button className="bg-indigo-800 text-white px-3 py-1 font-bold uppercase">
                        Volver
                    </button>
                </div>
                <div className="bg-white mt-20 rounded-md md:w-3/4 mx-auto px-5 py-10  border border-gray-200">
                    <Form method="POST" noValidate>
                        <CrearCita />
                        <label className="text-gray-800" htmlFor="date">
                            Seleccione la fecha y hora:
                        </label>
                        <div className="w-full border mt-2 border-gray-300 p-3 rounded cursor-pointer text-center">
                            <DatePicker
                                id="date"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={15}
                                timeCaption="time"
                                dateFormat="MMMM d, yyyy h:mm aa"
                            />
                        </div>
                        <input
                            type="submit"
                            className="cursor-pointer mt-5 w-full bg-indigo-700 p-3 uppercase font-bold text-white text-lg rounded-sm"
                            value="Crear Cita"
                        />
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default NuevaCitaPage;
