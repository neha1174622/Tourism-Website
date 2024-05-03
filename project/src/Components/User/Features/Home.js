import React, { useState, useEffect } from 'react'
import Slider from '../Shared/Slider'
import { NavLink, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../../util/API_URL'
import DestinationBox from '../Shared/DestinationBox'
import HotelBox from '../Shared/HotelBox'
import ProductBox from '../Shared/ProductBox'

const Home = () =>{

    let [allDestination, setAllDestination] = useState([]);
	let [allHotels, setAllHotels] = useState([]);
    let [allPro, setAllPro] = useState([]);
	useEffect(() => {
		axios.get(`${API_URL}/destination`).then(response => {
			setAllDestination(response.data);
		})
		axios.get(`${API_URL}/hotels`).then(response => {
			setAllHotels(response.data);
		})
	}, [])

    useEffect(()=>{
		getAllPro();
	},[])

	let getAllPro = async()=>{
		let response = await axios.get(`${API_URL}/product`);
		setAllPro(response.data);
	}



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
                <div className ="btn-group " >
                    <ul className ="nav nav-pills d-inline-flex justify-content-center p-2">
                    <li className ="nav-item p-2">
                            <NavLink  className ="d-flex p-3  border border-primary bg-light  rounded-pill" to="/destination/Assam"> All </NavLink>
                        </li>
                        <li className ="nav-item p-2">
                            <NavLink style={{minWidth : "150px"}} className ="d-flex p-3  border border-primary bg-light rounded-pill" to="/destination/Assam"> Arunachal Pradesh</NavLink>
                        </li>
                        
                        <li className ="nav-item p-2">
                            <NavLink style={{minWidth : "200px" ,textAlign:"center"}} className ="d-flex p-3  border border-primary bg-light rounded-pill" to="/destination/Assam"> Assam </NavLink>
                        </li>
                        
                        <li className ="nav-item p-2">
                            <NavLink className ="d-flex p-3  border border-primary bg-light rounded-pill" to="/destination/Assam"> Manipur </NavLink>
                        </li>
                        <li className ="nav-item p-2">
                            <NavLink className ="d-flex p-3  border border-primary bg-light rounded-pill" to="/destination/Assam"> Meghalaya </NavLink>
                        </li>
                        <li className ="nav-item p-2">
                            <NavLink className ="d-flex p-3  border border-primary bg-light rounded-pill" to="/destination/Assam"> Mizoram </NavLink>
                        </li>
                        <li className ="nav-item p-2">
                            <NavLink className ="d-flex p-3  border border-primary bg-light rounded-pill" to="/destination/Assam"> Nagaland </NavLink>
                        </li>
                        <li className ="nav-item p-2">
                            <NavLink className ="d-flex p-3  border border-primary bg-light rounded-pill" to="/destination/Assam"> Tripura </NavLink>
                        </li>
                        
                        
                        
                    </ul>
                  </div>
                    <div className="row">

						{
							allDestination.map(value => {
								return(
									<DestinationBox value={value} />
								)
							})
						}


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

        {/* <!-- Hotel start --> */}

        <section className="ftco-section ftco-no-pt">
				<div className="container">
					<div className="row justify-content-center pb-4">
						<div className="col-md-12 heading-section text-center ">
							<h2 className="my-4">Latest Hotel</h2>
						</div>
					</div>
					<div className="row">

						{
							allHotels.map(value=><HotelBox info={value} />)
						}


					</div>
				</div>
			</section>

        {/* <!-- Hotel end --> */}
        
        {/* <!-- Product start--> */}

        <section className="ftco-section">
				<div className="container">
					<div className="row justify-content-center pb-4">
						<div className="col-md-12 heading-section text-center ">
							<h2 className="mb-4">Recent Product</h2>
						</div>
					</div>
					<div className="row">
					{
						allPro.map(item=><ProductBox key={item._id} info={item} />)
					}	
						
						
					</div>
				</div>
			</section>
            {/* <!-- Product end --> */}
        
        
       

        

    </>
  )
}

export default Home
