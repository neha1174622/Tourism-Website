import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <nav className='navbar navbar-expand-sm navbar-dark bg-info'>
      <div className='container'>
        <NavLink to='/admin/dashboard' className='navbar-brand bg-info'>Administrator</NavLink>
        <button className='navbar-toggler' data-toggle="collapse" data-target="#menu">
          <span className='navbar-toggler-icon'></span>
        </button>
        <div id='menu' className='collapse navbar-collapse'>
          {
            localStorage.getItem("admin-token")
            ?
            <ul className='nav navbar-nav'>
            <li className='nav-item'>
              <NavLink to='/admin/dashboard' className='nav-link'>Dashboard</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/admin/destination' className='nav-link'>Destination</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/admin/hotel' className='nav-link'>Hotel</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/admin/users' className='nav-link'>Users</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/admin/booking' className='nav-link'>Booking</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/admin/logout' className='nav-link'>Logout</NavLink>
            </li>
          </ul>
          :
          ""
          }
        </div>
      </div>
    </nav>
    </>
  )
}

export default Header