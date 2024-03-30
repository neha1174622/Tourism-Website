import React, {useState, useEffect} from 'react'
import {useFormik} from 'formik'
import {API_URL} from '../../../util/API_URL'
import {NavLink, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Hotel = () => {

  let navigate = useNavigate();
  let addForm = useFormik({
    initialValues : {
        name : " ",
        address : " ",
        city : " ",
        contact : " ",
        email : " "
    },
    onSubmit : (formdata)=>{
      axios.post(`${API_URL}/hotel`, formdata).then(response=>{
        // console.log(response.data);
        navigate("/admin/dashboard");
      })
    }
  })

  let [state,setState] = useState([]);
  // let city = null;

  useEffect(()=>{
    axios.get(`${API_URL}/city/mp`).then(response=>{
      setState(response.data);
    })
  },[])

  return (
    <div className="container my-4">
      <NavLink to="/admin/hotel/list" className="btn btn-info">View All Hotel</NavLink>
        <form onSubmit={addForm.handleSubmit}>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h3 className='text-center'>Add Your Hotel</h3>
          <div className='my-3'>
            <label>Hotel Name</label>
            <input type='text' name='name' onChange={addForm.handleChange} className='form-control' />
          </div>
          <div className='my-4'>
                    <label>City</label>
                    <select name='city' className='form-control' onChange={addForm.handleChange}>
                      <option>Select</option>
                      {
                        state.map(value=><option key={value._id}>{value.name}</option>)
                      }
                    </select>
                    
                  </div>
          <div className='my-3'>
            <label>Address</label>
            <textarea name='address' onChange={addForm.handleChange} className='form-control' rows="10"></textarea>
          </div>
          <div className='my-3'>
            <label>Email</label>
            <input type='text' name='email' onChange={addForm.handleChange} className='form-control' />
          </div>
          <div className='my-3'>
            <label>Contact</label>
            <input type='text' name='contact' onChange={addForm.handleChange} className='form-control' />
          </div>
          <br />
          <button type='submit' className='btn btn-primary'>Add</button>
        </div>
      </div>
        </form>
    </div>
  )
}

export default Hotel