import { useState, useEffect } from "react";
import { obtenerClientes } from "../services/clienteService";

import { BuscadorClientes } from "../components/common/BuscadorClientes";
import { FormularioCliente } from "../components/common/FormularioCliente";

import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import { CardClientes } from "../components/common/CardClientes";

export const ListaClientes = () => {
    const [clientes, setClientes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [apellidoBusqueda, setApellidoBusqueda] = useState("");
    const [ciudadBusqueda, setCiudadBusqueda] = useState("");

    const cargarClientes = async () => {
            try {
                const datos = await obtenerClientes();
                setClientes(datos);
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
    };

    useEffect(() => {
        cargarClientes();
    }, []);

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return (
            <Alert severity="error"> Error al cargar los clientes. </Alert>
        );
    }

    const clientesFiltrados = clientes.filter(cliente => cliente.name.lastname.toLowerCase().includes(apellidoBusqueda.toLowerCase()) && cliente.address.city.toLowerCase().includes(ciudadBusqueda.toLowerCase()));

    return (
        <>
            <BuscadorClientes apellidoBusqueda={apellidoBusqueda} setApellidoBusqueda={setApellidoBusqueda} ciudadBusqueda={ciudadBusqueda} setCiudadBusqueda={setCiudadBusqueda} />
            
             <FormularioCliente />

            <CardClientes clientes={clientesFiltrados}/> 
        </>
    )
};