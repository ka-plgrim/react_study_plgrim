import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

/** 특정 인자값으로 분기하여 지정한 경로로 이동 처리 */
const SampleRoutes = ({bool}) => {
    return (
        bool ? <Navigate to={'/'} /> : <Outlet />
    )
}

export default SampleRoutes