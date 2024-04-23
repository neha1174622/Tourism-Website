import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {API_URL} from '../../../util/API_URL'
import { useFormik } from 'formik'
import {useNavigate} from 'react-router-dom'
const UpdateProfile = () => {
    let navigate = useNavigate();
    let [state, setState] = useState([]);
    let [city, setCity] = useState([]);
    let [user, setUser] = useState({
        name : "",
        email : "",
        contact : "",
        gender : "",
        state : "",
        city : "",
        address : ""
    })
    useEffect(()=>{
        getData();
        getState();
    },[])

    let getData = async()=>{
        let response = await axios.get(`${API_URL}/user/update-profile`, {
            headers : { Authorization : localStorage.getItem("access-token") }
        });
        // console.log(response.data);
        setUser(response.data);
        getCity(response.data.state);
    }

    let getState = async()=>{
        let response = await axios.get(`${API_URL}/city/state`);
        setState(response.data);
    }

    let getCity = async(sname)=>{
        let response = await axios.get(`${API_URL}/city/getcitybystate/${sname}`)
        setCity(response.data);
    }


    let updateForm = useFormik({
        initialValues : user,
        enableReinitialize : true,
        onSubmit :async (formdata)=>{
            await axios.post(`${API_URL}/user/update-profile`, formdata, {
                headers : { Authorization : localStorage.getItem("access-token") }
            })
            navigate("/user/my-profile");
        }
    })


  return (
    <div className="container" style={{marginTop : "100px", minHeight : "600px"}}>
        <form onSubmit={updateForm.handleSubmit}>
        <div className="row">
            <div className="col-md-8 offset-md-2 my-4">
                <h3>Update Your Profile</h3>
                <div className='my-2'>
                    <label>Full Name</label>
                    <input name='name' onChange={updateForm.handleChange} value={updateForm.values.name} type='text' className='form-control' />
                </div>
                <div className='my-2'>
                    <label>Email/Username</label>
                    <input name='email' onChange={updateForm.handleChange} value={updateForm.values.email} type='text' className='form-control' />
                </div>
                <div className='my-2'>
                    <label>Contact</label>
                    <input name='contact' onChange={updateForm.handleChange} value={updateForm.values.contact} type='text' className='form-control' />
                </div>
                <div className='my-2'>
                    <label>State</label>
                    <select name='state' onChange={(event)=>{ updateForm.handleChange(event); getCity(event.target.value)}} value={updateForm.values.state} className='form-control' >
                        <option>State</option>
                        {
                            state.map((item, index)=><option key={index}>{item}</option>)
                        }
                    </select>
                </div>
                <div className='my-2'>
                    <label>City</label>
                    <select name='city' onChange={updateForm.handleChange} value={updateForm.values.city} className='form-control' >
                        <option>City</option>
                        {
                            city.map((item, index)=><option key={index}>{item.name}</option>)
                        }
                    </select>
                </div>
                <div className='my-2'>
                    <label>Gender</label>
                    <br />
                    Male <input name='gender' checked={user.gender=="male"} onChange={updateForm.handleChange} value="male" type='radio'  />
                    Female <input name='gender' checked={user.gender=="female"} onChange={updateForm.handleChange} value="female" type='radio'  />
                </div>
                <div className='my-2'>
                    <label>Address</label>
                    <textarea name='address' onChange={updateForm.handleChange} value={updateForm.values.address} className='form-control' ></textarea>
                </div>
                <br />
                <button type='submit' className='btn btn-success'>Update</button>
            </div>
        </div>
        </form>
    </div>
  )
}

export default UpdateProfile