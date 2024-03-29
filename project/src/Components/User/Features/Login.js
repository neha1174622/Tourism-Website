import React, {useState} from 'react'

import {NavLink} from 'react-router-dom'
import { useFormik } from 'formik'
import LoginSchema from '../../../schemas/LoginSchema'
import axios from 'axios'
import {API_URL} from '../../../util/API_URL'

const Login = () => {

  let [errMsg, setErrMsg] = useState("");

  let loginForm = useFormik({
    validationSchema : LoginSchema,
    initialValues : { email : "", password : "" },
    onSubmit : (formdata)=>{
        axios.post(`${API_URL}/userauth`, formdata).then(response=>{
          // console.log(response.data);
          if(response.data.success==true)
          {

          }
          if(response.data.success==false && response.data.errType == 1)
          {
            setErrMsg("This Username And Password Incorrect !");
          }
          if(response.data.success==false && response.data.errType == 2)
          {
            setErrMsg("This Password Incorrect !");
          }
        })
    }
  })

  return (
    <>
   
    <div className="container" style={{marginTop : "100px", minHeight : "600px"}}>
        <div className="row">
            <div className='col-md-6 offset-md-3'>
              <form onSubmit={loginForm.handleSubmit}>
              <div className='card'>
                <div className='card-header bg-dark border border-dark'>
                  <h5 style={{color : "#fff"}}>User Login</h5>
                  <small>If you are new user <NavLink to="/signup">click here</NavLink></small>
                </div>

                <div className="card-body">
                  <div className='my-4'>
                    <label>Username/Email</label>
                    <input type='text' name='email' onChange={loginForm.handleChange} className={'form-control ' + (loginForm.errors.email && loginForm.touched.email ? 'is-invalid' : '')} />
                    {
                      loginForm.errors.email && loginForm.touched.email ? <small className='text-danger'>{loginForm.errors.email}</small> : ''
                    }
                  </div>
                  <div className='my-4'>
                    <label>Password</label>
                    <input type='password' name='password' onChange={loginForm.handleChange} className={'form-control ' + (loginForm.errors.password && loginForm.touched.password ? 'is-invalid' : '')} />
                    {
                      loginForm.errors.password && loginForm.touched.password ? <small className='text-danger'>{loginForm.errors.password}</small> : ''
                    }
                  </div>
                </div>
                <div className="card-footer">
                  {/* <div class="d-grid">
                  </div> */}
                  <button type='submit' className='btn btn-success btn-block'>Login</button>
                  <p className='text-danger text-center mt-3'>{errMsg}</p>
                </div>
              </div>
              </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login
/*
  let x = "hello";

  let y = x+"indore";

  let y = `${x}indore`;


*/