import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = ({isAuth}) => {
    return (
        isAuth ? <Navigate to={'/login'} /> : <Outlet />
    )
}

export default ProtectedRoutes