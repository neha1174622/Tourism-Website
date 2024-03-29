import React from 'react'
import Slider from '../Shared/Slider'
import { NavLink, useNavigate} from 'react-router-dom'

const Home = () =>{


  return(
    <>
    
    <Slider />
    {/* <!-- Destination Start --> */}
    <div className ="container-fluid destination py-5 ">
            <div className ="container py-5">
                <div className ="mx-auto text-center mb-5" style= {{maxWidth: "900px"}}>
                    <h5 className ="section-title px-3">Destination</h5>
                    <h1 className ="mb-0">Popular Destination</h1>
                </div>
                <div className ="tab-className  text-center">
                    <ul className ="nav nav-pills d-inline-flex justify-content-center p-2">
                    <li className ="nav-item  p-2 ">
                            <NavLink className ="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active" data-bs-toggle="pill" to="#tab-1">
                                <span className ="text-dark" style={{width: "150px"}}> All </span>
                            </NavLink>
                        </li>
                        
                        <li className ="nav-item p-2">
                            <NavLink className ="d-flex py-2 mx-3 border border-primary bg-light rounded-pill" data-bs-toggle="pill" to="#tab-2">
                                <span className ="text-dark" style={{width: "150px"}}> Arunachal Pradesh</span>
                            </NavLink>
                        </li>
                        <li className ="nav-item p-2">
                            <NavLink className ="d-flex py-2 mx-3 border border-primary bg-light rounded-pill" data-bs-toggle="pill" to="#tab-2">
                                <span className ="text-dark" style={{width: "150px"}}>Assam</span>
                            </NavLink>
                        </li>
                        <li className ="nav-item p-2">
                            <NavLink className ="d-flex py-2 mx-3 border border-primary bg-light rounded-pill" data-bs-toggle="pill" to="#tab-2">
                                <span className ="text-dark" style={{width: "150px"}}> Manipur</span>
                            </NavLink>
                        </li>
                        <li className ="nav-item p-2">
                            <NavLink className ="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active" data-bs-toggle="pill" to="#tab-1">
                                <span className ="text-dark" style={{width: "150px"}}> Meghalaya</span>
                            </NavLink>
                        </li>

                        <li className ="nav-item p-2">
                            <NavLink className ="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active" data-bs-toggle="pill" to="#tab-1">
                                <span className ="text-dark" style={{width: "150px"}}> Mizoram</span>
                            </NavLink>
                        </li>
                        <li className ="nav-item p-2">
                            <NavLink className ="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active" data-bs-toggle="pill" to="#tab-1">
                                <span className ="text-dark" style={{width: "150px"}}> Nagaland </span>
                            </NavLink>
                        </li>
                        <li className ="nav-item p-2">
                            <NavLink className ="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active" data-bs-toggle="pill" to="#tab-1">
                                <span className ="text-dark" style={{width: "150px"}}> Tripura</span>
                            </NavLink>
                        </li>
                        
                    </ul>
                    <div className ="tab-content">
                        <div id="tab-1" className ="tab-pane fade show p-2 active">
                            <div className ="row g-4">
                                <div className ="col-xl-8">
                                    <div className ="row g-4">
                                        <div className ="col-lg-6">
                                            <div className ="destination-img">
                                                <img className ="img-fluid rounded w-100" src="/assets/img/destination-1.jpg" alt="" />
                                                <div className ="destination-overlay p-4">
                                                    <NavLink to="#" className ="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</NavLink>
                                                    <h4 className ="text-white mb-2 mt-3">New York City</h4>
                                                    <NavLink to="#" className ="btn-hover text-white">View All Place <i className ="fa fa-arrow-right ms-2"></i></NavLink>
                                                </div>
                                                <div className ="search-icon">
                                                    <NavLink to="/assets/img/destination-1.jpg" data-lightbox="destination-1"><i className ="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary"></i></NavLink>
                                                </div>
                                            </div>
                                        </div>
                                                                              
                                        
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Destination End --> */}

        {/* <!-- Tour Booking Start --> */}
     <div className ="container-fluid booking py-5">
            <div className ="container py-5">
                <div className ="row g-5 align-items-center">
                    <div className =" border border-muted rounded-circle col-lg-5 m-3 py-3 text-center">
                    <h1  style={{fontFamily: "Brush Script MT"}} className ="text-white ">Memorable</h1>
                        <h1   className ="text-white ">Hotels for </h1>
                        <h1   className ="text-white ">Moments <span style={{fontFamily: "Brush Script MT"}} className ="text-white ">Rich </span></h1>
                        <h1   className ="text-white "> in emotions </h1>                     
                        
                        <NavLink to="#" className ="btn btn-light text-primary rounded-pill py-3 px-5 mt-2">Read More</NavLink>
                    </div>
                    <div className ="col-lg-6">
                        <h1 className ="text-white mb-3">Book A Tour Deals</h1>
                        <p className ="text-white mb-4">Book Your First Adventure Trip With Travela. Expolre More  Here.</p>
                        <form>
                            <div className ="row g-3">
                                <div className ="col-md-8">
                                    <div className ="form-floating">
                                      <NavLink to="/signup" className ="btn btn-light text-primary rounded-pill py-3 px-5 mt-2">New Here ? <i className ="fa fa-arrow-right ms-2"></i></NavLink> 
                                    </div>
                                </div>
                                <div className ="col-md-8">
                                    <div className ="form-floating">
                                      <NavLink to="/signup" className ="btn btn-light text-primary rounded-pill py-3 px-5 mt-2">Already a Member (Log In) <i className ="fa fa-arrow-right ms-2"></i></NavLink> 
                                    </div>
                                </div>
                                
                                
                            
                                
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
     </div>
        {/* <!-- Tour Booking End --> */}

        
        
        {/* <!-- Testimonial Start --> */}
      <div className ="container-fluid testimonial py-5">
            <div className ="container py-5">
                <div className ="mx-auto text-center mb-5" style={{maxWidth: "900px"}}>
                    <h5 className ="section-title px-3">Testimonial</h5>
                    <h1 className ="mb-0">Our Clients Say!!!</h1>
                </div>
                <div className ="testimonial-carousel owl-carousel">
                    <div className ="testimonial-item text-center rounded pb-4">
                        <div className ="testimonial-comment bg-light rounded p-4">
                            <p className ="text-center mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta quisquam quasi porro officiis. Vero reiciendis,
                            </p>
                        </div>
                        <div className ="testimonial-img p-1">
                            <img src="/assets/img/testimonial-1.jpg" className ="img-fluid rounded-circle" alt="Image" />
                        </div>
                        <div style={{marginTop:" -35px"}}>
                            <h5 className ="mb-0">John Abraham</h5>
                            <p className ="mb-0">New York, USA</p>
                            <div className ="d-flex justify-content-center">
                                <i className ="fas fa-star text-primary"></i>
                                <i className ="fas fa-star text-primary"></i>
                                <i className ="fas fa-star text-primary"></i>
                                <i className ="fas fa-star text-primary"></i>
                                <i className ="fas fa-star text-primary"></i>
                            </div>
                        </div>
                    </div>
                    <div className ="testimonial-item text-center rounded pb-4">
                        <div className ="testimonial-comment bg-light rounded p-4">
                            <p className ="text-center mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta quisquam quasi porro officiis. Vero reiciendis,
                            </p>
                        </div>
                        <div className ="testimonial-img p-1">
                            <img src="/assets/img/testimonial-2.jpg" className ="img-fluid rounded-circle" alt="Image" />
                        </div>
                        <div style= {{marginTop:" -35px"}}>
                            <h5 className ="mb-0">John Abraham</h5>
                            <p className ="mb-0">New York, USA</p>
                            <div className ="d-flex justify-content-center">
                                <i className ="fas fa-star text-primary"></i>
                                <i className ="fas fa-star text-primary"></i>
                                <i className ="fas fa-star text-primary"></i>
                                <i className ="fas fa-star text-primary"></i>
                                <i className ="fas fa-star text-primary"></i>
                            </div>
                        </div>
                    </div>
                    <div className ="testimonial-item text-center rounded pb-4">
                        <div className ="testimonial-comment bg-light rounded p-4">
                            <p className ="text-center mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta quisquam quasi porro officiis. Vero reiciendis,
                            </p>
                        </div>
                        <div className ="testimonial-img p-1">
                            <img src="/assets/img/testimonial-3.jpg" className ="img-fluid rounded-circle" alt="Image" />
                        </div>
                        <div style={{marginTop:" -35px"}}>
                            <h5 className ="mb-0">John Abraham</h5>
                            <p className ="mb-0">New York, USA</p>
                            <div className ="d-flex justify-content-center">
                                <i className ="fas fa-star text-primary"></i>
                                <i className ="fas fa-star text-primary"></i>
                                <i className ="fas fa-star text-primary"></i>
                                <i className ="fas fa-star text-primary"></i>
                                <i className ="fas fa-star text-primary"></i>
                            </div>
                        </div>
                    </div>
                    <div className ="testimonial-item text-center rounded pb-4">
                        <div className ="testimonial-comment bg-light rounded p-4">
                            <p className ="text-center mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta quisquam quasi porro officiis. Vero reiciendis,
                            </p>
                        </div>
                        <div className ="testimonial-img p-1">
                            <img src="/assets/img/testimonial-4.jpg" className ="img-fluid rounded-circle" alt="Image" />
                        </div>
                        <div style={{marginTop:" -35px"}}>
                            <h5 className ="mb-0">John Abraham</h5>
                            <p className ="mb-0">New York, USA</p>
                            <div className ="d-flex justify-content-center">
                                <i className ="fas fa-star text-primary"></i>
                                <i className ="fas fa-star text-primary"></i>
                                <i className ="fas fa-star text-primary"></i>
                                <i className ="fas fa-star text-primary"></i>
                                <i className ="fas fa-star text-primary"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
        {/* <!-- Testimonial End --> */}

        

    </>
  )
}

export default Home
