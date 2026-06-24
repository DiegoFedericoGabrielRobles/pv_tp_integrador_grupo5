import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const TablaClientes = ({ clientes }) => {
    return (

        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Nombre Completo</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Teléfono</TableCell>
                        <TableCell>Ciudad</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {clientes.map(cliente => (
                        <TableRow key={cliente.id}>
                            <TableCell>{cliente.id}</TableCell>
                            <TableCell>{cliente.name.firstname} {cliente.name.lastname}</TableCell>
                            <TableCell>{cliente.email}</TableCell>
                            <TableCell>{cliente.phone}</TableCell>
                            <TableCell>{cliente.address.city}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    );
};