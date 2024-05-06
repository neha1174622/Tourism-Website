import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import axios from 'axios'
import { addToCart } from '../../../redux/CartSlice'
import { API_URL, API_PATH } from '../../../util/API_URL'

const ProductDetail = () => {
    let dispatch = useDispatch();
    let [pro, setPro] = useState({});
    let param = useParams();

    useEffect(()=>{
        getData();
    },[])

    let getData = async()=>{
        let response = await axios.get(`${API_URL}/product/${param.id}`);
        setPro(response.data);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])
  

    let cart = (obj)=>{
        dispatch(addToCart(obj));
    }


      return (
    <div className="container" style={{minHeight : "600px"}}>
        <div className="row my-5">
            <div className="col-md-5">
                <img src={`${API_PATH}/product/${pro.image}`} className='img-fluid' style={{ height : "400px"}}/>
                
                <button className='btn btn-block my-2 btn-success' onClick={()=>cart(pro)}>Add To Cart</button>
                <button className='btn btn-block my-2 btn-success'>Buy Now</button>
                
            </div>
            <div className="col-md-7">
                <h4>{pro.title}</h4>
                <h6>{pro.price}</h6>
                <p>{pro.detail}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail