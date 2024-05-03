import React from 'react'
import { API_PATH } from '../../../util/API_URL'
import {NavLink} from 'react-router-dom'

const ProductBox = (props) => {
    return (
        <div className="col-md-4">
            <div className="card m-2 border border-dark">
                <img src={`${API_PATH}/product/${props.info.image}`} className='card-img-top' style={{ height: "200px" }} />
                <div className="card-body">
                    <h4>{props.info.title}</h4>
                    <p className='mb-0'>{props.info.price}</p>
                </div>
                <div className="card-footer">
                    <NavLink to={`/detail/${props.info._id}`} className='btn btn-dark'>Detail</NavLink>
                </div>
            </div>
        </div>
    )
}

export default ProductBox