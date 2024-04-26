import React, {useEffect, useRef, useState} from 'react'
import axios from 'axios'
import {API_URL, API_PATH} from '../../../util/API_URL'
import {useFormik} from 'formik'
import {useNavigate, useParams} from 'react-router-dom'

const Destination = () => {
  let params = useParams();
  let navigate = useNavigate();
  let image = useRef(); // useref for file
  
  // usestate for initailValues of formik
  let [desti, setDesti] = useState({
    title : "",
    category : "",
    detail : "",
    image : ""
  })
  
  let addForm = useFormik({
    enableReinitialize : true,
    initialValues : desti,
    onSubmit : async (formdata)=>{
     if(params.id){
      // form update code here
        let file = image.current.files[0];
        if(file){
          let file = image.current.files[0];
      // console.log(file);return;
          let myform = new FormData();
          myform.append("image", file);
          myform.append("title", formdata.title);
          myform.append("detail", formdata.detail);
          myform.append("category", formdata.category);

          let response = await axios.put(`${API_URL}/destination/${params.id}`, myform);
          navigate("/admin/destination/list");
        }else{

          let response = await axios.put(`${API_URL}/destination/${params.id}`, formdata);
          navigate("/admin/destination/list");


        }





     }else{
      let file = image.current.files[0];
      // console.log(file);return;
      let myform = new FormData();
      myform.append("image", file);
      myform.append("title", formdata.title);
      myform.append("detail", formdata.detail);
      myform.append("category", formdata.category);

      let response = await axios.post(`${API_URL}/destination`, myform);
      navigate("/admin/destination/list");
     }    
    
    }
  })

  useEffect(()=>{
    getData();
  },[])

  let getData = async ()=>{ // function to pre-fill form for update after getting param.id
    if(params.id){
      let response = await axios.get(`${API_URL}/destination/${params.id}`);
      // console.log(response.data);
      setDesti(response.data);
    }
  }

  return (
    <div className='container my-4'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <h4>{params.id ? "Update" : "Add New"} Destination</h4>
          <form onSubmit={addForm.handleSubmit}>
            <div className='my-3'>
              <label>Destination Name</label>
              <input type='text' value={addForm.values.title} name='title' onChange={addForm.handleChange} className='form-control' />
            </div>
            <div className='my-3'>
              <label>Destination Category</label>
              <select name='category' value={addForm.values.category} onChange={addForm.handleChange}  className='form-control' >
                <option>Select</option>
                <option>Wildlife</option>
                <option>Nature</option>
                <option>Heritage</option>
                <option>Spiritual</option>
              </select>
            </div>
            <div className='my-3'>
              <label>Destination Detail</label>
              <textarea name='detail' value={addForm.values.detail} onChange={addForm.handleChange}  className='form-control' ></textarea>
            </div>
            <div className='my-3'>
              <label>Destination Image</label>
              <input name='image' onChange={addForm.handleChange}  type='file' ref={image} className='form-control' />

            </div>
            { //  this will show current image uploaded previosly to user when params id is there
              params.id 
              ?
              <div className='my-3'>
              <label>Current Image</label>
              <br />
              <img style={{height : "120px", width : "120px"}} src={`${API_PATH}/destination-images/${desti.image}`} />
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

export default Destination

/*


*/