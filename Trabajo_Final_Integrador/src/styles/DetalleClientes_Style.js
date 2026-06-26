import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const DetalleCard = styled(Card)(({ theme }) => ({
    maxWidth: 600,
    margin: "20px auto",
    padding: theme.spacing(2),
}));

export const DetalleBox = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
}));

export const DetalleBoxAcciones= styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(2),
    justifyContent: "space-between",
    marginTop: theme.spacing(2),
}));

export const TituloSeccion = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
}));
export const DatoTexto = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(0,5),
}));

export const BotonVolver = styled(Button)(({ theme }) => ({
    marginRight: theme.spacing(1),
}));

export const BotonEliminar = styled(Button)(({ theme }) => ({
    marginLeft: theme.spacing(1),
}));