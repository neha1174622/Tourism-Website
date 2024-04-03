import React, {useState, useEffect, useRef} from 'react'
import {API_URL} from '../../../util/API_URL'
import axios from 'axios'
const HotelsList = () => {
    let btn = useRef();
    let [hotels, setHotels] = useState([]);

    let [hotel, setHotel] = useState({});
    useEffect(()=>{
        axios.get(`${API_URL}/hotels`).then(response=>{
            setHotels(response.data);
        })
    },[])

    let askDelete = (obj)=>{
        setHotel(obj);
    }

    let confDelete = ()=>{
        axios.delete(`${API_URL}/hotels/${hotel._id}`).then(response=>{
            btn.current.click();
            setHotels(()=>{
                return hotels.filter(value=> value._id != hotel._id);
            })
        })
    }

  return (
    <>
    <div className="container my-4">
        <div className="row">
            <div className="col-md-12">
                <h3>All Hotels List</h3>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>City</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            hotels.map((value, index)=>{
                                return(
                                    <tr key={value._id}>
                                        <td>{index+1}</td>
                                        <td>{value.name}</td>
                                        <td>{value.contact}</td>
                                        <td>{value.city}</td>
                                        <td><button onClick={()=>askDelete(value)} data-toggle="modal" data-target="#delModal" className='btn btn-danger btn-sm'>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>

    </div>
    <div className='modal fade' id='delModal'>
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h3>Delete Hotel</h3>
                </div>
                <div className="modal-body">
                    <p>Are you sure want to delete <b>{hotel.name}</b></p>
                </div>
                <div className="modal-footer">
                    <button ref={btn} className='btn btn-dark' data-dismiss="modal">Close</button>
                    <button onClick={confDelete} className='btn btn-danger'>Delete</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default HotelsList