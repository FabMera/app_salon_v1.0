import React from "react";

const CrearCita = ({ cliente }) => {
    return (
        <>
            <div className="mb-4">
                <label className="text-gray-800" htmlFor="apellido">
                    Nombre :
                </label>
                <input
                    id="nombre"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Nombre del Cliente"
                    name="apellido"
                    defaultValue="" //si cliente existe le pasamos los datos al formulario si no ,se crea uno nuevo
                />
            </div>
            <div className="mb-4">
                <label className="text-gray-800" htmlFor="apellido">
                    Apellido:
                </label>
                <input
                    id="apellido"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Apellido del Cliente"
                    name="apellido"
                    defaultValue="" //si cliente existe le pasamos los datos al formulario si no ,se crea uno nuevo
                />
            </div>
            <div className="mb-4">
                <label className="text-gray-800" htmlFor="nombre">
                    Email:
                </label>
                <input
                    id="email"
                    type="email"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Email del Cliente"
                    name="email"
                    defaultValue="" //si cliente existe le pasamos los datos al formulario si no ,se crea uno nuevo
                />
            </div>
            <div className="mb-4">
                <label className="text-gray-800" htmlFor="telefono">
                    Telefono:
                </label>
                <input
                    id="telefono"
                    type="number"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Telefono del Cliente"
                    name="telefono"
                    defaultValue="" //si cliente existe le pasamos los datos al formulario si no ,se crea uno nuevo
                />
            </div>
        </>
    );
};

export default CrearCita;
