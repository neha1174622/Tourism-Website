import React from 'react'

const HotelBox = (props) => {
    return (
        <div className="col-md-4 ">
            <div className="project-wrap">
                <a href="#" className="img" style={{ backgroundImage: "url(/assets/images/destination-1.jpg)" }}></a>
                <div className="text p-4">


                    <h5><a href="#">{props.value.title}</a></h5>

                    <a href='/hotel' className='btn btn-info'>Detail</a>
                </div>
            </div>
        </div>
    )
}

export default HotelBox