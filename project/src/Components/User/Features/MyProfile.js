import React, {useEffect, useState} from 'react'
import {API_URL} from '../../../util/API_URL'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const MyProfile = () => {

  let [user, setUser] = useState({});
  useEffect(()=>{
    getUserInfo();
  },[])

  let getUserInfo = async()=>{
    let response = await axios.get(`${API_URL}/user/profile`, {
      headers : { Authorization : localStorage.getItem("access-token") }
    });
    // console.log(response.data);
    setUser(response.data);
  }

  return (
    <div className="container" style={{marginTop : "100px", minHeight : "600px"}}>
        <div className="row">
            <div className="col-md-8 offset-md-2 my-4">
                <h3 className='text-center'>My-Profile Page</h3>
                <table className='table table-dark table-bordered'>
                  <tbody>
                    <tr>
                      <td>Full Name</td>
                      <td>{user.name}</td>
                    </tr>
                    <tr>
                      <td>Email/Username</td>
                      <td>{user.email}</td>
                    </tr>
                    <tr>
                      <td>Contact</td>
                      <td>{user.contact}</td>
                    </tr>
                    <tr>
                      <td>State</td>
                      <td>{user.state}</td>
                    </tr>
                    <tr>
                      <td>City</td>
                      <td>{user.city}</td>
                    </tr>
                    <tr>
                      <td>Gender</td>
                      <td>{user.gender}</td>
                    </tr>

                  </tbody>
                </table>
                <NavLink to="/user/update-profile" className='btn btn-info'>Update Profile</NavLink>
                <br/>
                <br/>
                <NavLink to="/user/change-password" className='btn btn-info'>Change Password</NavLink>
            </div>
        </div>
    </div>
  )
}

export default MyProfile
// Abc@258