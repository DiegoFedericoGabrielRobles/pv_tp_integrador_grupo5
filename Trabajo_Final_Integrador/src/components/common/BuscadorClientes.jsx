import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export const BuscadorClientes = ({ apellidoBusqueda, setApellidoBusqueda, ciudadBusqueda, setCiudadBusqueda }) => {
    return (
        <Box sx={{ display: "flex", gap: 2, mb:3, flexWrap: "wrap", justifyContent: "center"}}>
            <TextField
                label="Buscar por apellido"
                value={apellidoBusqueda}
                onChange={(e) => setApellidoBusqueda(e.target.value)}
                variant="outlined"
                sx={{ minWidth: 2, backgroundColor: "#eecae9e8",
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: "white",
                            borderWidth: 2,
                        },
                        "&:hover fieldset": {
                            borderColor: "white",
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "white",
                        },
                    },
                }}
            />

            <TextField
                label="Buscar por ciudad"
                value={ciudadBusqueda}
                onChange={(e) => setCiudadBusqueda(e.target.value)}
                variant="outlined"
                sx={{ minWidth: 250, backgroundColor: "#eecae9e8",
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: "white",
                            borderWidth: 2,
                        },
                        "&:hover fieldset": {
                            borderColor: "white",
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "white",
                        },
                    },
                }}
            />
        </Box>
    );
};
