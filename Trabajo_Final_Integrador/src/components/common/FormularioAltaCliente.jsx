import { useState, useEffect } from "react";
import { crearCliente, obtenerCiudades } from "../../services/clienteService";
import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CircularProgress  from "@mui/material/CircularProgress";

export const FormularioAltaCliente= () =>{
    const [nombre, setNombre] = useState ("");
    const [apellido, setApellido] = useState ("");
    const [email, setEmail] = useState ("");
    const [ciudad, setCiudad] = useState ("");
    const [telefono, setTelefono] = useState ("");
    const [username, setUsername] = useState ("");
    const [password, setPassword] = useState ("");

    const [mensajeExito, setMensajeExito] = useState ("");
    const [errores, setErrores] = useState({});

    const [ciudadesDisponibles, setCiudadesDisponibles] = useState([]);
    const [loadingCiudades, setLoadingCiudades] = useState(true);

    const navigate = useNavigate();

    useEffect(() =>{
        const cargarCiudades = async () => {
            try {
                const ciudades = await obtenerCiudades();
                setCiudadesDisponibles(ciudades);
                setLoadingCiudades(false);
            } catch (error) {
                console.error("Error al cargar las ciudades:", error);
                setLoadingCiudades(false);
            }
        };
        cargarCiudades();
    }, []);

    const validarFormulario =() => {
        const nuevosErrores = {};

        if(!nombre.trim()){
            nuevosErrores.nombre = "El nombre es obligatorio";
        }

        if(!apellido.trim()){
            nuevosErrores.apellido = "El apellido es obligatorio";
        }

        if(!email.trim()){
            nuevosErrores.email = "El email es obligatorio";
        } else if (!email.includes("@")){
            nuevosErrores.email = "El email debe llevar @";
        }

        if (!ciudad){
            nuevosErrores.ciudad = "Debe seleccionar una ciudad obligatorio";
        }

        if (telefono.trim()&& isNaN(telefono)){
            nuevosErrores.telefono = "El telefono solo debe contener numeros";
        }

        if (!username.trim()){
            nuevosErrores.username = "El username es obligatorio";
        }

        if (!password.trim()){
            nuevosErrores.password = "La contraseña es obligatoria";
        }
        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };

    const guardarCliente = async () => {
        if (!validarFormulario()){
            return;
        }

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
            setMensajeExito('Cliente Creado Correctamente. ID asignado: ${datos.id}');
            setNombre("");
            setApellido("");
            setEmail("");
            setTelefono("");
            setCiudad("");
            setUsername("");
            setPassword("");
            setErrores({});
        }   catch (error){
            console.error(error);
        }
    };

    return (
        <Card sx={{maxWidth: 800, margin: "20px auto", padding: 3, backgroundColor:"#eecae9e8"}}>
            <CardContent>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", backgroundColor:"#8a2592", textAlign:"center", mb: 3}}>
                    Alta de Cliente
                </Typography>

                {mensajeExito && (
                    <Alert severity="success" sx={{mb: 2}}>
                        {mensajeExito}
                    </Alert>
                )}
                <Box component="form" sx={{ mt: 2}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Nombre"
                                margin="normal"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                required
                                error={!!errores.nombre}
                                helperText={errores.nombre}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Apellido"
                                margin="normal"
                                value={apellido}
                                onChange={(e) => setApellido(e.target.value)}
                                required
                                error={!!errores.apellido}
                                helperText={errores.apellido}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Email"
                                margin="normal"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                error={!!errores.email}
                                helperText={errores.email}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Telefono"
                                margin="normal"
                                value={telefono}
                                onChange={(e) => setTelefono(e.target.value)}
                                error={!!errores.telefono}
                                helperText={errores.telefono || "Si ingresa numero, debe ser numerico"}
                            />
                        </Grid>
                        <Grid size={{xs:12}}>
                            <FormControl fullWidth margin="normal" error={!!errores.ciudad}>
                                <InputLabel>Ciudad</InputLabel>
                                <Select
                                    value={ciudad}
                                    onChange={(e) => setCiudad(e.target.value)}
                                    label="Ciudad"
                                    required
                                    sx={{minWidth: 200}}
                                >
                                    {loadingCiudades ? (
                                        <MenuItem disabled>
                                            <CircularProgress size={20} />
                                        </MenuItem>
                                    ) : (
                                        ciudadesDisponibles.map((ciudadItem) => (
                                            <MenuItem key={ciudadItem} value={ciudadItem}>
                                                {ciudadItem}
                                            </MenuItem>
                                        ))
                                    )}
                                </Select>
                                {errores.ciudad && (
                                    <Typography variant="caption" color="error" sx={{ mt: 0.5, ml: 1.5 }}>
                                        {errores.ciudad}
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid size={{ xs:12, sm: 6}}>
                            <TextField
                                fullWidth
                                label="Username"
                                margin="normal"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                error={!!errores.username}
                                helperText={errores.username}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6}}>
                            <TextField
                                fullWidth
                                label="Password"
                                margin="normal"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                error={!!errores.password}
                                helperText={errores.password}
                            />
                        </Grid>
                    </Grid>

                    <Box sx={{ mt:3, display: "flex", justifyContent: "center", gap: 2}}>
                        <Button 
                        variant="contained"
                        size="large"
                        onClick={guardarCliente}
                        sx={{ minWidth: 200, backgroundColor:"#8a2592",
                        "&:hover": {
                            backgroundColor: "#8a2592",
                            }
                        }}
                        onClick={guardarCliente}
                        >
                            Guardar
                        </Button>
                        <Button 
                        variant="contained"
                        size="large"
                        onClick={() => navigate("/clientes")}
                        sx={{ minWidth: 200, backgroundColor:"#8a2592",
                        "&:hover": {
                            backgroundColor: "#8a2592",
                            }
                        }}
                        >
                            Cancelar
                        </Button>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};