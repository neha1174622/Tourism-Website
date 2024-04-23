import React, {useState} from 'react'
import {useFormik} from 'formik'
import * as YUP from 'yup'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../../util/API_URL'

let changePassSchema = YUP.object({
    current_pass : YUP.string().required("Insert Your Current Password"),
    new_pass : YUP.string().required("Insert New Password"),
    confirm_new_pass : YUP.string().required("Insert Confirm New Password")
})

const ChangePass = () => {
    let navigate = useNavigate();
    let [showErr, setShowErr] = useState(false);
    let changePassForm = useFormik({
        validationSchema : changePassSchema,
        initialValues : {
            current_pass : "",
            new_pass : "",
            confirm_new_pass : ""
        },
        onSubmit : async (formdata)=>{
            let response = await axios.post(`${API_URL}/user/update_pass`, formdata, {
                headers : { Authorization : localStorage.getItem("access-token")}
            })

            if(response.data.success==true)
            {
                navigate("/user/logout");
            }
            else{
                setShowErr(true);
            }
        }
    })

  return (
    <div className="container" style={{marginTop : "100px", minHeight : "600px"}}>
        <div className="row">
            <div className="col-md-8 offset-md-2 my-4">
                <h3>Change Your Password</h3>
                <form onSubmit={changePassForm.handleSubmit}>
                    <div className='my-2'>
                        <label>Current Password</label>
                        <input name='current_pass' onChange={changePassForm.handleChange} type='password' className={ 'form-control ' + (changePassForm.errors.current_pass && changePassForm.touched.current_pass ? 'is-invalid' : '')} />
                        {
                            showErr ? <small className='text-danger'>Invalid Current Password</small> : ''
                        }
                    </div>
                    <div className='my-2'>
                        <label>New Password</label>
                        <input name='new_pass' onChange={changePassForm.handleChange} type='password' className={ 'form-control ' + (changePassForm.errors.new_pass && changePassForm.touched.new_pass ? 'is-invalid' : '')} />
                    </div>
                    <div className='my-2'>
                        <label>Confirm New Password</label>
                        <input name='confirm_new_pass' onChange={changePassForm.handleChange} type='password' className={ 'form-control ' + (changePassForm.errors.confirm_new_pass && changePassForm.touched.confirm_new_pass ? 'is-invalid' : '')} />
                    </div>
                    <br />
                    <button type='submit' className='btn btn-success'>Change</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ChangePass