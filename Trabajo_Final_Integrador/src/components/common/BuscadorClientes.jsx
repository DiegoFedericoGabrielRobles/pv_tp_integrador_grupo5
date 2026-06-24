import TextField from "@mui/material/TextField";

export const BuscadorClientes = ({ apellidoBusqueda, setApellidoBusqueda, ciudadBusqueda, setCiudadBusqueda }) => {
    return (
        <>
            <TextField
                label="Buscar por apellido"
                value={apellidoBusqueda}
                onChange={(e) => setApellidoBusqueda(e.target.value)}
            />

            <TextField
                label="Buscar por ciudad"
                value={ciudadBusqueda}
                onChange={(e) => setCiudadBusqueda(e.target.value)}
            />
        </>
    );
};
