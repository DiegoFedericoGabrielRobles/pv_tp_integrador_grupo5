import { useContext } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { AdminContext } from "./context/AdminContext";

import { Login } from "./views/Login";
import { Dashboard } from "./views/Dashboard";
import { ListaClientes } from "./views/ListaClientes";
import { DetalleCliente } from "./views/DetalleCliente";

function App() {
  const { admin } = useContext(AdminContext);

  return (
    <Routes>
      <Route path="/" element={admin ? <Dashboard /> : <Navigate to="/login" />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/clientes" element={admin ? <ListaClientes /> : <Navigate to="/login" />} />
      <Route path="/clientes/:id" element={admin ? <DetalleCliente /> : <Navigate to="/login" />} />
    </Routes>
  );
}

export default App;