import clienteAxios from "../api/clienteAxios";

export const obtenerCitas = async () => {
    try {
        const response = await clienteAxios.get('/citas')
        return response.data
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const guardarCita = async (cita) => {
    try {
        const response = await clienteAxios.post('/citas', cita);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}