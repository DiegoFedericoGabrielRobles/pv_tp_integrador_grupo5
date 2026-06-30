import { Link } from "react-router-dom";
import { Card, CardContent, CardActions, Button, Typography, Grid } from "@mui/material";

export const CardCliente = ({ cliente}) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{height:"100%", display:"flex", flexDirection:"column"}}> 
                <CardContent sx={{flexGrow:1}}>
                    <Typography variant="h6" component="div" sx={{ fontWeight:"bold", color:"primary.main", marginBottom:1}}>
                        ID: {cliente.id}
                    </Typography>
                    <Typography variant="body1" component="div" sx={{marginBottom: 0.5}}>
                        <strong>Nombre:</strong>
                        {cliente.name.firstname} {cliente.name.lastname}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{marginBottom: 0.5}}>
                        <strong>Email:</strong>
                        {cliente.email}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{marginBottom: 0.5}}>
                        <strong>Telefono:</strong>
                        {cliente.phone}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" >
                        <strong>Ciudad:</strong>
                        {cliente.address.city}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button component={Link} to={`/clientes/${cliente.id}`} variant="contained" fullWidth size="medium">Ver Ficha Completa</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};