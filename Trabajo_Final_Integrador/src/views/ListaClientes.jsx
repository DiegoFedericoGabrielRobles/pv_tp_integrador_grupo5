import { useState, useEffect } from "react";
import { obtenerClientes } from "../services/clienteService";
import { Link } from "react-router-dom";

import { BuscadorClientes } from "../components/common/BuscadorClientes";
import { CardsClientes } from "../components/common/CardsClientes";

import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box"

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

            <CardsClientes clientes={clientesFiltrados}/> 
        </>
    )
};