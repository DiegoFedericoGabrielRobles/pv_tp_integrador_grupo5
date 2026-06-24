import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../context/AdminContext";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

export const Login = () => {
    
    const [nombre, setNombre] = useState("");
    const [sector, setSector] = useState("");

    const { login } = useContext(AdminContext);

    const navigate = useNavigate();

    const ingresar = () => {

        const datosAdmin = {
            nombre,
            sector
        };

        login(datosAdmin);

        navigate("/");
    };

    return (
          <Card sx={{ maxWidth: 500, margin: "50px auto", padding: 2 }}>
            <CardContent>

                <Typography variant="h6" gutterBottom> Iniciar Sesión </Typography>

                <TextField
                    fullWidth
                    label="Nombre del Administrador"
                    margin="normal"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />

                <FormControl fullWidth margin="normal">
                    <InputLabel>Sector</InputLabel>

                    <Select label="Sector" value={sector} onChange={(e)=> setSector(e.target.value)}>
                        <MenuItem value="Soporte"> Soporte </MenuItem>
                        <MenuItem value="Gerencia"> Gerencia </MenuItem>
                    </Select>
                </FormControl>

                <Button
                    variant="contained"
                    fullWidth
                    sx={{ mt: 2 }}
                    onClick={ingresar}
                >
                    Ingresar
                </Button>
            </CardContent>
        </Card>
    );
};