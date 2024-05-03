import React, {useEffect, useRef, useState} from 'react'
import axios from 'axios'
import {API_URL, API_PATH} from '../../../util/API_URL'
import {useFormik} from 'formik'
import {useNavigate, useParams} from 'react-router-dom'

const Product = () => {
    let params = useParams();
    let navigate = useNavigate();
    let image = useRef();
    let [pro, setPro] = useState({
        title : "",
        price : "",
        detail : "",
        image : ""
      })


      let addForm = useFormik({
        enableReinitialize : true,
        initialValues : pro,
        onSubmit : async (formdata)=>{
         if(params.id){
          // form update code here
            let file = image.current.files[0];
            if(file){
              let file = image.current.files[0];
         
              let myform = new FormData();
              myform.append("image", file);
              myform.append("title", formdata.title);
              myform.append("detail", formdata.detail);
              myform.append("price", formdata.price);
    
              let response = await axios.put(`${API_URL}/product/${params.id}`, myform);
              navigate("/admin/product/list");
            }else{
    
              let response = await axios.put(`${API_URL}/product/${params.id}`, formdata);
              navigate("/admin/product/list");
    
    
            }
         }else{
          let file = image.current.files[0];
          let myform = new FormData();
          myform.append("image", file);
          myform.append("title", formdata.title);
          myform.append("detail", formdata.detail);
          myform.append("price", formdata.price);
    
          let response = await axios.post(`${API_URL}/product`, myform);
          navigate("/admin/product/list");
         }    
        
        }
      })

      useEffect(()=>{
        getData();
      },[])
    
      let getData = async ()=>{
        if(params.id){
          let response = await axios.get(`${API_URL}/product/${params.id}`);
          setPro(response.data);
        }
      }


      return (
        <div className='container my-4'>
          <div className='row'>
            <div className='col-md-6 offset-md-3'>
              <h4>{params.id ? "Update" : "Add New"} Product</h4>
              <form onSubmit={addForm.handleSubmit}>
                <div className='my-3'>
                  <label>Product Title</label>
                  <input type='text' value={addForm.values.title} name='title' onChange={addForm.handleChange} className='form-control' />
                </div>
                <div className='my-3'>
                  <label>Product Price</label>
                  <input type='text' value={addForm.values.price} name='price' onChange={addForm.handleChange} className='form-control' />
                </div>
                
                <div className='my-3'>
                  <label>Product Detail</label>
                  <textarea name='detail' value={addForm.values.detail} onChange={addForm.handleChange}  className='form-control' ></textarea>
                </div>
                <div className='my-3'>
                  <label>Product Image</label>
                  <input name='image' onChange={addForm.handleChange}  type='file' ref={image} className='form-control' />
    
                </div>
                {
                  params.id 
                  ?
                  <div className='my-3'>
                  <label>Current Image</label>
                  <br />
                  <img style={{height : "120px", width : "120px"}} src={`${API_PATH}/product/${pro.image}`} />
                </div>
                  :
                  ""
                }
                <br />
                <button className='btn btn-success' type='submit'>{params.id ? "Update" : "Add" }</button>
              </form>
            </div>
          </div>
        </div>
      )
}

export default Product