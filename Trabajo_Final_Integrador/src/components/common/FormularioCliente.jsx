import { useState } from "react";

import { crearCliente } from "../../services/clienteService";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

export const FormularioCliente = () => {
    const [mensajeExito, setMensajeExito] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [telefono, setTelefono] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const guardarCliente = async () => {
        const nuevoCliente = {
            email: email,
            username: username,
            password: password,
            phone: telefono,

            name: {
                firstname: nombre,
                lastname: apellido
            },

            address: {
                city: ciudad
            }
        };

        try {
            const datos = await crearCliente(nuevoCliente);
            
            setMensajeExito(`Cliente creado correctamente. ID asignado: ${datos.id}`);
            setNombre("");
            setApellido("");
            setEmail("");
            setTelefono("");
            setCiudad("");
            setUsername("");
            setPassword("");
        }
        catch (error) {
            console.error(error);
        }

    };
    return (
        <Card sx={{ maxWidth: 600, margin: "20px auto", padding: 2 }}>
            <CardContent>
                <Typography variant="h6" gutterBottom> Alta de Cliente </Typography>

                <TextField
                    fullWidth
                    label="Nombre"
                    margin="normal"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />

                <TextField
                    fullWidth
                    label="Apellido"
                    margin="normal"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                />

                <TextField
                    fullWidth
                    label="Email"
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <TextField
                    fullWidth
                    label="Telefono"
                    margin="normal"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                />

                <TextField
                    fullWidth
                    label="Ciudad"
                    margin="normal"
                    value={ciudad}
                    onChange={(e) => setCiudad(e.target.value)}
                />

                <TextField
                    fullWidth
                    label="Username"
                    margin="normal"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                 <TextField
                    fullWidth
                    label="Password"
                    margin="normal"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button
                    variant="contained"
                    fullWidth
                    sx={{ mt: 2 }}
                    onClick={guardarCliente}
                >
                    Guardar Cliente
                </Button>

                {mensajeExito && (
                    <Alert severity="success" sx={{ mt: 2 }}>
                        {mensajeExito}
                    </Alert>
                )}
            </CardContent>
        </Card>
    );
};