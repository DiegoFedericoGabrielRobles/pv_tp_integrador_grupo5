import { useState, useEffect, useContext } from "react";
import { AdminContext } from "../context/AdminContext";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export const Dashboard = () => {
    const {admin} = useContext(AdminContext);
    const [Usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
    const cargarUsuarios = async () => {
        try{
            const respuesta = await fetch("https://fakestoreapi.com/users");
            const datos = await respuesta.json();
            setUsuarios(datos);
            setLoading(false);
        } catch (error) {
            console.error("Error en Cargar Usuarios",error);
            setLoading(false);
        }
    };
    cargarUsuarios();
},[]);

if (loading) {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 5}}>
            <Typography>Cargando...</Typography>
        </Box>
    );
}

    const totalClientes = Usuarios.length;
    const ciudades = Usuarios.reduce((acc, user)=>{acc[user.address?.city]=(acc[user.address?.city]||0)+1; return acc;},{});
    const topCiudades = Object.entries(ciudades).sort((a,b)=>b[1]-a[1]).slice(0,5);

    return (
            <Container maxWidth="lg">
                <Box sx={{ mt: 5 }}>
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "primary.main"}}>
                        Bienvenido, {admin.nombre} {admin.apellido}  {/*A Evaluar*/}
                    </Typography>

                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h4" gutterBottom sx={{fontWeight: "bold" ,color: "#939090", fontWeight: "medium"}}>
                            Vision General
                        </Typography>
                        <Typography variant="h6" sx={{color: "#939090", fontWeight: "medium"}}>
                            Panel de control de Clientes en tiempo real. Aqui podrás visualizar metricas generales,
                            como gestion de usuarios y supervisión de la informacion de la Base de Datos.
                        </Typography>
                    </Box>

                    <Card sx={{ mb: 3, backgroundColor:"#0e427df6"}}>
                        <CardContent>
                            <Typography variant="h5">
                                Administrador:{admin?.nombre || "No Identificado"}
                            </Typography>
                            <Typography variant="body2">
                                Sector: {admin?.sector || "No Identificado"}
                            </Typography>
                        </CardContent>
                    </Card>

                    <Grid container spacing={3}>

                        <Grid item xs={12} md={4}>
                            <Card sx={{backgroundColor:"#eecae9e8"}}>
                                <CardContent>
                                    <Typography variant="h6" color="textSecondary">
                                        Total de Clientes
                                    </Typography>
                                    <Typography variant="h3"sx={{ fontWeight: "bold", color: "primary.main"}}> {totalClientes} </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={8}>
                            <Card sx={{backgroundColor:"#eecae9e8"}}>
                                <CardContent>
                                    <Typography variant="h6" color="textSecondary" gutterBottom> Top 5 Ciudades con mas clientes </Typography>
                                    {topCiudades.length > 0 ? (
                                        topCiudades.map(([ciudad, cantidad]) => (
                                            <Box key={ciudad} sx={{ display: "flex", justifyContent: "space-between", py: 0.5}}>
                                                <Typography variant="body1">{ciudad}</Typography>
                                                <Typography variant="body1" sx={{ fontWeight: "bold"}}>
                                                    {cantidad} cliente{cantidad === 1 ? "" : "s"}
                                                </Typography>
                                            </Box>
                                        ))
                                    ) : (
                                        <Typography variant="body2" color="textSecondary">No hay Datos disponibles.</Typography>
                                    )}
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        
    );
};