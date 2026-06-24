import { useState, useEffect } from "react";

import { TablaClientes } from "../components/common/TablaClientes";

import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

export const ListaClientes = () => {
    const [clientes, setClientes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [busqueda, setBusqueda] = useState("");

    const obtenerClientes = async () => {
        try {
            const respuesta = await fetch( "https://fakestoreapi.com/users");
            const datos = await respuesta.json();
            setClientes(datos);
            setLoading(false);
        } catch (error) {
            setError(true);
            setLoading(false);
        }

    };

    useEffect(() => {
        obtenerClientes();
    }, []);

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return (
            <Alert severity="error"> Error al cargar los clientes. </Alert>
        );
    }

    return (
        <TablaClientes clientes={clientes}/>
    );
};