import clienteAxios from "../api/clienteAxios";

export const obtenerProfesionales = async () => {
    try {
        const response = await clienteAxios.get('/profesionales')
        return response.data
    } catch (error) {
        console.log(error)
        throw error;
    }
}
