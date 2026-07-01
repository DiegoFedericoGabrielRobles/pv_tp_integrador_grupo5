import { useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { AdminContext } from "../../context/AdminContext";

import * as React from "react";
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import LogoutIcon from '@mui/icons-material/Logout';
import Divider from '@mui/material/Divider';

import { Footer } from "./Footer";
import { AppBar, Drawer, DrawerHeader } from "../../styles/nav_style"; 

export const Nav = ({children}) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const {admin, logout} = useContext(AdminContext);
    const location = useLocation();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleLogout = ()=>{
        logout();
    };

    const menuItems = [
        { text: "Panel", icon: <DashboardIcon />, path: "/" },
        { text: "Clientes", icon: <PeopleIcon />, path: "/clientes" },
    ];
    return(
        <Box sx={{ display: "flex" }}>
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={[
                            {
                                marginRight: 5,
                            },
                            open && {display: "none"},
                        ]}
                    >
                        <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Panel de Control de Clientes
                        </Typography>
                        <Typography variant="body1" sx={{marginLeft:"auto"}}>
                            Usted es {admin?.nombre} ({admin?.sector})
                        </Typography>
                </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === "rtl"? 
                                <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <List>
                        {menuItems.map((item) => (
                            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
                                <ListItemButton
                                    component={Link}
                                    to={item.path}
                                    selected={location.pathname === item.path}
                                    sx={[
                                        {
                                            minHeight: 32,
                                            px: 2.5,
                                        },
                                        open ? { justifyContent: "initial" } : { justifyContent: "center" },
                                    ]}
                                    >
                                    <ListItemIcon
                                        sx={[
                                            {
                                            minWidth: 0,
                                            justifyContent: "center",
                                            },
                                            open ? { mr: 3 } : { mr: "auto" },
                                        ]}
                                        >
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.text} sx={[
                                        open ? { opacity: 1 } : { opacity: 0 },
                                    ]}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        <ListItem key= "Cerrar Sesion"disablePadding sx={{ display: "block" }}>
                            <ListItemButton
                                onClick={handleLogout}
                                sx={[
                                    {
                                    minHeight: 48,
                                    px: 2.5,
                                    },
                                    open ? { justifyContent: "initial" } : { justifyContent: "center" },
                                ]}
                                >
                                    <ListItemIcon
                                        sx={[
                                            {
                                                minWidth: 0,
                                                justifyContent: "center",
                                            },
                                            open ? { mr: 3 } : { mr: "auto" },
                                        ]}
                                        >
                                        <LogoutIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Cerrar Sesión" sx={[
                                        open ? { opacity: 1 } : { opacity: 0 },
                                    ]}
                                    />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "64px", display: "flex", flexDirection: "column", minHeight: "100vh",}}>
                    <Box sx={{ flexGrow: 1 }}>
                        {children}
                    </Box>
                    <Footer />
                </Box>
        </Box> 
    );
};
