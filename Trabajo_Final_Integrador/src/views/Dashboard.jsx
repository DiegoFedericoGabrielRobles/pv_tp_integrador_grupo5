import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";

export const Dashboard = () => {
    const { admin } = useContext(AdminContext);

    return (
        <h1>{admin?.nombre}</h1>
    );
};