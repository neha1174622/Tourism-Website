import React from 'react'
import Header from '../Components/User/Shared/Header'
import Footer from '../Components/User/Shared/Footer'
import { Outlet } from 'react-router-dom'

const Usermodule = () => {
  return (
    <>
    <Header />
    <div className='container py-2' >
         <Outlet />
    </div>
    <Footer />
    </>
  )
}

export default Usermodule