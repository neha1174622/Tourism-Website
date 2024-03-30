import React from 'react'

const Header = () => {
  return (
    <>
    
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid " >
            <a href="" class="navbar-brand">Admin pannel</a>
            <button data-bs-target="#menu" data-bs-toggle="collapse" class="navbar-toggler">
                <span class="navbar-toggler-icon"></span>
                
            </button>
            <div id="menu" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/admin/dashboard"> Dashboard</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/admin/users">Users</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/admin/booking">Booking</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/admin/destination">Destination</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/admin/hotel">Hotel</a>
                    </li>
                    
                    
                </ul>
            </div>

        </div>
    </nav>
    

    </>
  )
}

export default Header