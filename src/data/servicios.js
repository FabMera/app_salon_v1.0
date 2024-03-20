import clienteAxios from "../api/clienteAxios";

export const obtenerServicios = async () => {
    try {
        const response = await clienteAxios.get('/servicios')
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
        throw error;
    }
}
