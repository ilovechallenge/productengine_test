import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const UnProtectedRoutes = () => {
    const authState = useSelector((state) => state.app);
    return authState?.token ? <Navigate to="/login" replace /> : <Outlet />;
}

export default UnProtectedRoutes;

