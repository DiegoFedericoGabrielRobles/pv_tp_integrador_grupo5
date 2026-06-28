import { Box, Grid } from "@mui/material";
import { CardCliente } from "./CardCliente";

export const CardsClientes = ({ clientes }) => {
    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Grid container spacing={3}>
                {clientes.map(cliente => (
                    <CardCliente 
                        key={cliente.id}      
                        cliente={cliente}     
                    />
                ))}
            </Grid>
        </Box>
    );
};