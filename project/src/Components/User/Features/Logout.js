import React from 'react'
import { Navigate } from 'react-router-dom'

const Logout = () => {
    localStorage.removeItem("access-token");
    
  return (
    <Navigate to="/login" />
  )
}

export default Logout