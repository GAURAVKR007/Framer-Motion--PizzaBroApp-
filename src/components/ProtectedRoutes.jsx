import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Home from './Home'

function ProtectedRoutes({isGood}) {
  return (
    isGood ? <Outlet /> : <Navigate to="/" />
  )
}

export default ProtectedRoutes