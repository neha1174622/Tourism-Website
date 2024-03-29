import React, {useEffect} from 'react'
import { useNavigate, Outlet } from 'react-router-dom';


const UserProtactedModule = () => {
    let navigate = useNavigate();
    useEffect(()=>{
      if(! localStorage.getItem("access-token"))
      {
        navigate("/login");
      }
    },[])
    return(
      <Outlet />
    )
}



export default UserProtactedModule