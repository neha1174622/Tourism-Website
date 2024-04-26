import React from 'react'
import { API_PATH } from '../../../util/API_URL'

const DestinationBox = (props) => {


return (
    
    <div className="col-md-4 ">


<img className ="img-fluid rounded w-100" src= {`${API_PATH}/destination-images/${props.value.image}`} alt="" />
         

<div className="text p-4">


<h5><a href="#">{props.value.title}</a></h5>

<a href='' className='btn btn-info'>Detail</a>
</div>
</div>

)
}
export default DestinationBox