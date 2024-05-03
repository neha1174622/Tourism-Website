import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { API_URL, API_PATH } from '../../../util/API_URL'

const ProductDetail = () => {
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
  
      return (
    <div className="container m-5" style={{minHeight : "600px"}}>
        <div className="row my-5">
            <div className="col-md-5 mt-5">
                <img src={`${API_PATH}/product/${pro.image}`} className='img-fluid' style={{ height : "400px"}}/>
                
                <button className=' btn d-grid my-2 btn-success' style={{minWidth : "400px"}}>Add To Cart</button>
                <button className='btn d-grid my-2 btn-success' style={{minWidth : "400px"}}>Buy Now</button>
                
            </div>
            <div className="col-md-7 mt-5">
                <h4>{pro.title}</h4>
                <h6>{pro.price}</h6>
                <p>{pro.detail}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail