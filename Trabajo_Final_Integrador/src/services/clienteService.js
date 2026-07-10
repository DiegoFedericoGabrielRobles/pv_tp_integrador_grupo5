const URL = "https://fakestoreapi.com/users";

export const obtenerClientes = async () => {
    const respuesta = await fetch(URL);

    if (!respuesta.ok) {
        throw new Error("Error al obtener los clientes.");
    }

    return await respuesta.json();

};

export const obtenerClienteId = async (id) => {
    const respuesta = await fetch(`${URL}/${id}`);

    if (!respuesta.ok) {
        throw new Error("Error al obtener el cliente.");
    }
    return await respuesta.json();
};

export const obtenerCiudades = async () => {
    const clientes = await obtenerClientes();

    const ciudades = [...new Set(clientes.map(cliente => cliente.address.city))];

    return ciudades.sort();
    };

export const crearCliente = async (nuevoCliente) => {
    console.log("===SIMULACION ALTA CLIENTE===");
    console.log("Datos del nuevo cliente:",nuevoCliente);
    console.log("===========================");

    const idSimulado = Math.floor(Math.random()*1000)+1;

    return{
        id: idSimulado, ...nuevoCliente
    };

    const respuesta = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(nuevoCliente)
    });

    if (!respuesta.ok) {
        throw new Error("Error al crear el cliente.");
    }
    return await respuesta.json();
};

export const eliminarCliente = async (id) => {
    console.log("=== SIMULACION ELIMINAR CLIENTE ===");
    console.log("ID del cliente a eliminar:",id);
    console.log("==================================");

    return{message: "Cliente Eliminado (Simulado)"};

    const respuesta = await fetch(`${URL}/${id}`, {
        method: "DELETE"
    });

    if (!respuesta.ok) {
        throw new Error("Error al eliminar el cliente.");
    }
    return await respuesta.json();
};