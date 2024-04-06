import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import {API_URL} from '../../../util/API_URL'
import { useNavigate } from 'react-router-dom'

const DestinationList = () => {
    let navigate = useNavigate();
    // let x = useRef();
    let btn = useRef();

    let [destination, setDestination] = useState({});
    let [allDestination, setAllDestination] = useState([]);
    useEffect(()=>{
        axios.get(`${API_URL}/destination`).then(response=>{

            setAllDestination(response.data);
        })
    },[])

    
    let askDelete = (obj)=>{
        setDestination(obj);
    }

    let confirmDelete = ()=>{
        axios.delete(`${API_URL}/destination/${destination._id}`).then(response=>{
            btn.current.click();
            setAllDestination(()=>{
               
                return allDestination.filter(value=> value._id != destination._id) 
            })
        })
    }
    let askEdit = (obj)=>{
        navigate("/admin/destination/edit/"+obj._id)
    }

  return (
    <div className="container my-4" style={{marginTop : "100px", minHeight : "600px"}}>
        <div className="row">
            <div className="col-md-12">

           




                <h3>List of All Destination</h3>
    
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Edit</th>
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
                                        <td><button onClick={()=>askEdit(value)} className='btn btn-info btn-sm'>Edit</button></td>
                                        <td><button onClick={()=>askDelete(value)} data-bs-toggle="modal" data-bs-target="#delModal" className='btn btn-danger btn-sm'>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>

            <div className='modal fade' id='delModal'>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>Delete Destination</h3>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure want to delete <b>{destination.title}</b></p>
                        </div>
                        <div className="modal-footer">
                            <button ref={btn} data-bs-dismiss="modal" className='btn btn-dark'>Close</button>
                            <button onClick={confirmDelete} className='btn btn-danger'>Delete</button>
                        </div>
                    </div>
                </div>
            </div>



    </div>
  )
}

export default DestinationList


/*
let arr = [5, 12, 9, 17, 20, 6, 14, 36]

let arr2 = arr.filter(value=> value != 12);

*/