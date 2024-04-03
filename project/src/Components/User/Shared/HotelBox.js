import React from 'react'

const HotelBox = (props) => {
  return (
    
							<div className="col-md-4 ">
            
            
            <img className ="img-fluid rounded w-100" src="/assets/img/destination-1.jpg" alt="" />
                                 
                
                <div className="text p-4">


                    <h5><a href="#">{props.info.title}</a></h5>

                    <a href='' className='btn btn-info'>Detail</a>
                </div>
        </div>
		
  )
}

export default HotelBox