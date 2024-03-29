import React from 'react'
import Header from '../Components/Admin/Shared/Header'
import Footer from '../Components/Admin/Shared/Footer'
import { Outlet } from 'react-router-dom'

const Adminmodule = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Adminmodule