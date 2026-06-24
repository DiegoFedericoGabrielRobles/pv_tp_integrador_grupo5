import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../../context/AdminContext";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const Header = () => {

    const { admin, logout } = useContext(AdminContext);

    const navigate = useNavigate();

    const cerrarSesion = () => {
        logout();
        navigate("/login");
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}> Panel de Control de Clientes </Typography>
                {admin && (
                    <>
                        <Typography sx={{ mr: 3 }}> {admin.nombre} - {admin.sector} </Typography>

                        <Button color="inherit" onClick={cerrarSesion}>
                            Cerrar Sesión
                        </Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};