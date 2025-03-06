import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from "../pages/Landing.jsx";
import Overall from "../pages/Overall.jsx";
import Login from "../pages/auth/login.jsx";
import Dashboard from "../pages/admin/dashboard.jsx";
import Register from "../pages/auth/Register.jsx";
import ProtectRouteAdmin from './ProtectRouteAdmin.jsx'
const AppRoutes = () => {

const router = createBrowserRouter([
    {
      path: '/', 
      children:[
        { index: true, element:<Landing />},
        { path: 'home', element:<Overall />},
        { path: 'login', element:<Login />},
        { path: 'register', element:<Register />},
      ]
    },
    {
      path: '/admin',
      element: <ProtectRouteAdmin element={<Dashboard />} />,
    },
])

  return(
    <RouterProvider router = {router} />
  )
}

export default AppRoutes