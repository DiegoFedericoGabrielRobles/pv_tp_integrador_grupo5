import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";

import ComputerIcon from "@mui/icons-material/Computer";
import SchoolIcon from "@mui/icons-material/School";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ContactMailIcon from "@mui/icons-material/ContactMail";

export const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                mt: 3,
                py: 2,
                backgroundColor: "grey.100",
                borderTop: "1px solid",
                borderColor: "divider",
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 5 }}>

                        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                            <ComputerIcon color="primary" sx={{ mr: 1 }} />

                            <Typography
                                variant="subtitle1"
                                fontWeight="bold"
                            >
                                Panel de Control de Clientes
                            </Typography>
                        </Box>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            Sistema para la Gestión de clientes.
                        </Typography>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            React • Material UI • FakestoreAPI
                        </Typography>
                        
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>

                        <Box sx={{ display: "flex", alignItems: "center", mb: 2}}>
                            <SchoolIcon color="primary" sx={{ mr: 1 }} />

                            <Typography
                                variant="subtitle1"
                                fontWeight="bold"
                            >
                                Institución
                            </Typography>
                        </Box>

                        <Typography variant="body2">
                            Facultad de Ingeniería - UNJu
                        </Typography>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            Jujuy, Argentina
                        </Typography>

                        <Link
                            href="https://maps.google.com/?q=Facultad+de+Ingeniería+UNJu"
                            target="_blank"
                            underline="hover"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                mt: 1,
                            }}
                        >
                            <LocationOnIcon fontSize="small" />
                            Ver ubicación
                        </Link>

                    </Grid>

                    <Grid size={{ xs: 12, md: 3 }}>

                        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                            <ContactMailIcon color="primary" sx={{ mr: 1 }} />
                            <Typography
                                variant="subtitle1"
                                fontWeight="bold"
                            >
                                Contacto
                            </Typography>
                        </Box>

                        <Link
                            href="https://github.com/DiegoFedericoGabrielRobles/pv_tp_integrador_grupo5.git"
                            target="_blank"
                            underline="hover"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                width: "fit-content",

                                 "&:hover": {
                                    color: "primary.main",
                                }
                            }}
                        >
                            <GitHubIcon fontSize="small" />
                            GitHub
                        </Link>

                        <Typography
                            variant="subtitle2"
                            color="text.secondary"
                            sx={{ mt: 1 }}
                        >
                            Repositorio del proyecto
                        </Typography>

                    </Grid>

                </Grid>

                <Divider sx={{ my: 2 }} />

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                    }}
                >
                    <Typography
                        variant="body2"
                        fontWeight="medium"
                        color="text.secondary"
                    >
                        Trabajo Final Integrador • Programación Visual
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};