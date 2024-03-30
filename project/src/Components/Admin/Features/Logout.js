import React, {useEffect} from 'react'
import { Navigate } from 'react-router-dom';

const Logout = () => {
    localStorage.removeItem("admin-token");
  return (
    <Navigate to="/"></Navigate>
  )
}

export default Logout