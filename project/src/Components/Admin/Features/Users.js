import React from 'react'
import { NavLink } from 'react-router-dom'

const Users = () => {

 
  return (
    <>
    <div>Users</div>
    <NavLink to="/admin/users/list" className="btn btn-info">View All Users</NavLink>
    </>
  )
}

export default Users