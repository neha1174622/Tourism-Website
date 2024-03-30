import React from 'react'
import {useFormik} from 'formik'
import {API_URL} from '../../../util/API_URL'
import {NavLink, useNavigate} from 'react-router-dom'
import axios from 'axios'
const Destination = () => {

  let navigate = useNavigate();
  let addForm = useFormik({
    initialValues : {
      title : "",
      
      category : "",
      detail : ""
    },
    onSubmit : (formdata)=>{
      axios.post(`${API_URL}/destination`, formdata).then(response=>{
        // console.log(response.data);
        navigate("/admin/dashboard");
      })
    }
  })

  return (
    <div className="container my-4">
      <NavLink to="/admin/destination/list" className="btn btn-info">View All Destination</NavLink>
        <form onSubmit={addForm.handleSubmit}>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h3 className='text-center'>Add Your Destination to Visit</h3>
          <div className='my-3'>
            <label>Destination Title</label>
            <input type='text' name='title' onChange={addForm.handleChange} className='form-control' />
          </div>
          <div className='my-3'>
            <label>Destination Category</label>
            <select name='category' onChange={addForm.handleChange} className='form-control' >
              <option>Select</option>
              <option>Wildlife</option>
              <option>Nature</option>
              <option>Heritage</option>
              <option>Spiritual</option>
            </select>
          </div>
          <div className='my-3'>
            <label>Destination Detail</label>
            <textarea name='detail' onChange={addForm.handleChange} className='form-control' rows="10"></textarea>
          </div>
          <br />
          <button type='submit' className='btn btn-primary'>Add</button>
        </div>
      </div>
        </form>
    </div>
  )
}

export default Destination