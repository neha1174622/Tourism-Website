import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/User/Features/Home'
import About from '../Components/User/Features/About'
import Contact from '../Components/User/Features/Contact'
import Usermodule from '../Modules/Usermodule'
import Adminmodule from '../Modules/Adminmodule'
import Dashboard from '../Components/Admin/Features/Dashboard'
import Users from '../Components/Admin/Features/Users'
import Booking from '../Components/Admin/Features/Booking'
import AdminDestination from '../Components/Admin/Features/Destination'
import Signup from '../Components/User/Features/Signup'
import Login from '../Components/User/Features/Login'
import Assam from '../Components/User/Features/Assam'
import MyBooking from '../Components/User/Features/MyBooking'
import Logout from '../Components/User/Features/Logout'
import AdminLogin from '../Components/User/Features/Login'
import MyProfile from '../Components/User/Features/MyProfile'
import UserProtactedModule from '../Modules/UserProtactedModule'


const AllRoutes = () => {
  return (
    <Routes>
      <Route path='' element={<Usermodule />}>
                  <Route path='' element={<Home />} />
                  <Route path='about' element={<About />} />
                  <Route path='contact' element={<Contact />} />
                  <Route path='login' element={<Login />} />
                  <Route path='signup' element={<Signup />} /> 
                  <Route path='assam' element={<Assam/>} /> 
                  {/* <Route path='destination' element={<Destination />} />
                  */}

              <Route path='user' element={<UserProtactedModule />}>
                      <Route path='my-booking' element={<MyBooking />} />
                      <Route path='my-profile' element={<MyProfile />} />
                      <Route path='logout' element={<Logout />} />
                  </Route>

                </Route>

                <Route path='admin' element={<Adminmodule />}>
                <Route path='' element={<AdminLogin />} />
                  <Route path='dashboard' element={<Dashboard />} />
                  <Route path='users' element={<Users />} />
                  <Route path='booking' element={<Booking />} />
                  <Route path='destination' element={<AdminDestination />} />
                </Route>
      
                    
                    
                    
    </Routes>
  )
}

export default AllRoutes

