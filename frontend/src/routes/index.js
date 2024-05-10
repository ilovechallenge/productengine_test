import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoute";
import UnProtectedRoutes from "./UnProtectedRoute";

const LoginPage = lazy(() => import("../pages/Auth/Login"))
const HomePage = lazy(() => import("../pages/Home/Home"))
const ActivationPage = lazy(() => import("../pages/Activation/Activation"))
const AccountPage = lazy(() => import("../pages/Account/Account"))

const routes = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage />,
        title: 'home',
        priv: false
    },
    {
        element: <UnProtectedRoutes />,
        children: [
            {
                path: '/login',
                element: <LoginPage />,
                title: 'login',
                priv: false
            }
        ]
    },
    {
        element: <ProtectedRoutes />,
        children: [
            {
                path: '/home',
                element: <HomePage />,
                title: 'home',
                priv: true,
            },
            {
                path: '/activation',
                element: <ActivationPage />,
                title: 'activation',
                priv: true,
            },
            {
                path: '/account',
                element: <AccountPage />,
                title: 'account',
                priv: true,
            }
        ]
    }
]);

export default routes;


