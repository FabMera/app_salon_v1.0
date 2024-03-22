import React from "react";
import CrearCita from "./../../components/CrearCita";
import { useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import Error from "../../components/Error";
import { obtenerClientes } from "../../data/clientes";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { obtenerServicios } from "../../data/servicios";
import { obtenerProfesionales } from "../../data/profesionales";
import { guardarCita } from "../../data/citas";
import { format } from "date-fns";
//Funcion loader para obtener los clientes
export async function loader() {
    const clientes = await obtenerClientes();
    console.log(clientes);
    return clientes;
}

//Funcion loader para traer los servicios
export async function cargarServices() {
    const servicios = await obtenerServicios();
    return servicios;
}

//Funcion loader para traer los profesionales
export async function cargarProfesionales() {
    const profesionales = await obtenerProfesionales();
    return profesionales;
}

const NuevaCitaPage = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [selectedClient, setSelectedClient] = useState(null);
    const [profesionales, setProfesionales] = useState([]);
    const [selectedProfessional, setSelectedProfessional] = useState(null);
    const [selectedProfessionalServices, setSelectedProfessionalServices] =
        useState([]);
    const [errores, setErrores] = useState([]);
    const [servicios, setServicios] = useState([]);
    const [selectedService, setSelectedService] = useState(null);

    const clientes = useLoaderData();

    // Función para validar los datos de la cita
    const validarCita = (cita) => {
        const errores = [];
        if (Object.values(cita).includes(null)) {
            errores.push("Todos los campos son obligatorios");
        }
        return errores;
    };

    const enviarCita = async () => {
        const cita = {
            cliente: selectedClient,
            profesional: selectedProfessional,
            serviciosSeleccionados: [selectedService],
            fecha: format(startDate, "yyyy-MM-dd'T'HH:mm"),
        };
        const errores = validarCita(cita);
        if (errores.length) {
            setErrores(errores);
            return;
        }
        try {
            await guardarCita(cita);
            console.log(cita);
        } catch (error) {
            console.log("Ocurrió un error al guardar la cita:", error.message);
        }
        return;
    };

    useEffect(() => {
        const loadServicesAndProfessionals = async () => {
            const loaderProfessionals = await obtenerProfesionales();
            const loaderServices = await obtenerServicios();
            setServicios(loaderServices);
            setProfesionales(loaderProfessionals);
            if (loaderProfessionals.length) {
                setSelectedProfessional(loaderProfessionals[0]);
                setSelectedProfessionalServices(
                    loaderProfessionals[0].servicios
                );
            }
        };
        loadServicesAndProfessionals();
    }, []);

    const handleProfessionalChange = (e) => {
        const selectedProfID = Number(e.target.value);
        const selectedProf = profesionales.find(
            (prof) => prof.id === selectedProfID
        );
        setSelectedProfessional(selectedProf);
        if (selectedProf) {
            setSelectedProfessionalServices(selectedProf.servicios);
            console.log(selectedProfessionalServices);
        } else {
            setSelectedProfessionalServices([]); // Limpiar los servicios si no se selecciona ningún profesional válido
        }
    };
    // Handler para cambiar la hora seleccionada en el DatePicker
    const handleDateChange = (date) => {
        setStartDate(date);
    };

    // Handler para seleccionar/deseleccionar servicios
    const handleServiceChange = (event) => {
        const selectedServiceId = Number(event.target.value);
        const selectedService = selectedProfessionalServices.find(
            (service) => service.id === selectedServiceId
        );
        setSelectedService(selectedService);
    };
    useEffect(() => {
        console.log(selectedService);
    }, [selectedService]);
    // Handler para enviar el formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validar campos
        const newErrors = [];
        if (
            !selectedClient ||
            !selectedProfessional ||
            !startDate ||
            !selectedService ||
            Object.keys(selectedService).length === 0
        ) {
            newErrors.push("Todos los campos son obligatorios");
        }
        setErrores(newErrors);

        if (newErrors.length > 0) {
            return;
        }

        try {
            await enviarCita();
            console.log("Cita guardada correctamente");
        } catch (error) {
            console.log("Ocurrió un error al guardar la cita:", error.message);
            // Manejar el error de una manera amigable para el usuario
        }
    };

    /*     useEffect(() => {
        console.log(format(startDate, "yyyy-MM-dd'T'HH:mm"));
        console.log(selectedService)
    }, [startDate]); */

    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
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
                        <label
                            className="text-gray-800"
                            htmlFor="cliente"
                        ></label>
                        <Autocomplete
                            value={selectedClient}
                            onChange={(event, newValue) => {
                                setSelectedClient(newValue);
                            }}
                            options={clientes}
                            getOptionLabel={(option) =>
                                option.nombre + " " + option.apellido
                            }
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Buscar un Cliente"
                                    variant="outlined"
                                />
                            )}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="text-gray-800" htmlFor="profesional">
                            Seleccionar un Profesional:
                        </label>
                        <select
                            onChange={handleProfessionalChange}
                            id="profesional"
                            className="mt-2 block w-full p-3 bg-gray-100 border border-gray-300 rounded-md"
                        >
                            {profesionales.map((prof, index) => (
                                <option value={prof.id} key={index}>
                                    {prof.nombre} {prof.apellido}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="text-gray-800" htmlFor="servicios">
                            Seleccionar un Servicio:
                        </label>
                        <select
                            id="servicios"
                            className="mt-2 block w-full p-3 bg-gray-100 border border-gray-300 rounded-md"
                            onChange={handleServiceChange}
                        >
                            {selectedProfessionalServices.map((serv, index) => (
                                <option value={serv.id} key={index}>
                                    {serv.nombre}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                Se
            </div>
            <div className="w-full md:w-1/2">
                <div className="flex justify-end">
                    <button className="bg-indigo-800 text-white px-3 py-1 font-bold uppercase">
                        Volver
                    </button>
                </div>
                <div className="bg-white mt-20 rounded-md md:w-3/4 mx-auto px-5 py-10  border border-gray-200">
                    <form onSubmit={handleSubmit}>
                        <CrearCita cliente={selectedClient} />
                        <label className="text-gray-800" htmlFor="date">
                            Seleccione la fecha y hora:
                        </label>
                        <div className="w-full border mt-2 border-gray-300 p-3 rounded cursor-pointer text-center">
                            <DatePicker
                                id="date"
                                selected={startDate}
                                onChange={handleDateChange}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={15}
                                timeCaption="time"
                                dateFormat="yyyy-MM-dd HH:mm"
                            />
                        </div>
                        <input
                            type="submit"
                            className="cursor-pointer mt-5 w-full bg-indigo-700 p-3 uppercase font-bold text-white text-lg rounded-sm"
                            value="Crear Cita"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NuevaCitaPage;
