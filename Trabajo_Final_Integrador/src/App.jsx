import { useContext } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { AdminContext } from "./context/AdminContext";

import { Login } from "./views/Login";
import { Dashboard } from "./views/Dashboard";
import { ListaClientes } from "./views/ListaClientes";
import { DetalleCliente } from "./views/DetalleCliente";
import { AltaCliente } from "./views/AltaCliente";

import { Nav } from "./components/layout/Nav";

function App() {
  const { admin } = useContext(AdminContext);

  return (
    <Nav>
      <Routes>
        <Route path="/" element={admin ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/clientes" element={admin ? <ListaClientes /> : <Navigate to="/login" />} />
        <Route path="/clientes/nuevo" element={admin ? <AltaCliente /> : <Navigate to="/login" />} />
        <Route path="/clientes/:id" element={admin ? <DetalleCliente /> : <Navigate to="/login" />} />
      </Routes>
    </Nav>
  );
}

export default App;