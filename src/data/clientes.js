import clienteAxios from "../api/clienteAxios";
//Comunicacion con el backend

export const guardarCliente = async ({ nombre, apellido, email, telefono }) => {
    try {
        const save = await clienteAxios.post('/clientes', {
            nombre,
            apellido,
            email,
            telefono,
        })
        return save.data
    } catch (error) {

    }
}

export const obtenerClientes = async () => {
    try {
        const clientes = await clienteAxios.get('/clientes')
        return clientes.data
    } catch (error) {
        console.log(error)
        throw error;
    }
}


export const eliminarCliente = async (id) => {
    try {
        const response = await clienteAxios.delete(`/clientes/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}