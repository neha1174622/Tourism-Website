import React from 'react'

const DestinationBox = (props) => {
//     return (
//         <div className="col-md-4 ">
//             <div className="project-wrap">
//                 <a href="#" className="img" style={{ backgroundImage: `url(http://localhost:8080/destination-images/${props.value.image})` }}></a>
//                 <div className="text p-4">

//                
//                     <h5><a href="#">{props.value.title}</a></h5>

//                     <a href='' className='btn btn-info'>Detail</a>
//                 </div>
//             </div>
//         </div>
//     )
// }

return (
    
    <div className="col-md-4 ">


<img className ="img-fluid rounded w-100" src= "{props.value.image}" alt="" />
         

<div className="text p-4">


<h5><a href="#">{props.value.title}</a></h5>

<a href='' className='btn btn-info'>Detail</a>
</div>
</div>

)
}
export default DestinationBox