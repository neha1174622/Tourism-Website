import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {API_URL} from '../../../util/API_URL'
import { useNavigate } from 'react-router-dom'

const DestinationList = () => {
    let navigate = useNavigate();
    let [allDestination, setAllDestination] = useState([]);

    useEffect(()=>{ // getting data from destination api which has data with categories.
        axios.get(`${API_URL}/destination`).then(response=>{
            setAllDestination(response.data);
        })
    },[])

    let del = (obj)=>{ // it is for delete opertaion from CRUD
        axios.delete(`${API_URL}/destination/${obj._id}`).then(response=>{
            console.log(response.data);
            navigate("/admin/destination")
        })
    }

  return (
    <div className="container my-4">
        <div className="row">
            <div className="col-md-12">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allDestination.map((value, index)=>{
                                return(
                                    <tr key={value._id}>
                                        <td>{index+1}</td>
                                        <td>{value.title}</td>
                                        <td>{value.category}</td>
                                        <td><button onClick={()=>del(value)} className='btn btn-danger btn-sm'>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default DestinationList