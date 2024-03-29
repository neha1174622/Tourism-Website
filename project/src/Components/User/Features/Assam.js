import React from 'react'
import { NavLink } from 'react-router-dom'

const Assam = () => {
  return (
    <>
    <div className="container-fluid about py-5  ">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-5 py-5">
                        <div className="h-100" style={{border: "50px solid", borderColor: " transparent #13357B transparent #13357B"}}>
                            <img src="/assets/img/assam1.jpg" className="img-fluid w-100 h-100" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7 py-5 " style= {{background: "linear-gradient(rgba(255, 255, 255, .8), rgba(255, 255, 255, .8)), url(/assets/img/assam3.jpg)"}}>
                        <h5 className="section-about-title pe-3">Assam</h5>
                        <h1 className="mb-4">Welcome to Assam <span className="text-primary">Travela</span></h1>
                        <p className="mb-4">The gateway to the north eastern part of the country, the state of Assam is gifted with lush green meadows, fertile plains, the enormous Brahmaputra River, the beautiful hills, the Blue Mountains, the wonderful looking tea plantations, the rich flora and fauna.</p>
                        <p className="mb-4">Assam is a state in northeastern India known for its lush green forests, tea plantations, and diverse ethnic groups. The state is home to several ancient monuments and temples, including the Kamakhya Temple in Guwahati. The Bihu festival, celebrated in January, April, and October, is one of the most important festivals of Assam. Assam's cuisine is a blend of various cultures, and the use of bamboo shoots and mustard oil is common in many dishes</p>
                        
                        <div className="row gy-2 gx-4 mb-4">
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Heritage</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Cuisine</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Accommodations</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Nature</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Spirituality</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Handicraft</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
         </div>


         <div className ="container-fluid booking py-5">
         <h1 className="section-about-title pe-3 text-white text-center">Cities In Assam</h1>
         <p className=" text-white text-center"> The cities of Assam have rightly inherited the culture of diverse communities that have settled here over the years dating more than 2000 years. Through the mountain ranges of Himalayas, the mighty Brahmaputra River passes through the heartlands, making the cities of Assam fertile and rich in flora and fauna , an idyllic amalgam of the historic past and the urban cosmopolitan culture</p>
            <div className ="container py-5">
             <div className ="row align-items-center">
                    <div className =" card border border-muted rounded col-lg-5 m-4 p-4 text-center">
                        <h4> Digboi</h4>
                        <img src="/assets/img/assam-digboi-1.jpg" className=" img-fluid img-thumbnail " alt="" />
                        <p> Famous for its oil field, Digboi is known as the 'Oil City' of Assam. It is a home to the first oil well in Asia. Digboi is a town located in the Tinsukia district of Assam. The discovery of the oil field in this town dated back to the 19th century.</p>
                        
                    </div>
                    <div className =" card border border-muted rounded col-lg-5 m-4 p-4 text-center">
                        <h4> Dibrugarh</h4>
                        <img src="/assets/img/assam-digboi-1.jpg" className="  img-fluid img-thumbnail " alt="" />
                        <p> Dibrugarh is the largest tea exporting town in India. Nestled on the banks of the river Brahmaputra, Dibrugarh is the entry point to the districts of Tinsukia, Dibrugarh and Jorhat which produce tea in abundance.</p>
                        
                    </div>
                    
                </div>
            </div>
     </div>
    
    </>
  )
}

export default Assam