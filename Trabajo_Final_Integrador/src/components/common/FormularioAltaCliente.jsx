import { useState } from "react";
import { crearCliente } from "../../services/clienteService";
import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export const FormularioAltaCliente= () =>{
    const [mensajeExito, setMensajeExito] = useState ("");
    const [nombre, setNombre] = useState ("");
    const [apellido, setApellido] = useState ("");
    const [email, setEmail] = useState ("");
    const [ciudad, setCiudad] = useState ("");
    const [telefono, setTelefono] = useState ("");
    const [username, setUsername] = useState ("");
    const [password, setPasword] = useState ("");

    const navigate = useNavigate();

    const guardarCliente = async () => {
        const nuevoCliente = {
            email: email, username: username, password: password, phone: telefono,
            name:{
                firstname: nombre, lastname: apellido
            },
            address: {
                city: ciudad
            }
        };

        try {
            const datos = await crearCliente(nuevoCliente);
            setMensajeExito(`Cliente Creado Correctamente. ID asignado: ${datos.id}`);
            setNombre("");
            setApellido("");
            setEmail("");
            setTelefono("");
            setCiudad("");
            setUsername("");
            setPasword("");
        }   catch (error){
            console.error(error);
        }
    };

    return (
        <Card sx={{ maxWidth: 600, margin: "20px auto", padding: 2, backgroundColor:"#eecae9e8" }}>
            <CardContent>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#8a2592", textAlign:"center", mb: 3}}>
                    Alta de Cliente
                </Typography>

                {mensajeExito && (
                    <Alert severity="success" sx={{mt: 2}}>
                        {mensajeExito}
                    </Alert>
                )}
                <Box component="form" sx={{ mt: 2}}> 
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                fullWidth
                                label="Nombre"
                                margin="normal"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                fullWidth
                                label="Apellido"
                                margin="normal"
                                value={apellido}
                                onChange={(e) => setApellido(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                fullWidth
                                label="Email"
                                margin="normal"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                fullWidth
                                label="Telefono"
                                margin="normal"
                                value={telefono}
                                onChange={(e) => setTelefono(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                fullWidth
                                label="Ciudad"
                                margin="normal"
                                value={ciudad}
                                onChange={(e) => setCiudad(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                fullWidth
                                label="Username"
                                margin="normal"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                fullWidth
                                label="Password"
                                type="password"
                                margin="normal"
                                value={password}
                                onChange={(e) => setPasword(e.target.value)}
                                required
                            />
                        </Grid>
                    </Grid>

                    <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2}}>
                        <Button 
                            variant="contained"
                            fullWidth
                            sx={{ mt: 2, backgroundColor:"#8a2592","&:hover": {backgroundColor: "#8a2592",}}}
                            onClick={guardarCliente}
                        >
                            Guardar
                        </Button>
                        <Button 
                            variant="contained"
                            fullWidth
                            sx={{ mt: 2, backgroundColor:"#8a2592","&:hover": {backgroundColor: "#8a2592",}}}
                            onClick={() => navigate("/clientes")}
                        >
                            Cancelar
                        </Button>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};