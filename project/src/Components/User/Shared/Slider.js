import React from 'react'
import { NavLink } from 'react-router-dom'

const Slider = () => {
  return (
    <>
      {/* <!-- Carousel Start --> */}
      <div className ="container-fluid position-relative p-0">
      <div className ="container-fluid position-relative p-0">
      <div className ="carousel-header">
                <div id="carouselId" className ="carousel slide" data-bs-ride="carousel">
                    <ol className ="carousel-indicators">
                        <li data-bs-target="#carouselId" data-bs-slide-to="0" className ="active"></li>
                        <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
                    </ol>
                    <div className ="carousel-inner" role="listbox">
                        <div className ="carousel-item active">
                            <img src="/assets/img/carousel-2.jpg" className ="img-fluid" alt="Image" />
                            <div className ="carousel-caption">
                                <div className ="p-3" style={{maxWidth: "900px"}}>
                                    <h4 className ="text-white text-uppercase fw-bold mb-4" style={{letterSpacing: "3px"}}>Explore The World</h4>
                                    <h1 className ="display-2 text-capitalize text-white mb-4">Let's The North East Together!</h1>
                                    <p className ="mb-5 fs-5">“Traveling, It leaves you speechless ,then turns you into a storyteller”- Ibn Battuta 
                                    </p>
                                    <div className ="d-flex align-items-center justify-content-center">
                                        <NavLink className ="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5" to="#">Discover Now</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className ="carousel-item">
                            <img src="/assets/img/carousel-1.jpg" className ="img-fluid" alt="Image" />
                            <div className ="carousel-caption">
                                <div className ="p-3" style={{maxWidth: "900px"}}>
                                    <h4 className ="text-white text-uppercase fw-bold mb-4" style={{letterSpacing: "3px"}}>Explore The World</h4>
                                    <h1 className ="display-2 text-capitalize text-white mb-4">Find Your Perfect Tour At Travel</h1>
                                    <p className ="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    </p>
                                    <div className ="d-flex align-items-center justify-content-center">
                                        <NavLink className ="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5" to ="#">Discover Now</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className ="carousel-item">
                            <img src="/assets/img/carousel-3.jpg" className ="img-fluid" alt="Image" />
                            <div className ="carousel-caption">
                                <div className ="p-3" style={{maxWidth: "900px"}}>
                                    <h4 className ="text-white text-uppercase fw-bold mb-4" style={{letterSpacing: "3px"}}>Explore The World</h4>
                                    <h1 className ="display-2 text-capitalize text-white mb-4">You Like To Go?</h1>
                                    <p className ="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    </p>
                                    <div className ="d-flex align-items-center justify-content-center">
                                        <NavLink className ="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5" to="#">Discover Now</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className ="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                        <span className ="carousel-control-prev-icon btn bg-primary" aria-hidden="false"></span>
                        <span className ="visually-hidden">Previous</span>
                    </button>
                    <button className ="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                        <span className ="carousel-control-next-icon btn bg-primary" aria-hidden="false"></span>
                        <span className ="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
            {/* <!-- Carousel End --> */}
            {/* <!-- searchBar End --> */}
        <div className ="container-fluid search-bar position-relative" style={{top: "-50%" ,transform: "translateY(-50%)"}}>
            <div className ="container">
                <div className ="position-relative rounded-pill w-100 mx-auto p-5" style={{background: "rgba(19, 53, 123, 0.8)"}}>
                    <input className ="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Eg: Assam" />
                    <button type="button" className ="btn btn-primary rounded-pill py-2 px-4 position-absolute me-2" style={{top: "50%", right: "46px" , transform: "translateY(-50%)"}}>Search</button>
                </div>
            </div>
      </div>
      {/* <!-- SearchBar End --> */}
      </div>
    </>
  )
}

export default Slider