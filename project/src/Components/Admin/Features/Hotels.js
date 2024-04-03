import React, {useState, useEffect} from 'react'
import {useFormik} from 'formik'
import {API_URL} from '../../../util/API_URL'
import {NavLink, useNavigate} from 'react-router-dom'
import axios from 'axios'
const Hotels = () => {
    let navigate = useNavigate();

    let [city, setCity] = useState([]);

    useEffect(()=>{
        axios.get(`${API_URL}/city/getcitybystate/Goa`).then(response=>{
            setCity(response.data);
            
          })
    },[])

  let addForm = useFormik({
    initialValues : {
      name : "",
      address : "",
      city : "",
      contact : "",
      email : ""
      
    },
    onSubmit : (formdata)=>{
      axios.post(`${API_URL}/hotels`, formdata).then(response=>{
        // console.log(response.data);
        navigate("/admin/hotels/list");
      })
    }
  })

  return (
    <div className="container my-4">
      <NavLink to="/admin/hotels/list" className="btn btn-info">View All Hotels</NavLink>
        <form onSubmit={addForm.handleSubmit}>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h3 className='text-center'>Add Hotels</h3>
          <div className='my-3'>
            <label>Hotel Name</label>
            <input type='text' name='name' onChange={addForm.handleChange} className='form-control' />
          </div>
          <div className='my-3'>
            <label>City</label>
            <select name='city' onChange={addForm.handleChange} className='form-control' >
              <option>Select</option>
              {
                city.map(value=><option key={value._id}>{value.name}</option>)
              }
            </select>
          </div>
          <div className='my-3'>
            <label>Address</label>
            <textarea name='address' onChange={addForm.handleChange} className='form-control' rows="10"></textarea>
          </div>
          <div className='my-3'>
            <label>Hotel Contact Number</label>
            <input type='text' name='contact' onChange={addForm.handleChange} className='form-control' />
          </div>
          <div className='my-3'>
            <label>Hotel Contact Email Id</label>
            <input type='text' name='email' onChange={addForm.handleChange} className='form-control' />
          </div>
          <br />
          <button type='submit' className='btn btn-primary'>Add</button>
        </div>
      </div>
        </form>
    </div>
  )
}

export default Hotels