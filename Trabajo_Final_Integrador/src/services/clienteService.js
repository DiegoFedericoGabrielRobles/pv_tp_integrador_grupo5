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

export const crearCliente = async (nuevoCliente) => {
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
    const respuesta = await fetch(`${URL}/${id}`, {
        method: "DELETE"
    });

    if (!respuesta.ok) {
        throw new Error("Error al eliminar el cliente.");
    }
    return await respuesta.json();
};