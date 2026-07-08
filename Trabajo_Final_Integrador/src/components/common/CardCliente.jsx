import { Link } from "react-router-dom";
import { Card, CardContent, CardActions, Typography, Grid, IconButton, Tooltip } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';

export const CardCliente = ({ cliente}) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{height:"100%", display:"flex", flexDirection:"column", backgroundColor:"#eecae9e8"}}> 
                <CardContent sx={{flexGrow:1}}>
                    <Typography variant="h6" component="div" sx={{ fontWeight:"bold", color:"#8a2592", marginBottom:1}}>
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

                <CardActions sx={{ justifyContent: "flex-end", paddingRight: 2, paddingBottom: 2 }}>
                    
                    <Tooltip title="Ver ficha completa" placement="top">
                        <IconButton 
                            component={Link} 
                            to={`/clientes/${cliente.id}`} 
                            aria-label="ver detalles" 
                            sx={{ 
                                backgroundColor: '#8a2592',
                                '&:hover': { backgroundColor: '#ded6de', color:"#6B1F75" } 
                            }}
                        >
                            <VisibilityIcon />
                        </IconButton>
                    </Tooltip>
                    
                </CardActions>
            </Card>
        </Grid>
    );
};