import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

export const DetalleCliente = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const { admin } = useContext(AdminContext);

    const [cliente, setCliente] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    const obtenerCliente = async () => {
        try {
            const respuesta = await fetch(`https://fakestoreapi.com/users/${id}`);
            if (!respuesta.ok) {
                throw new Error("Error al obtener la ficha");
            }
            const datos = await respuesta.json();
            setCliente(datos);
            setLoading(false);
        } catch (err) {
            setError(true);
            setLoading(false);
        }
    };

    const eliminarCliente = async () => {
        if (window.confirm("¿Está seguro de que desea eliminar este cliente de la base de datos?")) {
            try {
                const respuesta = await fetch(`https://fakestoreapi.com/users/${id}`, {
                    method: "DELETE"
                });
                if (!respuesta.ok) {
                    throw new Error("Error al eliminar");
                }
                alert("Cliente eliminado correctamente (Simulado).");
                navigate("/clientes");
            } catch (err) {
                console.error(err);
                alert("Hubo un error al intentar eliminar el cliente.");
            }
        }
    };

    useEffect(() => {
        obtenerCliente();
    }, [id]);

    if (loading) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error || !cliente) {
        return (
            <Alert severity="error" sx={{ margin: "20px auto", maxWidth: 600 }}>
                Error al cargar la ficha profunda del cliente.
            </Alert>
        );
    }

    const { name, email, phone, username, password, address } = cliente;
    const { street, number, city, zipcode } = address;

    return (
        <Card sx={{ maxWidth: 600, margin: "20px auto", padding: 2 }}>
            <CardContent>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                    Ficha Profunda del Cliente #{id}
                </Typography>
                
                <Box sx={{ mt: 2, mb: 2 }}>
                    <Typography variant="subtitle1" color="primary" sx={{ fontWeight: "bold" }}>
                        Datos Personales
                    </Typography>
                    <Typography variant="body1">
                        <strong>Nombre Completo:</strong> {name?.firstname} {name?.lastname}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Email:</strong> {email}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Teléfono:</strong> {phone}
                    </Typography>
                </Box>

                <Divider sx={{ my: 2 }} />

                <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle1" color="primary" sx={{ fontWeight: "bold" }}>
                        Dirección Completa
                    </Typography>
                    <Typography variant="body1">
                        <strong>Calle:</strong> {street}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Número:</strong> {number}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Ciudad:</strong> {city}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Código Postal:</strong> {zipcode}
                    </Typography>
                </Box>

                <Divider sx={{ my: 2 }} />

                <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" color="primary" sx={{ fontWeight: "bold" }}>
                        Credenciales de Acceso
                    </Typography>
                    <Typography variant="body1">
                        <strong>Username:</strong> {username}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Password:</strong> {password}
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", gap: 2, justifyContent: "space-between", mt: 3 }}>
                    <Button variant="outlined" onClick={() => navigate("/clientes")}>
                        Volver a la Lista
                    </Button>
                    {admin?.sector === "Gerencia" && (
                        <Button variant="contained" color="error" onClick={eliminarCliente}>
                            Eliminar Cliente de la Base de Datos
                        </Button>
                    )}
                </Box>
            </CardContent>
        </Card>
    );
};
