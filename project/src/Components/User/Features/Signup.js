import React, {useState, useEffect} from 'react'

import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useFormik } from 'formik'
import SignupSchema from '../../../schemas/SignupSchema'
import {API_URL} from '../../../util/API_URL'



const Signup = () => {
  let navigate = useNavigate();

  let signupForm = useFormik({
    validationSchema : SignupSchema,
    initialValues : {
      name : "",
      email : "",
      password : "",
      repassword : "",
      gender : "",
      city : "",
      state : "",
      contact : "",
      address : ""
    },
    onSubmit : (formdata)=>{
      
      axios.post(`${API_URL}/signup`, formdata).then(response=>{
        navigate("/login");
      })
    }
  })

  let [city, setCity] = useState([]);
  let [state, setState] = useState([]);
  // let city = null;

  useEffect(()=>{
    axios.get(`${API_URL}/city/state`).then(response=>{
      setState(response.data);
    })
  },[])

 
  let getcity = (event)=>{
    let x = event.target.value;
    axios.get(`${API_URL}/city/getcitybystate/${x}`).then(response=>{
      setCity(response.data);
      
    })
  }

  

  return (
    <>
    
    <div className="container" style={{marginTop : "100px", minHeight : "600px"}}>
        <div className="row">
            <div className='col-md-6 offset-md-3'>
              <form onSubmit={signupForm.handleSubmit}>
              <div className='card'>
                <div className='card-header bg-dark border border-dark'>
                  <h5 style={{color : "#fff"}}>User Registration</h5>
                  <small>If you already member <NavLink to="/login">click here</NavLink></small>
                </div>

                <div className="card-body">
                  <div className='my-4'>
                    <label>Full Name</label>
                    <input type='text' name='name' onChange={signupForm.handleChange} className={'form-control ' + (signupForm.errors.name && signupForm.touched.name ? 'is-invalid' : '')} />
                    {
                      signupForm.errors.name && signupForm.touched.name ? <small className='text-danger'>{signupForm.errors.name}</small> : ''
                    }
                  </div>
                  <div className='my-4'>
                    <label>Username/Email</label>
                    <input type='text' name='email' onChange={signupForm.handleChange}  className={'form-control ' + (signupForm.errors.email && signupForm.touched.email ? 'is-invalid' : '')} />
                    {
                      signupForm.errors.email && signupForm.touched.email ? <small className='text-danger'>{signupForm.errors.email}</small> : ''
                    }
                  </div>
                  <div className='my-4'>
                    <label>Password</label>
                    <input type='password' name='password' onChange={signupForm.handleChange} className={'form-control ' + (signupForm.errors.password && signupForm.touched.password ? 'is-invalid' : '')} />
                    {
                      signupForm.errors.password && signupForm.touched.password ? <small className='text-danger'>{signupForm.errors.password}</small> : ''
                    }
                  </div>
                  <div className='my-4'>
                    <label>Re-Password</label>
                    <input type='password' name='repassword' onChange={signupForm.handleChange} className={'form-control ' + (signupForm.errors.repassword && signupForm.touched.repassword ? 'is-invalid' : '')} />
                    {
                      signupForm.errors.repassword && signupForm.touched.repassword ? <small className='text-danger'>{signupForm.errors.repassword}</small> : ''
                    }
                  </div>
                  
                  <div className='my-4'>
                    <label>Gender</label>
                    <br />
                    Male <input type='radio' value="male" name='gender' onChange={signupForm.handleChange}/>
                    Female <input type='radio' value="female" name='gender' onChange={signupForm.handleChange}/>
                    <br />
                    {
                      signupForm.errors.gender && signupForm.touched.gender ? <small className='text-danger'>{signupForm.errors.gender}</small> : ''
                    }
                  </div>
                  <div className='my-4'>
                    <label>Contact</label>
                    <input type='text' name='contact' onChange={signupForm.handleChange} className={'form-control ' + (signupForm.errors.contact && signupForm.touched.contact ? 'is-invalid' : '')} />
                    {
                      signupForm.errors.contact && signupForm.touched.contact ? <small className='text-danger'>{signupForm.errors.contact}</small> : ''
                    }
                  </div>
                  <div className='my-4'>
                    <label>Address</label>
                    <textarea className={'form-control ' + (signupForm.errors.address && signupForm.touched.address ? 'is-invalid' : '')} name='address' onChange={signupForm.handleChange} ></textarea>
                    {
                      signupForm.errors.address && signupForm.touched.address ? <small className='text-danger'>{signupForm.errors.address}</small> : ''
                    }
                  </div>
                  <div className='my-4'>
                    <label>State</label>
                    <select name="state" onChange={(event)=>{getcity(event); signupForm.handleChange(event)}} className={'form-control ' + (signupForm.errors.state && signupForm.touched.state ? 'is-invalid' : '')} >
                      <option>Select</option>
                      {
                        state.map((value, index)=><option key={index}>{value}</option>)
                      }
                    </select>
                    {
                      signupForm.errors.state && signupForm.touched.state ? <small className='text-danger'>{signupForm.errors.state}</small> : ''
                    }
                  </div>
                  <div className='my-4'>
                    <label>City</label>
                    <select className={'form-control ' + (signupForm.errors.city && signupForm.touched.city ? 'is-invalid' : '')} name='city' onChange={signupForm.handleChange}>
                      <option>Select</option>
                      {
                        city.map(value=><option key={value._id}>{value.name}</option>)
                      }
                    </select>
                    {
                      signupForm.errors.city && signupForm.touched.city ? <small className='text-danger'>{signupForm.errors.city}</small> : ''
                    }
                  </div>
                </div>
                
                <div className="card-footer">
                  {/* <div class="d-grid">
                  </div> */}
                  <button type='submit' className='btn btn-success btn-block'>Signup</button>
                </div>
              </div>
              </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signup