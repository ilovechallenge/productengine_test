import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
    const authState = useSelector((state) => state.app);
    return authState?.token ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoutes;

