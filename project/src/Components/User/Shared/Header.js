import React, {useRef} from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Header = () => {
    let cartdata = useSelector(state=>state);
    let menubar = useRef();
	let menuBarHandler = ()=>{
		menubar.current.classList.remove("show");
	}
    
  return (
    <> 
     {/* <!-- Navbar & Hero Start --> */}
     <div className ="container-fluid position-relative p-0">
            <nav className ="navbar navbar-expand-lg navbar-light bg-dark px-4 px-lg-5 py-3 py-lg-0">
                <NavLink to="" className ="navbar-brand p-0">
                    <h1 className ="m-0"><i className ="fa fa-map-marker-alt me-3"></i>Travela</h1>
                      
                </NavLink>
                <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className ="fa fa-bars"></span>
                </button>
                <div ref={menubar} className ="collapse navbar-collapse" id="navbarCollapse">
                    <div className ="navbar-nav ms-auto py-0">
                        <NavLink onClick={menuBarHandler} to="/" className ="nav-item nav-link active">Home</NavLink>
                       

                        <div className ="nav-item dropdown">
                            <NavLink to="#" className ="nav-link dropdown-toggle" data-bs-toggle="dropdown">Reach Us</NavLink>
                            <div className ="dropdown-menu m-0">
                                <NavLink onClick={menuBarHandler} to ="/about" className ="dropdown-item">About</NavLink>
                                
                                <NavLink onClick={menuBarHandler} to="/contact" className ="dropdown-item">Contact</NavLink>
                                
                            </div>
                        </div>
                                                
                        <div className ="nav-item dropdown">
                            <NavLink onClick={menuBarHandler} to="" className ="nav-link dropdown-toggle" data-bs-toggle="dropdown">Destination</NavLink>
                            <div className ="dropdown-menu m-0">
                                <NavLink onClick={menuBarHandler} to ="/destination/Arunachal Pradesh" className ="dropdown-item">Arunachal Pradesh</NavLink>
                                <NavLink onClick={menuBarHandler} to ="/destination/Assam" className ="dropdown-item">Assam</NavLink>
                                <NavLink onClick={menuBarHandler} to='/destination/Manipur' className='dropdown-item'>Manipur</NavLink>
					<NavLink onClick={menuBarHandler} to='/destination/Meghalaya' className='dropdown-item'>Meghalaya</NavLink>
					<NavLink onClick={menuBarHandler} to='/destination/Mizoram' className='dropdown-item'>Mizoram</NavLink>
					<NavLink onClick={menuBarHandler} to='/destination/Nagaland' className='dropdown-item'>Nagaland</NavLink>
                                
                                <NavLink onClick={menuBarHandler} to="/destination/Tripura" className ="dropdown-item">Tripura</NavLink>
                               
                                
                            </div>
                        </div>
                        
                        {
				localStorage.getItem("access-token") 
				?
				<>
					<li className="nav-item"><NavLink onClick={menuBarHandler} to="/user/my-booking" className="nav-link">My-Booking</NavLink></li>
	          		<li className="nav-item"><NavLink onClick={menuBarHandler} to="/user/my-profile" className="nav-link">My-Profile</NavLink></li>
	          		<li className="nav-item"><NavLink onClick={menuBarHandler} to="/user/logout" className="nav-link">Logout</NavLink></li>
				</>
				:
				<>
					<div className ="nav-item dropdown">
                            <NavLink to="#" className ="nav-link dropdown-toggle" data-bs-toggle="dropdown">Enlist</NavLink>
                            <div className ="dropdown-menu m-0">
                                <NavLink onClick={menuBarHandler} to ="/login" className ="dropdown-item">Already Member(Log In)</NavLink>
                                
                                <NavLink onClick={menuBarHandler} to="/signup" className ="dropdown-item">New Member(Sign Up)</NavLink>
                                
                                
                            </div>
                        </div>
				</>
			  }
                        
                    </div>
                    <NavLink onClick={menuBarHandler} to="/mycart" className ="btn btn-primary rounded-pill py-2 px-4 ms-lg-4">My Cart ({cartdata.length})</NavLink>
                </div>
            </nav>

            
      </div>
      
        
    </>

  )
}

export default Header