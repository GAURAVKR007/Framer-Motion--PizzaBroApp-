import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Home from './Home'

function ProtectedRoutes({data}) {
    console.log(data);
  return (
    data.isGood ? <Outlet /> : <Navigate to="/" />
  )
}

export default ProtectedRoutes